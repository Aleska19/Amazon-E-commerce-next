"use client"
import Image from "next/image"

const ProductCard = ({item} ) =>{
    return(
        <div className="flex flex-col justify-between items-center bg-white rounded-lg shadow-lg p-4 m-4 w-72 h-150 hover:scale-105 transition-transform duration-300 ease-in-out">
            <div>
               <Image src={"/imagen/" + item.imagen} alt={item.title} width={130} height={130} className="rounded-lg mb-4"/>
            </div>
            
            <div className="p-3">
               <h2 className="text-lg font-semibold text-dark mb-2">{item.title}</h2>
               <p className="text-bold ">{item.price}</p>
            </div>
        </div>
    )
}

export default ProductCard;