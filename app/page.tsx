import type { Metadata } from "next"
import Hero from "@/components/hero"
import About from "@/components/about"
import Education from "@/components/education"
import Experience from "@/components/experience"
import Skills from "@/components/skills"
import Certifications from "@/components/certifications"
import Contact from "@/components/contact"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Projects from "@/components/projects"

export const metadata: Metadata = {
  title: "Portfolio | Full-Stack Developer & Cloud Engineer",
  description:
    "Professional portfolio of a Full-Stack Developer and Cloud Engineer specializing in data science and cloud technologies.",
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
