import Header from "./Components/Header"
import Footer from "./Components/Footer"
import Hero from "./Components/Hero"
import HoursSelection from "./Components/HoursSelection"
import Serach from "./Components/Serach"
import Why from "./Components/Why"
import Testimonial from "./Components/Testimonial"
import TestimonialSlider from "./Components/TestimonialSlider"
import SerachMobail from "./Components/SerachMobail"
import Cars from "./Components/Cars"
import About from "./Components/About"
import Cta from "./Components/Cta"
import BackToTopBtn from "./Components/BackToTopBtn"



export default function Home() {
  return (
  
    <main className="max-w-[1920px] bg-white mx-auto reletive  overflow-hidden">
      <Header/>
      <Hero/>
      <Cars/>
      <About/>
      <Why/>
      <Testimonial/>
      <Cta/>
      <Footer/>
      <BackToTopBtn/>
      <div className="h-[4000px]"></div>
    </main>
  )
}
