import { DATA } from "./resume";

const EN_PROJECT_OVERRIDES: Record<string, { description: string; dates?: string }> = {
  "ans-radius": {
    description:
      "Production RADIUS + billing system that replaced a paid vendor for ISP/RTRWNet operations: centralized FreeRADIUS authentication, management of 2,000+ subscribers, automated invoicing, and MikroTik integration. Saves ±IDR 12M/year in vendor license fees.",
    dates: "Jan 2026 - Present",
  },
  "ans-ansible": {
    description:
      "Provisioning automation and configuration management for ISP infrastructure: playbooks for config backups, service deployment, Linux server hardening, and repetitive provisioning that used to be done by hand.",
  },
  "ans-infrastructure": {
    description:
      "Sanitized public version of the ISP network architecture documentation: generic topology, dummy IPs, and service configuration standards. Demonstrates network design and operational documentation skills without exposing production details.",
  },
  compass: {
    description:
      "Proof of automation & backend skills: a Laravel application with automated multi-platform workflows, authentication, scheduled jobs & queues, and payment integration — built for personal job-application tracking.",
    dates: "Oct 2025 - Present",
  },
  "fisherman-safety-system": {
    description:
      "Digital prototype for fishermen safety: emergency alerts, location tracking, and a Bluetooth Mesh concept for device-to-device connectivity. Served as team lead.",
    dates: "Nov 2025 - Dec 2025",
  },
  "coral-reef-cultivation-system": {
    description:
      "Web prototype for coral reef cultivation education and awareness, presented at a campus-level competition.",
    dates: "Sep 2025 - Oct 2025",
  },
};

const EN_HACKATHON_DESCRIPTIONS: string[] = [
  "Computer & Network Engineer competency certification focused on troubleshooting, WAN security, and network assessment.",
  "Finalist in the poster presentation category at the PENA 2 2026 National Essay Competition.",
  "Top 3 in the department-level Product Innovation competition at ASIK Vol. V 2026.",
  "Received an award at the university-level Product Innovation competition, Agromaritim Fest 2025.",
];

export const DATA_EN = {
  ...DATA,
  description:
    "Infrastructure Engineer — ISP Network Operations, Linux, & Automation",
  summary:
    "Infrastructure Engineer running ISP infrastructure for 2,000+ active subscribers: MikroTik RouterOS, Linux servers on Proxmox VE, FreeRADIUS, and Prometheus + Grafana monitoring. I built an in-house RADIUS + billing system that replaced a vendor license (saving ±IDR 12M/year) and automate repetitive operational work with Ansible. My focus: service reliability, automation, and well-documented network operations.",
  cvUrl: "/cv-muhamad-ferdiansyah-en.pdf",
  sections: {
    about: { order: 1, enabled: true, heading: "About Me" },
    work: { order: 2, enabled: true, heading: "Work Experience", presentLabel: "Present" },
    education: { order: 3, enabled: true, heading: "Education" },
    skills: { order: 4, enabled: true, heading: "Skills" },
    projects: {
      order: 5,
      enabled: true,
      label: "Projects",
      heading: "Projects I've built",
      academicHeading: "Academic Projects",
      text:
        "Infrastructure and automation projects I build and operate in production, ordered by relevance.",
    },
    hackathons: {
      order: 6,
      enabled: true,
      label: "Certificates & Achievements",
      heading: "Certificates and achievements",
      text:
        "Competency certificates and achievements supporting my journey in infrastructure and technology.",
    },
    photos: { order: 7, enabled: false, heading: "Gallery" },
    contact: {
      order: 8,
      enabled: true,
      label: "Contact",
      heading: "Get in Touch",
      text:
        "Want to talk ISP infrastructure, Linux servers, RADIUS, monitoring, or automation? Reach me through any channel below.",
    },
  },
  contact: {
    ...DATA.contact,
    social: {
      ...DATA.contact.social,
      Lokasi: { ...DATA.contact.social.Lokasi, name: "Location" },
    },
  },
  work: [
    {
      ...DATA.work[0],
      description: [
        "Manage ISP infrastructure for 2,000+ active subscribers: 3 MikroTik routers (routing, firewall, NAT, PPPoE, bandwidth management) and 5 Linux servers on Proxmox VE.",
        "Built and operate an in-house RADIUS + billing system (FreeRADIUS, Laravel, MySQL) replacing a vendor license — saving ±IDR 12M/year.",
        "Automated subscriber provisioning, config backups, and service deployments with Ansible, cutting the ops team's repetitive manual work.",
        "Built a Prometheus + Grafana monitoring stack for network and server health visibility and faster incident response.",
        "Operate core production services: Nginx reverse proxy, MySQL, DNS/DHCP, and Docker containers for internal applications.",
      ],
    },
    {
      ...DATA.work[1],
      badges: ["Production Operator"],
      title: "Production Operator",
      location: "Tangerang, Banten",
      description:
        "Ran production processes according to company SOPs with a focus on quality, productivity, and workplace safety.",
    },
    {
      ...DATA.work[2],
      badges: ["Internship"],
      title: "IT Support — Internship",
      end: "Dec 2023",
      description:
        "Vocational school internship (PKL): OS and application installation and configuration, end-user device troubleshooting, and operational document management.",
    },
  ],
  education: [
    { ...DATA.education[0], end: "Dec 2025" },
    { ...DATA.education[1], degree: "Computer and Network Engineering" },
  ],
  projects: DATA.projects.map((p) => ({
    ...p,
    description: EN_PROJECT_OVERRIDES[p.slug]?.description ?? p.description,
    dates: EN_PROJECT_OVERRIDES[p.slug]?.dates ?? p.dates,
  })),
  hackathons: DATA.hackathons.map((h, i) => ({
    ...h,
    description: EN_HACKATHON_DESCRIPTIONS[i] ?? h.description,
  })),
} as unknown as typeof DATA;
