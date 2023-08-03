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
import Vehicle_Owner_Sidebar from './vehicle_owner_sidebar';
import TopNavbar from './topNavbar';
import ButtonVariants from './button';
import { car, van, bike, scooter, bus, user } from '../assets';
import { Box } from "@mui/material";
import { Link } from 'react-router-dom';



//    function CardDefault() {
const CardDefault = ({ type, src }) => {

    return (

        <Card className="m-5 w-40  justify-center items-center cursor-pointer hover:bg-green hover:scale-125 duration-300 delay-100">


            <CardBody>
                <Typography variant="h5"  className="text-center">

                    {type}

                </Typography>

            <img src={src} alt="card-image" className="" />
            </CardBody>

        </Card>

    );
}

const VegicleCard = ({ names, seat, large_bag, milage, small_bag, price, type, src }) => {

    return (
        <Card className="sm:w-[48rem] xs:w-[20rem] lg:w-[60rem] xl:w-[72rem] overflow-hidden m-5">
            
            <CardBody className="p-5 bg-white">
                <Typography variant="h5" color="blue-gray">{names}</Typography>
                <div className="sm:flex lg:flex flex-row  ">
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
                    </Typography>
                    <Typography className="px-5">
                        <Typography variant="" className="font-thin text-xs" color="Green-500">Price per day</Typography>

                        <Typography variant="h6" color="Green-500">{price}</Typography>

                    </Typography>
                    <Typography className=" rounded-none " >
               
            
                    <img
                    src={src}
                    alt="ui/ux review check"
                    className="w-40"
                />
                    </Typography>
                </div>
                <Typography variant="lead" className="mt-3 font-normal ">
                    <Button variant="gradient" className="rounded-full bg-green" color="green">Edit Rates</Button>
                    {/* <Button variant="gradient">Gradient</Button> */}
                </Typography>
            </CardBody>
            {/* <CardFooter className="flex items-center justify-between">
         
          <Typography className="font-normal">January 10</Typography>
        </CardFooter> */}
        </Card>
    );
}



const Rates = () => {
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
        { names: "Suzuki Wagon R", seat: 4, large_bag: 1, milage: "Unlimited milage", type: "Automatic", small_bag: 1, price: "US$250", src: "../public/19.png" },
        { names: "Perodua Axia", seat: 4, large_bag: 1, milage: "Unlimited milage", type: "Automatic", small_bag: 1, price: "US$250", src: "../public/18.png" },
        { names: "Suzuki Alto", seat: 4, large_bag: 1, milage: "Unlimited milage", type: "Automatic", small_bag: 1, price: "US$250", src: "../public/17.png" },
        { names: "Toyota Prius", seat: 4, large_bag: 1, milage: "Unlimited milage", type: "Automatic", small_bag: 1, price: "US$250", src: "../public/16.png" },
        { names: "Nissan Wingroad Estate", seat: 4, large_bag: 1, milage: "Unlimited milage", type: "Automatic", small_bag: 1, price: "US$250", src: "../public/15.png" }
    ]




    return (
        <div className='flex'>
            <div><Vehicle_Owner_Sidebar /></div>

            <div className='flex flex-grow flex-col'>
                <div><TopNavbar /></div>
                <p className="text-2xl p-3">Vehicle rates</p>
                <div className=" flex flex-row overflow-auto  xs:justify-center">

                    {vehicle_type.map((vehicle, index) => (
                        <CardDefault key={index} src={vehicle.src} type={vehicle.type} />
                    ))}
                    {/* <ButtonVariants  */}
                </div>
                <div className=" sm:flex flex-wrap justify-center ">
                    {lists.map((list, index) => (
                        <VegicleCard key={index} names={list.names} large_bag={list.large_bag} seat={list.seat} small_bag={list.small_bag} price={list.price} milage={list.milage} type={list.type} src={list.src} />
                    ))}
                    {/* <VegicleCard />
                <VegicleCard />
                <VegicleCard />
                <VegicleCard />
                <VegicleCard /> */}

                </div>
                

               
            </div>
        </div>
    )
}
export default Rates

