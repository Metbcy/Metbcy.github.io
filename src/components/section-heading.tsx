"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
}

export default function SectionHeading({ title }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-12"
    >
      <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-[#ededed]">
        {title}
      </h2>
      <div className="mt-2 h-1 w-12 rounded-full bg-blue-500" />
    </motion.div>
  );
}
