import { Newspaper } from 'lucide-react'

const articles = [
  {
    title: 'Designing delightful developer experiences',
    link: '#',
    source: 'Medium',
    date: 'Aug 2024',
  },
  {
    title: 'From prototype to production: a full‑stack journey',
    link: '#',
    source: 'Dev.to',
    date: 'May 2024',
  },
  {
    title: 'Optimizing React apps for real‑world performance',
    link: '#',
    source: 'Personal Blog',
    date: 'Jan 2024',
  },
]

export default function FeaturedArticles() {
  return (
    <section id="articles" className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center gap-3 mb-6">
          <Newspaper className="h-6 w-6 text-blue-600" />
          <h2 className="text-2xl font-bold tracking-tight">Featured Articles</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((a) => (
            <a
              key={a.title}
              href={a.link}
              className="group p-6 rounded-xl border bg-white hover:border-blue-500 transition-colors"
            >
              <p className="text-sm text-gray-500 mb-2">{a.source} • {a.date}</p>
              <h3 className="font-semibold text-lg leading-snug group-hover:text-blue-600">
                {a.title}
              </h3>
              <p className="mt-3 text-blue-600 text-sm">Read article →</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
