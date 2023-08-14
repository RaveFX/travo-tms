import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Avatar,
  } from "@material-tailwind/react";


const BackgroundBlogCard=()=> {
    return (
      <Card
        shadow={false}
        className="relative grid h-screen w-screen  items-end justify-center overflow-hidden text-center"
      >
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="absolute inset-0 m-0 h-full w-full bg-[url('https://images.unsplash.com/photo-1561150018-8bb356679537?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=844&q=80')] bg-cover bg-center"
        >
          <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50 rounded-none" />
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
const travel_guide_success = () => {
  return (
    <div>
<BackgroundBlogCard/>
    </div>
  )
}

export default travel_guide_success