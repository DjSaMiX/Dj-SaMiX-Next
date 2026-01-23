type YouTubeEmbedProps = {
  id: string;
  title?: string;
  className?: string;
};

export default function YouTubeEmbed({
  id,
  title = "YouTube video",
  className = "",
}: YouTubeEmbedProps) {
  const watchUrl = `https://www.youtube.com/watch?v=${id}`;

  return (
    <div className={`space-y-3 ${className}`}>
      <div className="aspect-video overflow-hidden rounded-xl border border-white/10 hover:border-white/20 transition hover:shadow-[0_0_22px_rgb(var(--accent)/0.18)]">
        <iframe
          className="h-full w-full"
          src={`https://www.youtube.com/embed/${id}?autoplay=0&modestbranding=1`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      <div className="flex items-center justify-between gap-3">
        <p className="text-sm text-white/70 truncate">{title}</p>

        <a
          href={watchUrl}
          target="_blank"
          rel="noreferrer"
          className="rounded-lg border border-white/10 px-3 py-1.5 text-xs text-white/80 transition hover:bg-white/5 hover:text-white hover:shadow-[0_0_18px_rgb(var(--accent)/0.22)]"
        >
          Open on YouTube
        </a>
      </div>
    </div>
  );
}
