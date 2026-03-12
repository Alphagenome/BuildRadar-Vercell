export default function VideoDemo() {
  // Replace LOOM_EMBED_ID with your Loom video ID once recorded
  // e.g. https://www.loom.com/share/abc123 → LOOM_EMBED_ID = "abc123"
  const LOOM_EMBED_ID = "";

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-green-700 font-semibold text-sm uppercase tracking-wide mb-3">
          See it in action
        </p>
        <h2 className="text-3xl font-bold mb-4">
          A lead lands. You claim it. Done.
        </h2>
        <p className="text-gray-500 mb-10 text-lg">
          30 seconds. No voiceover. Just what happens when a job comes in near you.
        </p>

        <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-900 aspect-video">
          {LOOM_EMBED_ID ? (
            <iframe
              src={`https://www.loom.com/embed/${LOOM_EMBED_ID}?hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true`}
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          ) : (
            /* Placeholder shown until video is recorded */
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center">
                <div className="w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-16 border-l-white ml-1" />
              </div>
              <p className="text-white/60 text-sm">Video coming soon</p>
            </div>
          )}
        </div>

        <p className="text-gray-400 text-xs mt-4">
          Record your screen with{" "}
          <span className="text-gray-600 font-medium">Loom</span> →
          paste your embed ID into{" "}
          <code className="bg-gray-100 px-1 rounded text-gray-700">VideoDemo.tsx</code>
        </p>
      </div>
    </section>
  );
}
