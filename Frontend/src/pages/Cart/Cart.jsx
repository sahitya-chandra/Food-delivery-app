import { useContext } from "react"
import { StoreContext } from "../../context/StoreContext"
import { useNavigate } from "react-router-dom"


export default function Cart() {

    const {cartItems, food_list, removeFromCart, getTotalCartAmount } = useContext(StoreContext)

    const navigate = useNavigate();

    return (
    <div className="mt-[100px]">
        <div >
            <div className="grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center text-grey-400 text-custom-2">
                <p>Items</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <br />
            <hr />

            {food_list.map((item, index) => {
                if(cartItems[item._id]>0) {
                    return (
                    <div>
                        <div className="grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center text-grey-400 text-custom-2 my-2.5 text-black-600">
                            <img src={item.image} alt="" className="w-[50px]"/>
                            <p>{item.name}</p>
                            <p>${item.price}</p>
                            <p>{cartItems[item._id]}</p>
                            <p>${item.price*cartItems[item._id]}</p>
                            <p onClick={()=>removeFromCart(item._id)} className="cursor-pointer">x</p>
                        </div>
                        <hr className="h-[1px] bg-[#e2e2e2] border-none"/>
                    </div>
                )}
            })}
        </div>
        <div className="mt-[80px] mb-10 flex justify-between gap-20">
            <div className="flex-[1_0_0%] flex flex-col gap-5">
                <h2>Cart Totals</h2>
                <div>
                    <div className="flex justify-between text-[#555]">
                        <p>Subtotal</p>
                        <p>${getTotalCartAmount()}</p>
                    </div>
                    <hr className="my-2.5"/>
                    <div className="flex justify-between text-[#555]">
                        <p>Delivery Fee</p>
                        <p>${getTotalCartAmount()===0?0:2}</p>
                    </div>
                    <hr className="my-2.5"/>
                    <div className="flex justify-between text-[#555]">
                        <b>Total</b>
                        <b>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
                    </div>
                </div>
                <button onClick={()=>navigate('/order')} className="border-none text-white bg-orange-500 w-custom-6 py-3 rounded cursor-pointer ">PROCEED TO CHECKOUT</button>
            </div>
            <div className="flex-[1_0_0%}">
                <div>
                    <p className="text-[#555]">If you have a promo code, Enter it here</p>
                    <div className="mt-2.5 flex justify-between items-center bg-[#eaeaea] rounded">
                        <input type="text" placeholder="promo code" className="bg-transparent border-none outline-none pl-2.5"/>
                        <button className="w-custom-7 py-3 px-[5px] bg-black border-none text-white rounded ">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
)}