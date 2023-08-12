// import React from 'react'
// import Travel_tent from '../../assets/travel_tent.jpg'

// import {
//     Card,
//     CardHeader,
//     CardBody,
//     CardFooter,
//     Typography,
//     Tooltip,
// } from "@material-tailwind/react";

// export default function Addadverisments() {
//     return (
//         <div className="flex p-4 ml-4">
//             {/* <div className="flex-1 flex flex-col items-center">

//                 <div className="mb-2">
//                     <img src={Travel_tent} alt="Product" className="max-w-full max-h-50" />
//                 </div>

//                 <div className="flex gap-2">
//                     <div className="w-4 h-4 rounded-full bg-red-500"></div>
//                     <div className="w-4 h-4 rounded-full bg-blue-500"></div>
//                     <div className="w-4 h-4 rounded-full bg-green-500"></div>

//                 </div>

//                 <div className="mt-2">
//                     $99.99
//                 </div>
//             </div> */}

//             <Card className="w-96">
//                 <CardHeader floated={false} className="h-80">
//                     <img src={Travel_tent} alt="profile-picture" />
//                 </CardHeader>
//                 <CardBody className="text-center">

//                 </CardBody>
//                 <CardFooter className="flex justify-center gap-7 pt-2">
//                     <div className="mb-2">
//                         <img src={Travel_tent} alt="Product" className="max-w-full max-h-50" />
//                     </div>

//                     <div className="flex gap-2">
//                         <div className="w-4 h-4 rounded-full bg-red-500"></div>
//                         <div className="w-4 h-4 rounded-full bg-blue-500"></div>
//                         <div className="w-4 h-4 rounded-full bg-green-500"></div>

//                     </div>
//                 </CardFooter>
//             </Card>

//             <div className="flex-2 pl-4">
//                 {/* Description */}
//                 <div className="text-m ">
//                     Advertisement type :     Store Advertisement
//                 </div>
//                 <div className="text-m ">
//                     Advertisement type :     Store Advertisement
//                 </div>
//                 <div className="text-m ">
//                     Advertisement type :     Store Advertisement
//                 </div>
//             </div>
//         </div>
//     )
// }


// import React from 'react';
// import Travel_tent from '../../assets/travel_tent.jpg';

// import {
//     Card,
//     CardBody,
//     CardFooter,
// } from "@material-tailwind/react";

// const AddAdverisments = () => {
//     return (
//         <div className="flex p-4 ml-4">
//             <Card className="w-96">
//                 <CardBody>
//                     {/* Product Image */}
//                     <img src={Travel_tent} alt="Product" className="max-w-full h-80" />
//                 </CardBody>
//                 <CardFooter className="flex items-center justify-between gap-4 p-2">
//                     {/* Price */}
//                     <div className="text-xl font-semibold">$99.99</div>
//                     {/* Color Dots */}
//                     <div className="flex gap-2">
//                         <div className="w-4 h-4 rounded-full bg-red-500"></div>
//                         <div className="w-4 h-4 rounded-full bg-blue-500"></div>
//                         <div className="w-4 h-4 rounded-full bg-green-500"></div>
//                     </div>
//                     {/* Rating */}
//                     <div className="flex items-center gap-1">
//                         <div className="text-yellow-400">&#9733;</div>
//                         <div className="text-yellow-400">&#9733;</div>
//                         <div className="text-yellow-400">&#9733;</div>
//                         <div className="text-yellow-400">&#9733;</div>
//                         <div className="text-gray-300">&#9733;</div>
//                     </div>
//                 </CardFooter>
//                 {/* Description Footer */}
//                 <CardFooter className="bg-gray-100 p-2">
//                     Advertisement description Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                 </CardFooter>
//             </Card>
//         </div>
//     );
// };

// export default AddAdverisments;



import React from 'react';
import Travel_tent from '../../assets/travel_tent.jpg';

import {
    Card,
    CardBody,
    CardFooter,
} from "@material-tailwind/react";

const AddAdverisments = () => {
    return (
        <div className='m-3'>
            <div className="w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
                <div className="md:flex items-center -mx-10">
                    <div className="flex p-4 ml-4">
                        <Card className="w-96">
                            <CardBody>
                                {/* Product Image */}
                                <img src={Travel_tent} alt="Product" className="max-w-full h-80" />
                            </CardBody>
                            <CardFooter className="flex items-center justify-between gap-4 p-2">
                                {/* Price */}
                                <div className="text-xl font-semibold">$99.99</div>
                                {/* Color Dots */}
                                <div className="flex gap-2">
                                    <div className="w-4 h-4 rounded-full bg-red-500"></div>
                                    <div className="w-4 h-4 rounded-full bg-blue-500"></div>
                                    <div className="w-4 h-4 rounded-full bg-green-500"></div>
                                </div>
                                {/* Rating */}
                                <div className="flex items-center gap-1">
                                    <div className="text-yellow-400">&#9733;</div>
                                    <div className="text-yellow-400">&#9733;</div>
                                    <div className="text-yellow-400">&#9733;</div>
                                    <div className="text-yellow-400">&#9733;</div>
                                    <div className="text-gray-300">&#9733;</div>
                                </div>
                            </CardFooter>
                            {/* Description Footer */}
                            <CardFooter className=" p-2">

                            </CardFooter>
                        </Card>
                    </div>
                    <div className="w-full md:w-1/2 px-10  py-4 mb-4">
                        <div className='ml-12'>
                            <div className="mb-6">
                                <h1 className="font-bold uppercase text-2xl mb-5">Advertisement ID:58</h1>
                            </div>
                            <div className='m-6'>
                                <p className="text-sm"><b>Name:</b> WATERPROOF JACKET</p>
                                <p className="text-sm"><b>Price:</b> Rs.4000.00</p>
                                <p className="text-sm"><b>Color:</b> Red,White,Yellow</p>
                                <p className="text-sm"><b>Quantity:</b> 23</p>
                                <p className="text-sm"><b>Quantity:</b> 23</p>
                            </div>
                            <div>
                                <p className="text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos, voluptatum dolorum! Laborum blanditiis consequatur, voluptates, sint enim fugiat saepe, dolor fugit, magnam explicabo eaque quas id quo porro dolorum facilis... <a href="#" className="opacity-50 text-gray-900 hover:opacity-100 inline-block text-xs leading-none border-b border-gray-900">MORE <i className="mdi mdi-arrow-right"></i></a></p>
                            </div>
                            <div>
                                <div className="inline-block align-bottom m-2">
                                    <button className="bg-blue-300 opacity-75 hover:opacity-100 text-gray-900 hover:text-gray-900 rounded-full px-10 py-2 font-semibold"><i className="mdi mdi-cart -ml-2 mr-2"></i>Accept</button>
                                    <button className="bg-red-300 opacity-75 hover:opacity-100 text-gray-900 hover:text-gray-900 rounded-full px-10 py-2 font-semibold"><i className="mdi mdi-cart -ml-2 mr-2"></i>Reject</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AddAdverisments;

















