import {
    Card,
    CardHeader,
    CardBody,
    Button,
    Typography,
    CardFooter,
    Avatar,
    Tooltip,


} from "@material-tailwind/react";
import Sidebar from '../../components/web-component/Sidebar';
import TopNavbar from '../../components/Vehicle_owner/topNavbar';
import { car, van, bike, scooter, bus } from '../../assets/Vehicle_owner/index/';
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from 'axios';




//    function CardDefault() {
const CardDefault = ({ type, src }) => {


    return (

        <Card className="sm:m-5 m-2 sm:w-40 w-15 h-15  justify-center items-center cursor-pointer hover:bg-green hover:scale-125 duration-300 delay-100">


            <CardBody>
                <Typography variant="h5" className="text-center text-xs ">

                    {type}

                </Typography>

                <img src={src} alt="card-image" className="" />
            </CardBody>

        </Card>

    );
}

const VehicleCard = ({ names, seat, large_bag, milage, small_bag, type, price, img }) => {
    return (
        <Card className="max-w-[24rem] overflow-hidden m-3">
            <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="m-0 rounded-none"
            >
                <img
                    src={img}
                    alt="ui/ux review check"
                    className=" p-16"
                />
            </CardHeader>
            <CardBody className="mx-5">
                <Typography variant="h5" color="blue-gray">{names}</Typography>
                <Typography className="flex ">
                    <Typography className="w-3/4 flex">
                        <Typography className="w-1/2">
                            <Typography variant="" color="blue-gray">{seat} seats</Typography>
                            <Typography variant="" color="blue-gray">{large_bag} Large bag</Typography>
                            <Typography variant="" color="blue-gray">{milage}</Typography>
                        </Typography>
                        <Typography>
                            <Typography variant="" color="blue-gray">{type}</Typography>
                            <Typography variant="" color="blue-gray">{small_bag} Small bag</Typography>

                        </Typography>
                    </Typography>
                    <Typography>
                        <Typography variant="" className="font-thin text-xs" color="Green-500">Price per day</Typography>

                        <Typography variant="h6" color="Green-500">{price}</Typography>

                    </Typography>
                </Typography>
                <Typography variant="lead" className="mt-3 font-normal ">
                    <Button variant="text" className="rounded-full text-green">Edit </Button>
                    <Button variant="text" className="rounded-full" color="red">Delete </Button>
                </Typography>
            </CardBody>
            {/* <CardFooter className="flex items-center justify-between">
         
          <Typography className="font-normal">January 10</Typography>
        </CardFooter> */}
        </Card>
    );
}



const VehiclePage = () => {
    const vehicle_type = [
        { type: "Car", src: car },
        { type: "Van", src: van },
        { type: "Bus", src: bus },
        { type: "Scooter", src: scooter },
        { type: "Motor Bike", src: bike },


    ]
    const btns = [
        { title: "Add New", variant: "outlined" }
    ]
    const lists = [
        { names: "Nissan Wingroad Estate", seat: 4, large_bag: 1, milage: "Unlimited Milage", small_bag: 1, type: "Automatic", price: "LKR2500", img: "../public/Vehicle_owner/15.png" },
        { names: "Toyota Prius", seat: 4, large_bag: 1, milage: "Unlimited Milage", small_bag: 1, type: "Automatic", price: "LKR2500", img: "../public/Vehicle_owner/16.png" },
        { names: "Suzuki Alto", seat: 4, large_bag: 1, milage: "Unlimited Milage", small_bag: 1, type: "Automatic", price: "LKR2500", img: "../public/Vehicle_owner/17.png" },
        { names: "Perodua Axia", seat: 4, large_bag: 1, milage: "450km per rental", small_bag: 1, type: "Automatic", price: "LKR2500", img: "../public/Vehicle_owner/18.png" },
        { names: "Suzuki Wagon R", seat: 4, large_bag: 1, milage: "Unlimited Milage", small_bag: 1, type: "Automatic", price: "LKR2500", img: "../public/Vehicle_owner/19.png" }
    ]
    const [vehicles,setVehicles]=useState([]);

    useEffect(() => {
        loadVehicles();
    },[]); 

    const loadVehicles=async()=>{
        const result=await axios.get("http://localhost:8080/api/v1/traveler/Vehicles")
        setVehicles(result.data);
    }
    return (
        <div className='flex'>
            <div><Sidebar /></div>

            <div className='h-screen flex flex-grow flex-col '>
                <div><TopNavbar /></div>
                <div className="overflow-y-auto ">
                    <div className=" flex flex-row overflow-auto my-5 xs:justify-center">

                        {vehicle_type.map((vehicle, index) => (
                            <CardDefault key={index} src={vehicle.src} type={vehicle.type} />
                        ))}

                    </div>
                    
                    <div className="sm:flex flex-wrap xs:justify-center ">
                        <h1>jjj</h1>
                        {vehicles.map((vehicle) => (
                            // console.log (hii)
                            <h1>{vehicle.vehicle_type}</h1>
                            
                        //    ? <VehicleCard key={index} names={vehicle.vehicle_id} type={vehicle.vehicle_type} />
                            // seat={vehicle.seat} img={vehicle.img} large_bag={vehicle.large_bag} small_bag={vehicle.small_bag} price={vehicle.price} milage={vehicle.milage} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default VehiclePage

