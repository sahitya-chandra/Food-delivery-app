import { assets } from "../../assets/assets"
import { useState } from "react"


export default function LoginPopup({setShowLogin}) {

    const [currState, setCurrState] = useState("Sign Up")

    return (
    <div className="absolute z-[1] w-full h-full grid">
        <form className="place-self-center w-custom-4 text-[#808080] bg-white flex flex-col gap-[25px] py-[25px] px-[30px] rounded-lg text-sm animate-fade">
            <div className="flex justify-between items-center text-black">
                <h2>{currState}</h2>
                <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" className="w-4 cursor-pointer"/>
            </div>
            <div className="flex flex-col gap-5 ">
                {currState==="Login"?<></>:<input className="outline-none border-2 border-[#c9c9c9 border-solid p-2.5 rounded"  type="text" placeholder="Your Name" required />}
                <input className="outline-none border-2 border-[#c9c9c9 border-solid p-2.5 rounded" type="email" placeholder="Your Email" required />
                <input className="outline-none border-2 border-[#c9c9c9 border-solid p-2.5 rounded" type="password" placeholder="Password" required />
            </div>
            <button className="border-none p-2.5 rounded text-white bg-orange-500 text-sm cursor-pointer">{currState==="Sign Up"?"Create account":"Login"}</button>
            <div className="flex items-start gap-2 mt-[-15px]">
                <input className="mt-[5px]" type="checkbox" required/>
                <p >By continuing, i agree to the terms of use & privacy policy.</p>
            </div>
            {currState==="Login"?<p>Create a new account?<span onClick={()=>(setCurrState("Sign Up"))} className="text-orange-500 font-medium cursor-pointer ">Click here</span></p>:<p>Already have an account? <span onClick={()=>(setCurrState("Login"))} className="text-orange-500 font-medium cursor-pointer ">Login here</span></p>}
            
            
        </form>
    </div>
)}