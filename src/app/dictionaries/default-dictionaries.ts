import { i18n } from "@/config/i18n.config";
import { ar } from "./default.language.colections/default-ar";
import { en } from "./default.language.colections/default-en";
import { fr } from "./default.language.colections/default-fr";
import { pt } from "./default.language.colections/default-pt";
import {Gb,Pt,Fr,Ar} from 'react-flags-select'



export const defaultDictionary ={
    'en': en,
    'pt': pt,
    'fr':fr,
    'ar':ar  
};

export const flag={
    'en': Gb,
    'pt': Pt,
    'fr': Fr,
    'ar':Ar  
}
export type FlagKey = keyof typeof flag;

export const locales = i18n.locales.map((code) =>{
    return {code, icon: flag[code as FlagKey]}
})