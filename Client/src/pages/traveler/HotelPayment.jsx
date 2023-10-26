import React from "react";
import Sidebar from '../../components/web-component/Sidebar';
import TopNavbar from '../../components/web-component/Navbar';
import {
  Card,
  Input,
  Button,
  Typography,
  Checkbox,




} from "@material-tailwind/react";

import { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';


function HotelDetails() {


  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar active="Dashboard" />
      <div className="flex flex-col w-full bg-[#D9D9D9] bg-opacity-20">
        <TopNavbar />
        <div className='overflow-y-auto' >
          <div className='sm:flex flex-wrap justify-center '>

            <Card color="transparent" shadow={false} className='mt-10 w-1/3 h-screen items-center'>
              <Typography variant="h4" color="blue-gray">
                Checkout Here
              </Typography>
              <Typography color="gray" className="mt-1 font-normal">
                Select Payment Method
              </Typography>

              <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                <div className="mb-1 flex flex-col gap-6">
                  <Typography variant="h6" color="blue-gray" className="-mb-5">
                    Card number
                  </Typography>
                  <Input
                    size="lg"
                    placeholder="XXXX XXXX XXXX XXXX"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
                  <Typography variant="h6" color="blue-gray" className="-mb-5">
                    Name on card
                  </Typography>
                  <Input
                    size="lg"
                    placeholder="name"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
                  <div className="my-4 flex items-center gap-4">
                    <div className="">
                      <Typography variant="h6" color="blue-gray" className="">
                        Expire Date
                      </Typography>
                      <Input
                      maxLength={5}
                      containerProps={{ className: "min-w-[72px]" }}
                        
                        size="lg"
                        placeholder="MM/YY"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900 w-20"
                        labelProps={{
                          className: "before:content-none after:content-none",
                        }}
                      />
                    </div>
                    <div className="">
                      <Typography variant="h6" color="blue-gray" className="">
                        CVC
                      </Typography>
                      <Input
                      maxLength={3}
                      containerProps={{ className: "min-w-[72px]" }}
                        
                        size="lg"
                        placeholder="XXX"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                          className: "before:content-none after:content-none",
                        }}
                      />
                    </div>
                  </div>
                </div>
                <Checkbox
                  label={
                    <Typography
                      variant="small"
                      color="green"
                      className="flex items-center font-normal "
                    >
                      Save card for future payments
                      
                    </Typography>
                  }
                  containerProps={{ className: "-ml-2.5" }}
                />
                <Link to={`/traveler/PaymentSuccess`}>
                <Button className="mt-6 bg-green" fullWidth>
                  Place Order
                </Button>
                </Link>
              </form>
            </Card>
          </div>

        </div>



      </div>
    </div>
  )
}

export default HotelDetails;
