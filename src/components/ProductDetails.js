"use client"

import mockData from "@/data/products.json";
import Image from "next/image";

const ProductDetails = ({ id }) =>{
    const product = mockData.find(item => item.id === Number(id));
    console.log(product)

    return(
        <section className="flex flex-col sm:flex-row items-center justify-center text-dark">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 justify-between items-center bg-white rounded-lg shadow-lg p-6 m-6 w-50 h-screen ">
                <div>
                    <Image src={"/imagen/" + product.imagen} alt = {product.title} width={500} height ={500} className="rounded-lg mb-4"/>
                </div>
                <div className="p-3">
                    <h2 className="text-lg font-semibold text-dark mb-2">{product.title}</h2> 
                    <p className="font-light text-dark mb-2">{product.description}</p>
                    <p className="font-bold text-dark mb-2">{product.price}</p>

                </div>

            </div>
        </section>
    )
}

export default ProductDetails;