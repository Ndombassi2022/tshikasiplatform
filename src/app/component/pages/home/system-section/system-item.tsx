
import Image from "next/image"
import Link from "next/link";

type SystemItemProps = {
    description: string;
    details:string;
    urlImage:string;
    href: string;
    language:string
}

export const SystemItem = (props: SystemItemProps) =>{
    return (
        <div className="grid grid-cols-[100px,1fr] gap-4 md:gap-10">
           
            <div className="flex flex-col items-center gap-4">
                <div className="rounded-full border border-gray-500 p-0.5">
                    <Image src={props.urlImage} alt={""} width={100} height={100} className="rounded-full"/>
                </div>
                <div className="h-full w-[2px] bg-gray-800">

                </div>
            </div>
            <div className="flex flex-col gap-2 text-sm sm:text-base">
                
                <h4 className="text-gray-300">{props.description}</h4>
                <span>{props.details}  </span>

                <Link href={props.language+"/"+props.href}  className="text-gray-500 hover:text-emerald-500 transition-colors mb-10 mt-3">
                    Acess
                </Link>
            </div>
        </div>
        
    )
}