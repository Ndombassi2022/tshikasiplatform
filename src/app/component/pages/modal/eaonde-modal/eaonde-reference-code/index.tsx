
import { Textbox } from "@/app/component/textbox";
import { getDisctionaryUserClient } from "@/app/dictionaries/default-dictionary-use-client";
import useEaondeReferenceCodeModalHook from "@/app/hooks/eaonde-hooks/eaonde-reference-code-modal-hook"
import { Locale } from "@/config/i18n.config";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from "@nextui-org/react"
import Link from "next/link"


type EaondeReferenceCodeModalProps = {
    title: string,
    content: string,
    placehold: string,
    isOpen: boolean,
    lang:Locale,
    url:string;
    onClose?: () => void,
    onOk?: () => void,
    onRegister?:()=>void,
    children?: React.ReactNode,
}


export default function EaondeReferenceCodeModal (props: EaondeReferenceCodeModalProps){
const dictionary = getDisctionaryUserClient(props.lang) 
    return(
        <>
            <Modal isOpen={props.isOpen} onOpenChange={()=>{}} className="flex m-6  border-2 border-emerald-400 rounded-lg w-[500px]  bg-slate-600 h-auto  ">
            
            <ModalContent  className="bg-slate-700 h-max">
               {() =>(
                 
                       <>
                       
                       <ModalHeader className="flex flex-col gap-1 rounded-t-lg bg-emerald-400 text-center text-lg text-black ">
                          
                           {props.title}
                          
                       </ModalHeader>
                       <ModalBody>
                           <div>
                               <p>{props.content}</p>
                           </div>
                           <Textbox placeholder={props.placehold}></Textbox>
                           
                       </ModalBody>
                       <ModalFooter>
                           <div className="flex  flex-col sm:flex-row gap-4 ">
                                <Button onClick={()=> {props.onOk!()}}>{dictionary.other.access}</Button>

                                <Link href={props.url} onClick={()=> {props.onRegister!()}}>
                                    {dictionary.other.register}
                                </Link>
                                <Button onClick={()=>{props.onClose!()}}>{dictionary.form.cancel}</Button>
                           </div>
                       </ModalFooter>
                       
                       </>
               )

               }
           </ModalContent>
      
          
   </Modal> 
        </>
    )
}