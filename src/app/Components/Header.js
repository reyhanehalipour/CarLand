"use client"
import { useContext,useEffect,useState } from "react"


import Image from "next/image"
import SerachMobail from "./SerachMobail"

import { useMediaQuery } from "react-responsive"
import { Link } from "react-scroll"
import{BiX,BiMenuAltRight} from 'react-icons/bi'

export default function Header() {

  const [Header, SetHaeder] = useState(false)
  const [Nav, SetNav]= useState(false)

  const DesktopMode = useMediaQuery({
    query:'(min-width : 1300px',
  })

useEffect(()=>{

  const  HandleScroll=()=>{
    //header
    if(window.scrollY > 40){

      SetHaeder(true)
    }else{
      SetHaeder(false)
    }
  }

  window.addEventListener('scroll', HandleScroll)


  return()=>{
    window.removeEventListener('scroll', HandleScroll)
  }

})

 
  console.log(Header)


  return (
    <header className={`${ Header ? 'bg-white shadow-md py-2': 
    'bg-transparent shadow-none py-4'} fixed w-full
     max-w-[1920px] mx-auto z-20 transition-all duration-300`}>

    <div className="xl:container mx-auto flex flex-col xl:flex-row 
     xl:items-center xl:justify-between"> </div>

    <div className="flex justify-between items-center px-4">
      <Link 
      to="home"
      smooth={DesktopMode}
      spy={true}
      className="cursor-pointer">

        <Image src={'icons/logo.svg'} width={'194'} height={'64'}/>

      </Link>
      
      <div className="cursor-pointer xl:hidden">
      {Nav ? (<BiX className="text-4xl"/>): (<BiMenuAltRight className="text-4xl"/>)}
      </div>
      
    </div>
   </header>
  )
}
