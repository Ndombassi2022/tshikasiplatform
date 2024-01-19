import { Locale } from "@/config/i18n.config";
import Image from "next/image";
import { AboutSection } from "../component/pages/home/about-section";
import { HeroSection } from "../component/pages/home/hero-section";
import { ServiceSection } from "../component/pages/home/service-section";
import { SystemSection } from "../component/pages/home/system-section";
import { Header } from "../component/pages/header";
import { Footer } from "../component/pages/footer";
import { Contact } from "../component/pages/contact";

export default async function Home({params,}:{params:{lang: Locale}}) {

  //const dictionary = getDisctionaryUserServer(params.lang)
  
  
    return (
      
     <>
     
      <Header lang={params.lang}/>
      <HeroSection lang={params.lang}/>
      <ServiceSection/>
      <SystemSection lang={params.lang} />
      <AboutSection/>
      <Contact/>
      <Footer/>
     </>
    )
  }