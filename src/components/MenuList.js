import Link from "next/link";
import Search from "./Search";
import { XMarkIcon } from "@heroicons/react/24/outline";

const MenuList = ({open, handleClose}) =>{
    return(
        <div 
          className={`${open ? 'opacity-100 visible' : 'invisible opacity-0'}
          transition-all fixed inset-0 bg-black/80 flex justify-end p-5 `}
        >
            <aside className={`${!open ? 'translate-x-48' : ' '} transition-all  w-68   `}  >
                <div onClick={handleClose} className="text-white  p-5 flex justify-end cursor-pointer   ">
                    <XMarkIcon className="w-8 h.8 text-secondary stroke-3"/>
                </div>

                <nav className="flex flex-col gap-3 h-screen px-5 mt-4">
                    <Search/>
                    <Link href="/" className="text-white text-center p-2 hover:bg-white/10  hover:border-b-2 hover:border-secondary pb-1 transition " >Inicio</Link>
                    <a href="#" className="text-white text-center p-2 hover:bg-white/10  hover:border-b-2 hover:border-secondary pb-1 transition " >Electronics</a>
                    <a href="#" className="text-white text-center p-2 hover:bg-white/10  hover:border-b-2 hover:border-secondary pb-1 transition " >Women</a>
                    <a href="#" className="text-white text-center p-2 hover:bg-white/10  hover:border-b-2 hover:border-secondary pb-1 transition " >Men</a>
                    <a href="#" className="text-white text-center p-2 hover:bg-white/10  hover:border-b-2 hover:border-secondary pb-1 transition " >Unisex</a>
                    <a href="#" className="text-white text-center p-2 hover:bg-white/10  hover:border-b-2 hover:border-secondary pb-1 transition " >Unisex</a>
                    <a href="#" className="text-white text-center p-2 hover:bg-white/10  hover:border-b-2 hover:border-secondary pb-1 transition " >Unisex</a>
                </nav>
            </aside>
        </div>
    )
}

export default MenuList;