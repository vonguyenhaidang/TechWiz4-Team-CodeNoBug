import DavidLuke from '../../image/David-Luke.png';

function Item({ id, price, productName }) {
    return (  
        <div className='w-full flex flex-col items-center border-[1px] border-gray-100 bg-white rounded-lg hover:drop-shadow-xl'>
            <div className="h-5/6 py-12"><img src={DavidLuke} alt='' className="border  h-full"/></div>
            <div className='h-1/6 place-items-center flex flex-row w-5/6'>
                <div className='flex flex-col basis-2/3'>
                    <div className=' text-left text-3xl'> {productName}</div>
                    <div className=' text-left text-3xl' >${price}</div>
                </div>
                <button className="border border-solid border-lime-500 text-lime-500 rounded-3xl mt-6 text-3xl font-bold basis-1/3">
                ADD    </button>
            </div>
        </div>
    );
}

export default Item;