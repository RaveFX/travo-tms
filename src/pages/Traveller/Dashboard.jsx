import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Sidebar from '../../pages/web-component/Sidebar';
import TopNavbar from '../../pages/web-component/Navbar';
import CalanderMain from '../web-component/CalanderMain';
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Typography,
} from '@material-tailwind/react';

const shopItems = [
  {
    id: 1,
    name: "Hotels",
    price: "Book your stay with us",
    imageSrc:
      "https://www.resort98acres.com/wp-content/uploads/2013/04/slider-5.jpg",
    buttonname: "Book Now",
  },
  {
    id: 2,
    name: "Vehicles",
    price: "Rent your vehicle with us",
    imageSrc:
      "https://plus.unsplash.com/premium_photo-1661775983935-579b5c94e2c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2FyJTIwcmVudGFsfGVufDB8fDB8fHww&w=1000&q=80",
    buttonname: "Rent Now",
  },
  {
    id: 2,
    name: "Camping Items",
    price: "Camping items for rent",
    imageSrc:
      "https://www.beyondthetent.com/wp-content/uploads/2023/03/Cool-Camping-Gear.jpg",
    buttonname: "Rent now",
  },
  {
    id: 2,
    name: "Travel Guides",
    price: "Guides for your trip",
    imageSrc:
      "https://cdn-production.checkfront.com/wp-content/uploads/2022/05/img_6273f0e0deafc.jpg",
    buttonname: "Book Now",
    links: "/GuideProfile",
  },
  {
    id: 2,
    name: "Travel Buddy",
    price: "Connect with travellers",
    imageSrc:
      "https://res.cloudinary.com/worldpackers/image/upload/c_fill,f_auto,q_auto,w_1024/v1/guides/article_cover/c7c4elegquhjubd1xmyb",
    buttonname: "Turn on",
    links: "/Travelbuddy",
  },

  // Define your shop items here...
];

const Dashboard = () => {
  const navigate = useNavigate();

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
  
  const OngoingTripsSection = () => {
    return (
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
    );
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
              <div className='flex flex-row justify-around items-center bg-white rounded-lg p-4 pl-[49px] h-[225px] w-full]'>
                <div className="mb-2 flex flex-col items-start justify-between w-full">
                  <Typography className="text-[#578B6A] font-[700] text-[32px] ">
                  Hello Sanduni!
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
                <div className='h-full w-full rounded-lg'>
                  <img
                    src="./public/images/trip.jpg"
                    alt="card-image"
                    className="h-full w-full object-cover rounded-lg"
                  />
                </div>
              </div>
              <div className='flex flex-col gap-[1rem]'>
                <div className="text-[#578B6A] font-[700] text-[24px] ">Other Options</div>
                <div className="flex flex-wrap gap-2">
                  {shopItems.map((item) => (
                    <Card key={item.id} className="w-[225px]">
                      <CardHeader
                        className="rounded-lg m-2"
                        shadow={false}
                        floated={false}
                      >
                        <img
                          src={item.imageSrc}
                          alt="card-image"
                          className="h-40 w-full object-cover bg-slate-100"
                        />
                      </CardHeader>
                      <CardBody>
                        <div className="flex">
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
                            className='h-[3rem] justify-center py-2 md:w-[150px] shadow-none hover:shadow-none active:shadow-none focus:shadow-none bg-[#22577A] rounded-full font-[500] text-[14px] '>
                              {item.buttonname}
                          </Button>
                        </Link>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
            <div className='w-[25%] h-auto'>
              <CalanderMain />
            </div>
          </div>
      

          {/* Other Options */}
          
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
