import NavBar from "@/scenes/navbar"
import { useState, useEffect } from 'react'
import { SelectedPage } from "@/shared/types"
import Home from '@/scenes/home'
import Benefits from '@/scenes/benefits'
import OurClasses from "./scenes/OurClasses"
import ContactUs from "./scenes/ContactUs/ContactUs"
import Footer from "./scenes/Footer/Footer"

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home)
  const [ isTop, setIsTop] = useState<boolean>(true)

  useEffect(() => {
    const scroll = () => {
      if (window.scrollY===0) {
        setIsTop(true)
        setSelectedPage(SelectedPage.Home)
      }
      if (window.scrollY!==0) {
        setIsTop(false)
      }}
      window.addEventListener("scroll", scroll)
      return () => window.removeEventListener("scroll", scroll)
  }, []) 

  return (
    <div className='App bg-gray-20'>
      <NavBar
      isTop = {isTop}
      selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
      <Home setSelectedPage={setSelectedPage}/>
      <Benefits setSelectedPage={setSelectedPage}/>
      <OurClasses setSelectedPage={setSelectedPage}/>
      <ContactUs setSelectedPage={setSelectedPage}/>
      <Footer/>
    </div>
  )
}

export default App
