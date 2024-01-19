'use client'

import { ServiceCard } from "./service-card";
import {BsCodeSlash} from 'react-icons/bs';
import {FaNetworkWired} from 'react-icons/fa';
import {FaComputer} from 'react-icons/fa6';
import {SiSpringsecurity} from 'react-icons/si';
import { ReactNode } from "react";
import {motion} from 'framer-motion';
import { SectionTitle } from "../../section-title";

type ServiceCardProps = {
    service: {
        icon: ReactNode;
        description: string;
        details: string;
    }
}
const SERVICE_ITEM = [

    {
        icon: <BsCodeSlash/>,
        description: "Desenvolvimento de Software",
        details: "Desenvolvemos sistemas a sua medida com as technologias mais atualizada sistema web, mobile e desktop a sua escolha",
    },
    {
        icon: <FaNetworkWired/>,
        description: "Redes de computadores",
        details: "Somos a sua solucao para sua infraestrutura de rede da sua empresa ",
    },
    {
        icon: <FaComputer/>,
        description: "Motagem e Manutencao de Computadores",
        details: "Temos a solucao completa em montagem e manutencao de equipamentos informaticos ",
    },
    {
        icon: <SiSpringsecurity/>,
        description: "Seguranca de Informacao",
        details: "As nossas informacoes sao a base dos nossos negocios informacoes bem protegidas e minimo que um emprendor precisa e nos temos a solucao ",
    }

]

export const ServiceSection = () =>{
    return (
        <section className=" container py-16">
            <SectionTitle className="pb-16 text-3xl font-medium" title={"Servicos"} subtitle={""}/>
            <motion.div 
            className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-14"
            initial={{opacity:0, x:-100}}
            whileInView={{opacity:1, x:0}}
            exit={{opacity:0, x:-100}}
            transition={{duration: 1.5}}
            >
                {SERVICE_ITEM.map(( service, index)=> (
                    <ServiceCard key={index} service={{
                        icon: service.icon,
                        description: service.description,
                        details: service.details
                    }}/>
                ))}
            </motion.div>
        </section>
    )
}