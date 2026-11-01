import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Hero from './components/pages/Home/Hero/Hero.jsx'
import Menu from './components/general/Menu/Menu'
import Leader from './components/pages/Home/Leader/Leader.jsx'
import Services from './components/pages/Home/Services/Services'
import {servicesData, FaqData, DoctorData} from './Data.js'
import Faq from './components/pages/Home/Faq/Faq.jsx'
import Footer from './components/general/Footer/Footer.jsx'
import Doctors from "./components/pages/Home/Doctors/Doctors.jsx"
import ApplicationCta from './components/general/ApplicationCta/ApplicationCta.jsx'
import { useEffect, useState } from 'react'
import Shipped from './components/general/Shipped/Shipped.jsx'

function App() {
  const[isOpenForm, setOpenForm] = useState(false)
  const[shipped, setShipped] = useState(false)

  useEffect(() => {
    if(shipped) {
      setTimeout(() => {
        setShipped(false)
      }, 3000)
    }
  }, [shipped])
  
  return (
    <BrowserRouter>
    <Menu closeForm={() => setOpenForm(!isOpenForm)}/>
    <ApplicationCta closeForm={() => setOpenForm(false)} isOpen={isOpenForm} openShipped={() => setShipped(true)}/>
    <Shipped shipped={shipped}/>
      <Routes>
        <Route path='/' element={
          <>
            <Hero />
            <Leader />
            <Services data={servicesData} />
            <Doctors data={DoctorData} openForm={() => setOpenForm(true)}/>
            <Faq data={FaqData}/>
          </>
        } />
      </Routes>
    <Footer />
    </BrowserRouter>
  )
}

export default App
