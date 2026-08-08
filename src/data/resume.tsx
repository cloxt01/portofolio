import { Icons } from "@/components/icons";
import { Braces, Flame, GitBranch, Gauge, House, Layers3, Library, MapPin, Server, ShieldCheck, Terminal, Wind } from "lucide-react";
import {
  SiAnsible,
  SiDocker,
  SiGrafana,
  SiLinux,
  SiMikrotik,
  SiNginx,
  SiPrometheus,
  SiPython,
  SiPhp,
  SiRedhat,
  SiGit,
  SiGithub,
  SiMysql,
  SiProxmox,
  SiLaravel,
  SiNodered,
} from "@icons-pack/react-simple-icons";

export const DATA = {
  name: "Muhamad Ferdiansyah",
  initials: "MF",
  url: "http://localhost:4321",
  location: "Lebak, Banten",
  locationLink: "https://www.google.com/maps/search/?api=1&query=Lebak%2C%20Banten",
  description:
    "System Engineer | Infrastructure Engineer yang fokus pada infrastruktur ISP, otomasi, Linux server, dan network operations.",
  summary:
     "IT Infrastructure Engineer dengan pengalaman membangun dan mengelola infrastruktur ISP, mulai dari jaringan, server, hingga sistem billing dan monitoring internal. Saya terbiasa menghubungkan berbagai komponen sistem untuk meningkatkan keandalan layanan, efisiensi operasional, dan otomasi proses kerja. Saat ini saya sedang mengembangkan ANS Radius dan Compass, sekaligus terus memperdalam web development dan automation untuk mendukung pekerjaan infrastruktur. Selain sisi teknis, saya terbiasa menangani technical documentation dan incident coordination dalam operasional infrastruktur sehari-hari.",  
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
        "Campuran proyek kerja, produk personal, dan prototipe akademik yang menunjukkan sisi infrastruktur, web development, dan otomasi yang saya kerjakan.",
    },
    hackathons: {
      order: 6,
      enabled: true,
      label: "Sertifikat & Prestasi",
      heading: "Sertifikat dan pencapaian",
      text:
        "Beberapa sertifikat kompetensi dan pencapaian kompetisi yang mendukung perjalanan saya di bidang infrastruktur dan teknologi.",
    },
    courses: {
      order: 7,
      enabled: true,
      label: "Kursus",
      heading: "Kursus & pelatihan",
      text:
        "Pelatihan formal yang mendukung kemampuan web development dan automation di luar jalur pendidikan utama.",
    },
    photos: {
      order: 8,
      enabled: false,
      heading: "Galeri",
    },
    contact: {
      order: 9,
      enabled: true,
      label: "Kontak",
      heading: "Hubungi Saya",
      text:
        "Kalau ingin berdiskusi soal infrastruktur ISP, Linux server, Proxmox, RADIUS, monitoring, billing, atau otomasi, silakan hubungi saya lewat kanal di bawah.",
    },
  },
  photos: [],
  skills: [
    { name: "MikroTik RouterOS", icon: SiMikrotik },
    { name: "Linux", icon: SiLinux },
    { name: "RHEL", icon: SiRedhat },
    { name: "Proxmox VE", icon: SiProxmox },
    { name: "FreeRADIUS", icon: ShieldCheck },

    { name: "Docker", icon: SiDocker },
    { name: "Nginx", icon: SiNginx },
    { name: "Ansible", icon: SiAnsible },
    { name: "Infrastructure as Code", icon: Braces },

    { name: "Prometheus", icon: SiPrometheus },
    { name: "Grafana", icon: SiGrafana },
    { name: "Diagram as Code", icon: Layers3 },

    { name: "Python", icon: SiPython },
    { name: "PHP", icon: SiPhp },
    { name: "Git", icon: SiGit },
    { name: "GitHub Actions", icon: SiGithub },
    { name: "CI/CD", icon: GitBranch },
    { name: "Cron", icon: Terminal },

    { name: "MySQL", icon: SiMysql },

    { name: "Attendance System" },

    { name: "TCP/IP" },
    { name: "VLAN" },
    { name: "PPPoE" },
    { name: "DHCP" },
    { name: "DNS" },
    { name: "VPN" },
    { name: "Proxy" },
    { name: "Routing" },
    { name: "Firewall" },

    { name: "Technical Documentation" }
  ],
  navbar: [
    { href: "/", icon: House, label: "Beranda" }
  ],
  contact: {
    email: "ferdi.cloxt00@gmail.com",
    tel: "6285863409811",
    social: {
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
      GitHub: {
        name: "GitHub",
        url: "https://github.com/cloxt01",
        icon: Icons.github,
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
      badges: ["Infrastructure Engineer"],
      location: "Remote / Lebak, Banten",
      title: "Infrastructure Engineer",
      logoUrl: "/ansradius-logo.png",
      start: "Jan 2026",
      end: undefined,
      description: [
        "Mengelola dan memelihara infrastruktur jaringan ISP berbasis MikroTik RouterOS untuk mendukung lebih dari 2.000 pelanggan aktif.",
        "Mengelola layanan jaringan meliputi routing, firewall, NAT, bandwidth management, PPPoE, dan ketersediaan layanan.",
        "Mengelola server berbasis Linux dan infrastruktur virtualisasi menggunakan Proxmox VE untuk kebutuhan operasional ISP.",
        "Mengelola infrastruktur RADIUS (AAA) untuk autentikasi pelanggan dan kontrol akses.",
        "Mengelola IT Facilities termasuk server, perangkat pengguna, dan sistem pendukung lainnya.",
        "Menyediakan dukungan teknis L2/L3 untuk infrastruktur ISP, mencakup network engineering, administrasi Linux server, virtualisasi, troubleshooting aplikasi, dan peningkatan sistem.",
        "Mengelola Attendance System (Attendance Management) internal.",
        "Mengintegrasikan infrastruktur jaringan, server Linux, database, dan aplikasi internal untuk mendukung operasional bisnis.",
        "Memantau performa infrastruktur serta melakukan troubleshooting pada masalah jaringan, server, dan aplikasi.",
        "Menyusun dokumentasi teknis meliputi topologi jaringan, arsitektur sistem, dan prosedur operasional.",
      ],
      achievements: [
        "Mengembangkan infrastruktur ISP agar dapat mudah dikelola, aman dan terstruktur.",
        "Menggantikan solusi billing ISP pihak ketiga dengan sistem yang dikembangkan secara internal, menghemat biaya operasional sekitar Rp12 juta per tahun.",
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
        "Menjalankan proses produksi sesuai SOP perusahaan dengan fokus pada kualitas, produktivitas, dan keselamatan kerja. Secara mandiri terus mengembangkan kemampuan teknis di luar jam kerja melalui self-learning di bidang Web Development, Version Control, dan Automation untuk mendukung pengembangan karier di bidang Information Technology.",
    },
    {
      company: "Sekretariat DPRD Kabupaten Lebak",
      href: "#",
      badges: ["IT Support"],
      location: "Lebak, Banten",
      title: "IT Support",
      logoUrl: "/dprd_lebak-logo.png",
      start: "Jul 2023",
      end: "Des 2023",
      description:
        "Instalasi dan konfigurasi sistem operasi serta aplikasi, troubleshooting perangkat pengguna, dan pengelolaan arsip dokumen operasional.",
    }
  ],
  education: [
    {
      school: "Universitas Pendidikan Indonesia",
      href: "https://upi.edu/",
      degree: "Marine Information System",
      logoUrl: "https://www.google.com/s2/favicons?domain=upi.edu&sz=128",
      start: "Aug 2025",
      end: "Dec 2025",
    },
    {
      school: "SMKN 1 Rangkasbitung",
      href: "https://smkn1rangkasbitung.sch.id/",
      degree: "Computer and Network Engineering",
      logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCZWew9BSi3w06UgJZUqn28ouTyZbHv4X_-69pNlT03Q&s=10",
      start: "May 2021",
      end: "May 2024",
    },
  ],
  courses: [
    {
      title: "Laravel 11",
      provider: "Codepolitan",
      href: "#",
    },
    {
      title: "PHP (OOP)",
      provider: "Codepolitan",
      href: "#",
    },
    {
      title: "JavaScript (OOP & DOM)",
      provider: "Codepolitan",
      href: "#",
    },
    {
      title: "AJAX & Web API",
      provider: "Codepolitan",
      href: "#",
    },
    {
      title: "Git",
      provider: "Codepolitan",
      href: "#",
    },
  ],
  projects: [
    {
      slug: "ans-ansible",
      title: "ANS Ansible",
      // star: true,
      href: "https://github.com/cloxt01/ans-ansible",
      dates: "Jul 2026 - Sekarang",
      active: true,
      description:
        "Repository playbook Ansible untuk kebutuhan internal pengelolaan infrastruktur dan aplikasi. ",
      technologies: ["Ansible", "Automation", "Inventory", "Linux"],
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
      title: "ANS Infrastructure",
      href: "https://github.com/cloxt01/ans-infrastructure",
      dates: "Apr 2026 - Sekarang",
      active: true,
      star: true,
      description:
        "Repository dokumentasi infrastruktur ANS yang berisi arsitektur jaringan, addressing IP, konfigurasi service, catatan operasional, dan referensi backup untuk membantu pengelolaan sistem ISP secara konsisten.",
      technologies: ["Documentation", "Mikrotik RouterOS","Network Architecture", "IP Addressing", "Operations"],
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
      slug: "ans-radius",
      title: "ANS Radius",
      star: true,
      href: "https://ansradius.id",
      dates: "Jan 2026 - Sekarang",
      active: true,
      description:
        "Platform untuk manajemen ISP/RTRWNet yang menggabungkan autentikasi RADIUS terpusat, manajemen pelanggan, penagihan, monitoring, dan otomasi jaringan. Proyek ini juga didukung dokumentasi infrastruktur. Menggantikan solusi billing pihak ketiga dengan sistem internal, menghemat biaya operasional sekitar Rp12 juta per tahun.",
      technologies: [
        "PHP",
        "MySQL",
        "RADIUS",
        "Linux",
        "Nginx",
        "Docker",
        "Automation",
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
      slug: "compass",
      title: "Compass",
      // star: true,
      href: "https://cloxt.tech",
      dates: "Okt 2025 - Jul 2026",
      active: true,
      description:
        "SaaS personal untuk pencarian kerja multi-platform dan manajemen lamaran. Dibangun dengan backend services, autentikasi, subscription, payment integration, dan workflow otomatis untuk membantu tracking proses kerja.",
      technologies: ["PHP", "MySQL", "Automation", "Payment", "SaaS"],
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
      active: true,
      description:
        "Prototipe digital yang dirancang untuk meningkatkan keselamatan nelayan saat beraktivitas di laut melalui emergency alert, location tracking, dan konsep Bluetooth Mesh untuk konektivitas device-to-device.",
      technologies: ["Prototype", "IoT Concept", "Bluetooth Mesh", "Team Lead"],
      links: [
        {
          type: "Website",
          href: "https://simulationnetwork-smartnet-git-main-cloxts-projects.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/cloxt01/fssp",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/smartnet-preview.png",
      video: "",
    },
    {
      slug: "coral-reef-cultivation-system",
      title: "Coral Reef Cultivation System Prototype",
      href: "#projects",
      dates: "Sep 2025 - Okt 2025",
      active: true,
      description:
        "Prototipe web untuk edukasi dan awareness budidaya terumbu karang. Berfokus pada penyajian informasi, dukungan pembelajaran.",
      technologies: ["Web Prototype", "Education", "UI/UX", "Team Collaboration"],
      links: [
        {
          type: "Source",
          href: "https://github.com/cloxt01/slick",
          icon: <Icons.github className="size-3" />,
        }
      ],
      image: "/slick-preview.png",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Troubleshoot & WAN Security Network Assessment Certification",
      dates: "Mar 2024",
      location: "Cyber K & SMKN 1 Rangkasbitung",
      category: "Sertifikat Kompetensi",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCZWew9BSi3w06UgJZUqn28ouTyZbHv4X_-69pNlT03Q&s=10",
      description:
        "Sertifikasi kompetensi Computer & Network Engineer yang berfokus pada troubleshooting, WAN security, dan network assessment.",
      certificateImage: "/cca-certificate.jpg",
      links: [],
    },
    {
      title: "National Essay Competition Finalist",
      dates: "Feb 2026",
      location: "Universitas Udayana",
      category: "Kompetisi",
      image: "https://www.google.com/s2/favicons?domain=unud.ac.id&sz=128",
      description:
        "Finalis pada kategori poster presentation di National Essay Competition PENA 2 2026.",
      links: [],
    },
    {
      title: "Product Innovation Competition",
      dates: "Des 2025",
      location: "Universitas Pendidikan Indonesia",
      category: "Kompetisi",
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
      category: "Kompetisi",
      image: "https://www.google.com/s2/favicons?domain=untirta.ac.id&sz=128",
      description:
        "Meraih Gold Award pada kompetisi Product Innovation tingkat universitas di Agromaritim Fest 2025.",
      certificateImage: "/argomaritim2025-certificate.png",
      links: [],
    },
  ],
} as const;