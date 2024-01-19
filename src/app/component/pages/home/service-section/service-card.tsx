import { ReactNode } from "react"
import { Bs1SquareFill } from "react-icons/bs";

type ServiceCardProps = {
    service: {
        icon: ReactNode;
        description: string;
        details: string;
    }
}



export const ServiceCard = ({service}:ServiceCardProps)=>{
    return(
            <div className=" justify-center items-center py-8 rounded-lg bg-gray-600/20 text-gray-500 flex flex-col hover:text-emerald-500 hover:bg-gray-400/30 transition-all">
                <div className="w-16  flex h-16 my-[-60px] justify-center items-center bg-green-300 rounded-full">
                    <div className="w-14  flex h-14 my-[-60px] justify-center items-center bg-gray-700 rounded-full">
                        <div className="items-center justify-center font-extrabold text-neutral-50 text-4xl">
                            {service.icon}
                        </div>
                    </div>
                </div>
                <p className=" pb-3 py-20 p-4 flex items-center text-yellow-50 font-bold text-base ">{service.description}</p>
                <span className="py-2 px-4 pb-6 ps-4 text-gray-400 overflow-hidden ">{service.details}</span>
               
            </div>
    )
}