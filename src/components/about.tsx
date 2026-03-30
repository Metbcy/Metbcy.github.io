"use client";

import { motion } from "framer-motion";
import SectionHeading from "./section-heading";

export default function About() {
  return (
    <section id="about" className="py-24 bg-neutral-50 dark:bg-neutral-950">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading title="About" />
        <div className="grid md:grid-cols-3 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-2"
          >
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-lg">
              I&apos;m a Technical Program Manager II at Microsoft, driving
              end-to-end delivery of edge security features across cloud and
              hybrid environments, from trusted launch and confidential
              computing to AI-powered automation. I hold a B.S. in Computer
              Science from Howard University and have built my career at the
              intersection of security, cloud infrastructure, and AI, with
              experience spanning Microsoft, Oaktree Capital Management, and
              The Office of Barack and Michelle Obama. I&apos;m passionate about
              securing systems at scale and using GenAI to ship faster and
              smarter.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex justify-center"
          >
            <img
              src="/photo.jpg"
              alt="Amir Bredy"
              className="w-40 h-40 rounded-full object-cover border-2 border-neutral-200 dark:border-neutral-700"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
