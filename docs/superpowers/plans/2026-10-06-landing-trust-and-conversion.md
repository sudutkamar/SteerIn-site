# Landing Trust and Conversion Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make the APK download, waitlist, claims, accessibility and bilingual site reliable.

**Architecture:** Keep Astro static. Store release metadata in one JSON file, validate it using Node's built-in test runner, use Netlify Forms with static detection, and retain the existing client-side translation system while removing false hreflang claims.

**Tech Stack:** Astro 6, vanilla JS, Node 22, Netlify Forms.

## Global Constraints

- GitHub Release is the official APK; do not substitute the ignored local APK.
- Netlify Forms stores email; no `/api/subscribe` endpoint without a backend.
- Use conservative copy for unverified app capabilities and pricing; maintain ID/EN translations.
- Do not commit unless explicitly requested.

---

### Task 1: Release integrity

**Files:** Create `src/data/release.json`, `scripts/check-release.mjs`; modify `src/pages/index.astro`, `public/api/version.json`, `package.json`.

**Interfaces:** `release.json` contains `version`, `size`, `minAndroid`, `url`, `sha256`; `check-release.mjs` downloads `url`, hashes response, compares hash and exits nonzero on mismatch.

- [ ] Check the GitHub Release URL status and response digest; record verified hash and size only if the download succeeds.
- [ ] Move download metadata into `release.json`; render link and SHA-256 from it and replace misleading verification label with readable instructions.
- [ ] Add a script that fetches and hashes the release artifact; compare JSON and version API fields. Run script to verify expected success, or report external-access failure explicitly.

### Task 2: Waitlist form

**Files:** Modify `src/pages/index.astro`, `src/components/form.js`, `src/components/lang.js`, `netlify.toml`.

**Interfaces:** Static form `name="early-access"`, `data-netlify="true"`, `netlify-honeypot="website"`; post `application/x-www-form-urlencoded` to `/` with `form-name=early-access`.

- [ ] Add static form detection markup and keyboard/screen-reader status regions; remove reliance on missing function redirect.
- [ ] Implement browser validation, pending/success/error status, translated client messages, preserved input on failure.
- [ ] Verify generated HTML contains Netlify detection fields and test failed network and successful response behavior where possible.

### Task 3: Honest product copy and shorter path to action

**Files:** Modify `src/pages/index.astro`, `src/components/lang.js`, `src/pages/privacy-policy.astro`, `public/terms/index.html`.

- [ ] Remove unsupported household statistic and unverifiable workshop ratings; label previews/demos illustrative.
- [ ] Clarify third-party login/maps/cloud/crash services, beta and pricing uncertainty; ensure ID/EN keys agree.
- [ ] Reorder or trim redundant content so the download CTA and beta caveats are readily discoverable; verify key sections and links exist.

### Task 4: Progressive enhancement and accessibility

**Files:** Modify `src/layouts/BaseLayout.astro`, `src/main.js`, `src/style.css`, `src/components/lang.js`, `src/pages/index.astro`, `src/components/phone-demo.js`.

- [ ] Remove blocking loader and JS-dependent opacity, retaining optional reveal for JS-enabled visitors only.
- [ ] Preserve FAQ icon when applying translated text; associate demo tabs and panels and implement keyboard navigation with focus updates.
- [ ] Run build and inspect output; manually check at 375px and 1440px if browser tooling is available.

### Task 5: Legal language, metadata and checks

**Files:** Modify `src/pages/privacy-policy.astro`, `public/terms/index.html`, `src/components/lang.js`, `public/sitemap.xml`, `src/layouts/BaseLayout.astro`; create `scripts/check-site.mjs`.

- [ ] Ensure privacy and terms can be read in ID and EN consistently and their page metadata is not overwritten by homepage meta; remove duplicate-URL hreflang entries.
- [ ] Add checks for translation key parity, release metadata, Netlify form markup and essential links using built output.
- [ ] Run `npm run build`, checks, inspect `git diff`/status and note all external or browser verifications not achievable locally.
