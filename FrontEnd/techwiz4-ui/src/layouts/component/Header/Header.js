function Header() {
    return (
        <header className="w-full">
            <nav className="flex flex-row justify-between px-0 m-0 h-60 items-center">
                <div className="logo basis-2/6 text-center font-bold text-4xl">GIOVANNI</div>
                <ul className="flex flex-row basis-3/6 justify-end gap-8 text-lg font-bold">
                    <li className="px-6 py-3 cursor-pointer text-3xl">Home</li>
                    <li className="px-6 py-3 cursor-pointer text-3xl">Store</li>
                    <li className="px-6 py-3 cursor-pointer text-3xl">About</li>
                    <li className="px-6 py-3 cursor-pointer text-3xl">Point of Sale</li>
                </ul>
                <ul className="basis-1/6 flex ml-8 font-bold text-3xl">
                    <li>Cart</li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
