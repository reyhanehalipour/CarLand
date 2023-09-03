"use client"
import { useContext,useEffect,useState } from "react"


import Image from "next/image"
import SerachMobail from "./SerachMobail"

import { useMediaQuery } from "react-responsive"
import { Link } from "react-scroll"
import{BiX,BiMenuAltRight} from 'react-icons/bi'
import { SearchContext } from "../Context/Search"

export default function Header() {

  const {SetSaerchActive}= useContext(SearchContext)

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

    if(window.scroll >800){
      SetSaerchActive(true)
    }else{
      SetSaerchActive(false)
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
     xl:items-center xl:justify-between"> 

    <div className="flex justify-between items-center px-4">
      <Link 
      to="home"
      smooth={DesktopMode}
      spy={true}
      className="cursor-pointer">

        <Image src={'icons/logo.svg'} width={'194'} height={'64'}/>

      </Link>
      
      <div className="cursor-pointer xl:hidden" onClick={()=>SetNav(!Nav)}>

      {Nav ? (<BiX className="text-4xl"/>):
       (<BiMenuAltRight className="text-4xl"/>)}

      </div>

      

    
    </div>

   
    
   

    <div>

    <nav className={`${ Nav? 'max-h-max py-8 px-4 xl:px-0 xl:py-0 flex flex-col':'max-h-0 xl:max-h-max '}
        flex flex-col w-full bg-white gap-y-6 overflow-hidden font-bold
          xl:font-medium xl:flex-row  xl:w-max xl:gap-x-8 xl:h-max xl:bg-transparent 
          transition-all duration-150 text-center xl:text-left uppercase text-sm
           xl:text-[15px] xl:normal-case`}>
        <Link 
        className='cursor-pointer'
               to="home"
               activeClass="active"
              smooth={DesktopMode}
              spy={true}
             >Home
      </Link>

      <Link 
        className='cursor-pointer'
               to="cars"
               activeClass="active"
              smooth={DesktopMode}
              spy={true}
             >Cars
      </Link>


      <Link 
        className='cursor-pointer'
               to="about"
               activeClass="active"
              smooth={DesktopMode}
              spy={true}
             >About
      </Link>

      <Link 
        className='cursor-pointer'
               to="why"
               activeClass="active"
              smooth={DesktopMode}
              spy={true}
             >Why
      </Link>


      <Link 
        className='cursor-pointer'
               to="Testimonial"
               activeClass="active"
              smooth={DesktopMode}
              spy={true}
             >use Testimonial
      </Link>

      <Link 
        className='cursor-pointer'
               to="cantact"
               activeClass="active"
              smooth={DesktopMode}
              spy={true}
             >Contact
      </Link>


      <Link 
        className='xl:hidden btn btn-primary btn-sm max-w-[164px] mx-auto py-6'
               to="/"
               activeClass="active"
              smooth={DesktopMode}
              spy={true}
             >see all cars
      </Link>

      <SerachMobail/>
        </nav>
    </div>
       </div>
   </header>
  )
}
