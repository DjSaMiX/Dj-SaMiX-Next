import YouTubeEmbed from "../components/YouTubeEmbed";



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

        <YouTubeEmbed
  id="F5q3Z-Lzg7I"
  title="Featured Mix"
  className="max-w-4xl"
/>

      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-white/90">More on YouTube</h2>

        <div className="grid gap-6 md:grid-cols-2">
  {[
  { id: "DF2ZB-2YdvI", title: "New Year Arabic Afro Mix 2026 " },
  { id: "lEWeeHVlGlM", title: "Afro Mix Part 2" },
  { id: "x2nLP_kH_uI", title: "Techno Mix Part 3" },
  { id: "F5q3Z-Lzg7I", title: "Techno Mix Part 1" },
].map((video) => (
  <YouTubeEmbed
    key={video.id}
    id={video.id}
    title={video.title}
  />
))}

</div>

      </section>
    </main>
  );
}