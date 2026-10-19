// Everything the home page says lives here, so updating the site is a text edit.
// Keep this in step with the current resume.

export const profile = {
  name: "Amir Bredy",
  role: "Technical Program Manager II",
  team: "Microsoft Edge Security / Specialized Clouds",
  location: "Washington, DC",
  email: "amir@bredy.dev",
  linkedin: "https://linkedin.com/in/amirbredy",
  github: "https://github.com/Metbcy",
  resume: "/resume.pdf",
  site: "https://bredy.dev",
  tagline: "I make security ship.",
  lede:
    "I turn security requirements into rollouts that hold up in production. At Microsoft I own the security configuration and compliance platform for 4M+ Windows and Linux machines, and the final quality gate that security features clear before they ship on Azure Local.",
  description:
    "Amir Bredy is a technical program manager in Microsoft Edge Security, working on security configuration and compliance, release quality, and confidential computing.",
};

export type WorkItem = {
  title: string;
  figure: { value: string; label: string };
  context: string;
  did: string;
  outcome: string;
  link?: { href: string; label: string };
};

// Four short case studies. Each line has to survive a follow-up question in an interview.
export const work: WorkItem[] = [
  {
    title: "Security configuration and compliance at fleet scale",
    figure: { value: "4M+", label: "machines, month over month" },
    context:
      "A security baseline only matters if it holds on every machine, in cloud and hybrid environments alike.",
    did: "Own the security configuration and compliance platform for Windows and Linux machines, end to end, from requirements through phased rollout.",
    outcome: "4M+ machines managed month over month.",
  },
  {
    title: "A release gate teams plan against",
    figure: { value: "~3", label: "critical issues caught per feature" },
    context:
      "Security defects found after release are the expensive kind, and Azure Local, Microsoft's on-premises cloud platform, ships security features across many teams.",
    did: "Own the final quality and bug bash gate that Azure Local security features clear before release. Defined the entry criteria, owners and triage cadence that teams now plan against.",
    outcome: "About 3 critical issues caught per feature before launch, cutting defect escapes.",
  },
  {
    title: "ConfigForge",
    figure: { value: "20%", label: "smaller incident ticket queue" },
    context:
      "Customers hit a feature gap in authoring security baselines, and it was feeding the team's incident ticket queue.",
    did: "Built, shipped and maintain a cross-platform desktop app for authoring security baselines on Windows and Linux, open-sourced under the Azure org. Marquee customers in oil and gas, shipping and consulting get it packaged directly from me.",
    outcome: "Closed the gap and cut the team's incident ticket queue by 20%.",
    link: { href: "https://github.com/Azure/ConfigForge", label: "github.com/Azure/ConfigForge" },
  },
  {
    title: "Trusted launch for air-gapped clouds",
    figure: { value: "Gen2", label: "VMs with vTPM and Secure Boot" },
    context:
      "Regulated and air-gapped cloud environments need every dependency mapped and ready before a platform feature can land.",
    did: "Owned cross-org delivery of Gen2 VM trusted launch into those environments, coordinating engineering, security and compliance, and operations from requirements and dependency mapping through integration readiness.",
    outcome: "Shipped, including SQL Server support on it.",
  },
];

// Current scope that doesn't need a full case study.
export const alsoNow: string[] = [
  "Own data suite security for Azure Local, setting platform security requirements for confidential data.",
  "Co-lead definition of the edge AI agent security strategy, owning the tool call permission model, network egress control, and the identity an agent carries on Entra ID.",
  "Led 8+ Executive Briefing Center sessions, making the security case to CEOs, COOs and CISOs at marquee enterprise customers.",
];

export type Repo = { name: string; href: string; category: string; lang: string; body: string };

export const openSource: Repo[] = [
  {
    name: "ConfigForge",
    href: "https://github.com/Azure/ConfigForge",
    category: "Security baselines",
    lang: "TypeScript · Electron",
    body: "Author, compare, audit and apply security baselines on test devices. Built at Microsoft, open-sourced under the Azure org.",
  },
  {
    name: "bomdrift",
    href: "https://github.com/Metbcy/bomdrift",
    category: "Supply chain security",
    lang: "Rust · GitHub Action",
    body: "Diffs the SBOM on every pull request and flags new CVEs, typosquats, multi-major version jumps and young maintainers.",
  },
  {
    name: "SecureScan",
    href: "https://github.com/Metbcy/securescan",
    category: "Security tooling",
    lang: "Python",
    body: "Security scanning without the SaaS tax. Orchestrates code, dependency, IaC and DAST scanners with baseline diffing.",
  },
];

// Small proof points under the intro.
export const credentials = [
  { label: "Maintainer, Azure/ConfigForge", href: "https://github.com/Azure/ConfigForge" },
  { label: "Howard University, B.S. CS" },
];

export type Role = { years: string; org: string; title: string; note?: string };

export const background: Role[] = [
  {
    years: "2024 to now",
    org: "Microsoft",
    title: "Technical Program Manager II, Edge Security / Specialized Clouds",
    note: "Promoted from TPM I, March 2026",
  },
  {
    years: "2023",
    org: "Microsoft",
    title: "Product Management Intern, Azure Enterprise and OS Security",
  },
  {
    years: "2022",
    org: "Oaktree Capital Management",
    title: "Product Management Intern",
  },
  {
    years: "2021",
    org: "The Office of Barack and Michelle Obama",
    title: "Technology Intern",
  },
  {
    years: "Education",
    org: "Howard University",
    title: "B.S. Computer Science, 2024",
  },
];

export const focus = [
  "Confidential computing (AMD SEV-SNP, Intel TDX)",
  "Attestation and hardware root of trust",
  "Secure Boot and trusted launch",
  "Security baselines and compliance",
  "Release and readiness gates",
  "Zero Trust",
];
