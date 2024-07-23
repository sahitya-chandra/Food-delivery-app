

export default function Header() {
    return (
    <div className=" h-[34vw] my-[30px] mx-auto bg-[url('/header_img.png')] bg-no-repeat bg-contain relative">
        <div className=" absolute flex flex-col items-start gap-y-4 max-w-[50%] bottom-[10%] left-[6vw] animate-fade ">
            <h2 className=" font-medium text-white text-custom">Order your favourite food here</h2>
            <p className=" text-white text-[1vw]">Choose from a diverse menu featuring a detectable array of dishes crafted with the finest ingredients and curlinary expertise. Our mission is to satisfy your craving and elevate your dining experience one meal at a time.</p>
            <button className=" border-none text-[#747474] font-meium py-[1vw] px-[2.3vw] bg-white text-custom-2 rounded-[50px]">View Menu</button>
        </div>
    </div>
    )
}