'use client'

import { HiArrowNarrowRight } from "react-icons/hi";
import { Button } from "../button";
import { SectionTitle } from "../section-title";
import {useForm} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
const contactFormSchema = z.object({
    name: z.string().min(3).max(100),
    email:z.string().email(),
    message: z.string().min(5).max(1000),

})

type ContactFormData = z.infer<typeof contactFormSchema>

export const Contact = () => {
    const {handleSubmit, register} = useForm<ContactFormData>({resolver: zodResolver(contactFormSchema)});
    const onSubmit = (data: ContactFormData) => {

    } 

    return (
        <section className="py-16 px-6 md:py-32 flex items-center justify-center bg-gray-950">
                <motion.div  
                    className="w-full max-w-[420px] mx-auto"
                    initial={{opacity:0, y:-100}}
                    whileInView={{opacity:1, y:0}}
                    exit={{opacity:0, y:-100}}
                    transition={{duration: 0.7}}
                    >
                    <motion.div  
               
                        initial={{opacity:0, y:-100}}
                        whileInView={{opacity:1, y:0}}
                        exit={{opacity:0, y:-100}}
                        transition={{duration: 2}}
                        >
                        <SectionTitle title={"Vamos trabalhar juntos? Entre em contacto"} subtitle={""} className="items-center text-center"/>
                    </motion.div >
                    
                    <form className="mt-12 w-full flex flex-col gap-4" 
                        action=""
                        onSubmit={handleSubmit(onSubmit)}
                        >
                        
                        <input {...register('name')} placeholder="Name" className="w-full h-14 bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-2 ring-emerald-600"  type="text" />
                        <input  {...register('email')} placeholder="Email" className="w-full h-14 bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-2 ring-emerald-600"  type="email" />
                        <textarea  {...register('message')} maxLength={1000} placeholder="Massage" className="resize-none w-full h-[138px] first-letter: bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-2 ring-emerald-600"   />
                        
                        <motion.div  
               
                        initial={{opacity:0, x:-300}}
                        whileInView={{opacity:1, x:0}}
                        exit={{opacity:0, x:-300}}
                        transition={{duration: 1}}
                        >
                        <Button className="w-max mx-auto  mt-6 shadow-button" >
                            Send Message
                            <HiArrowNarrowRight size={18}/>
                        </Button>
                    </motion.div >
                       
                    </form>
                </motion.div >

        </section>
    )
}