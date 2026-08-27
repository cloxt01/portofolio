import { Icons } from "@/components/icons";
import { GitBranch, House, Library, MapPin, ShieldCheck } from "lucide-react";
import {
  SiAnsible,
  SiDocker,
  SiGrafana,
  SiLinux,
  SiMikrotik,
  SiNginx,
  SiPrometheus,
  SiPython,
  SiMysql,
  SiProxmox,
} from "@icons-pack/react-simple-icons";

export const DATA = {
  name: "Muhamad Ferdiansyah",
  initials: "MF",
  url: "http://localhost:4321",
  location: "Lebak, Banten",
  locationLink: "https://www.google.com/maps/search/?api=1&query=Lebak%2C%20Banten",
  description:
    "Infrastructure Engineer — ISP Network Operations, Linux, & Automation",
  summary:
    "Infrastructure Engineer yang mengelola infrastruktur ISP untuk 2.000+ pelanggan aktif: MikroTik RouterOS, Linux server di atas Proxmox VE, FreeRADIUS, serta monitoring Prometheus + Grafana. Saya membangun sistem RADIUS + billing internal yang menggantikan lisensi vendor (hemat ±Rp12 juta/tahun) dan mengotomasi pekerjaan operasional berulang dengan Ansible. Fokus saya: keandalan layanan, otomasi, dan operasional jaringan yang terdokumentasi.",
  cvUrl: "/cv-muhamad-ferdiansyah.pdf",
  linkedinUrl: "https://www.linkedin.com/in/muhamad-ferdiansyah", // TODO: ganti dengan URL LinkedIn asli
  // avatarUrl: "/picofme.png",
  ogImage: "/og_image.png",
  sections: {
    about: { order: 1, enabled: true, heading: "Tentang Saya" },
    work: { order: 2, enabled: true, heading: "Pengalaman Kerja", presentLabel: "Sekarang" },
    education: { order: 3, enabled: true, heading: "Pendidikan" },
    skills: { order: 4, enabled: true, heading: "Keahlian" },
    projects: {
      order: 5,
      enabled: true,
      label: "Proyek",
      heading: "Proyek yang saya bangun",
      text:
        "Proyek infrastruktur dan otomasi yang saya bangun dan operasikan di lingkungan production, diurutkan berdasarkan relevansi.",
    },
    hackathons: {
      order: 6,
      enabled: true,
      label: "Sertifikat & Prestasi",
      heading: "Sertifikat dan pencapaian",
      text:
        "Sertifikat kompetensi dan pencapaian yang mendukung perjalanan saya di bidang infrastruktur dan teknologi.",
    },
    photos: {
      order: 7,
      enabled: false,
      heading: "Galeri",
    },
    contact: {
      order: 8,
      enabled: true,
      label: "Kontak",
      heading: "Hubungi Saya",
      text:
        "Kalau ingin berdiskusi soal infrastruktur ISP, Linux server, RADIUS, monitoring, atau otomasi, silakan hubungi saya lewat kanal di bawah.",
    },
  },
  photos: [],
  skillCategories: [
    {
      category: "Networking",
      items: [
        { name: "MikroTik RouterOS", icon: SiMikrotik },
        { name: "VLAN" },
        { name: "PPPoE" },
        { name: "Routing" },
        { name: "Firewall" },
      ],
    },
    {
      category: "Systems",
      items: [
        { name: "Linux (RHEL / Ubuntu)", icon: SiLinux },
        { name: "Proxmox VE", icon: SiProxmox },
        { name: "Docker", icon: SiDocker },
      ],
    },
    {
      category: "Automation & Monitoring",
      items: [
        { name: "Ansible", icon: SiAnsible },
        { name: "Prometheus", icon: SiPrometheus },
        { name: "Grafana", icon: SiGrafana },
        { name: "CI/CD", icon: GitBranch },
        { name: "Python", icon: SiPython },
      ],
    },
    {
      category: "Services",
      items: [
        { name: "FreeRADIUS", icon: ShieldCheck },
        { name: "Nginx", icon: SiNginx },
        { name: "MySQL", icon: SiMysql },
        { name: "DNS / DHCP" },
      ],
    },
  ],
  navbar: [
    { href: "/", icon: House, label: "Beranda" },
    { href: "/blog", icon: Library, label: "Blog" },
  ],
  contact: {
    email: "ferdi.cloxt00@gmail.com",
    tel: "6285863409811",
    social: {
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/muhamad-ferdiansyah", // TODO: ganti dengan URL LinkedIn asli
        icon: Icons.linkedin,
        navbar: true,
      },
      GitHub: {
        name: "GitHub",
        url: "https://github.com/cloxt01",
        icon: Icons.github,
        navbar: true,
      },
      WhatsApp: {
        name: "WhatsApp",
        url: "https://wa.me/6285863409811?text=Halo%20Ferdiansyah",
        icon: Icons.whatsapp,
        navbar: true,
      },
      Email: {
        name: "Email",
        url: "mailto:ferdi.cloxt00@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
      Lokasi: {
        name: "Lokasi",
        url: "https://www.google.com/maps/search/?api=1&query=Lebak%2C%20Banten",
        icon: MapPin,
        navbar: true,
      },
    },
  },
  work: [
    {
      company: "ANS Radius",
      href: "https://ansradius.id",
      badges: ["Full-time"],
      location: "Lebak, Banten",
      title: "Infrastructure Engineer",
      logoUrl: "/ansradius-logo.png",
      start: "Jan 2026",
      end: undefined,
      description: [
        "Mengelola infrastruktur ISP untuk 2.000+ pelanggan aktif: 3 router MikroTik (routing, firewall, NAT, PPPoE, bandwidth management) dan 5 Linux server di atas Proxmox VE.",
        "Membangun dan mengoperasikan sistem RADIUS + billing internal (FreeRADIUS, Laravel, MySQL) yang menggantikan lisensi vendor — menghemat ±Rp12 juta/tahun.",
        "Mengotomasi provisioning pelanggan, backup konfigurasi, dan deployment service dengan Ansible, memangkas pekerjaan manual berulang tim operasional.",
        "Membangun monitoring stack Prometheus + Grafana untuk visibilitas kesehatan jaringan dan server serta mempercepat respons insiden.",
        "Mengelola layanan inti production: Nginx reverse proxy, MySQL, DNS/DHCP, dan container Docker untuk aplikasi internal.",
      ],
    },
    {
      company: "PT Gajah Tunggal Tbk",
      href: "https://www.gajahtunggal.com/",
      badges: ["Operator Produksi"],
      location: "Tangerang, Banten",
      title: "Operator Produksi",
      logoUrl: "/gt-logo.png",
      start: "Jan 2025",
      end: "Jul 2025",
      description:
        "Menjalankan proses produksi sesuai SOP perusahaan dengan fokus pada kualitas, produktivitas, dan keselamatan kerja.",
    },
    {
      company: "Sekretariat DPRD Kabupaten Lebak",
      href: "#",
      badges: ["PKL / Internship"],
      location: "Lebak, Banten",
      title: "IT Support — PKL / Internship",
      logoUrl: "/dprd_lebak-logo.png",
      start: "Jul 2023",
      end: "Des 2023",
      description:
        "Praktik Kerja Lapangan (PKL) semasa SMK: instalasi dan konfigurasi sistem operasi serta aplikasi, troubleshooting perangkat pengguna, dan pengelolaan arsip dokumen operasional.",
    },
  ],
  education: [
    {
      school: "Universitas Pendidikan Indonesia",
      href: "https://upi.edu/",
      degree: "Marine Information System",
      logoUrl: "https://www.google.com/s2/favicons?domain=upi.edu&sz=128",
      start: "Aug 2025",
      end: "Des 2025",
    },
    {
      school: "SMKN 1 Rangkasbitung",
      href: "https://smkn1rangkasbitung.sch.id/",
      degree: "Teknik Komputer dan Jaringan (Computer and Network Engineering)",
      logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCZWew9BSi3w06UgJZUqn28ouTyZbHv4X_-69pNlT03Q&s=10",
      start: "May 2021",
      end: "May 2024",
    },
  ],
  projects: [
    {
      slug: "ans-radius",
      title: "ANS Radius",
      href: "https://ansradius.id",
      dates: "Jan 2026 - Sekarang",
      active: true,
      academic: false,
      description:
        "Sistem RADIUS + billing production yang menggantikan vendor berbayar untuk operasional ISP/RTRWNet: autentikasi FreeRADIUS terpusat, manajemen 2.000+ pelanggan, penagihan otomatis, dan integrasi MikroTik. Menghemat ±Rp12 juta/tahun biaya lisensi vendor.",
      technologies: [
        "FreeRADIUS",
        "Laravel",
        "MySQL",
        "MikroTik API",
        "Linux",
        "Nginx",
        "Docker",
      ],
      links: [
        {
          type: "Website",
          href: "https://ansradius.id",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/cloxt01/ans-radius",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/ansradius-preview.png",
      video: "",
    },
    {
      slug: "ans-ansible",
      title: "ANS Ansible",
      href: "https://github.com/cloxt01/ans-ansible",
      dates: "Ongoing",
      active: true,
      academic: false,
      description:
        "Otomasi provisioning dan configuration management untuk infrastruktur ISP: playbook backup konfigurasi, deployment service, hardening Linux server, dan provisioning berulang yang sebelumnya dikerjakan manual.",
      technologies: ["Ansible", "Linux", "Automation", "Inventory Management"],
      links: [
        {
          type: "Source",
          href: "https://github.com/cloxt01/ans-ansible",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/ansible-preview.png",
      video: "",
    },
    {
      slug: "ans-infrastructure",
      title: "ANS Infrastructure (Sanitized)",
      href: "https://github.com/cloxt01/ans-infrastructure",
      dates: "Ongoing",
      active: true,
      academic: false,
      description:
        "Dokumentasi arsitektur jaringan ISP versi sanitized untuk publik: topologi generik, IP dummy, dan standar konfigurasi service. Menunjukkan kemampuan desain jaringan dan dokumentasi operasional tanpa mengekspos detail production.",
      technologies: ["Network Design", "Documentation", "MikroTik RouterOS", "Operations"],
      links: [
        {
          type: "Source",
          href: "https://github.com/cloxt01/ans-infrastructure",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/ansinfra-preview.png",
      video: "",
    },
    {
      slug: "compass",
      title: "Compass",
      href: "https://cloxt.tech",
      dates: "Okt 2025 - Sekarang",
      active: true,
      academic: false,
      description:
        "Bukti kemampuan automation & backend: aplikasi Laravel dengan workflow otomatis multi-platform, autentikasi, scheduled jobs & queue, dan integrasi payment — dibangun untuk tracking lamaran kerja personal.",
      technologies: ["Laravel", "MySQL", "Automation", "Queue & Scheduler", "Payment API"],
      links: [
        {
          type: "Website",
          href: "https://cloxt.tech",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/cloxt01/compass",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/compass-preview.png",
      video: "",
    },
    {
      slug: "fisherman-safety-system",
      title: "Fisherman Safety System Prototype",
      href: "#projects",
      dates: "Nov 2025 - Des 2025",
      active: false,
      academic: true,
      description:
        "Prototipe digital untuk keselamatan nelayan: emergency alert, location tracking, dan konsep Bluetooth Mesh untuk konektivitas device-to-device. Berperan sebagai team lead.",
      technologies: ["Prototype", "IoT Concept", "Bluetooth Mesh", "Team Lead"],
      links: [],
      image: "/smartnet-preview.png",
      video: "",
    },
    {
      slug: "coral-reef-cultivation-system",
      title: "Coral Reef Cultivation System Prototype",
      href: "#projects",
      dates: "Sep 2025 - Okt 2025",
      active: false,
      academic: true,
      description:
        "Prototipe web untuk edukasi dan awareness budidaya terumbu karang, dipresentasikan di kompetisi tingkat kampus.",
      technologies: ["Web Prototype", "Education", "UI/UX"],
      links: [],
      image: "/favicon.svg",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Sertifikat Kompetensi Troubleshoot & WAN Security Network Assessment",
      dates: "Mar 2024",
      location: "Cyber K",
      image: "https://www.google.com/s2/favicons?domain=cyberk.id&sz=128",
      description:
        "Sertifikasi kompetensi Computer & Network Engineer yang berfokus pada troubleshooting, WAN security, dan network assessment.",
      certificateImage: "/cca-certificate.jpg",
      links: [],
    },
    {
      title: "National Essay Competition Finalist",
      dates: "Feb 2026",
      location: "Universitas Udayana",
      image: "https://www.google.com/s2/favicons?domain=unud.ac.id&sz=128",
      description:
        "Finalis pada kategori poster presentation di National Essay Competition PENA 2 2026.",
      links: [],
    },
    {
      title: "Product Innovation Competition",
      dates: "Des 2025",
      location: "Universitas Pendidikan Indonesia",
      image: "https://www.google.com/s2/favicons?domain=upi.edu&sz=128",
      description:
        "Mendapat Top 3 pada kompetisi Product Innovation tingkat departemen melalui ASIK Vol. V 2026.",
      certificateImage: "/asik-vol-v-2026-certificate.png",
      links: [],
    },
    {
      title: "Product Innovation Competition",
      dates: "Nov 2025",
      location: "Universitas Sultan Ageng Tirtayasa",
      image: "https://www.google.com/s2/favicons?domain=untirta.ac.id&sz=128",
      description:
        "Meraih award pada kompetisi Product Innovation tingkat universitas di Agromaritim Fest 2025.",
      certificateImage: "/argomaritim2025-certificate.png",
      links: [],
    },
  ],
} as const;
