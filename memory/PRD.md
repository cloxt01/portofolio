# PRD — Perombakan Portofolio Screening: Muhamad Ferdiansyah

## Problem Statement (asli)
Rombak paket screening (portofolio + CV + GitHub) agar lolos screening 30 detik untuk role NOC / SysAdmin / System Engineer / IT Infrastructure di perusahaan lokal Indonesia. Fokus: positioning satu title (Infrastructure Engineer), kejujuran timeline (DPRD = PKL, UPI rentang riil), reorder proyek by relevansi infra, skills 4 kategori, tombol Download CV + LinkedIn, artikel teknis.

## Keputusan User
- Angka Rp12jt/tahun: AMAN dipajang (izin founder ada)
- UPI: tampilkan rentang riil Aug 2025 – Des 2025 (tanpa label tambahan)
- Metrik ANS Radius: 2.000+ pelanggan aktif, 3 router MikroTik, 5 server
- CV PDF: digenerate langsung, tautan Download CV
- LinkedIn: placeholder (https://www.linkedin.com/in/muhamad-ferdiansyah — TODO ganti URL asli)
- Push ke GitHub cloxt01/portofolio branch 'ai' → via fitur "Save to Github" platform

## Arsitektur
- Kodebase: Astro 6 + React 19 + Tailwind 4 (template Starfolio), konten terpusat di `src/data/resume.tsx`
- Diambil dari github.com/cloxt01/portofolio (main), ditempatkan di /app root
- Preview: supervisor frontend menjalankan Astro dev via Node 22 (/root/node22, Astro butuh Node ≥22.12) port 3000
- CV digenerate `scripts/generate_cv.py` (reportlab) → `public/cv-muhamad-ferdiansyah.pdf` (1 halaman, ATS-friendly, Bahasa Indonesia)

## Yang Sudah Diimplementasikan (Jun 2026)
### Iterasi 2 — Fitur Lanjutan
- Toggle bahasa ID/EN satu klik (hook `src/lib/lang.tsx`, localStorage 'site-lang', sinkron antar island via custom event); data EN di `src/data/resume.en.tsx` (derived dari DATA)
- Tombol Download CV mengikuti bahasa: ID → /cv-muhamad-ferdiansyah.pdf, EN → /cv-muhamad-ferdiansyah-en.pdf (keduanya digenerate `scripts/generate_cv.py`)
- Studi kasus lengkap bilingual di /projects/ans-radius (`src/components/case-study/AnsRadiusCaseStudy.tsx`): 4 kartu metrik, masalah, arsitektur + topologi, alur billing→jaringan, screenshot, hasil terukur
- OG image (1200x630, branding terminal Infrastructure Engineer) + favicon.svg/.ico baru via `scripts/generate_og.py`
- Fix bug: '[object Object]' pada link sidebar halaman detail proyek
- Testing: iteration_2.json — 100% pass

### Iterasi 1 — Perombakan Screening
- Headline & summary: "Infrastructure Engineer — ISP Network Operations, Linux, & Automation"
- Work: ANS Radius satu title + 5 bullet berbasis angka (accordion terbuka default); DPRD dilabel "IT Support — PKL / Internship"; entri "Self-Learning" dihapus
- Education: UPI rentang riil Aug 2025 – Des 2025
- Skills: 4 kategori (Networking / Systems / Automation & Monitoring / Services), tag lemah dihapus
- Proyek diurut: ANS Radius (metrik) → ANS Ansible → ANS Infrastructure (Sanitized) → Compass (reframe automation/backend); prototipe akademik dipisah ke section kompak "Proyek Akademik"
- Hero: tombol Download CV (data-testid: download-cv-btn) + LinkedIn (linkedin-btn); LinkedIn juga di kontak
- Blog: 7 artikel placeholder template dihapus, 1 artikel teknis asli ditambah ("Membangun RADIUS + Billing Internal untuk RTRWNet")
- README repo diganti dengan deskripsi portofolio
- Testing: iteration_1.json — frontend 100% pass (8/8 kriteria)

## Backlog / Tugas User (di luar kodebase ini)
- P0: Private-kan / sanitasi repo ans-infrastructure asli; audit secret dengan gitleaks/trufflehog; README di 3 repo utama; pin repo
- P0: Buat profil LinkedIn lalu ganti placeholder URL di `src/data/resume.tsx` (2 tempat, ada komentar TODO) dan regenerate CV
- P1: Samakan tanggal CV/portofolio/LinkedIn di semua kanal
- P2: Sertifikasi MTCNA → RHCSA/CCNA; artikel teknis kedua
