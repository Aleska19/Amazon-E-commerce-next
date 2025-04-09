"use client"


import Image from "next/image";
import { useState } from "react";
import MenuList from "./MenuList";
import {Bars3Icon} from "@heroicons/react/24/outline";

const Menu = () =>{
    const [open, setOpen] =  useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return(
        <>
        <div onClick={handleOpen}>
            {/* <Image src = {"/imagen/menu_hamburguesa.png"} alt={"Barra de menu"} width={20} height={20} /> */}
            <Bars3Icon className="w-7 h-7 text-secondary stroke-2 hover:cursor-pointer hover:text-white hover:scale-110     "/>
        </div>
        <MenuList open={open} handleClose={handleClose}/>
        </>
    )
}

export default Menu;