function Footer() {
    return (
        <>
            <hr className="mt-6"/>
            <div className="flex flex-row w-full mt-20 bg-slate-400">
                <div className="basis-1/6 px-4 py-4 m-0 items-center w-full">
                    <ul className=" flex flex-col gap-8 text-2xl font-semibold">
                        <li className="px-0 cursor-pointer">Home:</li>
                        <li className="px-0 cursor-pointer ">Store: </li>
                        <li className="px-0 cursor-pointer">About:</li>
                        <li className="px-0 cursor-pointer">Block:</li>
                        <li className="px-0 cursor-pointer">Point of Sale: </li>
                    </ul>
                </div>
                <div className="basis-1/3 px-0 m-0 items-left w-full">
                    <ul className="flex flex-col gap-8 text-2xl font-semibold">
                        <li className="px-6 cursor-pointer ">www.abc.com.vn</li>
                        <li className="px-6 cursor-pointer ">02 Nguyen Dinh Chi, Phu Nhuan</li>
                        <li className="px-6 cursor-pointer text-transparent"> abc </li>
                        <li className="px-6 cursor-pointer">+84 0000-0000</li>
                        <li className="px-6 cursor-pointer">aptecthsaigon@gmail.com</li>
                    </ul>
                </div>
                <div className="basis-1/3 px-0 m-0 items-center w-full">
                    <div className="flex flex-col justify-start item-start px-0 m-0 h-60 text-2xl font-semibold">
                        <span className="px-8 py-4">Shipping & Return</span>
                        <span className="px-8 py-4">F&Q</span>
                        <div className="flex flex-row">
                            <span className="px-8 py-4">Twitter</span>
                            <span className="px-8 py-4">Facebook</span>
                            <span className="px-8 py-4">Instagram</span>
                        </div>
                    </div>
                </div>
                <div className="basis-1/6 px-2 m-0 items-center w-full">
                    <div className="flex flex-col justify-center items-start">
                        <span className="text-2xl font-bold mb-6">Receive all our news and updates</span>
                        <input className="w-full h-12 mb-6 font-bold text-xl" type="text" placeholder="Email address" />
                        <button className="w-full h-16 bg-yellow-700 mb-6 text-xl font-bold text-white" type="button">Subscribe Now</button>
                    </div>
    
                </div>
            </div>
        </>
    );
}

export default Footer;
