import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import {
  getAllNoteSlugs,
  getNoteBySlug,
  formatNoteDate,
  type Note,
} from "@/lib/notes";

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-50 dark:focus-visible:ring-offset-neutral-950";

type Params = { slug: string };

export async function generateStaticParams(): Promise<Params[]> {
  return getAllNoteSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  try {
    const note = await getNoteBySlug(slug);
    return {
      title: `${note.title} — Notes — Amir Bredy`,
      description: note.excerpt,
      alternates: { canonical: `/notes/${note.slug}/` },
      openGraph: {
        title: note.title,
        description: note.excerpt,
        type: "article",
        url: `https://metbcy.github.io/notes/${note.slug}/`,
        publishedTime: note.date,
        tags: note.tags,
      },
    };
  } catch {
    return { title: "Note not found — Amir Bredy" };
  }
}

export default async function NotePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  let note: Note;
  try {
    note = await getNoteBySlug(slug);
  } catch {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main id="main-content" className="pt-32 pb-24 min-h-screen">
        <article className="max-w-2xl mx-auto px-6">
          <Link
            href="/notes"
            className={`inline-flex items-center gap-1.5 text-sm text-neutral-500 dark:text-neutral-400 hover:text-blue-500 transition-colors mb-8 ${focusRing}`}
          >
            <ArrowLeft size={14} />
            All notes
          </Link>

          <header className="mb-10">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 dark:text-[#ededed] text-balance">
              {note.title}
            </h1>
            <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-xs text-neutral-500 dark:text-neutral-400">
              <time dateTime={note.date}>{formatNoteDate(note.date)}</time>
              {note.tags.length > 0 && (
                <>
                  <span aria-hidden="true">·</span>
                  <div className="flex flex-wrap gap-1.5">
                    {note.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-1.5 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </>
              )}
            </div>
          </header>

          <div
            className="note-prose text-neutral-800 dark:text-neutral-200 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: note.contentHtml }}
          />

          <footer className="mt-16 pt-8 border-t border-neutral-200 dark:border-neutral-800">
            <Link
              href="/notes"
              className={`inline-flex items-center gap-1.5 text-sm text-neutral-500 dark:text-neutral-400 hover:text-blue-500 transition-colors ${focusRing}`}
            >
              <ArrowLeft size={14} />
              Back to all notes
            </Link>
          </footer>
        </article>
      </main>
      <Footer />
    </>
  );
}
