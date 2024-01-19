import { locales } from "@/app/dictionaries/default-dictionaries";
import { getDisctionaryUserClient } from "@/app/dictionaries/default-dictionary-use-client"
import { Locale } from "@/config/i18n.config";
import Link from "next/link";
import ReactFlagsSelect from 'react-flags-select'
import  {useParams,usePathname}from "next/navigation";
import { Bs1CircleFill } from "react-icons/bs";


export const ChangeLinguageNavbar =({locale}: {locale: Locale})=>{
        const pathName = usePathname();
        const {lang} = useParams();
    
        const getPathname = ( lng: string)=>{
            const paths = pathName.split('/');
            const newPath = paths.slice(2).join('/');

            return '/'+lng+'/'+newPath;
        }


        const dictionary = getDisctionaryUserClient(locale);
        const getSelectedLanguage=(locale:string)=>{

            if(locale === 'en'){
                return dictionary.language.english;
            }
            if(locale === 'pt'){
                return dictionary.language.portuguese;
            }
            if(locale === 'fr'){
                return dictionary.language.french;
            }
            if(locale === 'ar'){
                return dictionary.language.arabic;
            }
           
        }
    return(
        <div className="group flex items-center">
            <button >{"Language "+getSelectedLanguage(locale)}</button>
            <ul className="absolute top-14 hidden flex-col gap-1 group-hover:flex">
               {
                locales.map((locale)=>{
                    return(
                        <li>
                            <div className="flex flex-row gap-2">
                               
                          
                                <Link href={getPathname(locale.code)} >{getSelectedLanguage(locale.code)}</Link>
                            </div>
                            
                          
                        </li>
                    )
                })
               }
               
            </ul>
        </div>
    )
}