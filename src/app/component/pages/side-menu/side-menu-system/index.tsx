import {Icon} from "@iconify/react"


export type SideMenuSistemNavItem= {
    title: string;
    path: string;
    icon?: JSX.Element;
    subMenu?: boolean;
    subMenuItems?: SideMenuSistemNavItem[];
}

export type SideMenuSistemNavItemProps = {
    item : SideMenuSistemNavItem;
    toogleOpen : () => void;
}

export const SIDE_MENU_NAV_ITEMS: SideMenuSistemNavItem[] = [
    {
        title: "Home",
        path: "",
        icon: <Icon icon="lucide:home" width="24" height="24"/>
    },
    {
        title: "Genrenciamento",
        path: "",
        icon: <Icon icon="lucide:folder" width="24" height="24"/>,
        subMenu: true,
        subMenuItems: [
            {title: "Submenu 1",path: ""},
            {title: "Submenu 2",path: ""},
            {title: "Submenu 3",path: ""},
            {title: "Submenu 4",path: ""},
        ]
    },
    {
        title: "Producao",
        path: "",
        icon: <Icon icon="lucide:settings" width="24" height="24"/>,
        subMenu: true,
        subMenuItems: [
            {title: "Submenu 1",path: ""},
            {title: "Submenu 2",path: ""},
            {title: "Submenu 3",path: ""},
            {title: "Submenu 4",path: ""},
        ]
    }
]