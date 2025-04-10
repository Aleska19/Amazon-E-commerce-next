"use client"
import Image from "next/image";
import { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";




const Search = () => {
    const [searchOpen, setSearchOpen] = useState(false); 
    

    const toggleInput =() =>{
        setSearchOpen(!searchOpen);
    };

    return(
        <div className="relative flex   items-center justify-end pb-5">
            <div onClick={toggleInput} className="cursor-pointer">
                {/* <Image src = {"/imagen/icono_buscarProducto.png"} alt={"Barra de menu"} width={20} height={20} /> */}
                <MagnifyingGlassIcon className="w-8 h-8 text-secondary stroke-2 hover:cursor-pointer hover:text-light hover:scale-110"/>

              
            </div>

            <input
            type="text"
            placeholder="Buscar productos"
            className={`${searchOpen ? 'w-full sm:w-35 md:w-60 lg:w-80  opacity-100' : 'w-0 opacity-0 overflow-hidden'} absolute right-10 transition-all duration-300 ease-in-out bg-white/10 border-b border-b-secondary focus:outline-none border-3  px-3 py-1 text-md shadow text-white `}
            />


        </div>


    )
}

export default Search; 