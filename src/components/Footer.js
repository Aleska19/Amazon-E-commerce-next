import Link from "next/link";
import Logo from "./Logo";
import Image from "next/image";

const Footer = () => {
    return (

        <footer class="bg-dark w-full h-64 rounded-sm shadow-sm  ">
            <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div class="sm:flex sm:items-center sm:justify-between">
                    <Link href="/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <Image src={"/imagen/simbolo_amazon.png"} alt = {"simbolo naranja amazon"} width={120} height ={140}/>
                    </Link>
                    <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-light sm:mb-0">
                        <li>
                            <Link href="/about" class="hover:border-b-2 hover:pb-2 hover:border-secondary me-4 md:me-6 ">About</Link>
                        </li>
                        <li>
                            <Link href="#" class="hover:underline me-4 md:me-6">Privacy Policy</Link>
                        </li>
                        <li>
                            <Link href="#" class="hover:underline me-4 md:me-6">Licensing</Link>
                        </li>
                        <li>
                            <Link href="#" class="hover:underline">Contact</Link>
                        </li>
                    </ul>
                </div>
                <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <Link href="https://flowbite.com/" class="hover:underline">Flowbite™</Link>. All Rights Reserved.</span>
            </div>
        </footer>



    )
}

export default Footer;
