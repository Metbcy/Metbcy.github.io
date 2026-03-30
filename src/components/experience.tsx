"use client";

import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const experiences = [
  {
    role: "Technical Program Manager II",
    company: "Microsoft",
    team: "Edge Security / Specialized Clouds",
    period: "July 2024 – Present",
    promotion: "Promoted from TPM → TPM II (March 2026)",
    bullets: [
      "Own end-to-end delivery of edge security features across Windows and Linux fleets, driving 2M+ device adoption",
      "Led cross-org delivery of Gen2 VM trusted launch (vTPM, Secure Boot) into regulated and air-gapped cloud environments",
      "Built release-gate validation program resolving ~3 critical issues per feature pre-launch",
      "Drove GenAI-powered process automation, doubling documentation throughput and saving 10+ hrs/week",
    ],
  },
  {
    role: "Product Management Intern",
    company: "Microsoft",
    team: "Azure Enterprise & OS Security",
    period: "May 2023 – August 2023",
    bullets: [
      "Led discovery, requirements, and POC delivery for a GenAI-assisted custom security baselines tool",
      "Translated market and competitive insights into roadmap opportunities for the OS security platform",
    ],
  },
  {
    role: "Product Management Intern",
    company: "Oaktree Capital Management",
    team: "Portfolio Operations",
    period: "June 2022 – August 2022",
    bullets: [
      "Supported portfolio operations across 20+ investment strategies",
      "Led deployment of an AWS speech-to-text and voice sentiment analysis system",
    ],
  },
  {
    role: "Technology Intern",
    company: "The Office of Barack and Michelle Obama",
    team: "Technology",
    period: "October 2021 – December 2021",
    bullets: [
      "Implemented cloud speech-to-text transcription into correspondence workflows",
      "Delivered 10 hrs/week in time savings across 3 teams",
    ],
  },
];

export default function Experience() {
  const reducedMotion = useReducedMotion();

  return (
    <section id="experience" className="py-24 bg-white dark:bg-[#0d0d0d]">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading title="Experience" />
        <div className="relative border-l-2 border-neutral-200 dark:border-neutral-800 ml-4">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={reducedMotion ? false : { opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative pl-8 pb-12 last:pb-0"
            >
              <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full border-2 border-blue-500 bg-neutral-50 dark:bg-neutral-950" />

              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-2">
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-[#ededed]">
                  {exp.role}
                </h3>
                <span className="hidden sm:block text-neutral-400">·</span>
                <span className="text-blue-500 font-mono text-sm">
                  {exp.company}, {exp.team}
                </span>
              </div>

              <p className="text-sm text-neutral-500 font-mono mb-3">
                {exp.period}
              </p>

              {"promotion" in exp && exp.promotion && (
                <p className="text-xs font-mono text-emerald-500 mb-3 flex items-center gap-1.5">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  {exp.promotion}
                </p>
              )}

              <ul className="space-y-2">
                {exp.bullets.map((bullet, j) => (
                  <li
                    key={j}
                    className="text-neutral-600 dark:text-neutral-400 flex items-start gap-2"
                  >
                    <span className="mt-2 w-1 h-1 rounded-full bg-neutral-400 dark:bg-neutral-600 shrink-0" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
