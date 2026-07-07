import { blogs } from "../data/vehicles";

export default function NewsPage() {
  return (
    <>
      <div className="relative pt-32 pb-16 bg-gradient-to-b from-brand-cyan/5 to-brand-dark">
        <div className="section-container !py-0 text-center">
          <p className="eyebrow">News / Blog</p>
          <h1 className="text-3xl md:text-5xl font-display font-bold">Corporate presence, offices, and international growth.</h1>
        </div>
      </div>

      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <article key={blog.title} className="glass-hover overflow-hidden">
              <div className="aspect-video overflow-hidden">
                <img src={blog.image} alt={blog.title} loading="lazy" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h2 className="font-display font-bold text-lg mb-2">{blog.title}</h2>
                <p className="text-white/60 text-sm mb-3">{blog.body}</p>
                <ul className="space-y-1 mb-4">
                  {blog.bullets.map((item) => (
                    <li key={item} className="text-white/40 text-sm flex items-start gap-2">
                      <span className="text-brand-cyan mt-1">•</span> {item}
                    </li>
                  ))}
                </ul>
                {blog.link && (
                  <a href={blog.link} target="_blank" rel="noreferrer"
                    className="text-brand-cyan text-sm hover:underline">
                    Corporate Website →
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}
