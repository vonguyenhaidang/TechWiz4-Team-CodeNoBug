import DavidLuke from '../../image/David-Luke.png';


function Item() {
    console.log(DavidLuke)
    return (  
        <div className='w-custom-width-item h-custom-height-item bg-slate-50 flex flex-col items-center'>
            <div className="h-5/6 py-12"><img src={DavidLuke} alt='' className="border border-1 border-black h-full"/></div>
            <div className='h-1/6 place-items-center flex flex-row w-5/6'>
                <div className='flex flex-col basis-2/3'>
                    <div className=' text-left text-3xl'> Tên sản phẩm</div>
                    <div className=' text-left text-3xl' >$140.00</div>
                </div>
                <button className="border border-solid border-lime-500 text-lime-500 rounded-3xl mt-6 text-3xl font-bold basis-1/3">
                ADD    </button>
            </div>
        </div>
    );
}

export default Item;