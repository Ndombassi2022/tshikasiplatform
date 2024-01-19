import { cn } from "@/app/lib/utils"
import { SelectHTMLAttributes } from "react"

type ComboboxProps = SelectHTMLAttributes<HTMLSelectElement>
export const Combobox = ({children, className, ...props}: ComboboxProps) => {
    return (
        <select className={cn('w-full h-14 bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-2 ring-emerald-600',className)} {...props}>
            {children}
        </select>
    )
}