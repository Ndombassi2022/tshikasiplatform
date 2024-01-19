'use client'

import { useCallback, useEffect, useState } from "react"
import { Button } from "../button";
import { BsArrowUp } from "react-icons/bs";

export const BackToTop = () => {
   const [show, setShow] = useState(false);

   const scrolTotop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
   }
   const handleScroll = useCallback(()=>{
    if(!show && window.scrollY > 400) setShow(true);
    if(show && window.scrollY <= 400) setShow(false)
   },[])

   useEffect(()=> {
    window.addEventListener('scroll', handleScroll);
    return() =>{
        
    }
   }, [handleScroll])

   return(
    <div className="fixed right-4 bottom-4 z-20">
        <Button onClick={scrolTotop} className="shadow-lg shadow-emerald-400/20">
            <BsArrowUp size={20}/>
        </Button>

    </div>
   )

}