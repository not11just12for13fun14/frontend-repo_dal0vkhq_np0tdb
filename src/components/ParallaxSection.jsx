import TiltCard from './TiltCard'
import { Rocket, BarChart3, Lock } from 'lucide-react'

export default function ParallaxSection() {
  const items = [
    {
      icon: Rocket,
      title: 'Rapid Launch',
      desc: 'Ship prototypes and full products with modern 3D branding and motion.',
      gradient: 'from-cyan-500/20 via-blue-500/10 to-transparent',
    },
    {
      icon: BarChart3,
      title: 'Growth Focused',
      desc: 'Conversion‑minded design with measurable impact and performance.',
      gradient: 'from-violet-500/20 via-fuchsia-500/10 to-transparent',
    },
    {
      icon: Lock,
      title: 'Trust by Design',
      desc: 'Fintech‑ready patterns, accessibility, and security best practices.',
      gradient: 'from-emerald-500/20 via-teal-500/10 to-transparent',
    },
  ]

  return (
    <section className="py-16 relative">
      <div className="absolute inset-0 pointer-events-none [mask-image:linear-gradient(to_bottom,black,transparent)]">
        <div className="absolute -top-12 left-[10%] h-48 w-48 rounded-full blur-3xl bg-cyan-500/30" />
        <div className="absolute top-24 right-[8%] h-56 w-56 rounded-full blur-3xl bg-violet-500/20" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-64 w-64 rounded-full blur-3xl bg-emerald-500/20" />
      </div>

      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-2xl font-bold tracking-tight">Capabilities</h2>
          <p className="text-gray-600">Depth, gradients, glass, and parallax for a modern 3D brand.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item) => (
            <TiltCard key={item.title} className="group">
              <div className="relative p-6 rounded-2xl border bg-white/60 backdrop-blur-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.2)]">
                <div className={`pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br ${item.gradient}`} />
                <div className="relative">
                  <item.icon className="h-6 w-6 text-gray-800 mb-3" />
                  <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  )
}
