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


import React from 'react';
import Travel_tent from '../../assets/travel_tent.jpg';

import {
    Card,
    CardBody,
    CardFooter,
} from "@material-tailwind/react";

const AddAdverisments = () => {
    return (
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
                <CardFooter className="bg-gray-100 p-2">
                    Advertisement description Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </CardFooter>
            </Card>
        </div>
    );
};

export default AddAdverisments;
















