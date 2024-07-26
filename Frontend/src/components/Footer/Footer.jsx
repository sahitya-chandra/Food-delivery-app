import { assets } from "../../assets/assets";




export default function Footer() {
    return (
    <div className="text-white bg-black flex flex-col items-center gap-5 py-5 px-[8vw] pt-20">
        <div className="w-full grid grid-cols-3 gap-20">
            <div className="flex flex-col items-start gap-5 ">
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti incidunt necessitatibus ipsum adipisci id quis, commodi cumque velit laboriosam natus alias eos qui ab nisi soluta quam rerum unde veniam.</p>
                <div className="flex w-10 gap-2 mr-[15px]">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="flex flex-col items-start gap-5">
                <h2 className="text-white">COMPANY</h2>
                <ul className="list-none mb-2.5 cursor-pointer">
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className="flex flex-col items-start gap-5">
                <h2 className="text-white">Get In Touch</h2>
                <ul className="list-none mb-2.5 cursor-pointer">
                    <li>+1-222-333-444</li>
                    <li>contact@gmail.com</li>
                </ul>
            </div>
        </div>
        <hr className="w-full h-0.5 my-5 mx-0 bg-grey-500" />
        <p>Copyright 2024 @ Tomato.com- All Rights Reserved</p>
    </div>
    )
}