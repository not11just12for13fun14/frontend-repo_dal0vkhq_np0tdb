import { User } from 'lucide-react'

export default function PersonalDetails() {
  return (
    <section id="personal" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center gap-3 mb-6">
          <User className="h-6 w-6 text-blue-600" />
          <h2 className="text-2xl font-bold tracking-tight">Personal Details</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl border bg-gradient-to-br from-blue-50 to-indigo-50">
            <p className="text-sm text-gray-500">Name</p>
            <p className="text-lg font-semibold">Alex Johnson</p>
          </div>
          <div className="p-6 rounded-xl border">
            <p className="text-sm text-gray-500">Role</p>
            <p className="text-lg font-semibold">Full‑Stack Developer</p>
          </div>
          <div className="p-6 rounded-xl border">
            <p className="text-sm text-gray-500">Location</p>
            <p className="text-lg font-semibold">San Francisco, CA</p>
          </div>
          <div className="p-6 rounded-xl border">
            <p className="text-sm text-gray-500">Email</p>
            <a href="mailto:alex@example.com" className="text-lg font-semibold text-blue-600 hover:underline">alex@example.com</a>
          </div>
          <div className="p-6 rounded-xl border">
            <p className="text-sm text-gray-500">Website</p>
            <a href="#" className="text-lg font-semibold text-blue-600 hover:underline">alex.dev</a>
          </div>
          <div className="p-6 rounded-xl border">
            <p className="text-sm text-gray-500">Tech Focus</p>
            <p className="text-lg font-semibold">React, Node.js, FastAPI, MongoDB</p>
          </div>
        </div>
      </div>
    </section>
  )
}
