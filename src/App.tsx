import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Experience } from '@/components/sections/Experience'
import { Skills } from '@/components/sections/Skills'
import { Projects } from '@/components/sections/Projects'
import { LanguageToggle } from '@/components/ui/LanguageToggle'

function App() {
  return (
    <div className="min-h-screen bg-bg text-text overflow-x-hidden">
      <Navbar />
      <main className="pt-14">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
      </main>
      <Footer />
      <LanguageToggle />
    </div>
  )
}

export default App