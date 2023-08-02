import {
    Card,
    CardHeader,
    CardBody,
Button,
    Typography,

} from "@material-tailwind/react";
import Vehicle_Owner_Sidebar from './vehicle_owner_sidebar';
import TopNavbar from './topNavbar';
import ButtonVariants from './button';
import { car, van, bike, scooter, bus } from '../assets';

//    function CardDefault() {
const CardDefault = ({ type, src }) => {

    return (

        <Card className="m-2 w-52 justify-center items-center">
            
            <CardHeader color="blue-gray" className="relative m-2 h-36">

                <img src={src} alt="card-image" />
            </CardHeader>
            <CardBody>
                <Typography variant="h5" color="blue-gray" className="m-2 ">

                    {type}

                </Typography>

            </CardBody>

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
    const btns=[
        {title:"Add New",variant:"outlined"}
    ]

    


    return (
        <div className='flex'>
            <div><Vehicle_Owner_Sidebar /></div>

            <div className='flex flex-grow flex-col'>
                <div><TopNavbar /></div>
                    <Button className="w-36 rounded-full" variant="outlined">Add New Category</Button>
                <div className=" sm:flex sm:flex-row flex-wrap  w-full  overflow-auto my-5 xs:justify-center">

                    {vehicle_type.map((vehicle, index) => (
                        <CardDefault key={index} src={vehicle.src} type={vehicle.type} />
                    ))}
                    {/* <ButtonVariants  */}
                </div>
            </div>
        </div>
    )
                    }
export default Vehicles

