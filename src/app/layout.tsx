import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "Dj SaMiX",
  description: "DJ portfolio and booking",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black text-white">
        <header className="border-b border-white/10">
          <div className="mx-auto max-w-5xl px-6 py-6">
            <h1 className="text-3xl font-semibold tracking-tight neon-text">
              Dj SaMiX
            </h1>

            <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
              <div className="inline-block rounded-xl border border-white/10 px-4 py-2 neon-border">
                <Navbar />
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="https://wa.me/XXXXXXXXXXX"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg border border-white/10 px-3 py-2 text-sm text-white/80 transition hover:bg-white/5 hover:text-white hover:shadow-[0_0_18px_rgb(var(--accent)/0.22)]"
                >
                  WhatsApp
                </a>

                <a
                  href="https://instagram.com/djsamix_"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg border border-white/10 px-3 py-2 text-sm text-white/80 transition hover:bg-white/5 hover:text-white hover:shadow-[0_0_18px_rgb(var(--accent)/0.22)]"
                >
                  Instagram
                </a>

                <a
                  href="https://soundcloud.com/YOUR_PROFILE"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg border border-white/10 px-3 py-2 text-sm text-white/80 transition hover:bg-white/5 hover:text-white hover:shadow-[0_0_18px_rgb(var(--accent)/0.22)]"
                >
                  SoundCloud
                </a>

                <a
                  href="/booking"
                  className="rounded-lg bg-[rgb(var(--accent))] px-4 py-2 text-sm font-medium text-black transition hover:opacity-90 shadow-[0_0_26px_rgb(var(--accent)/0.35)]"
                >
                  Book now
                </a>
              </div>
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-5xl px-6 py-10">{children}</div>
      </body>
    </html>
  );
}
