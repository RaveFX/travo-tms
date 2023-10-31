import {
    Card,
    CardHeader,
    CardBody,
    Button,
    Typography,
    CardFooter,
    Avatar,
    Tooltip,
    TabPanel,
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
} from "@material-tailwind/react";
import Sidebar from "../../components/web-component/Sidebar";
import TopNavbar from "../../components/web-component/Navbar";
import { car, van, bike, scooter, bus } from '../../assets/Vehicle_owner/index/';
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from 'axios';


const VehicleCard = ({ names, seat, large_bag, milage, small_bag, type, price, img,link }) => {
    return (

        <Card className="max-w-[20rem] overflow-hidden m-3">
            <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="m-0 rounded-none"
            >
                <img
                    src={img}
                    alt="ui/ux review check"
                    className=" h-48 w-full rounded-t-lg object-cover"
                />
            </CardHeader>
            <CardBody className="">
                <Typography variant="h5" color="blue-gray" className="h-8">{names}</Typography>
                <Typography className="flex h-14 ">
                    <Typography className="w-3/4 flex">
                        <Typography className="w-1/2">
                            <Typography variant="" color="blue-gray" className="text-sm">{seat} seats</Typography>
                            <Typography variant="" color="blue-gray" className="text-sm">{large_bag} Large bag</Typography>
                            <Typography variant="" color="blue-gray" className="text-sm">{small_bag} Small bag</Typography>
                        </Typography>
                        <Typography>
                            <Typography variant="" color="blue-gray" className="text-sm">{type}</Typography>
                            <Typography variant="" color="blue-gray" className="text-sm">{milage}</Typography>

                        </Typography>
                    </Typography>
                    <Typography className="pl-2">
                        <Typography variant="" className="font-thin text-xs" color="Green-500">Price per day</Typography>

                        <Typography variant="h6" color="Green-500">Rs.{price}</Typography>

                    </Typography>
                </Typography>
                <Typography className="mt-3 font-normal ">
                    <Button className="sm:w-48 w-48 mx-4 text-xs rounded-full justify-end bg-button2" variant="gradient" color="green"><Link to={link}>More Info</Link></Button>

                </Typography>
            </CardBody>

        </Card>
    );
}



const VehiclePage = () => {
    const [vehicles, setVehicles] = useState([]);
    const [renter, setRenter] = useState([]);
    const [activeType, setActiveType] = useState('Car');
    const [selectedCompany, setSelectedCompany] = useState('');

    useEffect(() => {
        loadVehicles();
        loadRenter();
    }, []);

    const loadVehicles = async () => {
        const result = await axios.get(`http://localhost:8080/api/v1/traveler/vehicles`)
        setVehicles(result.data);
       
    }
    const loadRenter = async () => {
        const result1 = await axios.get(`http://localhost:8080/api/v1/traveler/renter`)
        setRenter(result1.data);
    }
    const filterVehicles = () => {
        return vehicles.filter((vehicle) => {
            // Check if the vehicle type matches the selected type
            const typeMatch = vehicle.vehicle_type === activeType;

            // Check if the company name matches the selected company
            const companyMatch = !selectedCompany || vehicle.company_name === selectedCompany;

            // Return true if both conditions are met
            return typeMatch && companyMatch;
        });
    };


    const vehicle_type = [
        { type: "Car", value: "Car", src: car },
        { type: "Van", value: "Van", src: van },
        { type: "Bus", value: "Bus", src: bus },
        { type: "Scooter", value: "Scooter", src: scooter },
        { type: "Motor Bike", value: "Motor Bike", src: bike },


    ]


    return (
        <div className='flex'>
            <div><Sidebar /></div>

            <div className='h-screen flex flex-grow flex-col '>
                <div><TopNavbar /></div>
                <div className="overflow-y-auto ">
                    {/* <div className="flex flex-row"> */}
                    {/* <div className="w-1/6"> */}
                    <Tabs value="html" orientation="vertical">
                        <TabsHeader className="w-32 m-2">

                            {renter.map((renter, index) => (
                                <Tab
                                    key={index}
                                    value={renter.company_name}
                                    onClick={() => setSelectedCompany(renter.company_name)}
                                >
                                    {renter.company_name}
                                </Tab>
                            ))}

                        </TabsHeader>
                        <TabsBody>
                            <Tabs value={activeType}>
                                <TabsHeader className="m-2">
                                    {vehicle_type.map(({ type, value, src }) => (
                                        <Tab key={value} value={value} onClick={() => setActiveType(value)} >
                                            {type}
                                            <img src={src} alt="card-image" className="w-28" />
                                        </Tab>
                                    ))}
                                </TabsHeader>
                                <TabsBody>
                                    <div className="sm:flex flex-wrap  ">
                                        {filterVehicles().length > 0 ? (
                                            filterVehicles().map((vehicles, index) => (
                                                    // let vehicleId={vehicles.vehicle_id}
                                                <VehicleCard key={index} names={vehicles.vehicle_model}
                                                
                                                    seat={vehicles.seat} img={"https://www.indratraders.lk/wp-content/uploads/2022/03/sss.jpg"} 
                                                    large_bag={vehicles.large_bag} small_bag={vehicles.small_bag} 
                                                    price={vehicles.rate} milage={vehicles.milage} link={`/traveler/VehicleMoreInfo/${vehicles.vehicle_id}`} />
                                            ))) :
                                            (
                                                <div className="w-full flex flex-col items-center justify-center">
                                                    <img src="../../../public/traveler/unavailable.png" className="w-60 opacity-50"/>
                                                   <p className="text-center"> No vehicles available.</p>
                                                </div>
                                            )}

                                    </div>
                                </TabsBody>
                            </Tabs>

                        </TabsBody>
                    </Tabs>

                    {/* </div> */}
                    {/* <div className="w-full"> */}

                </div>
            </div >
        </div >
        // </div>
        // </div>
    )
}
export default VehiclePage

