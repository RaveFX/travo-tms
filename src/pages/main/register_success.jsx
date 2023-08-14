import React from 'react'
import Newnav from "../../components/newnav";
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
        className="relative grid h-screen w-screen  items-end justify-center overflow-hidden text-center rounded-none"
      >
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="absolute inset-0 rounded-none m-0 h-full w-full bg-[url('https://images.pexels.com/photos/10520936/pexels-photo-10520936.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center"
        >
          <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50 rounded-none" />
        </CardHeader>
        <CardBody className="relative py-14 px-6 md:px-12 bottom-[250px]">
          <Typography
            variant="h3"
            color="white"
            className="mb-3 font-medium leading-[1.5]"
          >
          Success
          </Typography>
          <Typography
            
            color="white"
            className="mb-3 font-thin  text-md leading-[1.5] w-72"
          >
          We have successfully send your registration request. Our staff will contact you within the next 24hrs. We have sent an confirmation mail to the email you provided during registration. It should arrive in a couple of minutes
          </Typography>
          <Typography className="flex justify-center items-center" >
            <Spinner />
          </Typography>
          
        </CardBody>
      </Card>
    );
  }

function Register_success() {
  return (
    <div>
    <Newnav />
<BackgroundBlogCard/>
    </div>
  )
}

export default Register_success