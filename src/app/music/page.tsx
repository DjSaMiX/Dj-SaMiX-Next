export default function MusicPage() {
  return (
    <main className="space-y-10">
      <header>
        <h1 className="text-4xl font-bold neon-text">Music</h1>
        <p className="mt-3 max-w-xl text-white/70">
          Latest mixes, mashups, and live sets.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-white/90">Featured Mix</h2>

        <div className="aspect-video w-full max-w-4xl overflow-hidden rounded-xl border border-white/15 neon-border">
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

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-white/90">More on YouTube</h2>

        <div className="grid gap-6 md:grid-cols-2">
          {[
            "DF2ZB-2YdvI",
            "lEWeeHVlGlM",
            "x2nLP_kH_uI",
            "F5q3Z-Lzg7I" // (optional: reuse featured or replace later)
          ].map((id, i) => (
            <div
              key={`${id}-${i}`}
              className="aspect-video overflow-hidden rounded-xl border border-white/10 hover:border-white/20 transition hover:shadow-[0_0_22px_rgb(var(--accent)/0.18)]"
            >
              <iframe
                className="h-full w-full"
                src={`https://www.youtube.com/embed/${id}?autoplay=0&modestbranding=1`}
                title={`YouTube video ${i + 1}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
