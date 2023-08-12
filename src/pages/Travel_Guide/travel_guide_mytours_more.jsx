import React from 'react'
import Sidebar from '../../components/sidebar';
import TopNavbar from '../../components/topNavbar';
import { Rating, Button } from "@material-tailwind/react";


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
            <p className='text-sm'>See the highlights of Kandy and its surrounding areas on this full-day guided tour. Visit temples, the Botanical Gardens,
                see panoramic views of the city, and enjoy a performance of traditional Kandyan dances.</p>
            <div>

                <p className='text-3xl my-5'>Experience</p>
                <div className='flex my-5'>

                    <p className='text-lg w-1/6'>Highlight</p>
                    <ul class="list-disc ml-10">
                        <li>Learn about Sri Lankan tea production at the Giragama plantation</li>
                        <li>Marvel at the orchids housed at the Peradeniya Botanical Garden</li>
                        <li>  Watch a performance of the traditional Sri Lankan dance</li>
                        <li>  Visit an apparent relic of Lord Buddha at the Temple of Tooth</li>

                    </ul>
                </div>
                <div className='flex'>

                    <p className='text-lg w-1/6'>Important information</p>
                    <ul class="list-disc ml-10">
                        <li>Pick up and drop-off is available from centrally located accommodation in Kandy</li>
                        <li>You must wear clothing that covers your shoulders and knees when visiting sacred or holy places</li>


                    </ul>
                </div>

            </div>
        </div>
    );
};


const travel_guide_mytours_more = () => {
    const tours = [
        { image: "https://cdn.getyourguide.com/img/location/5c83eaac2b43a.jpeg/88.jpg", name: "Kandy: Temples, Gardens & Cultural Show City", des: "DAY TRIP" },
        { image: "https://tse3.mm.bing.net/th?id=OIP.JJ_h16-xl50fgUHR9LkZIAHaE8&pid=Api&P=0&h=220", name: "Matara /Mirissa /Thalpe /Temple", des: "DAY TRIP" },
        { image: "https://tse1.mm.bing.net/th?id=OIP.MOUnGlhdLu1Betuwu1OaxQHaHa&pid=Api&P=0&h=220", name: "Galle /Fort /Weligama /Unawatuna ", des: "2 DAYS TRIP" },
        { image: "https://tse1.mm.bing.net/th?id=OIP.MOUnGlhdLu1Betuwu1OaxQHaHa&pid=Api&P=0&h=220", name: "Galle /Fort /Weligama /Unawatuna ", des: "2 DAYS TRIP" },
        { image: "https://tse1.mm.bing.net/th?id=OIP.MOUnGlhdLu1Betuwu1OaxQHaHa&pid=Api&P=0&h=220", name: "Galle /Fort /Weligama /Unawatuna ", des: "2 DAYS TRIP" },
        { image: "https://tse1.mm.bing.net/th?id=OIP.MOUnGlhdLu1Betuwu1OaxQHaHa&pid=Api&P=0&h=220", name: "Galle /Fort /Weligama /Unawatuna ", des: "2 DAYS TRIP" },
        { image: "https://tse1.mm.bing.net/th?id=OIP.MOUnGlhdLu1Betuwu1OaxQHaHa&pid=Api&P=0&h=220", name: "Galle /Fort /Weligama /Unawatuna ", des: "2 DAYS TRIP" },

    ];
    const topnav = [
        { path: "/travel_guide_profile" }
    ]
    return (
        <div className='flex'>
            <div><Sidebar /></div>
            <div className='h-screen flex flex-grow flex-col w-full'>
                <div className='overflow-y-auto'>
                    <div>

                        {topnav.map((nav, index) => (
                            <TopNavbar key={index} path={nav.path} />
                        ))}
                    </div>
                <div><GridImage /></div>
                </div>

            </div>
        </div>
    )
}

export default travel_guide_mytours_more