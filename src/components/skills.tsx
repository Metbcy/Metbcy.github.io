"use client";

import { motion } from "framer-motion";
import SectionHeading from "./section-heading";

const skillCategories = [
  {
    label: "Languages",
    skills: ["Python", "C++", "JavaScript", "TypeScript", "PowerShell", "Swift", "Java", "SQL", "HTML"],
  },
  {
    label: "Program Management",
    skills: ["Cross-functional Leadership", "Stakeholder Management", "Release Management", "Agile/Scrum", "Executive Communication"],
  },
  {
    label: "AI/ML",
    skills: ["Generative AI", "NLP", "Speech-to-Text", "AI-Powered Automation"],
  },
  {
    label: "Cloud & Infrastructure",
    skills: ["Azure (AZ-900)", "AWS", "Google Cloud Platform"],
  },
  {
    label: "Security",
    skills: ["PKI", "Vulnerability Management", "Security Baselines", "Edge Security"],
  },
  {
    label: "Tools",
    skills: ["Azure DevOps", "Git", "GitHub", "GitHub Actions"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-neutral-50 dark:bg-neutral-950">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading title="Skills" />
        <div className="space-y-8">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <h3 className="text-sm font-mono text-blue-500 mb-3">
                {category.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm rounded-full border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 bg-white dark:bg-[#141414] hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
