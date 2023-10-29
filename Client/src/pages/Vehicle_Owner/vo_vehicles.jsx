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
// import Vehicle_Owner_Sidebar from './vehicle_owner_sidebar';
import Vehicle_Owner_Sidebar from './vo_sidebar1';

import TopNavbar from '../../components/Vehicle_owner/topNavbar';
// import ButtonVariants from './button';
import { car, van, bike, scooter, bus } from '../../assets/Vehicle_owner/index/';
import { Link } from 'react-router-dom';
// import axios from "axios";
import { useEffect, useState } from "react";



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



const Vehicles = () => {
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
    const [vehicles, seVehicles] = useState([])
    useEffect(() => {
        loadVehicles();
    }, []);

    // const loadVehicles=async()=>{
    //     console.log("hii");
    //     const result=await axios.get("http://localhost:8080/vehicles");
    //     console.log(result.data);

    // }
    const loadVehicles = async () => {
        try {
            console.log("Fetching vehicles data...");
            const result = await axios.get("http://localhost:8080/vehicles");
            console.log("Data received:", result.data);
            seVehicles(result.data);  // Assuming this sets the state for vehicles
        } catch (error) {
            console.error("Error fetching vehicles:", error);
        }
    }





    return (
        <div className='flex'>
            <div><Vehicle_Owner_Sidebar /></div>

            <div className='h-screen flex flex-grow flex-col '>
                <div><TopNavbar /></div>
                <div className="overflow-y-auto ">

                    {/* <div className="flex justify-end">
                        <Button className="w-48 rounded-full" variant="outlined">Add New Category</Button>
                    </div> */}
                    <div className=" flex flex-row overflow-auto my-5 xs:justify-center">

                        {vehicle_type.map((vehicle, index) => (
                            <CardDefault key={index} src={vehicle.src} type={vehicle.type} />
                        ))}

                    </div>
                    <div className="my-3 flex justify-center items-center">
                        <Button className="sm:w-48 w-28 mx-2 text-xs rounded-full justify-end bg-button1 " variant="gradient">Change Availability</Button>
                        <Button className="sm:w-48 w-28 mx-2 text-xs rounded-full justify-end bg-button1" variant="gradient"><Link to="/vehicle_owner_add_vehicle">Add New Vehicle</Link></Button>
                        <Button className="sm:w-48 w-28 mx-2 text-xs rounded-full justify-end bg-button1" variant="gradient"><Link to="/vehicle_owner_rates">Vehicle Rates</Link></Button>

                    </div>
                    <div className="sm:flex flex-wrap ">
                        {lists.map((list, index) => (
                            <VehicleCard key={index} names={list.names} type={list.type} seat={list.seat} img={list.img} large_bag={list.large_bag} small_bag={list.small_bag} price={list.price} milage={list.milage} />
                        ))}
                        {/* {vehicles.map((vehicle, index) => (
                        <VehicleCard key={index} names={vehicle.vehicle_model} type={vehicle.vehicle_type} seat={vehicle.passenagers} img={vehicle.img} large_bag={vehicle.bluetooth} small_bag={vehicle.sunroof} price={vehicle.rate} milage={vehicle.location}/>
                    ))} */}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Vehicles

