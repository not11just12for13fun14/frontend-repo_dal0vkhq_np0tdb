import { GraduationCap } from 'lucide-react'

export default function Education() {
  const schools = [
    {
      school: 'Stanford University',
      degree: 'M.S. Computer Science',
      year: '2019 — 2021',
      details: 'Human‑Computer Interaction, Distributed Systems, AI Systems.'
    },
    {
      school: 'University of California, Berkeley',
      degree: 'B.S. Electrical Engineering & CS',
      year: '2015 — 2019',
      details: 'Data Structures, Operating Systems, Design Innovation.'
    }
  ]

  return (
    <section id="education" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center gap-3 mb-6">
          <GraduationCap className="h-6 w-6 text-blue-600" />
          <h2 className="text-2xl font-bold tracking-tight">Education</h2>
        </div>
        <div className="space-y-4">
          {schools.map((s) => (
            <div key={s.school} className="p-6 rounded-xl border flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <p className="font-semibold text-lg">{s.school}</p>
                <p className="text-gray-600">{s.degree}</p>
              </div>
              <div className="text-sm text-gray-500">{s.year}</div>
              <p className="text-gray-600 md:max-w-xl">{s.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
