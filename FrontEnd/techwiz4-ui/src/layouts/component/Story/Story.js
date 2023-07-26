function Story() {
    return (
        <div className="w-full">
            <div className="flex flex-col">
                <div className="grid gap-16 grid-cols-2 grid-rows-1 my-8">
                    <div className="flex justify-center items-center h-custom-height-item bg-gray-400">
                        <span className="font-bold text-4xl  text-white">Out Store</span>
                    </div>
                    <div className="flex justify-center items-center h-custom-height-item bg-gray-400">
                        <span className="font-bold text-4xl  text-white">Out Block</span>
                    </div>
                </div>
                <div className="grid gap-4 grid-cols-3 grid-rows-1 my-8">
                    <div className="h-custom-height-item bg-slate-600">
                        <div className="flex justify-center items-center h-custom-height-item bg-gray-400">
                            <span className="font-bold text-4xl  text-white">Accestoires</span>
                        </div>
                    </div>
                    <div className="flex justify-center items-center h-custom-height-item bg-slate-600">
                        <span className="font-bold text-4xl  text-white">Accestoires</span>
                    </div>
                    <div className="flex justify-center items-center h-custom-height-item bg-slate-600">
                        <span className="font-bold text-4xl  text-white">Accestoires</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Story;
