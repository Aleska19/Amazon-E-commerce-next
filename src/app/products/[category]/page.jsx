import mockData from "@/data/products.json";
import ProductsCard from "@/components/ProductCard.js"




export async function generateMetadata({params, searchParamas}, parent){
    const {category} = await params;
    return { 
        title: category.toUpperCase().replaceAll("-", " ") + " | Amazon Argentina" 
    }
}


const Products = async({params}) =>{
    const {category} = await params;
    // console.log(category)
    // console.log(mockData)

    const items = category === "all"  ? mockData : mockData.filter(item => item.category === category);
    console.log(items)



    return(
        <section className="flex items-center justify-center  text-dark">
            {
                items.map(item => (
                    <ProductsCard key={item.id} item={item}/>
                ))
            }

        
        </section>
    )
}

export default Products;
