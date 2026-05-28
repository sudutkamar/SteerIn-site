// ---------------------------------------------------------------------------
// Three.js 3D Automotive Scene
// Low-poly wireframe car + road + HUD rings + speed particles
// Code-split — only loads on desktop (≥900px)
// ---------------------------------------------------------------------------

let THREE, scene, camera, renderer;
let car, wheels = [], particleSystem, hudRings = [];
let mouseX = 0, mouseY = 0, targetRotY = 0, targetRotX = 0;
let animId = null;
let roadLines = [];

/* ───────────────────────────────────────────────
   Car body specs (units: ~1 = 1m)
   ─────────────────────────────────────────────── */
const BODY_LEN = 2.4;
const BODY_WID = 1.0;
const BODY_HGT = 0.35;

const CABIN_LEN = 0.8;
const CABIN_WID = 0.88;
const CABIN_HGT = 0.28;

const WHEEL_RAD = 0.18;
const WHEEL_TUBE = 0.055;

export async function init3DScene() {
  if (window.innerWidth < 900) return;
  const container = document.getElementById('three-canvas');
  if (!container || container.dataset.initialized) return;
  container.dataset.initialized = '1';

  THREE = await import('three');

  /* ---- Scene ---- */
  scene = new THREE.Scene();

  /* ---- Camera ---- */
  const aspect = window.innerWidth / window.innerHeight;
  camera = new THREE.PerspectiveCamera(35, aspect, 0.1, 100);
  camera.position.set(2.2, 2.8, 5.5);
  camera.lookAt(0, 0.3, 0);

  /* ---- Renderer ---- */
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.2;
  container.appendChild(renderer.domElement);

  /* ---- Lights ---- */
  const ambient = new THREE.AmbientLight(0x1a2a22, 0.6);
  scene.add(ambient);

  const key = new THREE.DirectionalLight(0x22c55e, 0.8);
  key.position.set(2, 4, 3);
  scene.add(key);

  const fill = new THREE.DirectionalLight(0x22d3ee, 0.3);
  fill.position.set(-2, 1, -2);
  scene.add(fill);

  const rim = new THREE.DirectionalLight(0x22c55e, 0.4);
  rim.position.set(-1, 2, -4);
  scene.add(rim);

  /* ---- Build Car ---- */
  buildCar();

  /* ---- Road ---- */
  buildRoad();

  /* ---- HUD Rings ---- */
  buildHUDRings();

  /* ---- Particles ---- */
  buildParticles();

  /* ---- Events ---- */
  document.addEventListener('mousemove', onMouse, { passive: true });
  window.addEventListener('resize', onResize, { passive: true });

  animate();
}

/* ───────────────────────────────────────────────
   CAR CONSTRUCTION
   ─────────────────────────────────────────────── */
function buildCar() {
  car = new THREE.Group();
  scene.add(car);

  const bodyColor = 0x22c55e;
  const bodyOpacity = 0.06;
  const edgeColor = 0x22c55e;
  const edgeOpacity = 0.35;
  const accentOpacity = 0.50;

  const bodyMat = new THREE.MeshPhysicalMaterial({
    color: bodyColor, metalness: 0.3, roughness: 0.6,
    transparent: true, opacity: bodyOpacity, depthWrite: false,
  });
  const edgeMat = (opacity = edgeOpacity) => new THREE.LineBasicMaterial({
    color: edgeColor, transparent: true, opacity, depthWrite: false,
  });
  const accentMat = new THREE.LineBasicMaterial({
    color: 0x4ade80, transparent: true, opacity: 0.6, depthWrite: false,
  });

  // ── Main body ──
  addBox(car, BODY_LEN, BODY_HGT, BODY_WID, 0, BODY_HGT / 2, 0, bodyMat, edgeMat());
  // ── Cabin (shifted slightly back) ──
  addBox(car, CABIN_LEN, CABIN_HGT, CABIN_WID, -0.2, BODY_HGT + CABIN_HGT / 2, 0, bodyMat, edgeMat(0.3));
  // ── Hood (front slope) ──
  addBox(car, 0.45, 0.18, 0.82,  -1.15, BODY_HGT + 0.09, 0, bodyMat, edgeMat(0.25));
  // ── Rear (boot) ──
  addBox(car, 0.35, 0.20, 0.88,  1.15, BODY_HGT + 0.02, 0, bodyMat, edgeMat(0.25));

  // ── A-pillar lines (accent wires from cabin to hood) ──
  const pillarMat = accentMat;
  const p1 = [new THREE.Vector3(-0.2, BODY_HGT, -0.44), new THREE.Vector3(-0.7, BODY_HGT + 0.05, -0.44)];
  const p2 = [new THREE.Vector3(-0.2, BODY_HGT,  0.44), new THREE.Vector3(-0.7, BODY_HGT + 0.05,  0.44)];
  addLine(car, p1, pillarMat);
  addLine(car, p2, pillarMat);

  // ── Headlights (glowing dots) ──
  const hlMat = new THREE.MeshBasicMaterial({ color: 0x4ade80, transparent: true, opacity: 0.5 });
  [-0.35, 0.35].forEach(z => {
    const hl = new THREE.Mesh(new THREE.SphereGeometry(0.06, 8, 8), hlMat);
    hl.position.set(-1.25, 0.22, z);
    car.add(hl);
  });

  // ── Taillights ──
  const tlMat = new THREE.MeshBasicMaterial({ color: 0xef4444, transparent: true, opacity: 0.25 });
  [-0.35, 0.35].forEach(z => {
    const tl = new THREE.Mesh(new THREE.SphereGeometry(0.05, 8, 8), tlMat);
    tl.position.set(1.25, 0.22, z);
    car.add(tl);
  });

  // ── Wheels ──
  const wheelPos = [
    [-0.85, WHEEL_RAD, -0.55],
    [-0.85, WHEEL_RAD,  0.55],
    [ 0.85, WHEEL_RAD, -0.55],
    [ 0.85, WHEEL_RAD,  0.55],
  ];

  const wMat = new THREE.MeshPhysicalMaterial({
    color: 0x1a2a22, metalness: 0.8, roughness: 0.3,
    transparent: true, opacity: 0.7,
  });
  const wEdgeMat = new THREE.LineBasicMaterial({
    color: 0x22c55e, transparent: true, opacity: 0.5,
  });
  const spokeMat = new THREE.LineBasicMaterial({
    color: 0x4ade80, transparent: true, opacity: 0.35,
  });

  wheelPos.forEach(pos => {
    // ── Wheel group (for spinning) ──
    const wg = new THREE.Group();
    wg.position.set(pos[0], pos[1], pos[2]);

    // Tire mesh
    const tire = new THREE.Mesh(new THREE.TorusGeometry(WHEEL_RAD, WHEEL_TUBE, 10, 14), wMat);
    tire.rotation.y = Math.PI / 2;   // stand upright (ring in YZ, axle along X)
    wg.add(tire);

    // Tire edge wireframe
    const tireEdge = new THREE.LineSegments(
      new THREE.EdgesGeometry(new THREE.TorusGeometry(WHEEL_RAD, WHEEL_TUBE, 10, 14)),
      wEdgeMat
    );
    tireEdge.rotation.y = Math.PI / 2;
    wg.add(tireEdge);

    // Spokes — 4 lines radiating from center
    for (let i = 0; i < 4; i++) {
      const angle = (i / 4) * Math.PI * 2;
      const ir = WHEEL_RAD * 0.3;
      const or = WHEEL_RAD * 0.88;
      // Points in local YZ plane (tire local coords after rot.y=PI/2)
      const pts = [
        new THREE.Vector3(0, ir * Math.cos(angle), ir * Math.sin(angle)),
        new THREE.Vector3(0, or * Math.cos(angle), or * Math.sin(angle)),
      ];
      const line = new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), spokeMat);
      line.rotation.y = Math.PI / 2;
      wg.add(line);
    }

    car.add(wg);
    wheels.push(wg);
  });
}

/* ───────────────────────────────────────────────
   ROAD
   ─────────────────────────────────────────────── */
function buildRoad() {
  // Glow plane
  const planeMat = new THREE.MeshBasicMaterial({
    color: 0x22c55e, transparent: true, opacity: 0.025, side: THREE.DoubleSide,
    depthWrite: false,
  });
  const plane = new THREE.Mesh(new THREE.PlaneGeometry(6, 14), planeMat);
  plane.rotation.x = -Math.PI / 2;
  plane.position.y = -0.04;
  scene.add(plane);

  // Lane dashes
  const dashMat = new THREE.MeshBasicMaterial({
    color: 0x22c55e, transparent: true, opacity: 0.06,
  });
  for (let z = -6; z <= 6; z += 0.6) {
    const dash = new THREE.Mesh(new THREE.PlaneGeometry(0.06, 0.25), dashMat);
    dash.rotation.x = -Math.PI / 2;
    dash.position.set(0, -0.01, z);
    scene.add(dash);
    roadLines.push(dash);
  }

  // Side markers
  const sideMat = new THREE.MeshBasicMaterial({
    color: 0x22d3ee, transparent: true, opacity: 0.03,
  });
  [-0.6, 0.6].forEach(x => {
    for (let z = -6; z <= 6; z += 0.3) {
      const m = new THREE.Mesh(new THREE.PlaneGeometry(0.03, 0.1), sideMat);
      m.rotation.x = -Math.PI / 2;
      m.position.set(x, -0.01, z);
      scene.add(m);
    }
  });
}

/* ───────────────────────────────────────────────
   HUD RINGS
   ─────────────────────────────────────────────── */
function buildHUDRings() {
  const ringMat = (opacity = 0.08) => new THREE.LineBasicMaterial({
    color: 0x22c55e, transparent: true, opacity, depthWrite: false,
  });

  const rings = [
    { r: 1.9, tube: 0.012, seg: 24, tubSeg: 60, opacity: 0.06, pos: [0,0.3,0], rot: [0.3,0,0.5] },
    { r: 1.4, tube: 0.008, seg: 20, tubSeg: 50, opacity: 0.04, pos: [0,0.2,0], rot: [-0.2,0,0.8] },
    { r: 1.2, tube: 0.008, seg: 20, tubSeg: 40, opacity: 0.03, pos: [0,0.1,0], rot: [0.6,0.3,0] },
  ];

  rings.forEach(cfg => {
    const obj = new THREE.LineSegments(
      new THREE.EdgesGeometry(new THREE.TorusGeometry(cfg.r, cfg.tube, cfg.seg, cfg.tubSeg)),
      ringMat(cfg.opacity)
    );
    obj.position.set(cfg.pos[0], cfg.pos[1], cfg.pos[2]);
    obj.rotation.set(cfg.rot[0], cfg.rot[1], cfg.rot[2]);
    scene.add(obj);
    hudRings.push(obj);
  });
}

/* ───────────────────────────────────────────────
   SPEED PARTICLES
   ─────────────────────────────────────────────── */
function buildParticles() {
  const count = 250;
  const pos = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    pos[i * 3]     = (Math.random() - 0.5) * 10;  // x
    pos[i * 3 + 1] = Math.random() * 1.5 + 0.2;   // y
    pos[i * 3 + 2] = (Math.random() - 0.5) * 12;  // z
  }

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));

  const mat = new THREE.PointsMaterial({
    color: 0x22c55e,
    size: 0.025,
    transparent: true,
    opacity: 0.25,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    sizeAttenuation: true,
  });

  particleSystem = new THREE.Points(geo, mat);
  particleSystem.position.y = 0.5;
  scene.add(particleSystem);
}

/* ───────────────────────────────────────────────
   HELPERS
   ─────────────────────────────────────────────── */
function addBox(parent, w, h, d, x, y, z, mat, edgeMat) {
  const geo = new THREE.BoxGeometry(w, h, d);
  const mesh = new THREE.Mesh(geo, mat);
  mesh.position.set(x, y, z);
  parent.add(mesh);

  const edges = new THREE.EdgesGeometry(geo);
  const line = new THREE.LineSegments(edges, edgeMat);
  line.position.set(x, y, z);
  parent.add(line);
}

function addLine(parent, points, mat) {
  const geo = new THREE.BufferGeometry().setFromPoints(points);
  const line = new THREE.Line(geo, mat);
  parent.add(line);
}

/* ───────────────────────────────────────────────
   EVENTS
   ─────────────────────────────────────────────── */
function onMouse(e) {
  mouseX = (e.clientX / window.innerWidth) * 2 - 1;
  mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
  targetRotY = mouseX * 0.2;
  targetRotX = mouseY * 0.1;
}

function onResize() {
  if (!camera || !renderer) return;
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

/* ───────────────────────────────────────────────
   ANIMATION LOOP
   ─────────────────────────────────────────────── */
function animate() {
  animId = requestAnimationFrame(animate);

  // ── Car smooth mouse follow ──
  if (car) {
    car.rotation.y += (targetRotY - car.rotation.y) * 0.035;
    car.rotation.x += (targetRotX - car.rotation.x) * 0.025;
  }

  // ── Wheel spin (rotate group around X = axle) ──
  wheels.forEach(w => { w.rotation.x += 0.04; });

  // ── Road dashes scroll ──
  roadLines.forEach(dash => {
    dash.position.z += 0.015;
    if (dash.position.z > 6.5) dash.position.z = -6.5;
  });

  // ── HUD rings rotation ──
  hudRings.forEach((ring, i) => {
    ring.rotation.y += 0.003 + i * 0.001;
    ring.rotation.x += 0.001 * (i % 2 === 0 ? 1 : -1);
  });

  // ── Particles flow ──
  if (particleSystem) {
    const pos = particleSystem.geometry.attributes.position.array;
    for (let i = 0; i < pos.length; i += 3) {
      pos[i + 2] += 0.015;   // move toward viewer
      if (pos[i + 2] > 6) pos[i + 2] = -6;   // reset
    }
    particleSystem.geometry.attributes.position.needsUpdate = true;
  }

  renderer.render(scene, camera);
}

/* ───────────────────────────────────────────────
   CLEANUP
   ─────────────────────────────────────────────── */
export function destroy3DScene() {
  if (animId) cancelAnimationFrame(animId);
  document.removeEventListener('mousemove', onMouse);
  window.removeEventListener('resize', onResize);
  if (renderer) {
    renderer.dispose();
    renderer.domElement?.remove();
  }
}
