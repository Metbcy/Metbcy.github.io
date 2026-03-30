"use client";

import { motion } from "framer-motion";
import { ChevronDown, FileText } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-neutral-50 dark:bg-neutral-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(59,130,246,0.08)_0%,_transparent_70%)]" />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-bold tracking-tight text-neutral-900 dark:text-[#ededed]"
        >
          Amir Bredy
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="mt-4 text-lg md:text-xl font-mono text-blue-500"
        >
          Technical Program Manager II @ Microsoft
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="mt-6 text-neutral-600 dark:text-neutral-400 max-w-xl mx-auto text-lg"
        >
          Securing edge infrastructure at scale. Building AI-powered tools.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45, ease: "easeOut" }}
          className="mt-8 flex items-center justify-center gap-4"
        >
          <a
            href="https://github.com/Metbcy"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-[#ededed] hover:border-neutral-400 dark:hover:border-neutral-600 transition-all"
            aria-label="GitHub"
          >
            <GithubIcon size={20} />
          </a>
          <a
            href="https://linkedin.com/in/amirbredy"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-[#ededed] hover:border-neutral-400 dark:hover:border-neutral-600 transition-all"
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={20} />
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-[#ededed] hover:border-neutral-400 dark:hover:border-neutral-600 transition-all text-sm font-mono"
            aria-label="Resume"
          >
            <FileText size={16} />
            Resume
          </a>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      >
        <ChevronDown size={24} className="text-neutral-400" />
      </motion.div>
    </section>
  );
}
