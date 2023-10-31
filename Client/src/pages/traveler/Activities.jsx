import React, { useEffect, useState } from "react";
import Sidebar from "../../components/web-component/Sidebar";
import TopNavbar from "../../components/web-component/Navbar";
import { XMarkIcon, StarIcon } from "@heroicons/react/24/outline";
import TabBar from '../../components/web-component/TabBar';
import { Button, Input } from "@material-tailwind/react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useParams } from 'react-router-dom';
// import Swal from 'sweetalert2';
import axios from 'axios';

function Activities() {
  const { id, day } = useParams();
  const [isSubSidebarOpen, setIsSubSidebarOpen] = useState(false);
  const [subSidebarState, setSubSidebarState] = useState(1);
  const [activities, setActivities] = useState([]);
  const [isOpen, setIsOpen] = useState(true);

  // Define the styles object
  const styles = {
    sweetAlertContainer: {
      zIndex: 1000000, // Set a high z-index value for SweetAlert2 in this component
    },
  };

  useEffect(() => {
    loadActivities();
  }, []);

    const loadActivities=async()=>{
        const result=await axios.get(`http://localhost:8080/api/v1/trip/activityList/${id}/${day}`)
        setActivities(result.data);
    }
  };

    const handleAddActivity = async (activity) => {
      try {
        // Make a POST request to your backend API endpoint to store the attraction details
        await axios.post("http://localhost:8080/api/v1/trip/add-activity", {
          agent_id: activity.agent_id,
          trip_id: id,
          day : day
        });
        // Handle success, e.g., show a success message to the user
        const result=await axios.get(`http://localhost:8080/api/v1/trip/activityList/${id}/${day}`)
        setActivities(result.data);
        
        console.log("Activity added successfully!");
        
      
        // Display a success message using SweetAlert2
        Swal.fire({
          icon: 'success',
          title: 'Activity added successfully!',
          showConfirmButton: false,
          timer: 1500, // Automatically close after 1.5 seconds
          customClass: {
            container: 'custom-swal-container' // Define your custom class here
          },
          style: {
            zIndex: 100000 // Set a high z-index value
          }
        });
      } catch (error) {
        // Handle error, e.g., show an error message to the user
        console.error("Error adding activity: ", error);
      }
    };

    const data = [
        {
            label: "All",
            value: `traveler/activities/${id}/${day}`,
            desc: ``,

        },
        {
            label: "Closer",
            value: `traveler/closer_activities/${id}/${day}`,
            desc: ``,
        },
        {
            label: "Selected",
            value: "public",
            desc: ``,
        },
        
    ];
    return (
        <div className="flex h-screen overflow-hidden ">
            <Sidebar
                active="My Trips"
                isSubSidebarOpen={isSubSidebarOpen}
                setIsSubSidebarOpen={setIsSubSidebarOpen}
                subSidebarState={subSidebarState}
                setSubSidebarState={setSubSidebarState}
            />
            <div className="flex flex-col w-full bg-[#D9D9D9] bg-opacity-20 z-[10000] ">
                <TopNavbar />
                <div className='flex justify-between'>
                    <div className="w-[70%] pt-8 ">
                        <TabBar data={data} />
                    </div>

                </div>
                <div className="container mx-4  overflow-hidden">
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <h1 className="text-3xl font-poppins font-extrabold text-[#2AB57D] mb-6 mt-4">
                            Things to do
                        </h1>
                        <div className="relative flex w-full gap-2 md:w-max rounded-full mr-10">
                            <Input
                                type="search"
                                label="Type here..."
                                className="pr-20 rounded-full style-none"
                                containerProps={{
                                    className: "min-w-[288px]",
                                }}
                            />
                            <Button size="sm" className="!absolute right-1 top-1 rounded-full bg-[#57CC99] hover:shadow-none active:shadow-none">
                                <MagnifyingGlassIcon className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="overflow-y-auto h-[calc(100vh-150px)] mr-4 ml-4" style={{ scrollbarWidth: 'none' }}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {activities.map((activity) => (
            <div
              key={activity.agent_id}
              className="bg-white p-4 rounded-lg shadow border relative "
              onClick={""}
            >
              <div className="flex items-center justify-center mb-2">
                <img
                  src={`/main/${activity.activity_img}`}
                  alt={`${activity.company_name}'s Photo`}
                  className="w-full h-44 rounded-md object-cover"
                />
              </div>
              <h2 className="text-xl font-semibold mb-2">{activity.company_name}</h2>
              <p className="mb-2">{activity.description}</p>
              <div className="flex items-center mb-2">
                <span className="mr-2 flex flex-row gap-1 justify-center">{activity.total_reviews.toFixed(1)}<StarIcon  className="w-4 h-4 strok-yellow"/></span>
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-4 w-4 text-yellow-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="ml-1 text-sm text-gray-500">
                    ({activity.total_reviews}  reviews)
                  </span>
                  <div className="absolute bottom-2 right-2">
                    <Button className="bg-green" onClick={() => handleAddActivity(activity)}>Add Activity</Button>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Activities