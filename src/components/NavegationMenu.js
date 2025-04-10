import mockData from "@/data/products.json";
import Link from "next/link";

const NavegationMenu = ({ category }) => {
    const categories = [];

    for (const element of mockData){
        if(element.category !== category){
            if (!categories.includes(element.category)) {
                categories.push(element.category);
            }
        }
    }

    // const categories = category 
    //     ? mockData.filter(item => item.category !== category) 
    //     : mockData;

    return (
        <div className="">
            {
                categories.map(item => (
                    <Link 
                
                        href={"/products/" + item} 
                        className="text-dark text-center p-2 hover:bg-white/10 hover:border-b-2 hover:border-secondary pb-1 transition">
                        {item}
                    </Link>
                ))
            }
        </div>
    );
};



export default NavegationMenu;