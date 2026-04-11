
import About from '../components/About'
import Contact from '../components/Contact'
import ExperienceSection from '../components/ExperienceSection'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import ProjectsSection from '../components/ProjectsSection'
import SkillsSection from '../components/SkillsSection'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <Contact />
      <Footer />
    </>
  )
}
