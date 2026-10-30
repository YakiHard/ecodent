import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Hero from './components/pages/Home/Hero/Hero.jsx'
import Menu from './components/general/Menu/Menu'
import Leader from './components/pages/Home/Leader/Leader.jsx'
import Services from './components/pages/Home/Services/Services'
import {servicesData, FaqData, DoctorData} from './Data.js'
import Faq from './components/pages/Home/Faq/Faq.jsx'
import Footer from './components/general/Footer/Footer.jsx'
import Doctors from "./components/pages/Home/Doctors/Doctors.jsx"

function App() {

  return (
    <BrowserRouter>
    <Menu />
      <Routes>
        <Route path='/' element={
          <>
            <Hero />
            <Leader />
            <Services data={servicesData} />
            <Doctors data={DoctorData} />
            <Faq data={FaqData}/>
          </>
        } />
      </Routes>
    <Footer />
    </BrowserRouter>
  )
}

export default App
