import React, { useEffect, useState } from "react";
import Sidebar from "../../components/web-component/Sidebar";
import TopNavbar from "../../components/web-component/Navbar";
import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";
import { Button, Input } from "@material-tailwind/react";
import { StarIcon } from "@heroicons/react/24/outline";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import TabBar from '../../components/web-component/TabBar';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from "axios";


function EditTripRoles() {
    const {id} = useParams();
    const [isSubSidebarOpen, setIsSubSidebarOpen] = useState(false);
    const [subSidebarState, setSubSidebarState] = useState(1);
    const user_id = sessionStorage.getItem('user_id');
  const [members, setMembers] = useState([]);
  const [newRole, setNewRole] = useState("");

  useEffect(() => {
    loadMembers();
  },[]); 

const loadMembers=async()=>{
    const result=await axios.get(`http://localhost:8080/api/v1/trip/trip-member-list/${id}`)
    setMembers(result.data);
 
}

const handleSaveClick = async (memberId, selectedRole) => {
    try {
        console.log(selectedRole);
      await axios.put(`http://localhost:8080/api/v1/trip/update-member-role`, {
        trip_id : id,
        tripRole: selectedRole,
        member_id : memberId
      });
      // After saving, you might want to refresh the member list to show the updated roles
      loadMembers();
    } catch (error) {
      console.error("Error updating member role:", error);
    }
  };
  return (
    <div className="flex h-screen  ">
    <Sidebar
    active="My Trips"
    isSubSidebarOpen={isSubSidebarOpen}
    setIsSubSidebarOpen={setIsSubSidebarOpen}
    subSidebarState={subSidebarState}
    setSubSidebarState={setSubSidebarState} 
    />
    <div className="flex flex-col w-full bg-[#D9D9D9] bg-opacity-20 z-[10000] ">
          <TopNavbar />
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold text-green-600 mb-6">Trip Members</h1>
      <div className="max-w-md w-full bg-white shadow overflow-hidden sm:rounded-lg">
        <ul className="divide-y divide-gray-200">
          {members.map((member) => (
            <li key={member.member_id} className="flex items-center justify-between px-4 py-4 sm:px-6">
              <div className="px-4 py-4 sm:px-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  {`${member.fname} ${member.lname}`}
                </h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                    Role: 
                    {member.tripRole === "ADMIN" ? (
                        <span className="ml-2">{member.tripRole}</span>
                      ) : (
                        <select
                          className="ml-2 border border-gray-300 rounded p-1"
                          value={member.tripRole}
                          onChange={(e) => handleSaveClick(member.member_id, e.target.value)}
                        >
                          <option value="EDITOR">Editor</option>
                          <option value="MEMBER">Member</option>
                        </select>
                      )}
                  </p>
              </div>
              
            </li>
          ))}
        </ul>
      </div>
    </div>
 </div>
  </div>
  )
}

export default EditTripRoles