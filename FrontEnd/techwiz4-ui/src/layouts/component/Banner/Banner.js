function Banner() {
    return (
        <div className="flex flex-col justify-center items-center h-80 bg-red-200">
            <div className="flex flex-col justify-start items-center font-bold text-4xl  text-white">
                <span>New Outerwear Colection</span>
                <br />
                <span>Colection</span>
            </div>
            <div>
                <button className="border border-solid h-12 w-40 rounded-3xl mt-6 font-bold text-2xl  text-white">
                    Shop Now
                </button>
            </div>
        </div>
    );
}

export default Banner;
