import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Avatar,
    Spinner
  } from "@material-tailwind/react";


const BackgroundBlogCard=()=> {
    return (
      <Card
        shadow={false}
        className="relative grid h-96 w-screen  items-end justify-center overflow-hidden text-center rounded-none"
      >
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="absolute inset-0 rounded-none m-0 h-full w-full bg-[url('https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=600')] bg-cover bg-center"
        >
          <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50 rounded-none" />
        </CardHeader>
        <CardBody className="relative py-14 px-6 md:px-12 bottom-[50px]">
          <Typography
            variant="h3"
            color="white"
            className="mb-3 font-medium leading-[1.5]"
          >
          Rooms and Suites
          </Typography>
          <Typography
            
            color="white"
            className="mb-3 font-thin  text-md leading-[1.5] w-72"
          >
The elegant luxury bedrooms in this gallery showcase custom interior 
designs & decorating ideas. View pictures and find your
 perfect luxury bedroom design.          </Typography>
          <Typography className="flex justify-center items-center" >
           <div>
            
           </div>
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