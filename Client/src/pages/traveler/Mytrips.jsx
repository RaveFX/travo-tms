// import React, { useState } from 'react';
// import { Link } from "react-router-dom";
// import { useNavigate } from 'react-router-dom';
// import SwiperCard from '../../components/web-component/SwiperCard';
// import TabBar from '../../components/web-component/TabBar';
// import PopupModal from '../../components/web-component/PopupModal';
// import { Button } from "@material-tailwind/react";
// import Sidebar from "../../components/web-component/Sidebar";
// import TopNavbar from "../../components/web-component/Navbar";


// import axios from 'axios';


// function TripCard({ trip, onCardClick }) {
//   return (
//     <div className="trip-card" onClick={() => onCardClick(trip)}>
//       <h3>{trip.title}</h3>
//       <p>{trip.description}</p>
//       {/* Add other trip details as needed */}
//     </div>
//   );
// }

// function Mytrips() {
//   const navigate = useNavigate();
//   const [isOpen, setIsOpen] = useState(false);
//   const user_id = sessionStorage.getItem('user_id');



//   const createTrip = async () => {
//     try {
//       const response = await axios.post('http://localhost:8080/api/v1/trips/create', {
//         trip_admin: user_id,
//       });
//       console.log('Trip created:', response.data);
//       const tripId = response.data.tripId;
//       navigate(`/traveler/trip-planner/${tripId}`);
//     } catch (error) {
//       console.error('Error creating trip:', error);
//     }
//   }

//   const handleCardClick = (trip) => {
//     console.log('Card clicked for trip:', trip);
//   };


//   const [tripinfo, setTripinfo] = useState([]);

//   useEffect(() => {
//     loadTripinfo();
//   }, []);

//   const loadTripinfo = async () => {
//     const result = await axios.get("http://localhost:8080/api/v1/trips/triplist")
//     setTripinfo(result.data);
//   }

//   const data = [
//     {
//       label: "All Trips",
//       value: "all trips",
//       desc: ``,

//     },
//     {
//       label: "Private Trips",
//       value: "private",
//       desc: ``,
//     },
//     {
//       label: "Public Trips",
//       value: "public",
//       desc: ``,
//     },
//     {
//       label: "My Saves",
//       value: "saved",
//       desc: ``,
//     },
//   ];
//   //   const [activeTab, setActiveTab] = React.useState("all trips");
//   const handleCreateTripClick = () => {
//     setIsOpen(true);
//   };

//   const handleOpenCalander = () => {
//     setIsOpen(true);
//   };
//   return (
//     <div className="flex h-screen overflow-hidden">
//       <Sidebar active="My Trips" />
//       <div className="flex flex-col w-full bg-[#D9D9D9] bg-opacity-20 ">
//         <TopNavbar />
//         <div className='flex justify-between'>
//           <div className="w-[70%] pt-8 ">
//             <TabBar data={data} />
//           </div>
//           <Button
//             className='h-[3rem] m-4 justify-center py-2 md:w-[150px] shadow-none hover:shadow-none active:shadow-none focus:shadow-none bg-[#22577A] rounded-full font-poppins font-extrabold'
//             onClick={handleCreateTripClick}>
//             Create Trip
//           </Button>
//           <Button onClick={createTrip} className='h-[3rem] m-4 justify-center py-2 md:w-[150px] shadow-none hover:shadow-none active:shadow-none focus:shadow-none bg-[#22577A] rounded-full font-poppins font-extrabold'>
//             Create Trip
//           </Button>
//           <div className="trip-list">
//             {tripinfo.map((trip) => (
//               <TripCard key={trip.tripId} trip={trip} onCardClick={handleCardClick} />
//             ))}
//           </div>

//         </div>
//         <SwiperCard />
//         <PopupModal isOpen={isOpen} setIsOpen={setIsOpen} />
//       </div>
//     </div>
//   );
// }

// export default Mytrips;



import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TabBar from '../../components/web-component/TabBar';
import PopupModal from '../../components/web-component/PopupModal';
import { Button } from "@material-tailwind/react";
import Sidebar from "../../components/web-component/Sidebar";
import TopNavbar from "../../components/web-component/Navbar";
import SwiperCard from '../../components/web-component/SwiperCard';
import { Link } from 'react-router-dom';
import axios from 'axios';



function Mytrips() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const user_id = sessionStorage.getItem('user_id');
  const [tripinfo, setTripinfo] = useState([]);

  // const createTrip = async () => {
  //   try {
  //     const response = await axios.post('http://localhost:8080/api/v1/trips/create', 'http://localhost:8080/api/v1/trips/create-members', {
  //       user_id: user_id,
  //       trip_admin: user_id,
  //     });
  //     console.log('Trip created:', response.data);
  //     const tripId = response.data.tripId;
  //     navigate(`/traveler/trip-planner/${tripId}`);
  //   } catch (error) {
  //     console.error('Error creating trip:', error);
  //   }
  // }

  const createTrip = async () => {
    try {
      const tripResponse = await axios.post('http://localhost:8080/api/v1/trips/create', {
        trip_admin: user_id,
      });

      console.log('Trip created:', tripResponse.data);
      const tripId = tripResponse.data.tripId;

      const tripMembersResponse = await axios.post('http://localhost:8080/api/v1/trips/create-members', {
        user_id: user_id,
        trip_id: tripId,
        trip_admin: 1,
      });

      console.log('Trip members created:', tripMembersResponse.data);
      navigate(`/traveler/trip-planner/${tripId}`);
    } catch (error) {
      console.error('Error creating trip:', error);
    }
  };

  const handleCardClick = (trip) => {
    console.log('Card clicked for trip:', trip);
  };

  useEffect(() => {
    loadTripinfo();
  }, []);

  const loadTripinfo = async () => {
    const result = await axios.get("http://localhost:8080/api/v1/trips/triplist")
    setTripinfo(result.data);
  }

  const data = [
    {
      label: "All Trips",
      value: "all trips",
      desc: ``,
    },
    {
      label: "Private Trips",
      value: "private",
      desc: ``,
    },
    {
      label: "Public Trips",
      value: "public",
      desc: ``,
    },
    {
      label: "My Saves",
      value: "saved",
      desc: ``,
    },
  ];

  const handleCreateTripClick = () => {
    setIsOpen(true);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar active="My Trips" />
      <div className="flex flex-col w-full bg-[#D9D9D9] bg-opacity-20 ">
        <TopNavbar />
        <div>
          <div className='flex justify-between'>
            <div className="w-[70%] pt-8 ">
              <TabBar data={data} />
            </div>
            <Button
              className='h-[3rem] m-4 justify-center py-2 md:w-[150px] shadow-none hover:shadow-none active:shadow-none focus:shadow-none bg-[#22577A] rounded-full font-poppins font-extrabold'
              onClick={handleCreateTripClick}>
              Create Trip
            </Button>
            <Button onClick={createTrip} className='h-[3rem] m-4 justify-center py-2 md:w-[150px] shadow-none hover:shadow-none active:shadow-none focus:shadow-none bg-[#22577A] rounded-full font-poppins font-extrabold'>
              Create Trip
            </Button>
          </div>
          <div className="trip-list">
            {tripinfo.map((tripinfo) => (
              <Link to={`/traveler/trip-planner/${tripinfo.tripId}`} >
                <button
                  className="h-[3rem] m-4 justify-center py-2 md:w-[150px] shadow-none hover:shadow-none active:shadow-none focus:shadow-none bg-[#22577A] rounded-full font-poppins font-extrabold"
                  onClick={() => handleCardClick(tripinfo)}
                >
                  {tripinfo.tripId} {tripinfo.trip_admin}
                </button>
              </Link>
            ))}
          </div>

        </div>
        <SwiperCard />
        <PopupModal isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </div>
  );
}

export default Mytrips;

