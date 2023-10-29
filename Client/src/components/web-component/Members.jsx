// import {
//   Popover,
//   PopoverHandler,
//   PopoverContent,
//   Avatar,
//   Button,
//   Typography,
//   List,
//   ListItem,
//   ListItemPrefix,
// } from "@material-tailwind/react";
// import { useParams } from "react-router-dom";

// import React, { useState, useEffect } from "react";

// export default function MemberPopOver() {
//   const { trip_id } = useParams();
//   const currentPath = window.location.pathname;
//   const pathParts = currentPath.split('/');
//   const pathTripId = pathParts[3];

//   console.log(pathTripId)

//   const [members, setMembers] = useState([]);

//   useEffect(() => {
//     loadMembers();
//   }, []);

//   const loadMembers = async () => {
//     const result = await axios.get(`http://localhost:8080/api/v1/trip/memberlist/${pathTripId}`)
//     setMembers(result.data);
//   }

//   const members1 = [
//     { id: 1, name: 'Sanduni', avatarSrc: '/traveler/Female(1).svg', details: 'Member details here' },
//     { id: 2, name: 'Kanishka', avatarSrc: '/traveler/Female.svg', details: 'Member details here' },
//     { id: 3, name: 'Samuel', avatarSrc: '/traveler/Female(1).svg', details: 'Member details here' },
//     { id: 4, name: 'Samindu', avatarSrc: '/traveler/Male.svg', details: 'Member details here' },
//     { id: 5, name: 'Madushi', avatarSrc: '/traveler/Male(1).svg', details: 'Member details here' },
//     // Add more members as needed
//   ];

//   return (
//     <Popover placement="bottom">
//       <PopoverHandler>
//         <button>
//           <div className="flex items-center -space-x-4">
//             {members1.map((member, index) => (
//               <div
//                 key={member.id}
//                 className={`ml-${index !== 0 ? -20 : 0
//                   } transition-all duration-200 ease-in-out`}
//               >
//                 <Avatar
//                   variant="circular"
//                   alt={member.name}
//                   src={member.avatarSrc}
//                 />
//               </div>
//             ))}
//           </div>
//         </button>
//       </PopoverHandler>
//       <PopoverContent className="w-72 z-[1000]">
//         <List>
//           {members.map((member) => (
//             <ListItem key={member.member_id}>
//               {/* <ListItemPrefix>
//                 <Avatar
//                   variant="circular"
//                   alt={member.member_id}
//                 />
//               </ListItemPrefix> */}
//               <div>
//                 <Typography variant="h6" color="blue-gray">
//                   {member.member_id}
//                 </Typography>
//                 <Typography
//                   variant="small"
//                   color="gray"
//                   className="font-normal"
//                 >
//                   {member.tripRole}
//                 </Typography>
//               </div>
//             </ListItem>
//           ))}
//         </List>
//       </PopoverContent>
//     </Popover>
//   );
// }


import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Avatar,
  Button,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function MemberPopOver() {
  const { trip_id } = useParams();
  const currentPath = window.location.pathname;
  const pathParts = currentPath.split('/');
  const pathTripId = pathParts[3];

  const [members, setMembers] = useState([]);

  useEffect(() => {
    loadMembers();
  }, []);

  const loadMembers = async () => {
    try {
      const result = await axios.get(`http://localhost:8080/api/v1/trip/memberlist/${pathTripId}`);
      setMembers(result.data);
    } catch (error) {
      console.error("Error loading members:", error);
    }
  }

  return (
    <Popover placement="bottom">
      <PopoverHandler>
        <Button>
          <div className="flex items-center -space-x-4">
            {members.map((member, index) => (
              <div
                key={member.member_id}
                className={`ml-${index !== 0 ? -20 : 0} transition-all duration-200 ease-in-out`}
              >
                <Avatar
                  variant="circular"
                  alt={member.member_id.toString()} // Assuming member_id is a number
                />
              </div>
            ))}
          </div>
        </Button>
      </PopoverHandler>
      <PopoverContent className="w-72 z-[1000]">
        <List>
          {members.map((member) => (
            <ListItem key={member.member_id}>
              <ListItemPrefix>
                <Avatar
                  variant="circular"
                  alt={member.member_id.toString()} // Assuming member_id is a number
                />
              </ListItemPrefix>
              <div>
                <Typography variant="h6" color="blue-gray">
                  {member.member_id}
                </Typography>
                <Typography
                  variant="small"
                  color="gray"
                  className="font-normal"
                >
                  {member.tripRole}
                </Typography>
              </div>
            </ListItem>
          ))}
        </List>
      </PopoverContent>
    </Popover>
  );
}




