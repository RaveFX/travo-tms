import React, { useState } from "react";
import { Link } from "react-router-dom";
// import TopNavbar from "../../components/navbar-general";
// import Sidebar from "../../components/sidebar-rave";
import Sidebar from '../../components/web-component/Sidebar';
import TopNavbar from '../../components/web-component/Navbar';
import { Button, CardBody } from "@material-tailwind/react";
// import Cardss from "../../components/card";
import axios from 'axios';
import { Alert, Card, Input, Checkbox, Typography } from "@material-tailwind/react";
 
function Icon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-6 w-6"
    >
      <path
        fillRule="evenodd"
        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
        clipRule="evenodd"
      />
    </svg>
  );
}
 
function FormAlert() {
  return (
    <Alert
      icon={<Icon />}
      className="rounded-none border-l-4 border-[#2ec946] bg-[#2ec946]/10 font-medium text-[#2ec946]"
    >
      Successfully Submitted
    </Alert>
  );
}


const data = [
  {
    amount: "LKR 200,000",
    label: "Total Expenses",
    imgUrl: "https://file.rendit.io/n/8g8SeHoYgHxaqhSAvb5B.svg",
    bgColor: "#eff2f7",
    textColor: "#212b36",
  },
  {
    amount: "12",
    label: "Trip Participants",
    imgUrl: "https://file.rendit.io/n/rzaX2PDxiD0qsQUJOP8v.svg",
    bgColor: "#eff2f7",
    textColor: "#212b36",
  },
  {
    amount: "LKR 8,000",
    label: "Your Expenses",
    imgUrl: "https://file.rendit.io/n/8g8SeHoYgHxaqhSAvb5B.svg",
    bgColor: "#eff2f7",
    textColor: "#212b36",
  },
  {
    amount: "LKR 3,000",
    label: "Paid Expenses",
    imgUrl: "https://file.rendit.io/n/8g8SeHoYgHxaqhSAvb5B.svg",
    bgColor: "#eff2f7",
    textColor: "#212b36",
  },

  {
    amount: "LKR 5,000",
    label: "Balance Due",
    imgUrl: "https://file.rendit.io/n/8g8SeHoYgHxaqhSAvb5B.svg",
    bgColor: "#eff2f7",
    textColor: "#212b36",
  },

  // Add more data objects as needed
];

const Budgetcard = () => {
  return (
    <div className="m-5 flex">
      {data.map((item, index) => (
        <div key={index} className="m-5">
          <div
            className={`border-solid border-[#e7e7e7] bg-white flex flex-col justify-center pl-6 gap-4 w-[115%] h-40 shrink-0 items-start border rounded-lg`}
          >
            <div
              className={`bg-[${item.bgColor}] flex flex-col justify-center w-12 h-12 shrink-0 items-center rounded-[31px]`}
            >
              <img src={item.imgUrl} className="w-6" />
            </div>
            <div className="flex flex-col gap-px w-3/5">
              <div
                className={`whitespace-nowrap text-2xl font-['Inter'] font-bold leading-[30px] text-[${item.textColor}]`}
              >
                {item.amount}
              </div>
              <div
                className={`whitespace-nowrap text-xs font-['Poppins'] font-medium leading-[20px] text-[#637381] mr-10`}
              >
                {item.label}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  return (
    <div className=" max-w-md p-4">
      <label className="block text-gray-500 font-semibold mb-2">
        Upload Receipt
      </label>
      <div className="flex items-center space-x-2">
        <label className="flex bg-white border rounded-lg shadow-md p-2 cursor-pointer">
          <span className="text-blue-600">Choose File</span>
          <input
            type="file"
            className="hidden"
            accept=".jpg, .jpeg, .png, .pdf"
            onChange={handleFileChange}
          />
        </label>
        <span className="text-gray-400">
          {selectedFile ? selectedFile.name : "No file chosen"}
        </span>
      </div>
    </div>
  );
};

function Budgetform() {

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Get the form data
    const formData = new FormData(e.target);

    FormAlert();

    try {
      const response = await axios.post('http://localhost:8080/api/v1/budget/addBudget', formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // Set the content type for form data
        },
      });
      console.log(response);
      // Handle the response here (e.g., show a success message)
      console.log('Response: Success', response.data);
    } catch (error) {
      // Handle errors here (e.g., show an error message)
      console.error('Error: kedup', error);
    }
  };

  return (
    <>
      <Card color="white" shadow={true}>
        <form onSubmit={handleSubmit} className=" m-5 text-sm mt-8 mb-2 w-100 max-w-screen-lg border-solid sm:w-55">
          <div className="mb-4 font-poppins flex gap-6">
            <Input name="cause" id="cause" size="lg" placeholder="Cause/Event" required />
            <Input name="cost" id="cost" size="lg" placeholder="Cost" required />
          </div>
          <div className="flex mb-4 gap-6">
            <select
              id="type" name="type"
              className="block text-xs w-full px-4 py-3 text-black-100  dark:border-gray-300"
            >
              <option selected>Category</option>
              <option >Food</option>
              <option >Travel</option>
              <option >Tickets</option>
              <option >Other</option>
            </select>

            {/* <Input type="date" name="date" id="date" size="lg" placeholder="Date" /> */}
            {/* <Input name="time" id="time" size="lg" placeholder="Time" /> */}
          </div>
          <div className="flex flex-row gap-6">
            <div className="flex mb-4 gap-6">
              {/* <FileUpload /> */}
            </div>
            <div className="flex mb-4 gap-6">
              <Button type="submit" className="bg-[#22577A] mt-6 mb-5 ">
                Submit Expenses
              </Button>
            </div>
          </div>
        </form>
      </Card>
    </>
  );
}

function Budget() {
  return (
    <>
      <div className="font-poppins w-full bg-[#F6F8FA] flex overflow-scroll ">
        <div className="">
          <Sidebar />
        </div>
        
        <div className=" flex flex-col w-full">
          <div>
          <TopNavbar />
           
          </div>
          <div>
            <div className="flex">
              <Budgetcard />
            </div>
            <div className="ml-10  flex">
              <p className="font-bold">Add Expenses</p>
            </div>
            <div className="flex flex-row">
              <div className="mt-5 ml-10 mb-5 flex">
                <Budgetform />
              </div>
              <div
                className="
            mt-5 ml-10 mb-5 flex"
              >
                <Link to="/Expenses">
                  <Button className="bg-[#22577A] mb-5 text-white font-poppins h-12">
                    View All Expenses
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Budget;
