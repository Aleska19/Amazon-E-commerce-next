import ProductCard from "./ProductCard.js";

const ProductList = async ({ category }) => {
    const response = await fetch(`http://localhost:3000/api/products/${category}`, { cache: "no-store" });
    const items = await response.json();

    return (
        <section className="flex flex-col sm:flex-row items-center justify-center  text-dark">
            {
                items.map(item => (
                    <ProductCard key={item.id} item={item} />
                ))
            }


        </section>
    )



}

export default ProductList; 