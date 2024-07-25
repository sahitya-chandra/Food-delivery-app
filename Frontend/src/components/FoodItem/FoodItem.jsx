import { useState } from "react";
import { assets } from "../../assets/assets";



export default function FoodItem({id, name, price, description, image}) {

    const [itemCount, setItemCount] = useState(0)

    return (
    <div className="w-full m-auto rounded-[15px] shadow-md animate-fade">
        <div className="relative">
            <img src={image} className="w-full rounded-t-2xl rounded-b-none"/>
            {!itemCount
                ?<img className="w-[35px] absolute bottom-4 right-4 cursor-pointer rounded-[50%]" src={assets.add_icon_white} onClick={() => setItemCount(prev=>prev+1)}/>
                :<div className="absolute bottom-4 right-4 flex items-center gap-2.5 p-1.5 rounded-[50px] bg-white">
                    <img onClick={() => setItemCount(prev=>prev-1)} src={assets.remove_icon_red} className="w-[30px]"/>
                    <p>{itemCount}</p>
                    <img onClick={() => setItemCount(prev=>prev+1)} src={assets.add_icon_green} alt="" />
                </div>
            }
        </div>
        <div className="p-5"> 
            <div className="flex justify-between items-center mb-2.5">
                <p className="text-xl font-medium">{name}</p>
                <img src={assets.rating_starts} alt="" className="w-[70px]"/>
            </div>
            <p className="text-xs text-[#676767]">{description}</p>
            <p className="text-amber-600 text-xl font-medium my-2.5 mx-0">${price}</p>
        </div>
    </div>
    )
}