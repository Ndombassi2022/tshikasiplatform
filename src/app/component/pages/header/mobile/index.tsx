import { motion, useCycle } from "framer-motion";
import { usePathname } from "next/navigation"
import { MutableRefObject, ReactNode, useEffect, useRef } from "react";
import { SIDE_MENU_NAV_ITEMS } from "../../side-menu/side-menu-system";
import Link from "next/link";


const sidebar = {
    open: (height = 1000) => ({
        clipPath: `circle(${height * 2 + 200}px at 100% 0)`,
        transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2,
        }
    }),

    closed : {
        clipPath: "circle(0px at 100% 0)",
        transition: {
            type: "spring",
            stiffness: 400,
            damping: 40,
        }
    }
}

const variants = {
    open: {
        transition : {staggerChildren : 0.02, delayChildren: 0.15}
    },
    closed: {
        transition: {staggerChildren: 0.01, staggerDirection: -1}
    }
}
const MenuItemvariants = {
    open: {
        y:0,
        opacity:1,
        transition : {y: {stiffness: 1000}, velocity: -100}
    },
    closed: {
        y:50,
        opacity:0,
        transition: {y: {stiffness: 1000}, duration: 0.02}
    }
}



export const  HeaderMobile = () => {
    const pathname = usePathname();
    const constainerRef = useRef(null);
    const {height } = useDimensions(constainerRef);
    const [isOpen , toogleOpen] = useCycle(false, true);
    



    return (
       <motion.nav
        initial={false}
        animate={isOpen ? "open": "closed"}
        custom={height}
        ref={constainerRef}
        className={`fixed inset-0 z-50 w-full md:hidden ${isOpen ? "": "pointer-events-none"}`}
       >

         <motion.div className="absolute inset-0 right-0 w-full bg-white" variants={sidebar}/>

         <motion.ul  className="absolute inset-0 right-0 w-full gap-10 py-16" variants={variants}>

            {SIDE_MENU_NAV_ITEMS.map((item , index ) => {
                return(
                    <div>
                         {item.subMenu ? ( 
                            <MenuItem ></MenuItem> ): (
                             
                                <MenuItem >
                                    <Link 
                                      href={item.path}
                                        onClick={() => toogleOpen()}
                                        className={`flex w-full textt-2xl ${item.path === pathname ? "font-bold" : ""}`}
                                    >

                                    </Link>
                                </MenuItem>
                             ) 
                            
                        }
                    </div>
                );
            })}

         </motion.ul>
       </motion.nav>
    )
}

const MenuItem = ({className, children}: {className?: string, children?: ReactNode}) => {
    return(
        <motion.li variants={MenuItemvariants} className={className}>
            {children}
        </motion.li>
    )
}

const  useDimensions = (ref: any) => {

    const dimensions = useRef({with: 0, height: 0});

    useEffect(() => {
        if(ref.current){
            dimensions.current.with = ref.current.offsetWidth;
            dimensions.current.height = ref.current.offsetHeight;
        }
    },[ref]);

    return dimensions.current;
}

