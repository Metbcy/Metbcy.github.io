import Link from "next/link";
import Masthead from "@/components/masthead";
import Footer from "@/components/footer";

export default function NotFound() {
  return (
    <>
      <Masthead />
      <main id="main-content">
        <div className="wrap">
          <header className="note-header" style={{ paddingBottom: "6rem" }}>
            <div className="label" style={{ marginBottom: "1rem" }}>404</div>
            <h1>Nothing here</h1>
            <p className="excerpt">That page doesn&apos;t exist, or it moved when this site did.</p>
            <div className="actions">
              <Link href="/" className="btn btn-primary">Back home</Link>
              <Link href="/notes/" className="btn">Writing</Link>
            </div>
          </header>
        </div>
      </main>
      <Footer />
    </>
  );
}
