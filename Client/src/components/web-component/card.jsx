import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Link,
} from "@material-tailwind/react";
import axios from "../../api/axios";

export default function Cardtrip(props) {
  const { trip } = props;
  const navigate = useNavigate();

  const [creator, setCreator] = useState([]);

  useEffect(() => {
    const getName = async () => {
      try {
        let response = await axios.get(`/trips/creator/${trip.trip_creatorID}`, {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        });
        console.log(response.data);
        setCreator(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    getName();
  }, []);

  return (
    <Card className="mt-6 md:w-[283px] h-[467px]  p-3 hover:scale-105 hover:delay-300">
      <CardHeader color="blue-gray" className="relative h-56">
        <img
          src="/traveler/sigiriya.jpg"
          alt="Sigiriya"
          className="object-cover h-48 w-96"
        />
      </CardHeader>
      <CardBody className="h-[12rem]">
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {trip.trip_name}
        </Typography>
        <Typography className="flex flex-row ">
          <img
            src="/traveler/Profile Picture.svg"
            alt="Logo"
            className="h-[24px] w-[24px] mr-[5px]"
          />
          @ {creator}
        </Typography>
        <Typography>{trip.description}</Typography>
      </CardBody>
      <CardFooter className="flex justify-between p-0">
        <Button className="justify-center py-2 md:w-[125px] shadow-none hover:shadow-none active:shadow-none focus:shadow-none bg-[#22577A] ">
          Watch
        </Button>
        <Button
          className="justify-center py-2 md:w-[125px] shadow-none hover:shadow-none active:shadow-none focus:shadow-none bg-[#E9E9E9] hover:bg-[#22577A]"
          onClick={() => navigate(`/traveler/trip-planner/${trip.trip_id}`)}
        >
          Edit
        </Button>
      </CardFooter>
    </Card>
  );
}
