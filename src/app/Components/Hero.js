'use client'
import { useContext } from "react"
import Serach from "./Serach"
import { SearchContext } from "../Context/Search"


export default function Hero() {

  const {seravchActive}=useContext(SearchContext)
  return (
   <section className="h-screen xl:h-[90vh] bg-[#b2b7c2]/10" id="home">
   <div className="container mx-auto h-full xl:pt-10"> hero container</div>

  {
    seravchActive?(
      <div className="fixed top-[80px] z-10 w-full max-w-[1920px]">
        <Serach/>
      </div>
    ):(

      <div className="-mt-12 w-ful max-w-[1300px] mx-auto">
        <Serach/>
      </div>
    )
   }


   </section>
  
  )
}
