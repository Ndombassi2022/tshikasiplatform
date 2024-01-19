'use client'

import Image from 'next/image';

import {HiArrowNarrowRight} from 'react-icons/hi';
import {motion} from 'framer-motion';
import Link from 'next/link';
import { getDisctionaryUserClient } from '@/app/dictionaries/default-dictionary-use-client';
import { Locale } from '@/config/i18n.config';
import { Button } from '../../button';

export const HeroSection = ({lang}: {lang: Locale}) => {
    const dictionary = getDisctionaryUserClient(lang)
    return (
        <section className="w-full lg:h-[755px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-row justify-end pb-10 sm:pb-32 py-32 lg:pb-[110px]">
            <div className="container flex sm:items-center flex-col sm:flex-row justify-between ">
                <motion.div 
                 className='w-full lg:max-w-[530px]'
                 initial={{opacity:0, x: -100}}
                 whileInView={{opacity:1, x:0}}
                 exit={{opacity:0, x: -100}}
                 transition={{duration: 0.5}}
                >
                    <p className='font-mono text-emerald-400 font-extrabold '> TSHIKASI-PLATFORM</p>
                    <p>Make your life simple</p>
                    <p className='text-gray-400 my-6 text-sm  md:text-base'>{dictionary.homePage.heroSection.text} </p>

                    <div>
                        <Link href={`/${lang}/pages/eaonde/local-type-add`}>
                            <Button className='w-max  ' >
                                Cadastra-se
                                <HiArrowNarrowRight size={18}/>
                            </Button>
                        </Link>
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