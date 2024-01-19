'use client'

import Link from "next/link";
import Image from "next/image"
import { NavItem } from "./nav-item";
import {motion} from 'framer-motion';
import { getDisctionaryUserClient } from "@/app/dictionaries/default-dictionary-use-client";
import { Locale } from "@/config/i18n.config";
import { ChangeLinguage } from "../changeLinguage";
import { ChangeLinguageNavbar } from "../changeLinguage/changeLanguageNavebar";



export const Header = ({lang}: {lang: Locale}) => {
    const dictionary = getDisctionaryUserClient(lang)
    const NAV_ITEMS = [
        {
            label: dictionary.language.arabic,
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
    ]


    return (
        <motion.header 
        className="absolute top-0 w-full z-10 h-24 flex items-center justify-center"
        initial={{top:-100}}
        animate={{top:0}}
        transition={{duration:0.5}}
        >
            <div className="container flex items-center justify-between">
                <Link href={"/"}>
                    <Image width={58} height={49} src="/images/logo.png" alt="Tshikasiplatform" />
                </Link>
                <nav className="flex items-center gap-4 sm:gap-10 ">
                    {NAV_ITEMS.map(item => (
                        <NavItem {...item} key={item.label} />
                    ))}
                </nav>
              
                <ChangeLinguageNavbar locale={lang}/>
            </div>
        </motion.header>
    )
}