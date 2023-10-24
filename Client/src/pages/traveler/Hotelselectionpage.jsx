// import React from 'react';
// import Sidebar from "../../components/web-component/Sidebar";

// export default function Hotelselectionpage() {
//     return (
//         <div>
//             <Sidebar
//                 active="Hotelselectionpage"
//             />
//         </div>
//     )
// }



import React from "react";
import Sidebar from "../../components/web-component/Sidebar";
import TopNavbar from "../../components/web-component/Navbar";


function Hotelselectionpage() {
    return (
        <div className="flex h-screen overflow-hidden ">
            <Sidebar
                active="Hotelselectionpage"
            />
            <div className="flex flex-col w-full bg-[#D9D9D9] bg-opacity-20 z-[10000] ">
                <TopNavbar />
            </div>
        </div>
    );
}

export default Hotelselectionpage;

// import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

// function Poll() {
//   const [selectedOption, setSelectedOption] = useState(null);
//   const [options] = useState([
//     { text: 'Option 1', votes: 0 },
//     { text: 'Option 2', votes: 0 },
//     { text: 'Option 3', votes: 0 },
//   ]);

//   const handleVote = (index) => {
//     if (selectedOption === null) {
//       const newOptions = [...options];
//       newOptions[index].votes++;
//       setSelectedOption(index);
//     }
//   };

//   return (
//     <div className="max-w-sm mx-auto p-4 rounded-lg border shadow-md">
//       <h1 className="text-xl font-semibold mb-4">Poll Question</h1>
//       {options.map((option, index) => (
//         <div
//           key={index}
//           className={`flex items-center justify-between mb-2 p-2 border ${
//             selectedOption === index ? 'bg-green-100' : ''
//           }`}
//         >
//           <span>{option.text}</span>
//           {selectedOption === index && (
//             <FontAwesomeIcon icon={faCheckCircle} color="green" />
//           )}
//           <button
//             className={`px-4 py-1 rounded-md ${
//               selectedOption !== null ? 'cursor-not-allowed' : 'cursor-pointer'
//             }`}
//             onClick={() => handleVote(index)}
//             disabled={selectedOption !== null}
//           >
//             Vote
//           </button>
//           {selectedOption !== null && (
//             <div className="flex items-center space-x-2">
//               <span>{option.votes}</span>
//               <span>Votes</span>
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }

// export default Poll;







