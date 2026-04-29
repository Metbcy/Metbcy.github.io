"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "./icons";
import SectionHeading from "./section-heading";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-50 dark:focus-visible:ring-offset-neutral-950";

type Project = {
  title: string;
  description: string;
  tags: string[];
  github: string;
};

const featured: Project[] = [
  {
    title: "QuantSense",
    description:
      "AI-powered quantitative trading platform — backtest strategies, analyze market sentiment with a VADER + LLM pipeline, and paper trade from a single dashboard.",
    tags: ["AI", "Next.js", "FastAPI"],
    github: "https://github.com/Metbcy/quantsense",
  },
  {
    title: "bomdrift",
    description:
      "Diff-time SBOM analysis for pull requests — flags new CVEs, typosquats, multi-major version jumps, and young-maintainer signals on dependency changes. Ships as a GitHub Action.",
    tags: ["Rust", "Security", "Supply Chain"],
    github: "https://github.com/Metbcy/bomdrift",
  },
  {
    title: "SecureScan",
    description:
      "AI-powered security scanning dashboard orchestrating 14 scanners across code, dependency, IaC, DAST, and network categories — unified findings with LLM-enriched remediation.",
    tags: ["AI", "Security", "Python"],
    github: "https://github.com/Metbcy/securescan",
  },
];

const earlier: Project[] = [
  {
    title: "LSPGit",
    description:
      "A Language Server Protocol implementation for Git that brings IDE-like intelligence — diagnostics, completions, and hover info — to Git workflows.",
    tags: ["Git", "LSP", "Developer Tools"],
    github: "https://github.com/Metbcy/LSPGit",
  },
  {
    title: "DevYourOwnBenchmark",
    description:
      "A framework for designing and running custom performance benchmarks, enabling repeatable comparisons across implementations and hardware.",
    tags: ["Performance", "Testing", "Benchmarking"],
    github: "https://github.com/Metbcy/DevYourOwnBenchmark",
  },
  {
    title: "FiboMips",
    description:
      "Fibonacci sequence computation in MIPS assembly — a deep dive into low-level programming, register management, and recursive function calls.",
    tags: ["Assembly", "MIPS", "Computer Architecture"],
    github: "https://github.com/Metbcy/FiboMips",
  },
];

export default function Projects() {
  const reducedMotion = useReducedMotion();

  return (
    <section id="projects" className="py-24 bg-white dark:bg-[#0d0d0d]">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading title="Projects" />

        <div className="grid md:grid-cols-3 gap-6">
          {featured.map((project, i) => (
            <motion.div
              key={project.title}
              initial={reducedMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`group block p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-[#141414] hover:border-neutral-400 dark:hover:border-neutral-600 hover:scale-[1.02] transition-[border-color,transform] duration-200 h-full ${focusRing}`}
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-neutral-900 dark:text-[#ededed] group-hover:text-blue-500 transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    size={16}
                    className="text-neutral-400 group-hover:text-blue-500 transition-colors"
                  />
                </div>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={reducedMotion ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: featured.length * 0.1 }}
          className="mt-12 mb-4 text-xs uppercase tracking-wider font-mono text-neutral-500 dark:text-neutral-400"
        >
          Earlier work
        </motion.p>

        <div className="grid md:grid-cols-3 gap-3">
          {earlier.map((project, i) => (
            <motion.div
              key={project.title}
              initial={reducedMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: (featured.length + i) * 0.1,
              }}
            >
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`group block p-4 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50/60 dark:bg-[#141414]/60 hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors duration-200 h-full ${focusRing}`}
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-sm font-semibold text-neutral-700 dark:text-neutral-300 group-hover:text-blue-500 transition-colors">
                    {project.title}
                  </h4>
                  <ArrowUpRight
                    size={14}
                    className="text-neutral-400 group-hover:text-blue-500 transition-colors"
                  />
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] px-1.5 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800/70 text-neutral-500 dark:text-neutral-400 font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={reducedMotion ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: (featured.length + earlier.length) * 0.1,
          }}
          className="mt-8 text-center"
        >
          <a
            href="https://github.com/Metbcy"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400 hover:text-blue-500 transition-colors ${focusRing}`}
          >
            <GithubIcon size={16} />
            View all projects
          </a>
        </motion.div>
      </div>
    </section>
  );
}
