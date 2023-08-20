import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
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
import { XMarkIcon } from '@heroicons/react/24/outline';
 
export default function BoxForm (props) {

  const {setIsOpen} = props;

  const [visibility, setVisibility] = useState('public');
  const [name, setName] = useState('');

  const handleVisibilityChange = (event) => {
    setVisibility(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const navigate = useNavigate();
  const handleNavigate = () => {
    // Example: Navigate to '/other-page' when the button is clicked
    navigate('/trip-planner');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can perform any action with the form data, such as submitting to a server or handling it in your application.
    console.log('Visibility:', visibility);
    console.log('Name:', name);
  };

  return (
    
    
      <Card className="m-6 p-4 w-[50%] h-fit  ">
        <XMarkIcon className="w-5 h-5 cursor-pointer relative left-[95%]" onClick={() => {setIsOpen(false)}} />
        <CardBody className=''>
          <Typography variant="h3" color="blue-gray" className="gap-2 flex justify-center">
            Create New Trip
          </Typography>
          <Typography variant="h5" className="gap-2 mb-2">
            Choose who can see your Trip
          </Typography>
          <div className="flex flex-col gap-8">
            <div className='flex '>
              <Radio 
                name="type" 
                label={<LockClosedIcon className="w-5 h-5" />} 
                />
                <div className='flex flex-col gap-2'>
                  <div className='gap-2'> <h1>Private Trip</h1></div>
                  <div>Not visible to other Travo users and members, except for you and any friends with whom you share your Trip.</div>
                </div>
            </div>
            <div className='flex '>
              <Radio 
                name="type" 
                label={<LockOpenIcon className='w-5 h-5' />}
                
                defaultChecked />
                <div className='flex flex-col gap-2'>
                   
                  <div className='mr-2'><h1>Public Trip</h1></div>
                  <div>Visible to all travellers on Travo, including any friends you share your Trip with</div>
                    
                </div>
            </div> 
            <div className="flex justify-center" >
              
            </div> 
              
          </div>
        </CardBody>
        <CardFooter className="">
          <div className='pt-0 flex flex-col justify-center gap-3'>
            <Input
                    type="email"
                    placeholder="Enter Trip Name"
                    className="w-[100%] !border !border-blue-gray-50 bg-white text-blue-gray-500 shadow-sm shadow-blue-gray-900/5 ring-4 ring-transparent placeholder:text-blue-gray-200 "
                    labelProps={{
                      className: "hidden",
                    }}
                    containerProps={{ className: "min-w-[100px]" }}
                  />
            <Button onClick={handleNavigate} className='w-[100%] justify-center py-2 shadow-none hover:shadow-none active:shadow-none focus:shadow-none bg-[#22577A] rounded-7 font-poppins font-extrabold'>CREATE</Button>
          </div> 
        </CardFooter>
      </Card>
   
    // <form onSubmit={handleSubmit} className="box-form">
    //   <div className="flex gap-10">
    //   <Radio name="type" label="Ripple Effect On" ripple={true} />
    //   <Radio name="type" label="Ripple Effect Off" ripple={false} />
    // </div>
    // </form>
  );
};

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