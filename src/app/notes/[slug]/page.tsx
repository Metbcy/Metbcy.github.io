import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Masthead from "@/components/masthead";
import Footer from "@/components/footer";
import { profile } from "@/content/site";
import {
  getAllNoteSlugs,
  getNoteBySlug,
  formatNoteDate,
  type Note,
} from "@/lib/notes";

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
      title: `${note.title} · ${profile.name}`,
      description: note.excerpt,
      alternates: { canonical: `/notes/${note.slug}/` },
      openGraph: {
        title: note.title,
        description: note.excerpt,
        type: "article",
        url: `${profile.site}/notes/${note.slug}/`,
        publishedTime: note.date,
        authors: [profile.name],
        tags: note.tags,
      },
    };
  } catch {
    return { title: `Note not found · ${profile.name}` };
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
      <Masthead />
      <main id="main-content">
        <article className="wrap" style={{ maxWidth: "40rem" }}>
          <header className="note-header">
            <Link href="/notes/" className="back-link">
              ← All writing
            </Link>
            <div className="label" style={{ marginBottom: "1rem" }}>
              <time dateTime={note.date}>{formatNoteDate(note.date)}</time>
              {note.tags.length > 0 && <> · {note.tags.join(" · ")}</>}
            </div>
            <h1>{note.title}</h1>
            <p className="excerpt">{note.excerpt}</p>
          </header>
          <div
            className="note-prose"
            dangerouslySetInnerHTML={{ __html: note.contentHtml }}
          />
        </article>
      </main>
      <Footer />
    </>
  );
}
