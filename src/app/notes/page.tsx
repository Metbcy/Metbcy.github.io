import type { Metadata } from "next";
import Link from "next/link";
import Masthead from "@/components/masthead";
import Footer from "@/components/footer";
import { profile } from "@/content/site";
import { getAllNotes, formatNoteDate } from "@/lib/notes";

const description =
  "Short notes from Amir Bredy on attestation, confidential computing, and securing systems that ship.";

export const metadata: Metadata = {
  title: `Writing · ${profile.name}`,
  description,
  alternates: { canonical: "/notes/" },
  openGraph: {
    title: `Writing · ${profile.name}`,
    description,
    type: "website",
    url: `${profile.site}/notes/`,
  },
};

export default function NotesIndexPage() {
  const notes = getAllNotes();

  return (
    <>
      <Masthead />
      <main id="main-content">
        <div className="wrap">
          <header className="note-header">
            <div className="label" style={{ marginBottom: "1rem" }}>Notes</div>
            <h1>Writing</h1>
            <p className="excerpt">{description.replace("Short notes from Amir Bredy on", "Short notes on")}</p>
          </header>
          <div className="rows" style={{ marginBottom: "4rem" }}>
            {notes.map((note) => (
              <Link key={note.slug} href={`/notes/${note.slug}/`} className="row">
                <time dateTime={note.date} className="row-meta">
                  {formatNoteDate(note.date)}
                </time>
                <div>
                  <div className="row-title">
                    {note.title}
                    <span className="arrow" aria-hidden="true">↗</span>
                  </div>
                  <p className="row-body">{note.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
