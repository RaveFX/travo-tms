import React from 'react';

const product_card = () => {
    return (
        <div className='m-3'>
            <div className="w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
                <div className="md:flex items-center -mx-10">
                    <div className="w-full md:w-1/2 px-10 mb-10 md:mb-0">
                        <div className="relative">
                            <img src="https://pngimg.com/uploads/raincoat/raincoat_PNG53.png" className="w-full relative z-10" alt="" />
                            {/* <div className="border-4 border-green-200 absolute top-10 bottom-10 left-10 right-10 z-0"></div> */}
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 px-10 bg-gray-100 py-4 px-6 mb-4">
                        <div className='m-4'>
                            <div className="mb-6">
                                <h1 className="font-bold uppercase text-2xl mb-5">Product ID:58</h1>
                                <p className="text-sm">Stay dry and stylish with our high-performance waterproof jacket. Engineered with cutting-edge waterproofing technology, it repels rain while maintaining breathability. Its sleek design and durable construction make it a must-have for outdoor enthusiasts. Conquer the elements in confidence and comfort, wherever your adventures take you.<a href="#" className="opacity-50 text-gray-900 hover:opacity-100 inline-block text-xs leading-none border-b border-gray-900">MORE <i className="mdi mdi-arrow-right"></i></a></p>
                            </div>
                            <div className='m-6'>
                                <p className="text-sm"><b>Name:</b> WATERPROOF JACKET</p>
                                <p className="text-sm"><b>Price:</b> Rs.4000.00</p>
                                <p className="text-sm"><b>Color:</b> Red,White,Yellow</p>
                                <p className="text-sm"><b>Quantity:</b> 23</p>
                                <p className="text-sm"><b>Quantity:</b> 23</p>
                            </div>
                            <div>
                                <div className="inline-block align-bottom m-2">
                                    <button className="bg-blue-300 opacity-75 hover:opacity-100 text-gray-900 hover:text-gray-900 rounded-full px-10 py-2 font-semibold"><i className="mdi mdi-cart -ml-2 mr-2"></i>Edit</button>
                                    <button className="bg-red-300 opacity-75 hover:opacity-100 text-gray-900 hover:text-gray-900 rounded-full px-10 py-2 font-semibold"><i className="mdi mdi-cart -ml-2 mr-2"></i>Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default product_card;
