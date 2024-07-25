import { menu_list } from "../../assets/assets"
import "./ExploreMenu.css"


export default function ExploreMenu({ category, setcategory }) {


    return (
    <div className=" flex flex-col gap-[20px]">
        <h1 className=" text-[#262626] font-medium">Explore menu</h1>
        <p className="max-w-[50%] columns-1">Choose from a diverse menu featuring a detectable array of dishes crafted with the finest ingredients and curlinary expertise. Our mission is to satisfy your craving and elevate your dining experience one meal at a time.</p>
        <div className="flex justify-between items-center gap-[60px] text-center my-5 mx-0 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
            {menu_list.map((item, index) => {
                return (
                    <div onClick={() => setcategory(prev=>prev===item.menu_name?"All":item.menu_name)}  key={index} className="">
                        <img src={item.menu_image} alt="" className="w-[7.5vw] min-w-20 cursor-pointer rounded-[50%]" style={category===item.menu_name?{border: "4px solid tomato", padding: "2px"}:{}} />
                        <p className="mt-2.5 text-[#747474] text-custom-3 cursor-pointer">{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
        <hr className=" my-2.5 mx-0 h-[2px] bg-[#e2e2e2] border-none" />
    </div>
    )
} 