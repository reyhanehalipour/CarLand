'use client'
import { useContext } from "react"
import { SearchContext } from "../Context/Search"

export default function Serach() {

    const {searchActive}=useContext(SearchContext)
   return <div className={`${searchActive?'bg-white rounded-none  xl:h-[80px]':
   'bg-white rounded-[20px] py-6 xl:pr-4 xl:h-[98px]'} hidden xl:block w-full relative shadow-lg`}>search</div>

  
}
