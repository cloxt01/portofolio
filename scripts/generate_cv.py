import sys
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import mm
from reportlab.lib.enums import TA_CENTER
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, HRFlowable

styles = {
    "name": ParagraphStyle("name", fontName="Helvetica-Bold", fontSize=16, leading=19, alignment=TA_CENTER, spaceAfter=1),
    "headline": ParagraphStyle("headline", fontName="Helvetica-Bold", fontSize=10.5, leading=13, alignment=TA_CENTER, spaceAfter=2),
    "contact": ParagraphStyle("contact", fontName="Helvetica", fontSize=8.5, leading=11, alignment=TA_CENTER, textColor="#333333"),
    "section": ParagraphStyle("section", fontName="Helvetica-Bold", fontSize=10.5, leading=13, spaceBefore=7, spaceAfter=2),
    "job": ParagraphStyle("job", fontName="Helvetica-Bold", fontSize=9.5, leading=12, spaceBefore=3),
    "body": ParagraphStyle("body", fontName="Helvetica", fontSize=9, leading=11.8),
    "bullet": ParagraphStyle("bullet", fontName="Helvetica", fontSize=9, leading=11.8, leftIndent=10, bulletIndent=2),
}

CV = {
    "id": {
        "out": "/app/public/cv-muhamad-ferdiansyah.pdf",
        "labels": {"summary": "Ringkasan", "work": "Pengalaman Kerja", "projects": "Proyek Utama", "skills": "Keahlian", "education": "Pendidikan", "certs": "Sertifikasi"},
        "summary": "Infrastructure Engineer yang mengelola infrastruktur ISP untuk 2.000+ pelanggan aktif berbasis MikroTik RouterOS, Linux server di atas Proxmox VE, FreeRADIUS, dan monitoring Prometheus + Grafana. Membangun sistem RADIUS + billing internal yang menggantikan lisensi vendor (hemat \u00b1Rp12 juta/tahun) dan mengotomasi operasional berulang dengan Ansible.",
        "jobs": [
            ("Infrastructure Engineer \u2014 ANS Radius, Lebak, Banten", "Jan 2026 \u2013 Sekarang", [
                "Mengelola infrastruktur ISP untuk 2.000+ pelanggan aktif: 3 router MikroTik (routing, firewall, NAT, PPPoE, bandwidth management) dan 5 Linux server di atas Proxmox VE.",
                "Membangun dan mengoperasikan sistem RADIUS + billing internal (FreeRADIUS, Laravel, MySQL) menggantikan lisensi vendor \u2014 menghemat \u00b1Rp12 juta/tahun.",
                "Mengotomasi provisioning pelanggan, backup konfigurasi, dan deployment service dengan Ansible, memangkas pekerjaan manual berulang tim operasional.",
                "Membangun monitoring stack Prometheus + Grafana untuk visibilitas kesehatan jaringan dan server serta mempercepat respons insiden.",
                "Mengelola layanan inti production: Nginx reverse proxy, MySQL, DNS/DHCP, dan container Docker untuk aplikasi internal.",
            ]),
            ("Operator Produksi \u2014 PT Gajah Tunggal Tbk, Tangerang", "Jan 2025 \u2013 Jul 2025", [
                "Menjalankan proses produksi sesuai SOP dengan fokus pada kualitas, produktivitas, dan keselamatan kerja.",
            ]),
            ("IT Support (PKL / Internship) \u2014 Sekretariat DPRD Kabupaten Lebak", "Jul 2023 \u2013 Des 2023", [
                "Praktik Kerja Lapangan semasa SMK: instalasi dan konfigurasi OS serta aplikasi, troubleshooting perangkat pengguna, dan pengelolaan arsip dokumen.",
            ]),
        ],
        "projects": [
            "<b>ANS Radius</b> \u2014 sistem RADIUS + billing production untuk ISP/RTRWNet: autentikasi FreeRADIUS terpusat, manajemen 2.000+ pelanggan, penagihan dan isolir otomatis, integrasi MikroTik. (ansradius.id)",
            "<b>ANS Ansible</b> \u2014 playbook otomasi provisioning dan configuration management: backup konfigurasi, deployment service, dan hardening Linux server. (github.com/cloxt01/ans-ansible)",
        ],
        "education": [
            "<b>SMKN 1 Rangkasbitung</b> \u2014 Teknik Komputer dan Jaringan (Mei 2021 \u2013 Mei 2024)",
            "<b>Universitas Pendidikan Indonesia</b> \u2014 Marine Information System (Aug 2025 \u2013 Des 2025)",
        ],
        "certs": ["Sertifikat Kompetensi Troubleshoot &amp; WAN Security Network Assessment \u2014 Cyber K (Mar 2024)"],
    },
    "en": {
        "out": "/app/public/cv-muhamad-ferdiansyah-en.pdf",
        "labels": {"summary": "Summary", "work": "Work Experience", "projects": "Key Projects", "skills": "Skills", "education": "Education", "certs": "Certifications"},
        "summary": "Infrastructure Engineer running ISP infrastructure for 2,000+ active subscribers on MikroTik RouterOS, Linux servers on Proxmox VE, FreeRADIUS, and Prometheus + Grafana monitoring. Built an in-house RADIUS + billing system that replaced a vendor license (saving \u00b1IDR 12M/year) and automates repetitive operations with Ansible.",
        "jobs": [
            ("Infrastructure Engineer \u2014 ANS Radius, Lebak, Banten, Indonesia", "Jan 2026 \u2013 Present", [
                "Manage ISP infrastructure for 2,000+ active subscribers: 3 MikroTik routers (routing, firewall, NAT, PPPoE, bandwidth management) and 5 Linux servers on Proxmox VE.",
                "Built and operate an in-house RADIUS + billing system (FreeRADIUS, Laravel, MySQL) replacing a vendor license \u2014 saving \u00b1IDR 12M/year.",
                "Automated subscriber provisioning, config backups, and service deployments with Ansible, cutting the ops team's repetitive manual work.",
                "Built a Prometheus + Grafana monitoring stack for network and server health visibility and faster incident response.",
                "Operate core production services: Nginx reverse proxy, MySQL, DNS/DHCP, and Docker containers for internal applications.",
            ]),
            ("Production Operator \u2014 PT Gajah Tunggal Tbk, Tangerang, Indonesia", "Jan 2025 \u2013 Jul 2025", [
                "Ran production processes according to company SOPs with a focus on quality, productivity, and workplace safety.",
            ]),
            ("IT Support (Internship) \u2014 Regional Parliament Secretariat of Lebak", "Jul 2023 \u2013 Dec 2023", [
                "Vocational school internship: OS and application installation and configuration, end-user device troubleshooting, and document management.",
            ]),
        ],
        "projects": [
            "<b>ANS Radius</b> \u2014 production RADIUS + billing system for an ISP/RTRWNet: centralized FreeRADIUS authentication, 2,000+ subscriber management, automated invoicing and suspension, MikroTik integration. (ansradius.id)",
            "<b>ANS Ansible</b> \u2014 provisioning automation and configuration management playbooks: config backups, service deployment, and Linux server hardening. (github.com/cloxt01/ans-ansible)",
        ],
        "education": [
            "<b>SMKN 1 Rangkasbitung (Vocational High School)</b> \u2014 Computer and Network Engineering (May 2021 \u2013 May 2024)",
            "<b>Universitas Pendidikan Indonesia</b> \u2014 Marine Information System (Aug 2025 \u2013 Dec 2025)",
        ],
        "certs": ["Competency Certificate: Troubleshoot &amp; WAN Security Network Assessment \u2014 Cyber K (Mar 2024)"],
    },
}

SKILLS = [
    "<b>Networking:</b> MikroTik RouterOS, VLAN, PPPoE, Routing, Firewall",
    "<b>Systems:</b> Linux (RHEL/Ubuntu), Proxmox VE, Docker",
    "<b>Automation &amp; Monitoring:</b> Ansible, Prometheus, Grafana, CI/CD, Python",
    "<b>Services:</b> FreeRADIUS, Nginx, MySQL, DNS/DHCP",
]


def sec(title):
    return [Paragraph(title.upper(), styles["section"]), HRFlowable(width="100%", thickness=0.7, color="#444444", spaceAfter=3)]


def bullets(items):
    return [Paragraph(i, styles["bullet"], bulletText="\u2022") for i in items]


def build(lang):
    c = CV[lang]
    L = c["labels"]
    story = [
        Paragraph("MUHAMAD FERDIANSYAH", styles["name"]),
        Paragraph("Infrastructure Engineer \u2014 ISP Network Operations, Linux, &amp; Automation", styles["headline"]),
        Paragraph("Lebak, Banten, Indonesia &nbsp;|&nbsp; ferdi.cloxt00@gmail.com &nbsp;|&nbsp; +62 858-6340-9811 &nbsp;|&nbsp; github.com/cloxt01 &nbsp;|&nbsp; linkedin.com/in/muhamad-ferdiansyah", styles["contact"]),
        Spacer(1, 2),
    ]
    story += sec(L["summary"]) + [Paragraph(c["summary"], styles["body"])]
    story += sec(L["work"])
    for title, dates, items in c["jobs"]:
        story.append(Paragraph(f"{title} <font face='Helvetica' size='8.5' color='#333333'>({dates})</font>", styles["job"]))
        story += bullets(items)
    story += sec(L["projects"]) + bullets(c["projects"])
    story += sec(L["skills"]) + bullets(SKILLS)
    story += sec(L["education"]) + bullets(c["education"])
    story += sec(L["certs"]) + bullets(c["certs"])
    doc = SimpleDocTemplate(c["out"], pagesize=A4, topMargin=11 * mm, bottomMargin=11 * mm, leftMargin=15 * mm, rightMargin=15 * mm,
                            title="CV Muhamad Ferdiansyah - Infrastructure Engineer", author="Muhamad Ferdiansyah")
    doc.build(story)
    print("CV generated:", c["out"])


if __name__ == "__main__":
    for lang in (sys.argv[1:] or ["id", "en"]):
        build(lang)
