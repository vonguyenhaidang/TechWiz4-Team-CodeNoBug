function Footer() {
    return (
        <div className="flex flex-row w-full mt-16">
            <nav className="basic-1/6 px-0 m-0 items-center">
                <ul className="flex flex-col  gap-8 text-2xl font-bold">
                    <li className="px-0 py-0.5 cursor-pointer ">Home</li>
                    <li className="px-0 py-0.5 cursor-pointer ">Store</li>
                    <li className="px-0 py-0.5 cursor-pointer">About</li>
                    <li className="px-0 py-0.5 cursor-pointer">Block</li>
                    <li className="px-0 py-0.5 cursor-pointer">Point of Sale</li>
                </ul>
            </nav>
            <div className="basic-2/6 px-0 m-0 items-center">
                <ul className="flex flex-col  gap-8 text-2xl font-bold">
                    <li className="px-6 py-0.5 cursor-pointer ">www.abc.com.vn</li>
                    <li className="px-6 py-0.5 cursor-pointer ">02 Nguyen Dinh Chi, Phu Nhuan, HCMjhggggjhjhjhhjjh</li>
                    <li className="px-6 py-0.5 cursor-pointer text-transparent"> abc </li>
                    <li className="px-6 py-0.5 cursor-pointer">+84 0000-0000</li>
                    <li className="px-6 py-0.5 cursor-pointer">aptecthsaigon@gmail.com</li>
                </ul>
            </div>
            <div className="basic-2/6 px-0 m-0 items-center">
                <div className="flex flex-col justify-start item-start px-0 m-0 h-60 text-2xl font-bold">
                    <span className="px-8 py-4">Shipping & Return</span>
                    <span className="px-8 py-4">F&Q</span>
                    <div className=" flex flex-rows">
                        <span className="px-8 py-4">Twitter</span>
                        <span className="px-8 py-4">Facebook</span>
                        <span className="px-8 py-4">Instagram</span>
                    </div>
                </div>
            </div>
            <div className="basic-1/6 px-0 m-0 items-center">
                <div className="flex flex-col justify-center items-start">
                    <span className="text-2xl font-bold mb-6">Receive all our news and updates</span>
                    <input className="w-full h-12 mb-6" type="text" />
                    <button className="border-2 w-full h-16 border-orange-500 mb-6 text-xl font-bold" type="button">Subscribe Now</button>
                </div>

            </div>
        </div>
    );
}

export default Footer;
