"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { profile } from "@/content/site";
import ThemeToggle from "@/components/theme-toggle";

// Top bar for the notes pages, and for the home page on small screens (the sidebar takes over on wide ones).
export default function Masthead({ home = false }: { home?: boolean }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={home ? "masthead masthead-home" : "masthead"} data-scrolled={scrolled}>
      <div className="wrap masthead-inner">
        <Link href="/" className="wordmark">
          {profile.name}
        </Link>
        <nav className="nav" aria-label="Main">
          <Link href="/#work" className="nav-optional">Work</Link>
          <Link href="/notes/">Writing</Link>
          <Link href="/#contact">Contact</Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
