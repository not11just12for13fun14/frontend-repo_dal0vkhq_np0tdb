import Spline from '@splinetool/react-spline'
import { ArrowRight, Building2, Phone } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative h-[82vh] md:h-[88vh] flex items-center">
      {/* 3D Background Cover */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Soft gradient to keep content readable without blocking interaction */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-white/90" />
      </div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto w-full px-4">
        <div className="max-w-2xl text-white">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur">
            <Building2 className="h-3.5 w-3.5" />
            Trusted business solutions
          </div>
          <h1 className="mt-4 text-4xl md:text-6xl font-extrabold leading-tight">
            Modern, 3D‑driven business web design
          </h1>
          <p className="mt-4 text-white/80 md:text-lg">
            Elevate your brand with a polished, corporate look backed by interactive 3D visuals. Clean, minimal, and built for performance.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="#business"
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-3 rounded-lg font-medium"
            >
              Explore services
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#personal"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg font-medium border border-white/30 bg-white/10 hover:bg-white/15 backdrop-blur"
            >
              <Phone className="h-4 w-4" /> Contact
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
