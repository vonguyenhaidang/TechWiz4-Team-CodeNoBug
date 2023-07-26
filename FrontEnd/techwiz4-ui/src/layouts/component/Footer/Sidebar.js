const Sidebar = () => {
    return ( 
        <div className="text-center flex my-6">
                    <div className="h-12 w-80 basis-1/3  font-bold text-2xl  mt-6 text-black">
                    <button className="h-12 w-12 border border-solid rounded-3xl mt-6 bg-yellow-700">
                    </button>
                    <div>Free Shipping and Returns</div>
                    </div>
                    <div className="h-12 w-80 basis-1/3 font-bold text-2xl mt-6  text-black">
                    <button className="h-12 w-12 border border-solid rounded-3xl mt-6 bg-yellow-700">
                    </button>
                    <div> Secured Payments</div>
                    </div>
                    <div className="h-12 w-80 basis-1/3 font-bold text-2xl mt-6  text-black">
                    <button className="h-12 w-12 border border-solid rounded-3xl mt-6 bg-yellow-700">
                    </button>   
                    <div>Customer Service</div>
                    </div>
            </div>
     );
}
 
export default Sidebar;