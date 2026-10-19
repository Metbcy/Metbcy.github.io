"use client";

import { useEffect, useState } from "react";

const SECTIONS = [
  { id: "work", label: "Work" },
  { id: "writing", label: "Writing" },
  { id: "open-source", label: "Open source" },
  { id: "background", label: "Background" },
  { id: "contact", label: "Contact" },
];

// Sidebar nav that marks the section currently on screen.
export default function SectionNav() {
  const [active, setActive] = useState("work");

  useEffect(() => {
    const els = SECTIONS.map((s) => document.getElementById(s.id)).filter(
      (el): el is HTMLElement => el !== null,
    );
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-20% 0px -65% 0px" },
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="side-nav" aria-label="Sections">
      <ul>
        {SECTIONS.map((s) => (
          <li key={s.id}>
            <a
              href={`#${s.id}`}
              aria-current={active === s.id ? "true" : undefined}
              className={active === s.id ? "is-active" : undefined}
            >
              <span className="side-nav-line" aria-hidden="true" />
              {s.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
