import React from 'react'
import { useEffect, useState } from "react";
import axios from 'axios';
// import Sidebar from '../../components/sidebar';
import Sidebar from '../../components/web-component/Sidebar';
import Headers from '../../components/web-component/Headers';
import TopNavbar from '../../components/web-component/Navbar';
import { Rating, Button, Card, CardBody, Typography,Carousel } from "@material-tailwind/react";
import { Link } from 'react-router-dom';



const VegicleCard = ({ names, description, location,link, milage, small_bag, price, type, src }) => {

    return (
        <Card className="sm:w-[48rem] xs:w-[60rem] lg:w-[60rem] xl:w-[72rem] overflow-hidden m-5">

            <CardBody className="h-52 p-5 bg-white ">
                <div className='flex'>
                    <div className="w-1/3 sm:flex lg:flex flex-row  ">
                        <Typography className=" h-screen" >
                            
                            <img
                                src="https://www.travelandleisure.com/thmb/pCU_Y9fbQe4CT5Q73J9k2Bqd_bI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/header-grand-velas-los-cabos-MXALLINC0222-46d3772ad56f4493a83e1bcb49e119f9.jpg"
                                alt="ui/ux review check"
                                className="w-60  rounded"
                                
                            />
                            {/* <div className='flex'>
                                <Carousel
                                    transition={{ duration: 2 }}
                                    className='rounded-xl bg-gray-200 items-center '
                                >{slides.map((s) => (
                                    <img className='h-fiull w-full object-cover' src={s} />
                                ))}</Carousel>
                            </div> */}
                            
                        </Typography>
                    </div>
                    <div className='w-full mx-10'>
                        <Typography variant="h5" color="blue-gray">{names}</Typography>

                        <Typography className="sm:w-1/2 lg:w-full lg:flex">
                            <Typography className="w-1/2">
                                <Typography className="flex mr-4 my-4" variant="small" color="blue-gray"><i class='bx bx-user'></i> {description} </Typography>
                                
                            </Typography>
                            <Typography>
                                <Typography variant="" color="blue-gray">{type}</Typography>
                                <Typography variant="" color="blue-gray">{small_bag}</Typography>
                                <Typography variant="" color="blue-gray">{location}  location</Typography>
                            </Typography>
                            <Typography className="px-5">
                            <Typography variant="" className="font-thin text-xs" color="Green-500"></Typography>

                            <Typography variant="h6" color="Green-500">{price}</Typography>

                        </Typography>
                            <Typography variant="lead" className=" font-normal  ">
                                <Button variant="gradient" className="rounded-full bg-green" color="green">View More</Button>
                            </Typography>
                        </Typography>

                    </div>
                </div>

            </CardBody>
            {/* <CardFooter className="flex items-center justify-between">
         
          <Typography className="font-normal">January 10</Typography>
        </CardFooter> */}
        </Card>
    );
}



const hotel_page = () => {
    // const user_id = sessionStorage.getItem('user_id');
    const currentURL = window.location.href;
    const splitURL = currentURL.split("/");
    const user_id = decodeURIComponent(splitURL[5]);
    
    console.log(user_id);
    const [hotels,setHotels]=useState([]);
   
    useEffect(() => {
        loadHotels();
    },[]); 

    const loadHotels=async()=>{
        const result=await axios.get("http://localhost:8080/api/v1/traveler/hotels")
        setHotels(result.data);
        const hotelID = result.data.hotel_id;
        // console.log({hotelID});
    }
   
    // console.log(hotelID)
    return (
        <div className="flex h-screen overflow-hidden">
            <Sidebar active="Dashboard" />
            <div className="flex flex-col w-full bg-[#D9D9D9] bg-opacity-20">
                <TopNavbar />

                      <Headers/>
                <div className='overflow-y-auto' >

                    <div className=" flex flex-row overflow-auto  xs:justify-center font-bold text-3xl my-10">
                    </div>
                    <div className=" sm:flex flex-wrap justify-center ">
                        {hotels.map((hotel) => (
                            <Link to={`/traveler/HotelType/${user_id}/${hotel.hotel_id}`}>
                            <VegicleCard  names={hotel.hotel_name} description={hotel.description}  />
                            </Link>
                        ))}

                    </div>
                </div>



            </div>
        </div>
    );


}

export default hotel_page