import mockData from "@/data/products.json";
import ProductCard from "@/components/ProductCard.js"




export  function generateMetadata({params, searchParams}, parent){
    const {category} = params;
    return { 
        title: category.toUpperCase().replaceAll("-", " ") + " | Amazon Argentina" 
    }
}


const Products = async({params}) =>{
    const {category} =  params;
    // console.log(category)
    // console.log(mockData)

    const items = category === "all"  ? mockData : mockData.filter(item => item.category === category);
    console.log(items)



    return(
        <section className="flex flex-col sm:flex-row items-center justify-center  text-dark">
            {
                items.map(item => (
                    <ProductCard key={item.id} item={item}/>
                ))
            }

        
        </section>
    )
}

export default Products;
