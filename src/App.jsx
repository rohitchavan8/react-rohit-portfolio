import { About } from './Sections/About/About'
import Contact from './Sections/Contact/Contact'
import Footer from './Sections/Footer/Footer'
import Header from './Sections/Header/Header'
import Navbar from './Sections/Navbar/Navbar'
import Portfolio from './Sections/Portfolio/Portfolio'
import Services from './Sections/Services/Services'
import Testimonials from './Sections/Testimonials/Testimonials'

const App = () => {
  return (
    <main>
      <Navbar />
      <Header />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />

    </main>
  )
}

export default App
