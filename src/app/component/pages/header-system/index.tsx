'use client'

import Link from "next/link";
import Image from "next/image"

import {motion} from 'framer-motion';
import { getDisctionaryUserClient } from "@/app/dictionaries/default-dictionary-use-client";
import { Locale } from "@/config/i18n.config";
/*const NAV_ITEMS = [
    {
        label: 'Home',
        href: '/'
    },
    {
        label: 'Services',
        href: '/pages/service'
    },
    {
        label: 'System Access',
        href: '/pages/system'
    }
]*/

type HeaderSystemProps =
    {
        formDescription:string,
        userName:string
    }

export const HeaderSystem = (props: HeaderSystemProps) => {
    //const dictionary = getDisctionaryUserClient(props.lang)
    return (
        <motion.div className="flex  border-b-2 border-gray-600 p-6 w-full top-0 bg-gray-950 justify-between "
            initial={{top:-100}}
            animate={{top:0}}
            transition={{duration:0.5}}
            >
            <span>{props.formDescription}</span>
            <span>{props.userName}</span>
    </motion.div>
    )
    /*return (
        <motion.header 
        className="absolute top-0 w-full z-10 bg-emerald-300 h-24 flex items-center "
        initial={{top:-100}}
        animate={{top:0}}
        transition={{duration:0.5}}
        >
            
               <span className=" ">{props.formDescription}</span>
               <span className="float-right">{props.userName}</span>
                
        
        </motion.header>
    )*/
}