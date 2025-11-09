import Hero from './components/Hero'
import PersonalDetails from './components/PersonalDetails'
import BusinessDetails from './components/BusinessDetails'
import Education from './components/Education'
import FeaturedArticles from './components/FeaturedArticles'

function App() {
  return (
    <div className="min-h-screen text-gray-900 bg-white">
      <header className="sticky top-0 z-20 backdrop-blur bg-white/70 border-b">
        <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
          <a href="#" className="font-semibold">Alex.dev</a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#personal" className="hover:text-blue-600">About</a>
            <a href="#business" className="hover:text-blue-600">Business</a>
            <a href="#education" className="hover:text-blue-600">Education</a>
            <a href="#articles" className="hover:text-blue-600">Articles</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <PersonalDetails />
        <BusinessDetails />
        <Education />
        <FeaturedArticles />
      </main>

      <footer className="py-10 border-t">
        <div className="max-w-6xl mx-auto px-4 text-sm text-gray-600 flex flex-col md:flex-row items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} Alex Johnson. All rights reserved.</p>
          <p className="text-gray-500">Built with React, Tailwind, and Spline.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
