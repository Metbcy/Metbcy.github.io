import Link from "next/link";
import Masthead from "@/components/masthead";
import Footer from "@/components/footer";
import SectionNav from "@/components/section-nav";
import ThemeToggle from "@/components/theme-toggle";
import CopyEmail from "@/components/copy-email";
import { profile, work, alsoNow, openSource, background, focus, credentials } from "@/content/site";
import { getAllNotes, formatNoteDate } from "@/lib/notes";

function GitHubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.33-1.29-1.69-1.29-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-10 6L2 7" />
    </svg>
  );
}

function SectionHead({ title, label }: { title: string; label: string }) {
  return (
    <div className="section-head">
      <h2>{title}</h2>
      <span className="label" aria-hidden="true">{label}</span>
    </div>
  );
}

export default function Home() {
  const notes = getAllNotes();

  return (
    <>
      <Masthead home />
      <div className="shell">
        <aside className="sidebar">
          <div className="sidebar-top">
            <div className="hero-meta">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/photo.jpg" alt="" width={56} height={56} className="portrait" />
              <span className="label status">{profile.location}</span>
            </div>
            <h1 className="name">{profile.name}</h1>
            <p className="role">
              {profile.role}
              <br />
              {profile.team}
            </p>
            <p className="tagline">{profile.tagline}</p>
            <p className="lede">{profile.lede}</p>
            <ul className="credentials">
              {credentials.map((c) => (
                <li key={c.label}>
                  {c.href ? (
                    <a href={c.href} className="credential">
                      {c.label} <span aria-hidden="true">↗</span>
                    </a>
                  ) : (
                    <span className="credential">{c.label}</span>
                  )}
                </li>
              ))}
            </ul>
            <div className="actions">
              <a href={profile.resume} className="btn btn-primary">
                Resume <span aria-hidden="true">↓</span>
              </a>
              <a href={`mailto:${profile.email}`} className="btn">
                Email me
              </a>
            </div>
            <SectionNav />
          </div>
          <div className="sidebar-bottom">
            <a href={profile.github} className="icon-link" aria-label="GitHub" rel="me">
              <GitHubIcon />
            </a>
            <a href={profile.linkedin} className="icon-link" aria-label="LinkedIn" rel="me">
              <LinkedInIcon />
            </a>
            <a href={`mailto:${profile.email}`} className="icon-link" aria-label="Email">
              <MailIcon />
            </a>
            <span className="sidebar-toggle">
              <ThemeToggle />
            </span>
          </div>
        </aside>

        <main id="main-content" className="content">
          <section id="work" className="section" aria-label="Selected work">
            <SectionHead title="Selected work" label="Microsoft" />
            <div className="cards">
              {work.map((item) => (
                <article key={item.title} className="card case">
                  <div className="card-aside">
                    <div className="figure-value">{item.figure.value}</div>
                    <div className="figure-label">{item.figure.label}</div>
                  </div>
                  <div>
                    <h3 className="card-title">
                      {item.link ? (
                        <a href={item.link.href} className="card-title-link">
                          {item.title}
                          <span className="arrow" aria-hidden="true">↗</span>
                        </a>
                      ) : (
                        item.title
                      )}
                    </h3>
                    <dl className="case-steps">
                      <div>
                        <dt>Context</dt>
                        <dd>{item.context}</dd>
                      </div>
                      <div>
                        <dt>What I did</dt>
                        <dd>{item.did}</dd>
                      </div>
                      <div>
                        <dt>Outcome</dt>
                        <dd className="case-outcome">{item.outcome}</dd>
                      </div>
                    </dl>
                    {item.link && (
                      <a href={item.link.href} className="card-link">
                        {item.link.label}
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
            <div className="also">
              <h3 className="label">Also on my plate</h3>
              <ul>
                {alsoNow.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </div>
          </section>

          <section id="writing" className="section" aria-label="Writing">
            <SectionHead title="Writing" label="Notes" />
            <p className="section-intro">
              Short notes on attestation, confidential computing, and securing systems that ship.
            </p>
            <div className="cards">
              {notes.map((note) => (
                <Link key={note.slug} href={`/notes/${note.slug}/`} className="card card-linked">
                  <div className="card-aside">
                    <time dateTime={note.date} className="row-meta">
                      {formatNoteDate(note.date)}
                    </time>
                  </div>
                  <div>
                    <h3 className="card-title">
                      {note.title}
                      <span className="arrow" aria-hidden="true">↗</span>
                    </h3>
                    <p className="card-body">{note.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
            <Link href="/notes/" className="more-link">
              All writing →
            </Link>
          </section>

          <section id="open-source" className="section" aria-label="Open source">
            <SectionHead title="Open source" label="GitHub" />
            <div className="repo-grid">
              {openSource.map((repo) => (
                <a key={repo.name} href={repo.href} className="repo">
                  <span className="label">{repo.category}</span>
                  <span className="repo-name">
                    {repo.name} <span className="arrow" aria-hidden="true">↗</span>
                  </span>
                  <span className="repo-body">{repo.body}</span>
                  <span className="repo-lang">{repo.lang}</span>
                </a>
              ))}
            </div>
            <a href={profile.github} className="more-link">
              More on GitHub →
            </a>
          </section>

          <section id="background" className="section" aria-label="Background">
            <SectionHead title="Background" label="Experience" />
            <div className="rows">
              {background.map((role) => (
                <div key={role.org + role.years} className="row">
                  <span className="row-meta">{role.years}</span>
                  <div>
                    <div className="row-title">{role.org}</div>
                    <p className="row-body">{role.title}</p>
                    {role.note && <p className="row-note">{role.note}</p>}
                  </div>
                </div>
              ))}
            </div>
            <div className="focus-list" aria-label="Focus areas">
              {focus.map((f) => (
                <span key={f} className="chip">
                  {f}
                </span>
              ))}
            </div>
            <a href={profile.resume} className="more-link">
              Full resume (PDF) →
            </a>
          </section>

          <section id="contact" className="section" aria-label="Contact">
            <SectionHead title="Contact" label="Say hello" />
            <p className="section-intro" style={{ marginBottom: 0 }}>
              Email is the best way to reach me. I&apos;m also on LinkedIn.
            </p>
            <a href={`mailto:${profile.email}`} className="contact-email">
              {profile.email}
            </a>
            <div className="actions">
              <CopyEmail email={profile.email} />
              <a href={profile.linkedin} className="btn" rel="me">
                LinkedIn
              </a>
            </div>
          </section>
          <Footer />
        </main>
      </div>
    </>
  );
}
