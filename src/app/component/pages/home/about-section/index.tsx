'use client'

import Image from 'next/image';

import {HiArrowNarrowRight} from 'react-icons/hi';
import {motion} from 'framer-motion';
import { SectionTitle } from '../../section-title';
import { Button } from '../../button';



export const AboutSection = () => {
    return (
        <section className="   w-full lg:h-[755px] bg-slate-800 flex flex-row justify-end pb-10 sm:pb-32 py-32 lg:pb-[110px]">
              
            <div className="container flex sm:items-center flex-col sm:flex-row justify-between ">
            
                    <motion.div 
                    className='w-full lg:max-w-[530px]'
                    initial={{opacity:0, x: -100}}
                    whileInView={{opacity:1, x:0}}
                    exit={{opacity:0, x: -100}}
                    transition={{duration: 0.5}}
                    >
                    <SectionTitle className="pb-8  text-3xl font-medium" title={"Sobre-nos"} subtitle={""}/>
                    <p className='font-mono text-emerald-400 font-extrabold '> TSHIKASI-PLATFORM</p>
                   
                    <p className='text-gray-400 my-6 text-sm  md:text-base'>Somos uma empresa virada a Tecnologia que atua amais de 5anos, atuando em todas as areas que conserne as Teconologias de Informacao, como redes de computadores,montagem e manutencao de equipamentos informaticos, seguranca de informacao, desenvolvimento de sistema de pequeno,medio e grande porte e muito mais... </p>
                    <p className='text-gray-400 my-6 text-sm  md:text-base'>Temos servicos expecificos como sistemas de gestao a sua escolha. Uma plataforma que estara asua disposicao 24/24 horas todos os dia</p>
                    <div>
                        <Button className='w-max  '>
                            Fale connosco
                            <HiArrowNarrowRight size={18}/>
                        </Button>
                    </div>
                     
                </motion.div>
                <motion.div 
                 initial={{opacity:0, y:-100}}
                 whileInView={{opacity:1, y:0}}
                 exit={{opacity:0, y:-100}}
                 transition={{duration: 1.5}}
                >
                    <Image className="w-[300px] h-[300px] lg:w-[420px] lg:h-[404] mb-6 lg:mb-0" src={'/images/heroimage.png'} alt={'Tshikasiplatform'} width={420} height={404}/>
                </motion.div>
            </div>
        </section>
    )
}