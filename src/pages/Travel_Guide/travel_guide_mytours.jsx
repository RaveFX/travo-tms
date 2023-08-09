import React from 'react'
import Sidebar from '../../components/sidebar';
import TopNavbar from '../../components/topNavbar';
import { Rating, Button } from "@material-tailwind/react";
import { Link } from 'react-router-dom';



const GridImage = () => {
    return (
        <div className='max-w-[1240px] mx-auto px-4 text-left'>
            <p className='py-4 text-dimBlack'>DAY TOUR</p>
            <h1 className='text-3xl'>Kandy: Historical Three Temples All-Inclusive Tour</h1>
            <div className='grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4'>
                <img className='w-full h-full object-cover col-span-2 md:col-span-3 row-span-2' src='https://cdn.getyourguide.com/img/tour/5e26baf7ce259.jpeg/98.jpg' alt="/" />
                <img className='w-full h-full object-cover' src="https://cdn.getyourguide.com/img/tour/5c3efca4e1b4d.jpeg/98.jpg" alt="/" />
                <img className='w-full h-full object-cover' src='https://cdn.getyourguide.com/img/tour/5d56418cf3fbd.jpeg/97.jpg' alt="/" />
                <img className='w-full h-full object-cover' src='https://cdn.getyourguide.com/img/tour/5e26bb06201f5.jpeg/53.jpg' alt="/" />
                <img className='w-full h-full object-cover' src='https://cdn.getyourguide.com/img/tour/5e26bb1e14980.jpeg/53.jpg' alt="/" />
            </div>
            <p>See the highlights of Kandy and its surrounding areas on this full-day guided tour. Visit temples, the Botanical Gardens,
                see panoramic views of the city, and enjoy a performance of traditional Kandyan dances.</p>
            <div>

                <p className='text-4xl'>Experience</p>
                
            </div>
        </div>
    );
};
const TourCard = ({ image, name, des }) => {
    return (
        <div className="card card-compact rounded-xl  bg-white sm:w-60 w-80 h-64 sm:mx-6 my-2 relative shadow-xl  hover:bg-slate-100 ">
            <figure>
                <Link to="/travel_guide_mytours_more">
                <img src={image} alt="kandy" className=' rounded-xl sm:w-56 w-72 h-36 sm:m-2 m-4 cursor-pointer' />
                </Link>
            </figure>
            <div className="card-body mx-5">
                <p className='text-dimBlack text-sm'>{des}</p>
                <h2 className="card-title text-xs">{name}</h2>
                <div className="">
                    <Rating ratedColor="yellow" value={3} readonly />
                </div>
            </div>
        </div>
    );
};

const travel_guide_mytours = () => {
    const tours = [
        { image: "https://cdn.getyourguide.com/img/location/5c83eaac2b43a.jpeg/88.jpg", name: "Kandy: Temples, Gardens & Cultural Show City", des: "DAY TRIP" },
        { image: "https://tse3.mm.bing.net/th?id=OIP.JJ_h16-xl50fgUHR9LkZIAHaE8&pid=Api&P=0&h=220", name: "Matara /Mirissa /Thalpe /Temple", des: "DAY TRIP" },
        { image: "https://tse1.mm.bing.net/th?id=OIP.MOUnGlhdLu1Betuwu1OaxQHaHa&pid=Api&P=0&h=220", name: "Galle /Fort /Weligama /Unawatuna ", des: "2 DAYS TRIP" },
        { image: "https://tse1.mm.bing.net/th?id=OIP.MOUnGlhdLu1Betuwu1OaxQHaHa&pid=Api&P=0&h=220", name: "Galle /Fort /Weligama /Unawatuna ", des: "2 DAYS TRIP" },
        { image: "https://tse1.mm.bing.net/th?id=OIP.MOUnGlhdLu1Betuwu1OaxQHaHa&pid=Api&P=0&h=220", name: "Galle /Fort /Weligama /Unawatuna ", des: "2 DAYS TRIP" },
        { image: "https://tse1.mm.bing.net/th?id=OIP.MOUnGlhdLu1Betuwu1OaxQHaHa&pid=Api&P=0&h=220", name: "Galle /Fort /Weligama /Unawatuna ", des: "2 DAYS TRIP" },
        { image: "https://tse1.mm.bing.net/th?id=OIP.MOUnGlhdLu1Betuwu1OaxQHaHa&pid=Api&P=0&h=220", name: "Galle /Fort /Weligama /Unawatuna ", des: "2 DAYS TRIP" },

    ];
    return (
        <div className='flex'>
            <div><Sidebar /></div>
            <div className='flex flex-grow flex-col w-full'>
                <div><TopNavbar /></div>
                {/* <div><GridImage /></div> */}
                <div className='justify-right px-5 flex xs:flex-col sm:flex-row md:flex-wrap lg:flex-wrap relative  '>
                               
                                {tours.map((tour, index) => (
                                    <TourCard key={index} image={tour.image} name={tour.name} des={tour.des} />
                                ))}
                                
                            </div>
            </div>
        </div>
    )
}

export default travel_guide_mytours