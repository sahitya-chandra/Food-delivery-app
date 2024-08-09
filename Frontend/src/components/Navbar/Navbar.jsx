import { useState } from "react"
import { assets } from "../../assets/assets"

export const Navbar = ({setShowLogin}) => {

    const [menu, setMenu] = useState("");

    return (
    <div className="py-[20px] px-0 flex justify-between items-center">
        <img src={assets.logo} alt="" className="w-[150px]" />
        <ul className="flex list-none gap-5 text-stone-700 text-lg font-sans cursor-pointer">
            <li onClick={() => setMenu("home")} className={menu==="home"?"pb-[2px] underline underline-offset-1 decoration-teal-500":""}>Home</li>
            <li onClick={() => setMenu("menu")} className={menu==="menu"?"pb-[2px] underline underline-offset-1 decoration-teal-500":""}>Menu</li>
            <li onClick={() => setMenu("mobile-app")} className={menu==="mobile-app"?"pb-[2px] underline underline-offset-1 decoration-teal-500":""}>Mobile-app</li>
            <li onClick={() => setMenu("contact-us")} className={menu==="contact-us"?"pb-[2px] underline underline-offset-1 decoration-teal-500":""}>Contact us</li>
        </ul>
        <div className=" flex item-center gap-10 ">
            <img src={assets.search_icon} alt="" />
            <div>
                <img src={assets.basket_icon} alt="" />
                <div className="absolute min-w-[10px] min-h-[10px] bg-red-600 rounded-[10px] top-[12px] right-[255px]"></div>
            </div>
            <button onClick={()=>setShowLogin(true)} className="bg-transparent hover:bg-slate-200 text-base text-indigo-700 border-solid border-2 border-black py-px px-[20px] rounded-[20px] cursor-pointer">sign in</button>
        </div>
    </div>
    )
}