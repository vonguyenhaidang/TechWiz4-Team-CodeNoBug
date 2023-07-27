import Item from '../../../component/Items';

function NewProduct() {
    return (
        <div className="w-full">
            <div>
                <p className="text-center font-bold text-2xl mt-32 ">NEWEST PRODUCTS</p>
                <div className="flex justify-between items-center bg-white-600 py-16">
                    <Item />
                    <Item />
                    <Item />
                </div>
                <div className="text-center ">
                    <button className="h-12 w-40 border border-solid border-black rounded-3xl font-bold text-2xl mt-32 mt-6  text-black">
                        Show All
                    </button>
                </div>
            </div>
        </div>
    );
}

export default NewProduct;
