"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import SectionHeading from "./section-heading";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-50 dark:focus-visible:ring-offset-neutral-950";

export default function Contact() {
  const reducedMotion = useReducedMotion();
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus("loading");

    try {
      const res = await fetch("https://formspree.io/f/mrgvangk", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 bg-neutral-50 dark:bg-neutral-950">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading title="Get in Touch" />
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-xl"
        >
          <p className="text-neutral-600 dark:text-neutral-400 mb-8">
            Have a project in mind or just want to chat? Feel free to reach out.
          </p>

          <div aria-live="polite">
            {status === "success" && (
              <div className="flex items-center gap-3 p-4 rounded-lg border border-green-500/20 bg-green-500/10 text-green-600 dark:text-green-400">
                <CheckCircle size={20} />
                <span>Message sent! I&apos;ll get back to you soon.</span>
              </div>
            )}

            {status === "error" && (
              <div className="flex items-center gap-3 p-4 rounded-lg border border-red-500/20 bg-red-500/10 text-red-600 dark:text-red-400">
                <AlertCircle size={20} />
                <span>Something went wrong. Please try again.</span>
              </div>
            )}
          </div>

          {status !== "success" && (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="contact-name" className="sr-only">
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  placeholder="Name…"
                  required
                  autoComplete="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className={`w-full px-4 py-3 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#141414] text-neutral-900 dark:text-[#ededed] placeholder:text-neutral-400 dark:placeholder:text-neutral-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40 focus-visible:border-blue-500 transition-[border-color,box-shadow]`}
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="sr-only">
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  placeholder="Email…"
                  required
                  autoComplete="email"
                  spellCheck={false}
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className={`w-full px-4 py-3 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#141414] text-neutral-900 dark:text-[#ededed] placeholder:text-neutral-400 dark:placeholder:text-neutral-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40 focus-visible:border-blue-500 transition-[border-color,box-shadow]`}
                />
              </div>
              <div>
                <label htmlFor="contact-message" className="sr-only">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  placeholder="Message…"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className={`w-full px-4 py-3 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#141414] text-neutral-900 dark:text-[#ededed] placeholder:text-neutral-400 dark:placeholder:text-neutral-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40 focus-visible:border-blue-500 transition-[border-color,box-shadow] resize-none`}
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-500 text-white font-medium hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-[background-color,opacity] ${focusRing}`}
              >
                {status === "loading" ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
