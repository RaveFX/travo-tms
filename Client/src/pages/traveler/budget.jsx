
// import React, { useState, useEffect, } from "react";
// import Swal from 'sweetalert2';
// import { Link, useParams } from "react-router-dom";
// import Sidebar from '../../components/web-component/Sidebar';
// import TopNavbar from '../../components/web-component/Navbar';
// import axios from 'axios';
// import { Alert, Card, Input, Checkbox, CardHeader,  CardBody,CardFooter,Typography,Button,Avatar, } from "@material-tailwind/react";
 


// const user_id = sessionStorage.getItem('user_id');


// function Icon() {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       viewBox="0 0 24 24"
//       fill="currentColor"
//       className="h-6 w-6"
//     >
//       <path
//         fillRule="evenodd"
//         d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
//         clipRule="evenodd"
//       />
//     </svg>
//   );
// }
 
// // function SubmitAlert() {
  
// //   return (
// //     <Alert
// //       icon={<Icon />}
// //       className="rounded-none border-l-4 border-[#2ec946] bg-[#2ec946]/10 font-medium text-[#2ec946]"
// //     >
// //       Expense Recorded Successfully!
// //     </Alert>

   
// //   );
  
  
// // }
 
// function Tripid(){
//   const { id } = useParams();
//   return (
//     <div>
//       <p>{id}</p>
//     </div>
//   );
// }

// function TotalCost() {
//   const [totalCost, setTotalCost] = useState(null);

//   useEffect(() => {
//     axios
//     .get("http://localhost:8080/api/v1/budget/getTotalCost")
//       .then((response) => response.json())
//       .then((data) => setTotalCost(data))
//       .catch((error) => console.error('Error:', error));
//   }, []);

//   return (
//     <div>
//       <h2></h2>
//       <p>{totalCost !== null ? `LKR ${totalCost.toFixed(2)}` : 'Loading...'}</p>
//     </div>
//   );
// }

// // function TotalCost() {
// //   const [totalCost, setTotalCost] = useState(null);
// //   const [error, setError] = useState(null);

// //   useEffect(() => {
// //     fetch('http://localhost:8080/api/v1/budget/getTotalCost')
// //       .then((response) => {
// //         if (!response.ok) {
// //           throw new Error(`HTTP error! Status: ${response.status}`);
// //         }
// //         return response.json();
// //       })
// //       .then((data) => setTotalCost(data))
// //       .catch((error) => setError(error.message));
// //   }, []);

// //   if (error) {
// //     return <div>Error: {error}</div>;
// //   }

// //   return (
// //     <div>
// //       <h2></h2>
// //       <p>{totalCost !== null ? `LKR ${totalCost.toFixed(2)}` : 'Loading...'}</p>
// //     </div>
// //   );
// // }


// function TotalCostByUser() {

//   const [totalCostByUser, setTotalCostByUser] = useState(0);

//   // useEffect(() => {
//   //   axios
//   //     .get(`http://localhost:8080/api/v1/budget/getTotalCostByUserId/${user_id}`)
//   //     .then((response) => {
//   //       setTotalCostByUser(response.data);
//   //     })
//   //     .catch((error) => {
//   //       console.error(error);
//   //     });
//   // }, [user_id]);

//   const fetchTotalCostByUser = () => {
//     axios
//       .get(`http://localhost:8080/api/v1/budget/getTotalCostByUserId/${user_id}`)
//       .then((response) => {
//         setTotalCostByUser(response.data);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   };

//   useEffect(() => {
//     // Fetch data initially
//     fetchTotalCostByUser();

//     // Refresh the data every 5 seconds (adjust the interval as needed)
//     const intervalId = setInterval(fetchTotalCostByUser, 1000);

//     // Cleanup the interval when the component unmounts
//     return () => clearInterval(intervalId);
//   }, []);

//   return (
//     <div>
//       <p>LKR {totalCostByUser}</p>
//     </div>
//   );
// }

// const data = [
  
//   {
//     amount: <TotalCost />,
//     label: "Total Expenses",
//     imgUrl: "https://file.rendit.io/n/8g8SeHoYgHxaqhSAvb5B.svg",
//     bgColor: "#eff2f7",
//     textColor: "#212b36",
//   },
//   {
//     amount: <Tripid />,
//     label: "Trip Participants",
//     imgUrl: "https://file.rendit.io/n/rzaX2PDxiD0qsQUJOP8v.svg",
//     bgColor: "#eff2f7",
//     textColor: "#212b36",
//   },
//   {
//     amount: <TotalCostByUser />,
//     label: "Your Expenses",
//     imgUrl: "https://file.rendit.io/n/8g8SeHoYgHxaqhSAvb5B.svg",
//     bgColor: "#eff2f7",
//     textColor: "#212b36",
//   },
//   {
//     amount: "LKR 3,000",
//     label: "Paid Expenses",
//     imgUrl: "https://file.rendit.io/n/8g8SeHoYgHxaqhSAvb5B.svg",
//     bgColor: "#eff2f7",
//     textColor: "#212b36",
//   },

//   {
//     amount: "LKR 5,000",
//     label: "Balance Due",
//     imgUrl: "https://file.rendit.io/n/8g8SeHoYgHxaqhSAvb5B.svg",
//     bgColor: "#eff2f7",
//     textColor: "#212b36",
//   },

//   // Add more data objects as needed
// ];

// const Budgetcard = () => {
//   return (
//     <div className="m-5 flex">
//       {data.map((item, index) => (
//         <div key={index} className="m-5">
//           <div
//             className={`border-solid border-[#e7e7e7] bg-white flex flex-col justify-center pl-6 gap-4 w-[115%] h-40 shrink-0 items-start border rounded-lg`}
//           >
//             <div
//               className={`bg-[${item.bgColor}] flex flex-col justify-center w-12 h-12 shrink-0 items-center rounded-[31px]`}
//             >
//               <img src={item.imgUrl} className="w-6" />
//             </div>
//             <div className="flex flex-col gap-px w-3/5">
//               <div
//                 className={`whitespace-nowrap text-2xl font-['Inter'] font-bold leading-[30px] text-[${item.textColor}]`}
//               >
//                 {item.amount}
//               </div>
//               <div
//                 className={`whitespace-nowrap text-xs font-['Poppins'] font-medium leading-[20px] text-[#637381] mr-10`}
//               >
//                 {item.label}
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// // const FileUpload = () => {
// //   const [selectedFile, setSelectedFile] = useState(null);

// //   const handleFileChange = (e) => {
// //     const file = e.target.files[0];
// //     setSelectedFile(file);
// //   };

// //   return (
// //     <div className=" max-w-md p-4">
// //       <label className="block text-gray-500 font-semibold mb-2">
// //         Upload Receipt
// //       </label>
// //       <div className="flex items-center space-x-2">
// //         <label className="flex bg-white border rounded-lg shadow-md p-2 cursor-pointer">
// //           <span className="text-blue-600">Choose File</span>
// //           <input
// //             type="file"
// //             className="hidden"
// //             accept=".jpg, .jpeg, .png, .pdf"
// //             onChange={handleFileChange}
// //           />
// //         </label>
// //         <span className="text-gray-400">
// //           {selectedFile ? selectedFile.name : "No file chosen"}
// //         </span>
// //       </div>
// //     </div>
// //   );
// // };

// function Budgetform() {
 

//   const handleSubmit = async (e) => {
//     e.preventDefault(); // Prevent the default form submission behavior

//     // Get the form data
//     const formData = new FormData(e.target);

    

//     try {
//       const response = await axios.post('http://localhost:8080/api/v1/budget/addBudget', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//       console.log(response);
//       // Display a SweetAlert2 success alert
//       Swal.fire({
//       icon: 'success',
//       title: 'Expense Recorded Successfully!',
//       showConfirmButton: false,
//       timer: 1500, // Close the alert after 1.5 seconds
//     });
//       // <SubmitAlert />;
//       // Handle the response here (e.g., show a success message)
//       console.log('Response: Success', response.data);
//     } catch (error) {
//       // Handle errors here (e.g., show an error message)
//       // Display a SweetAlert2 error alert
//     Swal.fire({
//       icon: 'error',
//       title: 'Error',
//       text: 'An error occurred while recording the expense.',
//     });
//       console.error('Error: kedup', error);
//     }
//   };

  

//   return (
//     <>
    
//       <Card color="white" shadow={true}>
      
//         <form onSubmit={handleSubmit} className=" m-5 text-sm mt-8 mb-2 w-100 max-w-screen-lg border-solid sm:w-55">
//           <div className="mb-4 font-poppins flex gap-6">
//             <Input name="cause" id="cause" size="lg" placeholder="Cause/Event" required />
//             <input name="user_id" id="user_id" size="lg" placeholder="User ID" required value={user_id} type="hidden"/>
//             <Input name="cost" id="cost" size="lg" placeholder="Cost" required />
//           </div>
//           <div className="flex mb-4 gap-6">
//             <select
//               id="type" name="type"
//               className="block text-xs w-full px-4 py-3 text-black-100  dark:border-gray-300"
//             >
//               <option selected>Category</option>
//               <option >Food</option>
//               <option >Travel</option>
//               <option >Tickets</option>
//               <option >Other</option>
//             </select>

//            <Input type="date" name="date" id="date" size="lg" placeholder="Date" /> 
           
//           </div>
//           <div className="flex flex-row gap-6">
//             <div className="flex mb-4 gap-6">
//               {/* <FileUpload /> */}
//             </div>
//             <div className="flex mb-4 gap-6">
//               <Button type="submit" className="bg-[#22577A] ">
//                 Submit Expenses
//               </Button>
//             </div>
//           </div>
//         </form>
//       </Card>
//     </>
//   );
// }

// const placedata = [
//   {
//     title: "Sigiriya",
//     description:
//       "Sigiriya or Sinhagiri is an ancient rock fortress located in the northern Matale District near the town of Dambulla in the Central Province, Sri Lanka.",
//     imgUrl:
//       "./cardimage.jpg",
//   },
//   {
//     title: "Ella",
//     description:
//       "Small town in the Badulla District of Uva Province, Sri Lanka. The area has a rich bio-diversity, dense with numerous varieties of flora and fauna",
//     imgUrl:
//       "/ella.jpg",
//   },
//   {
//     title: "Dunhinda Falls",
//     description:
//       "Dunhinda Falls is a waterfall located about 5 kilometres from Badulla in the lower central hills of Sri Lanka. The waterfall gets its name from the smoky dew drops.",
//     imgUrl:
//       "/dunhinda.jpg",
//   },
//   {
//     title: "Sri Pada (Adam's Peak)",
//     description:
//       "Adam's Peak is a 2,243 m (7,359 ft) tall conical sacred mountain located in central Sri Lanka.It is well known for the Sri Pada (Śrī Pāda; Sinhala: ශ්‍රී පාද, sacred footprint)",
//     imgUrl:
//       "/adams.jpg",
//   },

// ];

// // function BudgetPeople() {
// //   return (
// //     <>
// //       {placedata.map((placedata) => (

// //         <Card className="w-72 ">
// //           <CardHeader color="blue-gray" className="mt-4 ">
// //             <img className="" src={placedata.imgUrl} alt="card-image" />
// //           </CardHeader>
// //           <CardBody>
// //             <Typography variant="h5" color="blue-gray" className="mb-2 font-poppins">
// //               {placedata.title}
// //             </Typography>
// //             <Typography className="font-poppins" >{placedata.description}</Typography>
// //           </CardBody>
// //           <CardFooter className="pt-0">
// //             <Button className="font-poppins">Read More</Button>
// //           </CardFooter>
// //         </Card>
// //       ))}
// //     </>
// //   );
// // }

// const budgetpeople = [
//   {
//     name: "Nick",
//     balance: "LKR 5000",
//     imgUrl: "/dunhinda.jpg",
//   },
//   {
//     name: "John",
//     balance: "LKR 5000",
//     imgUrl: "/dunhinda.jpg",
//   },
//   {
//     name: "Jane",
//     balance: "LKR 5000",
//     imgUrl: "/dunhinda.jpg",
//   },
//   {
//     name: "Jane",
//     balance: "LKR 5000",
//     imgUrl: "/dunhinda.jpg",
//   },
//   {
//     name: "Jane",
//     balance: "LKR 5000",
//     imgUrl: "/dunhinda.jpg",
//   },
//   {
//     name: "Jane",
//     balance: "LKR 5000",
//     imgUrl: "/dunhinda.jpg",
//   },
//   {
//     name: "Jane",
//     balance: "LKR 5000",
//     imgUrl: "/dunhinda.jpg",
//   },
// ]

// function BudgetPeeps() {
//   return (
// <>
// {budgetpeople.map((budgetpeople) => (
//   <div className="flex  flex-row gap-6">
// <div className="bg-white p-4 rounded-xl w-36 shadow-lg">
// <img src={budgetpeople.imgUrl} alt="Avatar" className="w-full h-24 rounded-lg" />
//  <h1 className="py-2 text-center font-semi bold">{budgetpeople.name}</h1>
//  <div>
//  <Button className="">Balance: <TotalCostByUser /></Button>
//  </div>
// </div>
// </div>
  
//   ))}

// </>
//   );
// }


// export default function Budget() {
//   return (
//     <>
//       <div className="font-poppins w-full bg-[#F6F8FA] flex overflow-hidden ">
//         <div className="">
//           <Sidebar />
//         </div>
        
//         <div className=" flex flex-col w-full">
//           <div>
//           <TopNavbar />
           
//           </div>
//           <div className="mt-10 ml-10">
//             <p className="font-bold text-2xl">Traveller Budget : {user_id}</p>
//           </div>
//           <div>
//             <div className="flex">
//               <Budgetcard />
//             </div>
//             <div className="ml-10  flex">
//               <p className="font-bold">Add Expenses</p>
//             </div>
//             <div className="flex flex-row">
//               <div className="mt-5 ml-10 mb-5 flex">
//                 <Budgetform />
//               </div>
             
              
//               <div className="mt-5 gap-4 ml-10 mb-5 w-[50%] mr-72 flex overflow-scroll overflow-y-hidden">
//               {/* <BudgetPeople /> */}
//               <BudgetPeeps />

//               </div>
//             </div>
//             <div
//                 className="
//               mt-5 ml-[7%] "
//               >
//                 <Link to="/Expenses">
//                   <Button className="bg-[#22577A] text-white font-poppins ">
//                     View All Expenses
//                   </Button>
//                 </Link>
//               </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }