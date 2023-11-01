import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
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
 
export default function MemberPopOver() {
  const { id } = useParams();
  const user_id = sessionStorage.getItem('user_id');
  const [members, setMembers] = useState([]);
 const [isAdmin, setIsAdmin] = useState(false); 
 
  useEffect(() => {
    loadMembers();
  },[]); 

const loadMembers=async()=>{
  const response = await axios.get(`http://localhost:8080/api/v1/trip/check-admin-or-editor-role/${user_id}/${id}`);
  setIsAdmin(response.data);

    const result=await axios.get(`http://localhost:8080/api/v1/trip/trip-member-list/${id}`)
    setMembers(result.data);
 
}

const handleEditRolesClick = () => {
  // Navigate to the edit roles page
  navigate(`/edit-roles/${id}`);
};


  // const members = [
  //   { id: 1, name: 'Sanduni', avatarSrc: '/traveler/Female(1).svg', details: 'Member details here' },
  //   { id: 2, name: 'Kanishka', avatarSrc: '/traveler/Female.svg', details: 'Member details here' },
  //   { id: 3, name: 'Samuel', avatarSrc: '/traveler/Female(1).svg', details: 'Member details here' },
  //   { id: 4, name: 'Samindu', avatarSrc: '/traveler/Male.svg', details: 'Member details here' },
  //   { id: 5, name: 'Madushi', avatarSrc: '/traveler/Male(1).svg', details: 'Member details here' },
  //   // Add more members as needed
  // ];

  return (
    <Popover placement="bottom">
      <PopoverHandler>
        <button>
          <div className="flex items-center -space-x-4">
            {members.map((member, index) => (
              <div
                key={member.member_id}
                className={`ml-${
                  index !== 0 ? -20 : 0
                } transition-all duration-200 ease-in-out`}
              >
                <Avatar
                  variant="circular"
                  alt={member.fname}
                  src={`/main/${member.profile_image}`}
                />
              </div>
            ))}
          </div>
        </button>
      </PopoverHandler>
      <PopoverContent className="w-72 z-[1000]">
        <List>
          {members.map((member) => (
            <ListItem key={member.member_id}>
              <ListItemPrefix>
                <Avatar
                  variant="circular"
                  alt={member.fname}
                  src={`/main/${member.profile_image}`}
                />
              </ListItemPrefix>
              <div>
                <Typography variant="h6" color="blue-gray">
                  {member.fname} {member.lname}
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