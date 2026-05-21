# Hermes Agent (NousResearch)

Repo ini adalah static site untuk Netlify. Hermes Agent adalah tool CLI/agent (Python/Node) untuk dipakai di mesin developer atau server sendiri, bukan sesuatu yang berjalan di Netlify sebagai static hosting.

## Install (Windows PowerShell)

Jalankan dari root repo:

```powershell
./scripts/install-hermes-agent.ps1
```

## Install (macOS/Linux/WSL2)

Jalankan dari root repo:

```bash
./scripts/install-hermes-agent.sh
```

## Menjalankan

Setelah install, mulai Hermes:

```bash
hermes
```

Jika command `hermes` belum terbaca (PATH belum ke-refresh), tutup terminal lalu buka lagi.

Atau jalankan wrapper dari repo ini (Windows):

```powershell
./scripts/hermes.ps1
```

Lalu pilih model/provider:

```bash
hermes model
```

Dokumentasi resmi: https://hermes-agent.nousresearch.com/docs/
