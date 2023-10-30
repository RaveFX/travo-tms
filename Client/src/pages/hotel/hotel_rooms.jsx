import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserNav from "../../components/main/userNav";
import SideBar from "../../components/main/sidebar";
import { Button } from "@material-tailwind/react";
import { Link } from 'react-router-dom';
// import Swal from 'sweetalert2';

function Hotel_rooms() {
  const user_id = sessionStorage.getItem('user_id');
  const [rooms, setRooms] = useState([]);


  useEffect(() => {
    loadRooms();
  }, []);

  const loadRooms = async () => {
    const result = await axios.get(`http://localhost:8080/api/v1/hotel/rooms/${user_id}`)
    setRooms(result.data);

  }

  const handleRemoveAttraction = () => {
    // Show SweetAlert confirmation dialog
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this attraction!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, remove it!'
    }).then((result) => {
      // If user confirms, proceed with the removal logic
      if (result.isConfirmed) {
        // Perform the removal logic here, for example, calling an API to delete the attraction
        // After successful removal, you can show a success message using Swal.fire
        Swal.fire('Deleted!', 'The attraction has been removed.', 'success');
      }
    });
  };
  return (
    <div className="flex h-screen ">
      <SideBar active="Rooms" />
      <div className="flex flex-col w-full bg-[#FFFFFF] bg-opacity-20 ">
        <UserNav />
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
          <div style={{ height: '60%', backgroundImage: "url('/hotel/hero2.png')", display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'absolute' }}>
            <div style={{ width: "40%", textAlign: 'center' }}>
              <h1 style={{ fontSize: '40px' }} className="font-bold font-poppins text-white pb-3">Rooms and Suites</h1>
              <h1 className="font-poppins text-white pb-3">The elegant luxury bedrooms in this gallery showcase custom interior
                designs & decorating ideas. View pictures and find your
                perfect luxury bedroom design.</h1>
              <Link to="/hotelagent_add_room"><Button className="bg-green">Add Rooms</Button></Link>
            </div>
          </div>
          <div style={{ marginTop: '480px', marginLeft: '30px' }}>
            <h1 className=' font-poppins font-extrabold  mb-5 text-[#2C2738]'>Rooms</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

              {
                rooms.map((rooms) => (
                  <div style={{ width: '90%' }} className="bg-white shadow-md rounded-lg overflow-hidden mb-5">
                    <img
                      src='/hotel/room.png'
                      className="w-full h-40 object-cover"
                    />
                    <div className="p-4">

                      <h2 className="text-xl font-semibold">{rooms.room_name}</h2>
                      <p className="text-gray-500 text-sm">Room Id : {rooms.room_id}</p>
                      <p className="text-gray-500">{rooms.description}</p>
                      <span className="text-sm font-bold text-gray-500">
                        Rs.{rooms.price} / night
                      </span>
                      <div className="mt-2 flex justify-between items-center">

                        <button
                          className="px-6 py-2  text-green rounded-full hover:bg-green hover:text-white"
                        >
                          Edit
                        </button>
                        <button
                          className="px-6 py-2  text-red-500 rounded-full hover:bg-red-500 hover:text-white" onClick={() => handleRemoveAttraction()}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              }












            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Hotel_rooms;
