import { useContext } from 'react'
import { ThemeContext } from './contexts/theme'
import Header from './components/Header/Header'
import About from './components/About/About'
import Education from './components/Education/Education' // Add
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import Achievements from './components/Achievements/Achievements' // Add
import References from './components/References/References' // Add
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import './App.css'

const App = () => {
  const [{ themeName }] = useContext(ThemeContext)

  return (
    <div id='top' className={`${themeName} app`}>
      <Header />
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>

      <main>
        <About />
        <Education /> {/* Add */}
        <Projects />
        <Skills />
        <Achievements /> {/* Add */}
        <References /> {/* Add */}
        <Contact />
      </main>
      <ScrollToTop />
      <Footer />
    </div>
  )
}

export default App