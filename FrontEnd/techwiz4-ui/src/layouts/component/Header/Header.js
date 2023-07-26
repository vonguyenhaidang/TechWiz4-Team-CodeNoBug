function Header() {
    return (
        <header className="w-full">
            <nav className="flex flex-row justify-between px-0 m-0 h-60 items-center">
                <div className="logo basis-2/6 text-center font-bold text-2xl">GIOVANNI</div>
                <ul className="flex flex-row basis-3/6 justify-end gap-8 text-lg font-bold">
                    <li className="px-6 py-3 cursor-pointer">Home</li>
                    <li className="px-6 py-3 cursor-pointer">Store</li>
                    <li className="px-6 py-3 cursor-pointer">About</li>
                    <li className="px-6 py-3 cursor-pointer">Point of Sale</li>
                </ul>
                <ul className="basis-1/6 flex ml-8 text-lg font-bold">
                    <li>Cart</li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
