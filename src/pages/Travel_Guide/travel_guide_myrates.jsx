import React from 'react'
import Sidebar from '../../components/sidebar';
import TopNavbar from '../../components/topNavbar';
import { Rating, Button } from "@material-tailwind/react";
import { Link } from 'react-router-dom';
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Avatar,
  } from "@material-tailwind/react";

const topnav=[
        {path:"/travel_guide_profile"}
    ]
const BackgroundBlogCard=()=> {
    return (
      <Card
        shadow={false}
        className="relative grid h-[10rem] w-full max-w-[18rem] m-5 items-end justify-center overflow-hidden text-center"
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
    const topnav=[
      {path:"/travel_guide_profile"}
  ]
    return (
        <div className='flex'>
            <div><Sidebar /></div>
            <div className='flex flex-grow flex-col w-full'>
                <div>
                <div>
                    
                    {topnav.map((nav, index) => (
                                <TopNavbar key={index} path={nav.path}  />
                            ))}
                </div>
                </div>
                {/* <div><GridImage /></div> */}
                <div className='justify-right px-5 flex xs:flex-col sm:flex-row md:flex-wrap lg:flex-wrap relative  '>
                <BackgroundBlogCard/> <BackgroundBlogCard/> <BackgroundBlogCard/> <BackgroundBlogCard/> <BackgroundBlogCard/>            
                {/* {rates.map((rate, index) => (
                                <RateCard key={index} image={rate.image} name={rate.name} rate={rate.rate} />
                            ))} */}
                                
                            </div>
            </div>
        </div>
    )
}

export default travel_guide_myrates