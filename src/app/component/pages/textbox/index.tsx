import { cn } from "@/app/lib/utils"
import { InputHTMLAttributes } from "react"

type TextboxProps = InputHTMLAttributes<HTMLInputElement>
export const Textbox = ({children, className, ...props}: TextboxProps) => {
    return (
        <input className={cn('w-full h-14 bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-2 ring-emerald-600',className)} {...props}>
            {children}
        </input>
    )
}