import Logo from "./Logo";
import Menu from "./Menu";
import Search from "./Search";
import Cart from "./Cart";


const Navbar = () =>{
    return(
        <header className="w-full h-24 fixed top-0 z-10   shadow-lg border-b border-gray-200 bg-primary">
            <div className=" container m-auto p-0 pr-5 pl-5 flex flex-row justify-between items-center">
                <Logo/>
                <div className="flex flex-row gap-5 items-center ">
                    <Menu/>
                    <Cart/>
                </div>
            </div>
        </header>
    )
}

export default Navbar;