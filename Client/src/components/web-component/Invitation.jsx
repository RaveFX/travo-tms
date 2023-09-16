// // import React, { useState, useEffect } from "react";
// // import {
// //   Popover,
// //   PopoverHandler,
// //   PopoverContent,
// //   Button,
// //   Input,
// //   Typography,
// // } from "@material-tailwind/react";
// // import { UserPlusIcon, ClipboardDocumentIcon, CheckIcon } from "@heroicons/react/24/outline";
// // import axios from 'axios';
// // import { useParams } from "react-router-dom";


// // export function SubscriptionPopover() {
// //   const { tripId } = useParams();
// //   // const [IsLinkCopy, setIsLinkCopy] = useState(false);
// //   const [tripinfo, setTripinfo] = useState([]);
// //   const [uniqueLink, setUniqueLink] = useState("");
// //   const [copySuccess, setCopySuccess] = useState(null);

// //   const loadTripinfo = async () => {
// //     try {
// //       const response = await axios.get(`http://localhost:8080/api/v1/trips/trip-information/${tripId}`);
// //       const { uniqueLink } = response.data;

// //       // Log the retrieved uniqueLink
// //       console.log("Retrieved uniqueLink:", uniqueLink);
// //       setUniqueLink(uniqueLink);
// //     } catch (error) {
// //       console.error("Error loading trip information:", error);
// //     }
// //   }
// //   useEffect(() => {
// //     loadTripinfo();
// //   }, []);



// //   const handleCopyToClipboard = () => {
// //     const tripLink = trip.uniqueLink;
// //     navigator.clipboard.writeText(tripLink).then(
// //       () => {
// //         setCopySuccess('Copied to clipboard');
// //       },
// //       (err) => {
// //         console.error('Could not copy to clipboard: ', err);
// //         setCopySuccess('Copy failed');
// //       }
// //     );
// //   };


// //   return (
// //     <Popover placement="bottom" className="bg-[#ffffff]">
// //       <PopoverHandler className="flex flex-row gap-3 bg-white font-extrabold font-poppins text-[#000000] hover:bg-[#F5F1F1] hover:shadow-[0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)] rounded-full w-[140px] h-[44px] relative -left-[12%] z-5 shadow-[0 2px 4px rgba(0,0,0,0.15)]">
// //         <Button >
// //           {/* onClick={handleLinkCopyClick} */}
// //           <UserPlusIcon className='w-5 h-5 stroke-[#000000] m-0 p-0' strokeWidth="3" />
// //           Invite- {tripinfo.unique_link}
// //         </Button>
// //       </PopoverHandler>
// //       <PopoverContent className="gap-3 bg-white font-extrabold font-poppins text-[#000000]  z-[1000] ">
// //         <Typography variant="h6" color="blue-gray" className="mb-6">
// //           Invite your friends!
// //         </Typography>
// //         <div className="flex gap-2">
// //           {/* <Input value={"joinwithus@sdkfjbwoef"} disabled /> */}
// //           <Input value={uniqueLink} type="text" disabled />
// //           <Button
// //             className={`${copySuccess ? 'bg-[#57CC99] disabled' : 'bg-[#F5F1F1]'
// //               } font-poppins text-[#000000] hover:bg-[#57CC99] hover:shadow-[0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)] shadow-[0 2px 4px rgba(0,0,0,0.15)]`}
// //             onClick={handleCopyToClipboard}
// //             disabled={copySuccess} // Disable the button when copySuccess is true
// //           >
// //             {!copySuccess ? (
// //               <ClipboardDocumentIcon className='w-5 h-5 stroke-[#000000] m-0 p-0' strokeWidth="2" />
// //             ) : (
// //               <div className="flex flex-row justify-between p-0 m-0">
// //                 <CheckIcon className='w-[4.8rem] h-4 stroke-[#000000] m-0 p-0' strokeWidth="3" />
// //                 <p className="font-size-1 mr-2">copied</p>
// //               </div>
// //             )}
// //           </Button>
// //         </div>
// //       </PopoverContent>
// //     </Popover>
// //   );
// // }




// import React, { useState, useEffect } from "react";
// import {
//   Popover,
//   PopoverHandler,
//   PopoverContent,
//   Button,
//   Input,
//   Typography,
// } from "@material-tailwind/react";
// import { UserPlusIcon, ClipboardDocumentIcon, CheckIcon } from "@heroicons/react/24/outline";
// import axios from 'axios';
// import { useParams } from "react-router-dom";

// export function SubscriptionPopover() {
//   const { tripId } = useParams();
//   const [tripinfo, setTripinfo] = useState({});
//   const [uniqueLink, setUniqueLink] = useState("");
//   const [copySuccess, setCopySuccess] = useState(false);
//   const [isCopying, setIsCopying] = useState(false); // Track copying state

//   const loadTripinfo = async () => {
//     try {
//       const response = await axios.get(`http://localhost:8080/api/v1/trips/trip-information/${tripId}`);
//       const { uniqueLink } = response.data;
//       setUniqueLink(uniqueLink);
//     } catch (error) {
//       console.error("Error loading trip information:", error);
//     }
//   }

//   useEffect(() => {
//     loadTripinfo();
//   }, [tripId]);

//   const handleCopyToClipboard = async () => {
//     try {
//       setIsCopying(true); // Start copying
//       await navigator.clipboard.writeText(uniqueLink);
//       setCopySuccess(true);
//     } catch (err) {
//       console.error('Could not copy to clipboard: ', err);
//       setCopySuccess(false);
//     } finally {
//       setIsCopying(false); // Copying completed or failed, set back to false
//     }
//   };

//   return (
//     <Popover placement="bottom" className="bg-[#ffffff]">
//       <PopoverHandler className={`flex flex-row gap-3 bg-white font-extrabold font-poppins text-[#000000] ${isCopying ? 'pointer-events-none' : 'hover:bg-[#F5F1F1] hover:shadow-[0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)]'} rounded-full w-[140px] h-[44px] relative -left-[12%] z-5 shadow-[0 2px 4px rgba(0,0,0,0.15)]`}>
//         <Button onClick={handleCopyToClipboard}>
//           <UserPlusIcon className='w-5 h-5 stroke-[#000000] m-0 p-0' strokeWidth="3" />
//           Invite- {tripinfo.unique_link}
//         </Button>
//       </PopoverHandler>
//       <PopoverContent className="gap-3 bg-white font-extrabold font-poppins text-[#000000]  z-[1000] ">
//         <Typography variant="h6" color="blue-gray" className="mb-6">
//           Invite your friends!
//         </Typography>
//         <div className="flex gap-2">
//           <Input value={uniqueLink} type="text" />
//           <Button
//             className={`${copySuccess ? 'bg-[#57CC99] disabled' : 'bg-[#F5F1F1]'
//               } font-poppins text-[#000000] hover:bg-[#57CC99] hover:shadow-[0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)] shadow-[0 2px 4px rgba(0,0,0,0.15)]`}
//             onClick={handleCopyToClipboard}
//             disabled={isCopying || copySuccess} // Disable while copying or if already copied
//           >
//             {!copySuccess ? (
//               <ClipboardDocumentIcon className='w-5 h-5 stroke-[#000000] m-0 p-0' strokeWidth="2" />
//             ) : (
//               <div className="flex flex-row justify-between p-0 m-0">
//                 <CheckIcon className='w-[4.8rem] h-4 stroke-[#000000] m-0 p-0' strokeWidth="3" />
//                 <p className="font-size-1 mr-2">copied</p>
//               </div>
//             )}
//           </Button>
//         </div>
//       </PopoverContent>
//     </Popover>
//   );
// }



// import React, { useState, useEffect } from "react";
// import {
//   Popover,
//   PopoverHandler,
//   PopoverContent,
//   Button,
//   Input,
//   Typography,
// } from "@material-tailwind/react";
// import { UserPlusIcon, ClipboardDocumentIcon, CheckIcon } from "@heroicons/react/24/outline";
// import axios from 'axios';
// import { useParams } from "react-router-dom";

// export function SubscriptionPopover() {
//   const { tripId } = useParams();
//   const [tripinfo, setTripinfo] = useState({});
//   const [uniqueLink, setUniqueLink] = useState("");
//   const [copySuccess, setCopySuccess] = useState(false);
//   const [isCopying, setIsCopying] = useState(false);

//   const loadTripinfo = async () => {
//     try {
//       const response = await axios.get(`http://localhost:8080/api/v1/trips/trip-information/${tripId}`);
//       const { uniqueLink } = response.data;
//       setUniqueLink(uniqueLink);
//     } catch (error) {
//       console.error("Error loading trip information:", error);
//     }
//   }

//   useEffect(() => {
//     loadTripinfo();
//   }, [tripId]);

//   const handleCopyToClipboard = async () => {
//     try {
//       setIsCopying(true);
//       await navigator.clipboard.writeText(uniqueLink);
//       setCopySuccess(true);
//     } catch (err) {
//       console.error('Could not copy to clipboard: ', err);
//       setCopySuccess(false);
//     } finally {
//       setIsCopying(false);
//     }
//   };

//   return (
//     <Popover placement="bottom" className="bg-[#ffffff]">
//       <PopoverHandler className={`flex flex-row gap-3 bg-white font-extrabold font-poppins text-[#000000] ${isCopying ? 'pointer-events-none' : 'hover:bg-[#F5F1F1] hover:shadow-[0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)]'} rounded-full w-[140px] h-[44px] relative -left-[12%] z-5 shadow-[0 2px 4px rgba(0,0,0,0.15)]`}>
//         <Button onClick={handleCopyToClipboard}>
//           <UserPlusIcon className='w-5 h-5 stroke-[#000000] m-0 p-0' strokeWidth="3" />
//           Invite- {tripId}
//         </Button>
//       </PopoverHandler>
//       <PopoverContent className="gap-3 bg-white font-extrabold font-poppins text-[#000000]  z-[1000] ">
//         <Typography variant="h6" color="blue-gray" className="mb-6">
//           Invite your friends!
//         </Typography>
//         <div className="flex gap-2">
//           <Input value={uniqueLink} type="text" />
//           <Button
//             className={`${copySuccess ? 'bg-[#57CC99] disabled' : 'bg-[#F5F1F1]'
//               } font-poppins text-[#000000] hover:bg-[#57CC99] hover:shadow-[0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)] shadow-[0 2px 4px rgba(0,0,0,0.15)]`}
//             onClick={handleCopyToClipboard}
//             disabled={isCopying || copySuccess}
//           >
//             {!copySuccess ? (
//               <ClipboardDocumentIcon className='w-5 h-5 stroke-[#000000] m-0 p-0' strokeWidth="2" />
//             ) : (
//               <div className="flex flex-row justify-between p-0 m-0">
//                 <CheckIcon className='w-[4.8rem] h-4 stroke-[#000000] m-0 p-0' strokeWidth="3" />
//                 <p className="font-size-1 mr-2">copied</p>
//               </div>
//             )}
//           </Button>
//         </div>
//         <div className="flex gap-2 mt-4">
//           <a
//             href={`https://api.whatsapp.com/send?text=${encodeURIComponent(uniqueLink)}`}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="bg-[#25D366] text-white p-2 rounded hover:bg-[#128C7E]"
//           >
//             Share on WhatsApp
//           </a>
//           <a
//             href={`mailto:?subject=Check out this trip&body=${encodeURIComponent(`Join our trip: ${uniqueLink}`)}`}
//             className="bg-[#0072CE] text-white p-2 rounded hover:bg-[#0059A6]"
//           >
//             Share via Email
//           </a>
//         </div>
//       </PopoverContent>
//     </Popover>


//   );
// }



import React, { useState, useEffect } from "react";
import {
  Button,
  Input,
  Typography,
  Menu,
  MenuHandler,
  MenuItem,
} from "@material-tailwind/react";
import { UserPlusIcon, ClipboardDocumentIcon, CheckIcon } from "@heroicons/react/24/outline";
import axios from 'axios';
import { useParams } from "react-router-dom";

export function SubscriptionPopover() {
  const { tripId } = useParams();
  const [uniqueLink, setUniqueLink] = useState("");
  const [copySuccess, setCopySuccess] = useState(false);
  const [isCopying, setIsCopying] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const link = `http://127.0.0.1:5173/travo/text/${uniqueLink}`;

  const loadTripinfo = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/v1/trips/trip-information/${tripId}`);
      const { uniqueLink } = response.data;
      setUniqueLink(uniqueLink);
    } catch (error) {
      console.error("Error loading trip information:", error);
    }
  }

  useEffect(() => {
    loadTripinfo();
  }, [tripId]);

  const handleCopyToClipboard = async () => {
    try {
      setIsCopying(true);
      await navigator.clipboard.writeText(link);
      setCopySuccess(true);
    } catch (err) {
      console.error('Could not copy to clipboard: ', err);
      setCopySuccess(false);
    } finally {
      setIsCopying(false);
    }
  };

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end"
      // id="subscription-menu"
      // anchorEl={anchorEl}
      // open={Boolean(anchorEl)}
      // onClose={handleClose}
      >
        <MenuHandler>
          <Button
            onClick={handleClick} className={`flex flex-row gap-3 bg-white font-extrabold font-poppins text-[#000000] ${isCopying ? 'pointer-events-none' : 'hover:bg-[#F5F1F1] hover:shadow-[0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)]'} rounded-full w-[140px] h-[44px] relative -left-[12%] z-5 shadow-[0 2px 4px rgba(0,0,0,0.15)]`}
            aria-controls="subscription-menu"
            aria-haspopup="true"
          >
            <UserPlusIcon className='w-5 h-5 stroke-[#000000] m-0 p-0' strokeWidth="3" />
            Invite- {tripId}
          </Button>
        </MenuHandler>
        <MenuItem>
          <Typography variant="h6" color="blue-gray" className="mb-6">
            Invite your friends!
          </Typography>
        </MenuItem>
        <MenuItem>
          <div className="flex gap-2">
            <Input value={`http://127.0.0.1:5173/travo/text/${uniqueLink}`} type="text" readOnly />
            <Button
              className={`${copySuccess ? 'bg-[#57CC99] disabled' : 'bg-[#F5F1F1]'
                } font-poppins text-[#000000] hover:bg-[#57CC99] hover:shadow-[0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)] shadow-[0 2px 4px rgba(0,0,0,0.15)]`}
              onClick={handleCopyToClipboard}
              disabled={isCopying || copySuccess}
            >
              {!copySuccess ? (
                <ClipboardDocumentIcon className='w-5 h-5 stroke-[#000000] m-0 p-0' strokeWidth="2" />
              ) : (
                <div className="flex flex-row justify-between p-0 m-0">
                  <CheckIcon className='w-[4.8rem] h-4 stroke-[#000000] m-0 p-0' strokeWidth="3" />
                  <p className="font-size-1 mr-2">copied</p>
                </div>
              )}
            </Button>
          </div>
        </MenuItem>
        <MenuItem>
          <div className="flex gap-2 mt-4">
            <a
              href={`https://api.whatsapp.com/send?text=${encodeURIComponent(`Check out this link: http://127.0.0.1:5173/travo/text/${uniqueLink}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white p-2 rounded hover:bg-[#128C7E]"
            >
              Share on WhatsApp
            </a>
            <a
              href={`mailto:?subject=Check out this trip&body=${encodeURIComponent(`Join our trip: ${uniqueLink}`)}`}
              className="bg-[#0072CE] text-white p-2 rounded hover:bg-[#0059A6]"
            >
              Share via Email
            </a>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
