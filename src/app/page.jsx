import Image from "next/image";
import Products from "./products/[category]/page.jsx";
import Posts from "@/lib/Posts";
import ProductList from "@/components/ProductList.js";
import Footer from "@/components/Footer.js";
import ContactForm from "@/components/ContactForm.js";


export default function Home() {

  // const params = { category: "electronics" }; 
  return (
    
     <div className="flex flex-col mt-48 justify-center items-center pb-10">
      {/* <h3 className=" text-center text-secondary  font-bold text-7xl ">Welcome to Amazon</h3> */}
      {/* <Products params={params} /> */}
      {/* <ProductList category={"electronics"}/> */}
      <ContactForm/>
      
      
      

     </div> 

     
  );
}
