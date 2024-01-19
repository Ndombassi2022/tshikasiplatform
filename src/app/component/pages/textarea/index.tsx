import { cn } from "@/app/lib/utils"
import { TextareaHTMLAttributes } from "react"

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>
export const Textarea = ({children, className, ...props}: TextareaProps) => {
    return (
        <textarea className={cn('resize-none w-full h-[138px] first-letter: bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-2 ring-emerald-6000',className)} {...props}>
            {children}
        </textarea>
    )
}