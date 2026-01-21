export default function HomePage() {
  return (
    <main>
      <section className="py-24">
        <h2 className="text-5xl font-bold leading-tight neon-text">Dj SaMiX</h2>

        <p className="mt-4 max-w-xl text-lg text-white/70">
          Club • Events • Electronic Vibes
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="/music"
            className="rounded-lg bg-[rgb(var(--accent))] px-6 py-3 text-sm font-medium text-black shadow-[0_0_26px_rgb(var(--accent)/0.35)] transition hover:opacity-90"
          >
            Listen now
          </a>

          <a
            href="/booking"
            className="rounded-lg border border-white/15 px-6 py-3 text-sm text-white/80 transition hover:bg-white/5 hover:text-white hover:shadow-[0_0_18px_rgb(var(--accent)/0.22)]"
          >
            Book me
          </a>
        </div>
      </section>

      <section className="mt-14">
        <h3 className="text-2xl font-bold neon-text">Featured Mix</h3>

        <div className="mt-6 aspect-video w-full max-w-3xl border border-white/15 neon-border">
          <iframe
            className="h-full w-full"
            src="https://www.youtube.com/embed/F5q3Z-Lzg7I?autoplay=0&modestbranding=1"
            title="Featured Mix"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </section>
    </main>
  );
}
