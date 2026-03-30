import type { Metadata } from "next";
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
  metadataBase: new URL("https://Metbcy.github.io"),
  title: "Amir Bredy — Technical Program Manager at Microsoft",
  description:
    "Portfolio of Amir Bredy, Technical Program Manager II at Microsoft. Edge Security, Cloud Infrastructure, and AI.",
  openGraph: {
    title: "Amir Bredy — Technical Program Manager at Microsoft",
    description:
      "Portfolio of Amir Bredy, Technical Program Manager II at Microsoft. Edge Security, Cloud Infrastructure, and AI.",
    type: "website",
    url: "https://Metbcy.github.io",
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
      </head>
      <body className="min-h-screen bg-neutral-50 text-neutral-900 dark:bg-neutral-950 dark:text-[#ededed] font-sans antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-blue-500 focus:text-white focus:outline-none"
        >
          Skip to content
        </a>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
