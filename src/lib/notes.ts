import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkRehype from "remark-rehype";
import rehypeHighlight from "rehype-highlight";
import rehypeStringify from "rehype-stringify";

const NOTES_DIR = path.join(process.cwd(), "src", "content", "notes");

export type NoteMeta = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
};

export type Note = NoteMeta & {
  contentHtml: string;
};

function readNoteFile(slug: string): matter.GrayMatterFile<string> {
  const filePath = path.join(NOTES_DIR, `${slug}.md`);
  const raw = fs.readFileSync(filePath, "utf8");
  return matter(raw);
}

type RawFrontmatter = {
  title?: unknown;
  date?: unknown;
  excerpt?: unknown;
  tags?: unknown;
};

function toMeta(slug: string, fm: matter.GrayMatterFile<string>): NoteMeta {
  const data = fm.data as RawFrontmatter;
  if (
    typeof data.title !== "string" ||
    typeof data.excerpt !== "string" ||
    data.date == null
  ) {
    throw new Error(
      `Note "${slug}" is missing required frontmatter (title, date, excerpt)`,
    );
  }
  const date =
    data.date instanceof Date
      ? data.date.toISOString()
      : String(data.date);
  return {
    slug,
    title: data.title,
    date,
    excerpt: data.excerpt,
    tags: Array.isArray(data.tags)
      ? data.tags.filter((t): t is string => typeof t === "string")
      : [],
  };
}

export function getAllNotes(): NoteMeta[] {
  if (!fs.existsSync(NOTES_DIR)) return [];
  const files = fs
    .readdirSync(NOTES_DIR)
    .filter((f) => f.endsWith(".md"));
  const notes = files.map((file) => {
    const slug = file.replace(/\.md$/, "");
    return toMeta(slug, readNoteFile(slug));
  });
  return notes.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getAllNoteSlugs(): string[] {
  return getAllNotes().map((n) => n.slug);
}

export async function getNoteBySlug(slug: string): Promise<Note> {
  const fm = readNoteFile(slug);
  const meta = toMeta(slug, fm);
  const file = await remark()
    .use(remarkRehype)
    .use(rehypeHighlight)
    .use(rehypeStringify)
    .process(fm.content);
  return { ...meta, contentHtml: String(file) };
}

export function formatNoteDate(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  });
}
