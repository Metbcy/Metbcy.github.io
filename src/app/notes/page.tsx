import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import SectionHeading from "@/components/section-heading";
import { getAllNotes, formatNoteDate } from "@/lib/notes";

export const metadata: Metadata = {
  title: "Notes — Amir Bredy",
  description:
    "Short technical notes from Amir Bredy on what I'm building, reading, and debugging.",
  alternates: { canonical: "/notes/" },
  openGraph: {
    title: "Notes — Amir Bredy",
    description:
      "Short technical notes from Amir Bredy on what I'm building, reading, and debugging.",
    type: "website",
    url: "https://metbcy.github.io/notes/",
  },
};

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-50 dark:focus-visible:ring-offset-neutral-950";

export default function NotesIndexPage() {
  const notes = getAllNotes();

  return (
    <>
      <Navbar />
      <main id="main-content" className="pt-32 pb-24 min-h-screen">
        <div className="max-w-3xl mx-auto px-6">
          <SectionHeading title="Notes" />
          <p className="text-neutral-600 dark:text-neutral-400 -mt-8 mb-12">
            Short technical notes — what I&apos;m learning, building, and breaking.
          </p>

          {notes.length === 0 ? (
            <p className="text-neutral-500 dark:text-neutral-400 font-mono text-sm">
              No notes yet — coming soon.
            </p>
          ) : (
            <ul className="divide-y divide-neutral-200 dark:divide-neutral-800">
              {notes.map((note) => (
                <li key={note.slug}>
                  <Link
                    href={`/notes/${note.slug}`}
                    className={`group flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 py-5 ${focusRing}`}
                  >
                    <time
                      dateTime={note.date}
                      className="text-xs font-mono text-neutral-500 dark:text-neutral-400 sm:w-28 shrink-0"
                    >
                      {formatNoteDate(note.date)}
                    </time>
                    <div className="flex-1">
                      <h3 className="text-base font-semibold text-neutral-900 dark:text-[#ededed] group-hover:text-blue-500 transition-colors flex items-center gap-2">
                        {note.title}
                        <ArrowRight
                          size={14}
                          className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-[opacity,transform] duration-200"
                          aria-hidden="true"
                        />
                      </h3>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
                        {note.excerpt}
                      </p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
