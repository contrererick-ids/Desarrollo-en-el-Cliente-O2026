import Header from './Header'
import Hero from './views/HeroSection'
import AboutMeSection from './views/AboutMeSection'
import SkillsSection from './views/SkillsSection'
import ProjectsSection from './views/ProjectsSection'
import ContactSection from './views/ContactSection'
import Footer from './Footer'
import './App.css'
import './styles/header.css'
import './styles/hero.css'
import './styles/aboutMe.css'
import './styles/skills.css'
import './styles/projects.css'
import './styles/contact.css'
import './styles/footer.css'

function App() {

  return (
    <>
      <Header/>
      <Hero/>
      <AboutMeSection/>
      <SkillsSection/>
      <ProjectsSection/>
      <ContactSection/>
      <Footer/>

    </>
  )
}

export default App
