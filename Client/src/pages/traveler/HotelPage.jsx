import React from 'react'
// import Sidebar from '../../components/sidebar';
import Sidebar from '../../components/web-component/Sidebar';
import TopNavbar from '../../components/web-component/Navbar';
import { Rating, Button, Card, CardBody, Typography } from "@material-tailwind/react";
import { Link } from 'react-router-dom';



const VegicleCard = ({ names, seat, large_bag, milage, small_bag, price, type, src }) => {

    return (
        <Card className="sm:w-[48rem] xs:w-[60rem] lg:w-[60rem] xl:w-[72rem] overflow-hidden m-5">

            <CardBody className="p-5 bg-white">
                <div className='flex'>
                    <div className="w-1/3 sm:flex lg:flex flex-row  ">
                        <Typography className=" rounded-none " >
                            <img
                                src={src}
                                alt="ui/ux review check"
                                className="w-60"
                            />
                        </Typography>
                    </div>
                    <div className='w-full mx-10'>
                        <Typography variant="h5" color="blue-gray">{names}</Typography>

                        <Typography className="sm:w-1/2 lg:w-full lg:flex">
                            <Typography className="w-1/2">
                                <Typography className="flex" variant="" color="blue-gray"><i class='bx bx-user'></i> {seat} seats</Typography>
                                <Typography variant="" color="blue-gray">{large_bag} Large bag</Typography>
                                <Typography variant="" color="blue-gray">{milage}</Typography>
                            </Typography>
                            <Typography>
                                <Typography variant="" color="blue-gray">{type}</Typography>
                                <Typography variant="" color="blue-gray">{small_bag} Small bag</Typography>

                            </Typography>
                            <Typography className="px-5">
                            <Typography variant="" className="font-thin text-xs" color="Green-500">Price per day</Typography>

                            <Typography variant="h6" color="Green-500">{price}</Typography>

                        </Typography>
                            <Typography variant="lead" className=" font-normal  ">
                                <Button variant="gradient" className="rounded-full bg-green" color="green">View More</Button>
                            </Typography>
                        </Typography>

                    </div>
                </div>

            </CardBody>
            {/* <CardFooter className="flex items-center justify-between">
         
          <Typography className="font-normal">January 10</Typography>
        </CardFooter> */}
        </Card>
    );
}



const hotel_page = () => {
    // const vehicle_type = [
    //     { type: "Car", src: car },
    //     { type: "Van", src: van },
    //     { type: "Bus", src: bus },
    //     { type: "Scooter", src: scooter },
    //     { type: "Motor Bike", src: bike },


    // ]
    const btns = [
        { title: "Add New", variant: "outlined" }
    ]
    const lists = [
        { names: "Suzuki Wagon R", seat: 4, large_bag: 1, milage: "Unlimited milage", type: "Automatic", small_bag: 1, price: "US$250", src: "https://tse3.mm.bing.net/th?id=OIP.JJ_h16-xl50fgUHR9LkZIAHaE8&pid=Api&P=0&h=220" },
        { names: "Perodua Axia", seat: 4, large_bag: 1, milage: "Unlimited milage", type: "Automatic", small_bag: 1, price: "US$250", src: "../public/Vehicle_owner/18.png" },
        { names: "Suzuki Alto", seat: 4, large_bag: 1, milage: "Unlimited milage", type: "Automatic", small_bag: 1, price: "US$250", src: "../public/Vehicle_owner/17.png" },
        { names: "Toyota Prius", seat: 4, large_bag: 1, milage: "Unlimited milage", type: "Automatic", small_bag: 1, price: "US$250", src: "../public/Vehicle_owner/16.png" },
        { names: "Nissan Wingroad Estate", seat: 4, large_bag: 1, milage: "Unlimited milage", type: "Automatic", small_bag: 1, price: "US$250", src: "../public/Vehicle_owner/15.png" }
    ]

    return (
        <div className="flex h-screen overflow-hidden">
            <Sidebar active="Dashboard" />
            <div className="flex flex-col w-full bg-[#D9D9D9] bg-opacity-20">
                <TopNavbar />

                <div className='overflow-y-auto' >

                    <div className=" flex flex-row overflow-auto  xs:justify-center">

                    </div>
                    <div className=" sm:flex flex-wrap justify-center ">
                        {lists.map((list, index) => (
                            <VegicleCard key={index} names={list.names} large_bag={list.large_bag} seat={list.seat} small_bag={list.small_bag} price={list.price} milage={list.milage} type={list.type} src={list.src} />
                        ))}


                    </div>
                </div>



            </div>
        </div>
    );


}

export default hotel_page