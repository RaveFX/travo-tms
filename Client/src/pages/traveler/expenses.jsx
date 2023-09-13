import React from "react";
import Sidebar from '../../components/web-component/Sidebar';
import TopNavbar from '../../components/web-component/Navbar';
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import { PencilIcon } from "@heroicons/react/24/solid";
import {
  ArrowDownTrayIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

import {
  Card,
  CardHeader,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  Avatar,
  IconButton,
  Tooltip,
  Input,
} from "@material-tailwind/react";

const TABLE_HEAD = ["Transaction", "Category", "Cost", "Paid by", "Date", ""];

// const TABLE_ROWS = [
//   {
//     img: "https://s.hdnux.com/photos/51/23/24/10827008/4/rawImage.jpg",
//     name: "Himantha",
//     Transaction: "Sprite 2L x 2",
//     cost: "LKR 500.00",
//     category: "food",
//     datepaid: "02/06/2023",
//   },
//   {
//     img: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/06/06/15/Chris-Pratt.jpg",
//     name: "Kasun",
//     Transaction: "LunchPakcs",
//     cost: "LKR 2500.00",
//     category: "food",
//     datepaid: "03/06/2023",
//   },
//   {
//     img: "https://blog.ongig.com/wp-content/uploads/2020/06/Tom_Holland_by_Gage_Skidmore.jpg",
//     name: "Dilshan",
//     Transaction: "Dinner Packs",
//     cost: "LKR 3500.00",
//     category: "food",
//     datepaid: "04/06/2023",
//   },
//   {
//     img: "https://www.bradford.ac.uk/media-v8/content-team/Ed-Sheeran.jpg",
//     name: "Nipuna",
//     Transaction: "Bus Tickets",
//     cost: "LKR 1500.00",
//     category: "tickets",
//     datepaid: "05/06/2023",
//   },
//   {
//     img: "https://www.thesun.co.uk/wp-content/uploads/2018/05/nintchdbpict000202268962.jpg",
//     name: "Kavindu",
//     Transaction: "Train Tickets",
//     cost: "LKR 2500.00",
//     category: "tickets",
//     datepaid: "06/06/2023",
//   },
// ];

;

function ExpenseTable() {
  const [TABLE_ROWS, setTableData] = useState([]);

  const getTableData = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/v1/budget/");
      const jsonData = await response.json();

      const filteredData = jsonData.map((expensedata) => ({
        img: expensedata.img,
        name: expensedata.name,
        Transaction: expensedata.cause,
        cost: expensedata.cost,
        category: expensedata.type,
        datepaid: expensedata.datepaid,
        
      }));

      setTableData(filteredData);
      console.log(filteredData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getTableData();
  }, [])
  return (
    <Card className="h-full w-full  ">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <Typography
              variant="h5"
              color="blue-gray"
              className="ml-3 font-poppins"
            >
              Recent Expenses
            </Typography>
          </div>
          <div className="flex w-full  gap-2 md:w-max">
            <div className="w-full text-xs md:w-72">
              <Input label="Search" />
            </div>
            <Button
              className="flex mr-3 items-center bg-[#22577A] gap-3"
              size="sm"
            >
              <ArrowDownTrayIcon strokeWidth={2} className="h-4 w-4" /> Download
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardBody className="overflow-scroll px-0">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal font-poppins leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TABLE_ROWS.map(
              (
                {
                  img,
                  name,
                  Transaction,
                  cost,
                  category,
                  account,
                  datepaid,
                  expiry,
                },
                index
              ) => {
                const isLast = index === TABLE_ROWS.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";

                return (
                  <tr key={name}>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal font-poppins"
                      >
                        {Transaction}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <div className="w-max">
                        <Chip
                          className="font-poppins"
                          size="sm"
                          variant="outlined"
                          value={category}
                          color={
                            category === "food"
                              ? "green"
                              : category === "travel"
                              ? "amber"
                              : category === "ticket"
                              ? "lightBlue"
                              : "red"
                          }
                        />
                      </div>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-poppins font-normal"
                      >
                        {cost}
                      </Typography>
                    </td>

                    <td className={classes}>
                      <div className="flex items-center gap-3">
                        <Avatar
                          src={img}
                          alt={name}
                          size="md"
                          className="border rounded-full border-blue-gray-50 bg-blue-gray-50/50 object-cover p-1"
                        />
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-bold font-poppins  "
                        >
                          {name}
                        </Typography>
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="flex items-center gap-3">
                        <div className="flex flex-col">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal font-poppins  capitalize"
                          >
                            {datepaid}
                          </Typography>
                        </div>
                      </div>
                    </td>
                    <td className={classes}>
                      <Tooltip content="Edit User">
                        <IconButton variant="text">
                          <PencilIcon className="h-4 w-4" />
                        </IconButton>
                      </Tooltip>
                    </td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      </CardBody>
      <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
        <Button variant="outlined" size="sm">
          Previous
        </Button>
        <div className="flex items-center gap-2">
          <IconButton variant="outlined" size="sm">
            1
          </IconButton>
          <IconButton variant="text" size="sm">
            2
          </IconButton>
          <IconButton variant="text" size="sm">
            3
          </IconButton>
          <IconButton variant="text" size="sm">
            ...
          </IconButton>
          <IconButton variant="text" size="sm">
            8
          </IconButton>
          <IconButton variant="text" size="sm">
            9
          </IconButton>
          <IconButton variant="text" size="sm">
            10
          </IconButton>
        </div>
        <Button variant="outlined" size="sm">
          Next
        </Button>
      </CardFooter>
    </Card>
  );
}

function Expenses() {
  return (
    <>
      <div className="font-poppins w-full bg-[#F6F8FA] flex overflow-hidden ">
        <div className="">
          <Sidebar />
        </div>
        <div className="flex flex-col w-full">
        <TopNavbar />
          <div>
            
          </div>
          <div>
            <div className="flex m-10">
              <ExpenseTable />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Expenses;
