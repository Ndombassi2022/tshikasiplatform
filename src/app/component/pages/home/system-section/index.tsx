
'use client'


import { SystemItem } from "./system-item";
import {motion} from 'framer-motion';

import { HiArrowNarrowRight } from "react-icons/hi";
import { getDisctionaryUserClient } from "@/app/dictionaries/default-dictionary-use-client";
import { Locale } from "@/config/i18n.config";
import { SectionTitle } from "../../section-title";

const SYSTEM_ITEM = [
    {
        description:"Plataform de Estudo Adistancia",
        details:"A plataform de estudo a distancia comporta varios cursos ",
        urlImage:"/images/gestao-hospitalar.jpg",
        href:"/pages/platform_ead"
    },
    {
        description:"Gestao Comercial",
        details:"Systema ideal para gerenciamento do seu negocio seja ela micro,pequena,media ou grande empresa suprimimos as suas necidade em gerenciamento do seu negocio. Um sistema feito pensando na sua seguranca flexibilidade e muito intuitivo",
        urlImage:"/images/gestao-comercial.svg",
        href:"/pages/system"
    },
    {
        description:"Gestao Escolar",
        details:"Systema ideal para gerenciamento do seu negocio seja ela micro,pequena,media ou grande empresa suprimimos as suas necidade em gerenciamento do seu negocio. Um sistema feito pensando na sua seguranca flexibilidade e muito intuitivo",
        urlImage:"/images/gestao-escolar.png", 
        href:"/pages/system",    
    },
    {
        description:"Gestao Hospitalar",
        details:"Systema ideal para gerenciamento do seu negocio seja ela micro,pequena,media ou grande empresa suprimimos as suas necidade em gerenciamento do seu negocio. Um sistema feito pensando na sua seguranca flexibilidade e muito intuitivo",
        urlImage:"/images/gestao-hospitalar.jpg", 
        href:"/pages/system"
    },
    {
        description:"Gestao Hoteleira",
        details:"Systema ideal para gerenciamento do seu negocio seja ela micro,pequena,media ou grande empresa suprimimos as suas necidade em gerenciamento do seu negocio. Um sistema feito pensando na sua seguranca flexibilidade e muito intuitivo",
        urlImage:"/images/gestao-hoteleira.jpg", 
        href:"/pages/system"
    },
    {
        description:"Gestao de Restaurante",
        details:"Systema ideal para gerenciamento do seu negocio seja ela micro,pequena,media ou grande empresa suprimimos as suas necidade em gerenciamento do seu negocio. Um sistema feito pensando na sua seguranca flexibilidade e muito intuitivo",
        urlImage:"/images/gestao-restaurante.jpg", 
        href:"/pages/system"
    },

    {
        description:"Gestao de Oficina",
        details:"Systema ideal para gerenciamento do seu negocio seja ela micro,pequena,media ou grande empresa suprimimos as suas necidade em gerenciamento do seu negocio. Um sistema feito pensando na sua seguranca flexibilidade e muito intuitivo",
        urlImage:"/images/gestao-oficina.png", 
        href:"/pages/system"
    },
    {
        description:"Gestao de Servicos",
        details:"Systema ideal para gerenciamento do seu negocio seja ela micro,pequena,media ou grande empresa suprimimos as suas necidade em gerenciamento do seu negocio. Um sistema feito pensando na sua seguranca flexibilidade e muito intuitivo",
        urlImage:"/images/gestao-servicos.svg", 
        href:"/pages/system"
    },


]

export const SystemSection = ({lang}: {lang: Locale}) => {
    const dictionary = getDisctionaryUserClient(lang)
    return (
        <section className="container py-16 flex  gap-10 md:gap-4 lg:gap-16 flex-col md:flex-row ">
             <motion.div 
                className="max-w-[420px] "
                initial={{opacity:0, x:-100}}
                whileInView={{opacity:1, x:0}}
                exit={{opacity:0, x:-100}}
                transition={{duration: 0.5}}
             >
                <SectionTitle title={"Sistemas"} subtitle={""}  className="pb-2 text-3xl font-medium"/>
                <p className="text-gray-400 mt-4 mb-12">Todos sistema diponiveis a sua medida e preferencia Todos sistema diponiveis a sua medida e preferencia  Todos sistema diponiveis a sua medida e preferencia  Todos sistema diponiveis a sua medida e preferencia</p>
               
            </motion.div>

            <motion.div 
                className="flex flex-col gap-4 "
                initial={{opacity:0, y:-100}}
                whileInView={{opacity:1, y:0}}
                exit={{opacity:0, y:-100}}
                transition={{duration: 1.5}}
                >
                {
                    SYSTEM_ITEM.map((item,index)=>(
                        <SystemItem key={item.description}
                        description={item.description}
                        details={item.details}
                        urlImage={item.urlImage}
                        href={item.href} 
                        language={lang}                        />
                    ))
                }
               
               
            </motion.div>
        </section>
    )
}