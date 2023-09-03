'use client'

import { useContext,useState,createContext } from "react"


export const SearchContext = createContext()

export const SearchContextProvider =({children})=>{

    const[SearchActive,SetSaerchActive]= useState(false)

    return <SearchContext.Provider value={{SearchActive,SetSaerchActive}
    }> {children}</SearchContext.Provider>
    

}

export const useSearchContext =()=> useContext(SearchContext)