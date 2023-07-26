


function Item() {
    return (  
        <div className='w-custom-width-item h-custom-height-item bg-slate-50 flex flex-col items-center'>
            <div className="h-2/3 py-12"><img src='#' alt='' className="border border-1 border-black h-full w-80 "/></div>
            <div className='font-bold text-center bottom-0'> Tên sản phẩm</div>
            <div className='font-bold text-center bottom-0' >$140.00</div>
        </div>
    );
}

export default Item;