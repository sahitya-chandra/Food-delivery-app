import { useContext } from "react"
import { StoreContext } from "../../context/StoreContext"


export default function PlaceOrder() {

    const {getTotalCartAmount} = useContext(StoreContext)

    return (
        <form className="flex justify-between items-start gap-20 mt-25 ">
            <div className=" w-full max-w-custom-5 ">
                <p classname="text-[30px] font-semibold mb-25 ">Delivery Information</p>
                <div className="flex gap-2.5">
                    <input className="mb-[15px] w-full p-2.5 border border-solid border-[#c5c5c5] rounded outline-orange-500" type="text" placeholder="First name"/>
                    <input className="mb-[15px] w-full p-2.5 border border-solid border-[#c5c5c5] rounded outline-orange-500" type="text" placeholder="Last name" />
                </div>
                <input className="mb-[15px] w-full p-2.5 border border-solid border-[#c5c5c5] rounded outline-orange-500" type="email" placeholder="Email Address" />
                <input className="mb-[15px] w-full p-2.5 border border-solid border-[#c5c5c5] rounded outline-orange-500" type="text" placeholder="street" />
                <div className="flex gap-2.5">
                    <input className="mb-[15px] w-full p-2.5 border border-solid border-[#c5c5c5] rounded outline-orange-500" type="text" placeholder="City"/>
                    <input className="mb-[15px] w-full p-2.5 border border-solid border-[#c5c5c5] rounded outline-orange-500" type="text" placeholder="State" />
                </div>
                <div className="flex gap-2.5">
                    <input className="mb-[15px] w-full p-2.5 border border-solid border-[#c5c5c5] rounded outline-orange-500" type="text" placeholder="Country"/>
                    <input className="mb-[15px] w-full p-2.5 border border-solid border-[#c5c5c5] rounded outline-orange-500" type="text" placeholder="Zip Code" />
                </div>
                <input className="mb-[15px] w-full p-2.5 border border-solid border-[#c5c5c5] rounded outline-orange-500" type="text" placeholder="Phone " />
            </div>
            <div className="w-full max-w-custom-5">
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
                <button className="border-none text-white bg-orange-500 w-custom-6 py-3 rounded cursor-pointer mt-7.5">PROCEED TO PAYMENT</button>
                </div>
            </div>
        </form>
   
)}