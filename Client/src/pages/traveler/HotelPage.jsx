import React from 'react'
import { useEffect, useState } from "react";
import axios from 'axios';
// import Sidebar from '../../components/sidebar';
import Sidebar from '../../components/web-component/Sidebar';
import Headers from '../../components/web-component/Headers';
import TopNavbar from '../../components/web-component/Navbar';
import { Rating, Button, Card, CardBody, Typography,Carousel } from "@material-tailwind/react";
import { Link } from 'react-router-dom';



const VegicleCard = ({ names, description, location,link, milage, branch, price, type, src }) => {

    return (
        <Card className="sm:w-[48rem] xs:w-[60rem] lg:w-[60rem] xl:w-[72rem] overflow-hidden m-5">

            <CardBody className="h-52 p-5 bg-white ">
                <div className='flex'>
                    <div className="w-1/3 sm:flex lg:flex flex-row  ">
                        <Link to={link} >
                        <Typography className=" h-screen" >
                            
                            <img
                                src={`../../../public/main/${src}`}
                                alt="ui/ux review check"
                                className="w-44  rounded"
                                
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
                        </Link>
                    </div>
                    <div className='w-full mx-10'>
                        <Typography variant="h5" color="blue-gray">{names}</Typography>

                        <Typography className="sm:w-1/2 lg:w-full lg:flex">
                            <Typography className="w-1/2 mr-20">
                                <Typography className="flex mr-4 my-4" variant="small" color="blue-gray"><i class='bx bx-user'></i> {description} </Typography>
                                
                            </Typography>
                            <Typography>
                                <Typography variant="" color="blue-gray">{type}</Typography>
                                <Typography variant="" color="blue-gray">Brach: {branch}</Typography>
                                {/* <Typography variant="" color="blue-gray">Tel: {location}</Typography> */}
                                <a href={location} variant="gradient" className="flex flex-row rounded-full bg-green p-2 text-white w-40 my-6" color="green">
                                        <img src='../../../public/traveler/phone.png' className='w-6 mx-2'/>{location}</a>
                            </Typography>
                            
                           
                        </Typography>

                    </div>
                </div>

            </CardBody>
            
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

                      {/* <Headers/> */}
                <div className='overflow-y-auto' >

                    <div className=" flex flex-row overflow-auto  xs:justify-center font-bold text-3xl my-10">
                    <p>Hotels</p>
                    </div>
                    <div className=" sm:flex flex-wrap justify-center ">
                        {hotels.map((hotel) => (
                            
                            <VegicleCard  names={hotel.hotel_name} description={hotel.hotel_description} location={hotel.contact_num} branch={hotel.branch} src={hotel.hotel_img} link={`/traveler/HotelType/${user_id}/${hotel.hotel_id}`}  />
                           
                        ))}

                    </div>
                </div>



            </div>
        </div>
    );


}

export default hotel_page