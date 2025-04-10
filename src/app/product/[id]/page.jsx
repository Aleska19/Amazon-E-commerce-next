import ProductDetails from "@/components/ProductDetails";


export default async function Product({params}){
    const {id} = await params;

    return(
        <div className="flex">
            <ProductDetails id={id}/>
        </div>
    )
}