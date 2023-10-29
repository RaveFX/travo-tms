import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
// import useAxiosMethods from "../../hooks/useAxiosMethods";
import axios from "../../api/axios";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Radio,
  Input,
  CardHeader,
} from "@material-tailwind/react";
import { LockClosedIcon, LockOpenIcon } from "@heroicons/react/24/solid";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function BoxForm(props) {
  const { setIsOpen, tripID } = props;
  // const { post } = useAxiosMethods();

  const [visibility, setVisibility] = useState("public");
  const [name, setName] = useState("");
  const [privateTrip, setPrivateTrip] = useState(true);
  const [publicTrip, setPublicTrip] = useState(false);
  const [tripName, setTripName] = useState("");
  const [response, setResponse] = useState("");

  const navigate = useNavigate(); //to navigate to another page
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Form submitted!", privateTrip, publicTrip, tripName);

    try {
      let response = await axios.post(
        "/trip/create-trip",
        {
          trip_name: tripName,
          state: publicTrip ? "PUBLIC" : "PRIVATE",
          discription: "bla bla bla",
          trip_creator_id: sessionStorage.getItem("user_id"),
        },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(response);
      navigate(`/traveler/trip-planner/${response.data.trip_id}`);
    } catch (err) {
      console.error(err);
    }
  };

  const togglePrivate = (event) => {
    console.log("privateTrip", privateTrip);
    if (privateTrip === true) {
      setPrivateTrip(false);
      setPublicTrip(true);
    } else {
      setPrivateTrip(true);
      setPublicTrip(false);
    }
  };

  const togglePublic = (event) => {
    console.log("publicTrip", publicTrip);
    if (publicTrip === true) {
      setPublicTrip(false);
      setPrivateTrip(true);
    } else {
      setPublicTrip(true);
      setPrivateTrip(false);
    }
  };

  return (
    <Card className="m-6 p-4 w-[50%] h-fit  ">
      <form onSubmit={handleSubmit}>
        <XMarkIcon
          className="w-5 h-5 cursor-pointer relative left-[95%]"
          onClick={() => {
            setIsOpen(false);
          }}
        />
        <CardBody className="">
          <Typography
            variant="h3"
            color="blue-gray"
            className="gap-2 flex justify-center"
          >
            Create New Trip
          </Typography>
          <Typography variant="h5" className="gap-2 mb-2">
            Choose who can see your Trip
          </Typography>
          <div className="flex flex-col gap-8">
            <div className="flex ">
              <Radio
                name="type"
                onChange={togglePrivate}
                label={<LockClosedIcon className="w-5 h-5" />}
                defaultChecked
              />
              <div className="flex flex-col gap-2">
                <div className="gap-2">
                  {" "}
                  <h1>Private Trip</h1>
                </div>
                <div>
                  Not visible to other Travo users and members, except for you
                  and any friends with whom you share your Trip.
                </div>
              </div>
            </div>
            <div className="flex ">
              <Radio
                name="type"
                onChange={togglePublic}
                label={<LockOpenIcon className="w-5 h-5" />}
              />
              <div className="flex flex-col gap-2">
                <div className="mr-2">
                  <h1>Public Trip</h1>
                </div>
                <div>
                  Visible to all travellers on Travo, including any friends you
                  share your Trip with
                </div>
              </div>
            </div>
            <div className="flex justify-center"></div>
          </div>
        </CardBody>

        <CardFooter className="">
          <div className="pt-0 flex flex-col justify-center gap-3">
            <Input
              type="text"
              placeholder="Enter Trip Name"
              onChange={(e) => setTripName(e.target.value)}
              className="w-[100%] !border !border-blue-gray-50 bg-white text-blue-gray-500 shadow-sm shadow-blue-gray-900/5 ring-4 ring-transparent placeholder:text-blue-gray-200 "
              labelProps={{
                className: "hidden",
              }}
              containerProps={{ className: "min-w-[100px]" }}
            />
            <Button
              type="submit"
              className="w-[100%] justify-center py-2 shadow-none hover:shadow-none active:shadow-none focus:shadow-none bg-[#22577A] rounded-7 font-poppins font-extrabold"
            >
              CREATE
            </Button>
          </div>
        </CardFooter>
      </form>
    </Card>
    // <form onSubmit={handleSubmit} className="box-form">
    //   <div className="flex gap-10">
    //   <Radio name="type" label="Ripple Effect On" ripple={true} />
    //   <Radio name="type" label="Ripple Effect Off" ripple={false} />
    // </div>
    // </form>
  );
}

//   <RadioGroup value={visibility} onChange={handleVisibilityChange}>
//     <FormControlLabel
//       value="private"
//       label="Private"
//       control={<Radio color="blue" />}
//     />
//     <FormControlLabel
//       value="public"
//       label="Public"
//       control={<Radio color="blue" />}
//     />
//   </RadioGroup>
//   <TextField
//     type="text"
//     label="Enter Name"
//     value={name}
//     onChange={handleNameChange}
//     color="blue"
//     size="regular"
//     placeholder="John Doe"
//     className="mt-4"
//   />
//   <Button type="submit" color="blue" className="mt-4">
//     Submit
//   </Button>
