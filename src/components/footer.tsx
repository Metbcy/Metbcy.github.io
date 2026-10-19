import { profile } from "@/content/site";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span>
          No cookies, no trackers ·{" "}
          <a href="/.well-known/security.txt">security.txt</a> ·{" "}
          <a href={profile.github + "/Metbcy.github.io"}>source</a>
        </span>
      </div>
    </footer>
  );
}
