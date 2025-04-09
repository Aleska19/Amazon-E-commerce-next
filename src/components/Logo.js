import Image from "next/image";
import Link from "next/link";

const Logo = () =>{
    return(
        <Link href={"/"}>
         <Image  src = {"/imagen/logo_inicio_amazon_white.png"} alt={"Logo amazon "} width={130} height={160}/>
        </Link>
    )
}

export default Logo;