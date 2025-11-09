import { Briefcase, Rocket, Star } from 'lucide-react'

export default function BusinessDetails() {
  const items = [
    { icon: Rocket, title: 'Services', desc: 'Product engineering, prototypes, and full‑stack web apps.' },
    { icon: Briefcase, title: 'Clients', desc: 'Startups, SMBs, and enterprise teams across fintech and SaaS.' },
    { icon: Star, title: 'Highlights', desc: 'Shipped 30+ projects, improved conversion by up to 40%.' },
  ]

  return (
    <section id="business" className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center gap-3 mb-6">
          <Briefcase className="h-6 w-6 text-blue-600" />
          <h2 className="text-2xl font-bold tracking-tight">Business</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="p-6 rounded-xl border bg-white shadow-sm hover:shadow-md transition-shadow">
              <Icon className="h-6 w-6 text-blue-600 mb-3" />
              <h3 className="font-semibold text-lg mb-1">{title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
