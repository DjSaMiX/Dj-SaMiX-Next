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
  href="https://www.youtube.com/@djsamix"
  target="_blank"
  rel="noreferrer"
  aria-label="YouTube"
  className="flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-sm text-white/80 transition hover:bg-white/5 hover:text-white hover:shadow-[0_0_18px_rgb(var(--accent)/0.22)]"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className="h-5 w-5 fill-current"
  >
    <path d="M23.5 6.2s-.2-1.6-.8-2.3c-.8-.8-1.6-.8-2-0.9C17.9 2.8 12 2.8 12 2.8h0s-5.9 0-8.7.2c-.4.1-1.2.1-2 .9-.6.7-.8 2.3-.8 2.3S0 8 0 9.8v1.7c0 1.8.2 3.6.2 3.6s.2 1.6.8 2.3c.8.8 1.9.8 2.4.9 1.7.2 7.6.2 7.6.2s5.9 0 8.7-.2c.4-.1 1.2-.1 2-.9.6-.7.8-2.3.8-2.3s.2-1.8.2-3.6V9.8c0-1.8-.2-3.6-.2-3.6zM9.5 14.6V7.9l6.3 3.4-6.3 3.3z" />
  </svg>

  <span>YouTube</span>
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
