from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import mm
from reportlab.lib.enums import TA_CENTER
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, HRFlowable

OUT = "/app/public/cv-muhamad-ferdiansyah.pdf"

styles = {
    "name": ParagraphStyle("name", fontName="Helvetica-Bold", fontSize=16, leading=19, alignment=TA_CENTER, spaceAfter=1),
    "headline": ParagraphStyle("headline", fontName="Helvetica-Bold", fontSize=10.5, leading=13, alignment=TA_CENTER, spaceAfter=2),
    "contact": ParagraphStyle("contact", fontName="Helvetica", fontSize=8.5, leading=11, alignment=TA_CENTER, textColor="#333333"),
    "section": ParagraphStyle("section", fontName="Helvetica-Bold", fontSize=10.5, leading=13, spaceBefore=7, spaceAfter=2),
    "job": ParagraphStyle("job", fontName="Helvetica-Bold", fontSize=9.5, leading=12, spaceBefore=3),
    "body": ParagraphStyle("body", fontName="Helvetica", fontSize=9, leading=11.8),
    "bullet": ParagraphStyle("bullet", fontName="Helvetica", fontSize=9, leading=11.8, leftIndent=10, bulletIndent=2),
}

def sec(title):
    return [Paragraph(title.upper(), styles["section"]), HRFlowable(width="100%", thickness=0.7, color="#444444", spaceAfter=3)]

def bullets(items):
    return [Paragraph(i, styles["bullet"], bulletText="\u2022") for i in items]

story = [
    Paragraph("MUHAMAD FERDIANSYAH", styles["name"]),
    Paragraph("Infrastructure Engineer \u2014 ISP Network Operations, Linux, &amp; Automation", styles["headline"]),
    Paragraph("Lebak, Banten &nbsp;|&nbsp; ferdi.cloxt00@gmail.com &nbsp;|&nbsp; +62 858-6340-9811 &nbsp;|&nbsp; github.com/cloxt01 &nbsp;|&nbsp; linkedin.com/in/muhamad-ferdiansyah", styles["contact"]),
    Spacer(1, 2),
]

story += sec("Ringkasan")
story.append(Paragraph(
    "Infrastructure Engineer yang mengelola infrastruktur ISP untuk 2.000+ pelanggan aktif berbasis MikroTik RouterOS, "
    "Linux server di atas Proxmox VE, FreeRADIUS, dan monitoring Prometheus + Grafana. Membangun sistem RADIUS + billing "
    "internal yang menggantikan lisensi vendor (hemat \u00b1Rp12 juta/tahun) dan mengotomasi operasional berulang dengan Ansible.",
    styles["body"]))

story += sec("Pengalaman Kerja")
story.append(Paragraph("Infrastructure Engineer \u2014 ANS Radius, Lebak, Banten <font face='Helvetica' size='8.5' color='#333333'>(Jan 2026 \u2013 Sekarang)</font>", styles["job"]))
story += bullets([
    "Mengelola infrastruktur ISP untuk 2.000+ pelanggan aktif: 3 router MikroTik (routing, firewall, NAT, PPPoE, bandwidth management) dan 5 Linux server di atas Proxmox VE.",
    "Membangun dan mengoperasikan sistem RADIUS + billing internal (FreeRADIUS, Laravel, MySQL) menggantikan lisensi vendor \u2014 menghemat \u00b1Rp12 juta/tahun.",
    "Mengotomasi provisioning pelanggan, backup konfigurasi, dan deployment service dengan Ansible, memangkas pekerjaan manual berulang tim operasional.",
    "Membangun monitoring stack Prometheus + Grafana untuk visibilitas kesehatan jaringan dan server serta mempercepat respons insiden.",
    "Mengelola layanan inti production: Nginx reverse proxy, MySQL, DNS/DHCP, dan container Docker untuk aplikasi internal.",
])
story.append(Paragraph("Operator Produksi \u2014 PT Gajah Tunggal Tbk, Tangerang <font face='Helvetica' size='8.5' color='#333333'>(Jan 2025 \u2013 Jul 2025)</font>", styles["job"]))
story += bullets(["Menjalankan proses produksi sesuai SOP dengan fokus pada kualitas, produktivitas, dan keselamatan kerja."])
story.append(Paragraph("IT Support (PKL / Internship) \u2014 Sekretariat DPRD Kabupaten Lebak <font face='Helvetica' size='8.5' color='#333333'>(Jul 2023 \u2013 Des 2023)</font>", styles["job"]))
story += bullets(["Praktik Kerja Lapangan semasa SMK: instalasi dan konfigurasi OS serta aplikasi, troubleshooting perangkat pengguna, dan pengelolaan arsip dokumen."])

story += sec("Proyek Utama")
story += bullets([
    "<b>ANS Radius</b> \u2014 sistem RADIUS + billing production untuk ISP/RTRWNet: autentikasi FreeRADIUS terpusat, manajemen 2.000+ pelanggan, penagihan dan isolir otomatis, integrasi MikroTik. (ansradius.id)",
    "<b>ANS Ansible</b> \u2014 playbook otomasi provisioning dan configuration management: backup konfigurasi, deployment service, dan hardening Linux server. (github.com/cloxt01/ans-ansible)",
])

story += sec("Keahlian")
story += bullets([
    "<b>Networking:</b> MikroTik RouterOS, VLAN, PPPoE, Routing, Firewall",
    "<b>Systems:</b> Linux (RHEL/Ubuntu), Proxmox VE, Docker",
    "<b>Automation &amp; Monitoring:</b> Ansible, Prometheus, Grafana, CI/CD, Python",
    "<b>Services:</b> FreeRADIUS, Nginx, MySQL, DNS/DHCP",
])

story += sec("Pendidikan")
story += bullets([
    "<b>SMKN 1 Rangkasbitung</b> \u2014 Teknik Komputer dan Jaringan (Mei 2021 \u2013 Mei 2024)",
    "<b>Universitas Pendidikan Indonesia</b> \u2014 Marine Information System (Aug 2025 \u2013 Des 2025)",
])

story += sec("Sertifikasi")
story += bullets([
    "Sertifikat Kompetensi Troubleshoot &amp; WAN Security Network Assessment \u2014 Cyber K (Mar 2024)",
])

doc = SimpleDocTemplate(OUT, pagesize=A4, topMargin=11 * mm, bottomMargin=11 * mm, leftMargin=15 * mm, rightMargin=15 * mm,
                        title="CV Muhamad Ferdiansyah - Infrastructure Engineer", author="Muhamad Ferdiansyah")
doc.build(story)
print("CV generated:", OUT)
