import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Sidebar from '../../components/web-component/Sidebar';
import TopNavbar from '../../components/web-component/Navbar';
import CalanderMain from '../../components/web-component/CalanderMain';
import { format, addMonths, subMonths, startOfMonth, eachDayOfInterval } from 'date-fns';
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Typography,
} from '@material-tailwind/react';



const Dashboard = () => {
  const navigate = useNavigate();

  const user_id = sessionStorage.getItem('user_id');

  const handleNavigate = () => {
    // Example: Navigate to '/other-page' when the button is clicked
    navigate('/other-page');
  };
  const ongoingTrips = [
    {
      id: 1,
      name: 'Summer Getaway',
      startDate: '2023-08-15',
      endDate: '2023-08-20',
    },
    {
      id: 2,
      name: 'Mountain Adventure',
      startDate: '2023-09-10',
      endDate: '2023-09-15',
    },
    // Add more ongoing trips
  ];

  const Explore = [
    {
      id: 1,
      name: "Destinations",
      price: "Find plsces to visit",
      imageSrc:
        "https://www.resort98acres.com/wp-content/uploads/2013/04/slider-5.jpg",
      buttonname: "Explore Now",
      links:"/traveler/DestinationPage"
    },
    {
      id: 2,
      name: "Hotels",
      price: "Book your stay with us",
      imageSrc:
        "https://www.resort98acres.com/wp-content/uploads/2013/04/slider-5.jpg",
      buttonname: "Book Now",
      links: `/traveler/HotelPage/${user_id}`,
    },
    {
      id: 3,
      name: "Vehicles",
      price: "Rent your vehicle with us",
      imageSrc:
        "https://plus.unsplash.com/premium_photo-1661775983935-579b5c94e2c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2FyJTIwcmVudGFsfGVufDB8fDB8fHww&w=1000&q=80",
      buttonname: "Rent Now",
      links: "/traveler/VehiclePage",
  
    },
    {
      id: 4,
      name: "Activities",
      price: "Find activities to do",
      imageSrc:
        "https://cdn-production.checkfront.com/wp-content/uploads/2022/05/img_6273f0e0deafc.jpg",
      buttonname: "Find Now",
      links: "/traveler/VehiclePage",
    },
    
  
    // Define your shop items here...
  ];
  


  const [currentMonth, setCurrentMonth] = useState(new Date());

  const header = () => {
    return (
      <div className="flex justify-between items-center py-2 px-4 bg-gray-800 text-white">
        <button onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}>Previous</button>
        <h2>{format(currentMonth, 'MMMM yyyy')}</h2>
        <button onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}>Next</button>
      </div>
    );
  };

  const daysOfWeek = () => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return (
      <div className="grid grid-cols-7 text-center font-semibold text-gray-700">
        {days.map(day => (
          <div key={day} className="py-2">
            {day}
          </div>
        ))}
      </div>
    );
  };

  const renderCells = () => {
    const monthStart = startOfMonth(currentMonth);
    const daysInMonth = eachDayOfInterval({ start: monthStart, end: addMonths(monthStart, 1) });

    return daysInMonth.map(day => (
      <div key={day} className="py-4 text-center border border-gray-200">
        {format(day, 'd')}
      </div>
    ));
  };
  

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar active="Dashboard" />
      <div className="flex flex-col w-full bg-[#D9D9D9] bg-opacity-20">
        <TopNavbar />
        <div className="flex flex-col p-6 space-y-4 overflow-y-scroll">
          <h1 className="text-3xl font-poppins font-extrabold text-[#2AB57D]">
            {/* Dashboard */}
          </h1>
          <div className='flex flex-row gap-[1%]'>
            <div className='flex flex-col gap-[2rem] w-[75%]'>
              <div className='flex flex-row justify-around items-center bg-white rounded-lg p-4 pl-[49px] h-[225px] w-[75%]'>
                <div className="mb-2 flex flex-col items-start justify-between w-full">
                  <Typography className="text-[#578B6A] font-[700] text-[32px] ">
                  Hello {user_id}!
                  </Typography>
                  <Typography className="text-[18px] text-[#5F647E] font-[400]">
                  Welcome back and explore the world.
                  </Typography>
                  <div className='flex justify-start items-center w-full'>
                    <Typography
                      variant="small"
                      className="text-[#728659] font-[700] text-[24px] "
                    >
                      Why Wait?
                    </Typography>
                    <Button 
                      className='md:!w-auto h-[3rem] m-4 justify-center py-2 md:w-[150px] shadow-none hover:shadow-none active:shadow-none focus:shadow-none bg-[#22577A] rounded-full font-poppins font-extrabold'>
                        Continue Editing
                    </Button>
                  </div>
                </div>
                <div className='h-100 w-full rounded-lg'>
                  <img
                    src="/traveler/trip.jpg"
                    alt="card-image"
                    className="h-full w-full object-cover rounded-lg"
                  />
                </div>
              </div>
              <div className='flex flex-col gap-[1rem]'>
                <div className="text-[#578B6A] font-[700] text-[24px] ">Explore Now</div>
                <div className="flex flex-wrap gap-2">
                  {Explore.map((item) => (
                    <Card key={item.id} className="w-[210px]">
                      <CardHeader
                        className="rounded-lg m-2"
                        shadow={false}
                        floated={false}
                      >
                        <img
                          src={item.imageSrc}
                          alt="card-image"
                          className="h-32 w-full object-cover bg-slate-100"
                        />
                      </CardHeader>
                      <CardBody>
                        <div className="flex -m-5 items-center justify-center">
                          <Typography
                            className="font-[700] text-[24px] "
                          >
                            {item.name}
                          </Typography>
                        </div>
                      </CardBody>
                      <CardFooter>
                        <Link to={item.links}>
                          <Button 
                            className='h-[3rem] items-center justify-center -my-2 md:w-[150px] shadow-none hover:shadow-none active:shadow-none focus:shadow-none bg-[#22577A] rounded-full font-[500] text-[14px] '>
                              {item.buttonname}
                          </Button>
                        </Link>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
            <div className='w-[50%] h-auto'>
            <div className="max-w-md mx-2 my-4">
            <div className="shadow-lg rounded-lg">
              {header()}
              {daysOfWeek()}
              <div className="grid grid-cols-7 gap-2 p-4">{renderCells()}</div>
            </div>
          </div>
            </div>
          </div>
          <div className="bg-white p-4 shadow-md rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Ongoing Trips</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {ongoingTrips.map((trip) => (
            <Link key={trip.id} to={`/edit-trip/${trip.id}`}>
              <Card className="cursor-pointer">
                <CardHeader className="rounded-lg m-2" shadow={false} floated={false}>
                  <Typography
                    color="blue-gray"
                    className="text-sm font-bold font-poppins"
                  >
                    {trip.name}
                  </Typography>
                </CardHeader>
                <CardBody>
                  <Typography
                    variant="small"
                    color="red"
                    className="font-bold text-xs mb-2 font-poppins opacity-75 mx-5"
                  >
                    Start Date: {trip.startDate}
                  </Typography>
                  <Typography
                    variant="small"
                    color="red"
                    className="mb-2 text-xs w-[75%] bg-slate-300 p-1.5 font-poppins opacity-75 rounded-lg mx-6"
                  >
                    End Date: {trip.endDate}
                  </Typography>
                </CardBody>
              </Card>
            </Link>
          ))}
        </div>
      </div>
      

          {/* Other Options */}
          
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
