import React from 'react';
import Grid from '../../components/web-component/Grid';
import Sidebar from '../../components/web-component/Sidebar';
// import Headers from '../../components/web-component/Headers';
import TopNavbar from '../../components/web-component/Navbar';
import {
    Rating, Button, Card, Chip,
    CardBody,
    CardFooter,
    Typography,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";


const photos = [
    {
        src: 'https://www.srilankacolombohotels.com/data/Pics/OriginalPhoto/7075/707577/707577091/pic-galadari-hotel-colombo-1.JPEG',
        alt: 'Photo 1',
    },
    {
        src: 'https://cdn1.goibibo.com/voy_mmt/t_fs/htl-imgs/4190725563792265-382135b2d9db11e992080242ac110003.jpg',
        alt: 'Photo 2',
    },
    {
        src: 'https://cdn1.goibibo.com/voy_mmt/t_fs/htl-imgs/4190725563792265-300c8facd9db11e98c990242ac110003.jpg',
        alt: 'Photo 3',
    },
    {
        src: 'https://cdn1.goibibo.com/voy_ing/t_fs/abd3c6ae798711eab6bd0242ac110002.jpg',
        alt: 'Photo 3',
    },
    {
        src: 'https://q-xx.bstatic.com/xdata/images/hotel/max500/213971608.jpg?k=c998f989132fc22e068383dfa9c05f9415cf4984003e7dc8d0ec86357743b49a&o=&isSkia=true',
        alt: 'Photo 3',
    },
    {
        src: 'https://cdn1.goibibo.com/voy_ing/t_fs/e62a7018798811eab6c50242ac110002.jpg',
        alt: 'Photo 3',
    },
    // Add more photos here...
];

const GridImage = ({ photos, description, name, wifi, lunch, dinner, breakfast, ac, room, link, fullBoard,halfBoard }) => {

    const [showAll, setShowAll] = useState(false);
    const displayedPhotos = showAll ? photos : photos.slice(0, 3);
    // const check=[
    //     {}
    // ]
    return (
        <div className='max-w-[1240px] mx-auto px-4 text-left'>

            {/* <p className='py-4 text-dimBlack'>DAY TOUR</p> */}
            <h1 className='text-3xl m-5'>{name}</h1>
            <div className="grid grid-cols-3 gap-3">
                {displayedPhotos.map((photo, index) => (
                    <img
                        key={index}
                        src={photo.src}
                        alt={photo.alt}
                        className="rounded-lg"
                    />
                ))}
                {!showAll && photos.length > 3 && (
                    <Button
                        onClick={() => setShowAll(true)}
                        className="col-span-3 text-center py-2 px-4 bg-button2 text-white rounded-lg cursor-pointer"
                    >
                        View More Photos
                    </Button>
                )}
            </div>

            <div className='flex flex-col sm:flex-row'>
                <div className='flex flex-col w-full'>


                    <div className='w-full sm:w-1/2 lg:w-3/4 xl:w-1/2 p-5'>
                        <p className='text-sm'> {description}</p>
                        <p className='text-md text-base mt-4'>Room Type</p>
                        <Chip className='bg-button2' size="lg" value={room} />
                    </div>

                    <div className='w-full sm:w-1/2 lg:w-3/4 xl:w-1/2 p-5'>
                        {/* <p className='text-sm'> {price}</p> */}
                        <p className='text-md text-base mt-1'>Full Board Price (Rs.)</p>
                        <Chip className='bg-textGray ' size="lg" value={fullBoard} />
                        <p className='text-md text-base mt-1'>Half Board Price (Rs.)</p>
                        <Chip className='bg-textGray' size="lg" value={halfBoard} />
                    </div>

                </div>

                <div className='w-full sm:w-1/2 lg:w-1/2 xl:w-1/2  p-5'>
                    <p className='text-xl mt-5'>Most Popular Facilities</p>
                    <div className='flex my-5'>
                        <ul className="list-disc ml-10">
                            {wifi && <li>Wi-Fi available</li>}
                            {lunch && <li>Lunch available</li>}
                            {dinner && <li>Dinner available</li>}
                            {breakfast && <li>Breakfast</li>}
                            {ac && <li>A/C available</li>}
                        </ul>
                    </div>
                </div>

                <div className='w-full sm:w-1/2 lg:w-1/2 xl:w-1/2 text-left sm:text-center p-5'>
                    <Card className="mt-6 w-96">
                        <CardBody>
                            <Typography variant="h5" color="blue-gray" className="mb-2">
                                Property highlights
                            </Typography>
                            <h1 className='text-none mb-2'>Location : </h1>
                            <Typography variant="h6" color="blue-gray" className="mb-2">
                                {breakfast && <h1>Breakfast Info</h1>}
                            </Typography>
                            {/* <h1 className='text-none mb-2'>Continental, Vegetarian</h1> */}
                            <Typography variant='h6'>
                                Free parking available at the hotel
                            </Typography>

                        </CardBody>
                        <CardFooter className="pt-0">
                            <a href={link} className="inline-block">
                                <Button variant="gradient" size="sm" className="flex items-center gap-2 ">
                                    Reserve
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={2}
                                        stroke="currentColor"
                                        className="h-4 w-4"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                        />
                                    </svg>
                                </Button>
                            </a>
                        </CardFooter>
                    </Card>

                </div>

            </div>



        </div>
    );
};

function App() {
    // const { hotelId } = useParams();
    const [hotels, setHotels] = useState([]);


    const currentURL = window.location.href;
    const splitURL = currentURL.split("/");
    const user_id = decodeURIComponent(splitURL[5]);
    const hotelId = decodeURIComponent(splitURL[6]);
    const roomId = decodeURIComponent(splitURL[7]);
    const userId =

        console.log("Type: ", hotelId)


    useEffect(() => {
        const loadHotels = async () => {
            try {
                const result = await axios.get(`http://localhost:8080/api/v1/traveler/hotels/${hotelId}/${roomId}`)
                setHotels(result.data);
            } catch (error) {
                console.error('Error fetching hotel details:', error);
            }
        };
        loadHotels();
    }, [hotelId, roomId]);


    return (

        <div className="flex h-screen overflow-hidden">
            <Sidebar active="Dashboard" />
            <div className="flex flex-col w-full bg-[#D9D9D9] bg-opacity-20">
                <TopNavbar />
                <div className='overflow-y-auto' >



                    <div className=" sm:flex flex-wrap justify-center ">
                        {hotels.map((hotel) => {
                            const halfBoard = Math.floor((2*hotel.price)/3)

                            return <GridImage name={hotel.hotel_name} photos={photos} description={hotel.description}
                                wifi={hotel.wifi} lunch={hotel.lunch} dinner={hotel.dinner} breakfast={hotel.breakfast} ac={hotel.ac} room={hotel.view} halfBoard={halfBoard} fullBoard={hotel.price} link={`/traveler/HotelBook/${user_id}/${hotelId}/${roomId}`} />;

                        })}
                    </div>
                </div>



            </div>
        </div>
    );
}

export default App;
