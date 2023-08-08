import React from 'react'
import Sidebar from './sidebar';
import TopNavbar from './topNavbar';
import { Rating, Button } from "@material-tailwind/react";
import { Link } from 'react-router-dom';
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Avatar,
  } from "@material-tailwind/react";



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
const RateCard = ({ image, name, rate }) => {
    return (
        <div className="card rounded-xl flex flex-row bg-white sm:w-1/2  mr-5 my-2 relative shadow-xl">
            <figure className='flex sm:flex-row'><img src={image} alt="kandy" className='w-36 mr-2 rounded-lg' />
                <div className="card-body w-full">
                    <h2 className="card-title">{name}</h2>
                    <p className='text-sm text-dimBlack'>{rate}</p>
                    <Button variant="text" className="flex-col gap-2 text-green text-xs">
                        Learn More
                        
                    </Button>
                </div>
            </figure>

        </div>
    )
}
const BackgroundBlogCard=()=> {
    return (
      <Card
        shadow={false}
        className="relative grid h-[10rem] w-full max-w-[18rem] items-end justify-center overflow-hidden text-center"
      >
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://tse3.mm.bing.net/th?id=OIP.sIAE0l361OTU8yKgV8IE-gHaEK&pid=Api&P=0&h=220')] bg-cover bg-center"
        >
          <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
        </CardHeader>
        <CardBody className="relative py-14 px-6 md:px-12">
          <Typography
            variant="h6"
            color="white"
            className="mb-3 font-medium leading-[1.5]"
          >
           Kandy Tour
          </Typography>
          <Typography
            variant="h6"
            color="white"
            className="mb-3 font-medium leading-[1.5]"
          >
           Rs.1500/-
          </Typography>
          <Typography variant="h5" className="mb-4 text-gray-400">
           Per person
          </Typography>
          
        </CardBody>
      </Card>
    );
  }

const travel_guide_myrates = () => {
    const rates = [
        { image: "https://tse3.mm.bing.net/th?id=OIP.sIAE0l361OTU8yKgV8IE-gHaEK&pid=Api&P=0&h=220", name: "Kandy", rate: "Rs.1500/Per Day" },
        { image: "https://tse1.mm.bing.net/th?id=OIP.CfQds65sJmXZq9mM5kvn8wHaEg&pid=Api&P=0&h=220", name: "Matara", rate: "Rs.800/Per Day" },
    ]
    return (
        <div className='flex'>
            <div><Sidebar /></div>
            <div className='flex flex-grow flex-col w-full'>
                <div><TopNavbar /></div>
                {/* <div><GridImage /></div> */}
                <div className='justify-right px-5 flex xs:flex-col sm:flex-row md:flex-wrap lg:flex-wrap relative  '>
                <BackgroundBlogCard/> <BackgroundBlogCard/> <BackgroundBlogCard/>            
                {/* {rates.map((rate, index) => (
                                <RateCard key={index} image={rate.image} name={rate.name} rate={rate.rate} />
                            ))} */}
                                
                            </div>
            </div>
        </div>
    )
}

export default travel_guide_myrates