import { useLang, LanguageToggle } from "@/lib/lang";

const CONTENT = {
  id: {
    badge: "Studi Kasus",
    problemTitle: "Masalah",
    problems: [
      "Biaya lisensi billing vendor ±Rp12 juta/tahun untuk fitur yang sebagian besar tidak terpakai.",
      "Provisioning manual: aktivasi, isolir, dan perubahan paket pelanggan dikerjakan satu per satu di router.",
      "Data pelanggan, tagihan, dan status koneksi tersebar — tidak ada satu sumber kebenaran.",
    ],
    archTitle: "Arsitektur",
    archCaption: "Topologi jaringan (versi sanitized untuk publik)",
    archItems: [
      ["MikroTik RouterOS", "NAS (Network Access Server) — pelanggan terhubung via PPPoE, setiap sesi diautentikasi ke RADIUS, bukan secret lokal di router."],
      ["FreeRADIUS + MySQL", "AAA (Authentication, Authorization, Accounting). Profil kecepatan dikirim sebagai atribut Mikrotik-Rate-Limit — ganti paket cukup update database."],
      ["Laravel + MySQL", "Aplikasi billing: manajemen pelanggan, generate tagihan bulanan, pencatatan pembayaran, dan status layanan."],
      ["Nginx + Docker di Proxmox VE", "Serving dan isolasi aplikasi di Linux server yang tervirtualisasi."],
    ],
    flowTitle: "Alur Billing → Jaringan",
    flows: [
      "Scheduler Laravel generate tagihan setiap awal periode.",
      "Lewat jatuh tempo, profil pelanggan di radgroupreply diubah ke profil isolir (redirect ke halaman pemberitahuan).",
      "Sesi PPPoE aktif diputus via RADIUS Disconnect (CoA/PoD) — pelanggan langsung masuk mode isolir tanpa menunggu re-connect.",
      "Setelah pembayaran tercatat, proses berjalan terbalik — pelanggan aktif kembali dalam hitungan detik, tanpa disentuh manual.",
    ],
    screenshotCaption: "Dashboard billing production",
    resultsTitle: "Hasil Terukur",
    metrics: [
      ["2.000+", "pelanggan aktif terautentikasi via FreeRADIUS"],
      ["±Rp12jt/thn", "biaya lisensi vendor dihilangkan"],
      ["3 + 5", "router MikroTik + Linux server dikelola"],
      ["0 manual", "isolir & aktivasi berjalan otomatis penuh"],
    ],
    resultsNote:
      "Tidak ada lagi \u201clupa isolir\u201d atau \u201clupa buka isolir\u201d — dua sumber komplain paling umum di operasional RTRWNet. Data accounting RADIUS (radacct) juga dipakai untuk troubleshooting, misalnya mendeteksi sesi flapping karena masalah kabel/ODP.",
  },
  en: {
    badge: "Case Study",
    problemTitle: "The Problem",
    problems: [
      "Vendor billing license costs of ±IDR 12M/year for features that were mostly unused.",
      "Manual provisioning: activation, suspension, and plan changes done one by one on the router.",
      "Subscriber data, invoices, and connection status scattered — no single source of truth.",
    ],
    archTitle: "Architecture",
    archCaption: "Network topology (sanitized version for public)",
    archItems: [
      ["MikroTik RouterOS", "NAS (Network Access Server) — subscribers connect via PPPoE, every session authenticates against RADIUS instead of local router secrets."],
      ["FreeRADIUS + MySQL", "AAA (Authentication, Authorization, Accounting). Speed profiles are sent as Mikrotik-Rate-Limit attributes — plan changes are just a database update."],
      ["Laravel + MySQL", "Billing application: subscriber management, monthly invoice generation, payment records, and service status."],
      ["Nginx + Docker on Proxmox VE", "Serving and application isolation on virtualized Linux servers."],
    ],
    flowTitle: "Billing → Network Flow",
    flows: [
      "A Laravel scheduler generates invoices at the start of each period.",
      "Past due date, the subscriber profile in radgroupreply switches to an isolation profile (redirect to a notice page).",
      "Active PPPoE sessions are dropped via RADIUS Disconnect (CoA/PoD) — subscribers enter isolation immediately, no re-connect needed.",
      "Once payment is recorded, the same process runs in reverse — subscribers are back online in seconds, untouched by hand.",
    ],
    screenshotCaption: "Production billing dashboard",
    resultsTitle: "Measurable Results",
    metrics: [
      ["2,000+", "active subscribers authenticated via FreeRADIUS"],
      ["±IDR 12M/yr", "vendor license cost eliminated"],
      ["3 + 5", "MikroTik routers + Linux servers managed"],
      ["0 manual", "suspension & activation fully automated"],
    ],
    resultsNote:
      "No more \u201cforgot to suspend\u201d or \u201cforgot to reactivate\u201d — the two most common complaint sources in RTRWNet operations. RADIUS accounting data (radacct) is also used for troubleshooting, e.g. detecting flapping sessions caused by cable/ODP issues.",
  },
} as const;

export default function AnsRadiusCaseStudy() {
  const [lang] = useLang();
  const t = CONTENT[lang];

  return (
    <article className="space-y-8" data-testid="case-study-ans-radius">
      <div className="flex items-center justify-between gap-4">
        <span className="inline-flex items-center rounded-full border border-border bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
          {t.badge}
        </span>
        <LanguageToggle />
      </div>

      <div className="grid gap-3 sm:grid-cols-4" data-testid="case-study-metrics">
        {t.metrics.map(([value, label]) => (
          <div key={label} className="rounded-xl border border-border p-4 flex flex-col gap-1">
            <p className="text-lg font-bold tracking-tight">{value}</p>
            <p className="text-xs text-muted-foreground leading-snug">{label}</p>
          </div>
        ))}
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">{t.problemTitle}</h2>
        <ul className="list-disc pl-5 space-y-1.5 text-muted-foreground leading-relaxed">
          {t.problems.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">{t.archTitle}</h2>
        <figure className="overflow-hidden rounded-xl border border-border bg-card">
          <img src="/ansinfra-preview.png" alt={t.archCaption} className="w-full object-cover" />
          <figcaption className="px-4 py-2 text-xs text-muted-foreground border-t border-border">
            {t.archCaption}
          </figcaption>
        </figure>
        <div className="grid gap-3 sm:grid-cols-2">
          {t.archItems.map(([name, desc]) => (
            <div key={name} className="rounded-xl border border-border p-4 space-y-1">
              <p className="text-sm font-semibold">{name}</p>
              <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">{t.flowTitle}</h2>
        <ol className="space-y-2">
          {t.flows.map((step, i) => (
            <li key={step} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
              <span className="flex-none flex items-center justify-center size-6 rounded-full bg-primary text-primary-foreground text-xs font-bold">
                {i + 1}
              </span>
              <span className="pt-0.5">{step}</span>
            </li>
          ))}
        </ol>
      </div>

      <div className="space-y-3">
        <figure className="overflow-hidden rounded-xl border border-border bg-card">
          <img src="/ansradius-preview.png" alt={t.screenshotCaption} className="w-full object-cover" />
          <figcaption className="px-4 py-2 text-xs text-muted-foreground border-t border-border">
            {t.screenshotCaption}
          </figcaption>
        </figure>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">{t.resultsTitle}</h2>
        <p className="text-sm text-muted-foreground leading-relaxed">{t.resultsNote}</p>
      </div>
    </article>
  );
}
