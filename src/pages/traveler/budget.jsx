import React, { useState } from "react";
import { Link } from "react-router-dom";
import TopNavbar from "../../components/navbar-general";
import Sidebar from "../../components/sidebar-rave";
import { Button, CardBody } from "@material-tailwind/react";
// import Cardss from "../../components/card";
import { Card, Input, Checkbox, Typography } from "@material-tailwind/react";

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
  return (
    <>
      <Card color="white" shadow={true}>
        <form className=" m-5 text-sm mt-8 mb-2 w-100 max-w-screen-lg border-solid sm:w-55">
          <div className="mb-4 font-poppins flex gap-6">
            <Input size="lg" placeholder="Cause/Event" required />
            <Input size="lg" placeholder="Cost" required />
          </div>
          <div className="flex mb-4 gap-6">
            <select
              id="large"
              class="block text-xs w-full px-4 py-3 text-black-100  dark:border-gray-300"
            >
              <option selected>Category</option>
              <option value="US">Food</option>
              <option value="CA">Travel</option>
              <option value="FR">Tickets</option>
              <option value="DE">Other</option>
            </select>

            <Input size="lg" placeholder="Date" />
            <Input size="lg" placeholder="Time" />
          </div>
          <div className="flex flex-row gap-6">
            <div className="flex mb-4 gap-6">
              <FileUpload />
            </div>
            <div className="flex mb-4 gap-6">
              <Button className="bg-[#22577A] mt-6 mb-5 ">
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
      <div className="font-poppins w-full bg-[#F6F8FA] flex overflow-hidden ">
        <div className="fixed">
          <Sidebar />
        </div>
        <div className="ml-[18.25%] flex flex-col w-full">
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
