import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://metbcy.github.io"),
  title: "Amir Bredy — Technical Program Manager at Microsoft",
  description:
    "Portfolio of Amir Bredy, Technical Program Manager II at Microsoft. Edge Security, Cloud Infrastructure, and AI.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Amir Bredy — Technical Program Manager at Microsoft",
    description:
      "Portfolio of Amir Bredy, Technical Program Manager II at Microsoft. Edge Security, Cloud Infrastructure, and AI.",
    type: "website",
    url: "https://metbcy.github.io",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amir Bredy — Technical Program Manager at Microsoft",
    description:
      "Portfolio of Amir Bredy, Technical Program Manager II at Microsoft. Edge Security, Cloud Infrastructure, and AI.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Amir Bredy",
  url: "https://metbcy.github.io",
  jobTitle: "Technical Program Manager II",
  worksFor: { "@type": "Organization", name: "Microsoft" },
  alumniOf: { "@type": "CollegeOrUniversity", name: "Howard University" },
  sameAs: [
    "https://github.com/Metbcy",
    "https://linkedin.com/in/amirbredy",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");if(t==="light"){document.documentElement.classList.remove("dark")}else{document.documentElement.classList.add("dark")}}catch(e){document.documentElement.classList.add("dark")}})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-neutral-50 text-neutral-900 dark:bg-neutral-950 dark:text-[#ededed] font-sans antialiased">
        <a
          href="#main-content"
          className="sr-only focus-visible:not-sr-only focus-visible:absolute focus-visible:top-4 focus-visible:left-4 focus-visible:z-[100] focus-visible:px-4 focus-visible:py-2 focus-visible:rounded-lg focus-visible:bg-blue-500 focus-visible:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-50 dark:focus-visible:ring-offset-neutral-950"
        >
          Skip to content
        </a>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
