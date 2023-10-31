// import React, { useState } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import axios from 'axios';
// import { Link } from "react-router-dom";
// // import useAxiosMethods from "../../hooks/useAxiosMethods";
// //import axios from "../../api/axios";
// import {
//   Card,
//   CardBody,
//   CardFooter,
//   Typography,
//   Button,
//   Radio,
//   Input,
//   CardHeader,
// } from "@material-tailwind/react";
// import { LockClosedIcon, LockOpenIcon } from "@heroicons/react/24/solid";
// import { XMarkIcon } from "@heroicons/react/24/outline";

// export default function EditTripDetails() {
//   return (
//     <Card className="m-6 p-4 w-[50%] h-fit  ">
//       <form onSubmit={handleSubmit}>
//         <XMarkIcon
//           className="w-5 h-5 cursor-pointer relative left-[95%]"
//           onClick={() => {
//             setIsOpen(false);
//           }}
//         />
//         <CardBody className="">
//           <Typography
//             variant="h3"
//             color="blue-gray"
//             className="gap-2 flex justify-center"
//           >
//             Create New Trip
//           </Typography>
//           <div className="mt-5">
//           <Typography variant="h6" className="gap-2 mb-2">
//             Trip Name :
//           </Typography>
//           <Input
//           type="text"
//           placeholder="Enter Trip Name"
//           onChange={(e) => setTripName(e.target.value)}
//           className="w-[100%] !border !border-blue-gray-50 bg-white text-blue-gray-500 shadow-sm shadow-blue-gray-900/5 ring-4 ring-transparent placeholder:text-blue-gray-200 "
//           labelProps={{
//             className: "hidden",
//           }}
//           containerProps={{ className: "min-w-[100px]" }}  
//         />
//         <div className="flex gap-4">
//         <div className="flex flex-col">

//         <Typography variant="h6" className="gap-2 mb-2 mt-2">
//             From :
//           </Typography>
//           <Input
//           type="date"
//           placeholder="Enter Trip Name"
//           onChange={handleStartDateChange}
//           className="w-[100%] !border !border-blue-gray-50 bg-white text-blue-gray-500 shadow-sm shadow-blue-gray-900/5 ring-4 ring-transparent placeholder:text-blue-gray-200 "
//           labelProps={{
//             className: "hidden",
//           }}
//           containerProps={{ className: "min-w-[100px]" }}  
//         />
//         </div>
//         <div className="flex flex-col">
//         <Typography variant="h6" className="gap-2 mb-2 mt-2">
//             To :
//           </Typography>
//           <Input
//           type="date"
//           placeholder="Enter Trip Name"
//           onChange={handleEndDateChange}
//           className="w-[100%] !border !border-blue-gray-50 bg-white text-blue-gray-500 shadow-sm shadow-blue-gray-900/5 ring-4 ring-transparent placeholder:text-blue-gray-200 "
//           labelProps={{
//             className: "hidden",
//           }}
//           containerProps={{ className: "min-w-[100px]" }}  
//         />
//         </div>
//         </div>
//         {error && (
//           <div className="text-red-500 mt-2 text-sm">{error}</div>
//         )}
//         </div>

        
         
//         </CardBody>

//         <CardFooter className="">
//           <div className="pt-0 flex flex-col justify-center gap-3">
            
           
//             <Button
//               type="submit"
//               className="w-[100%] justify-center py-2 shadow-none hover:shadow-none active:shadow-none focus:shadow-none bg-[#22577A] rounded-7 font-poppins font-extrabold"
//             >
//               CREATE
//             </Button>
//           </div>
//         </CardFooter>
//       </form>
//     </Card>
//   )
// }
