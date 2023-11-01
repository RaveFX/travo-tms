import React, { useEffect, useState } from "react";
import Sidebar from '../../components/web-component/Sidebar';
import TopNavbar from '../../components/web-component/Navbar';
import { Link, useParams } from "react-router-dom";
import axios from "axios";

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


// const TABLE_ROWS = [];


// const userint = parseInt(user_id);
const user_id = sessionStorage.getItem('user_id');



function ExpenseTable() {

  const [budgetData, setBudgetData] = useState([]);
  const { id } = useParams(); // Assuming this is the trip_id from the URL

  
  useEffect(() => {
    loadExpenses();
},[]); 

const loadExpenses=async()=>{
    const result=await axios.get(`http://localhost:8080/api/v1/budget/getAllBudgets/1`)
    .then((response) => {
      setBudgetData(response.data);
    })
    .catch((error) => {
      console.error("Error fetching budget data: ", error);
    });
}


// const [budgets, setBudgets] = useState([]);

// useEffect(() => {
//   // Make an API call to fetch all budgets for the specified trip
//   axios.get(`http://localhost:8080/api/v1/budget/getAllBudgets/${id}`)
//     .then((response) => {
//       setBudgets(response.data);
//     })
//     .catch((error) => {
//       console.error('Error fetching data: ' + error);
//     });
// }, [id]);




  return (
    <Card className="h-screen pb-24 w-full ">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="mb-24 flex flex-col justify-between gap-8 md:flex-row md:items-center">
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
            {budgetData.map((budget, index) => {
              const isLast = index === budgetData.length - 1;
              const classes = isLast
                ? "p-4"
                : "p-4 border-b border-blue-gray-50";

              return (
                <tr key={budget.id}>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal font-poppins"
                    >
                      {budget.cause}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <div className="w-max">
                      <Chip
                        className="font-poppins"
                        size="sm"
                        variant="outlined"
                        value={budget.type}
                        color={
                          budget.type === "food"
                            ? "green"
                            : budget.type === "travel"
                              ? "amber"
                              : budget.type === "ticket"
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
                      {budget.cost}
                    </Typography>
                  </td>

                  <td className={classes}>
                    <div className="flex items-center gap-3">
                      {user_id}
                    </div>
                  </td>
                  <td className={classes}>
                    <div className="flex items-center gap-3">
                      {budget.date}
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
            })}
          </tbody>
          {/* <tbody>
            {TABLE_ROWS.map(
              ({ img, name, Transaction, cost, category, datepaid }, index) => {
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
          </tbody> */}
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

export default function MemberExpenses() {
  return (
    <>
      <div className="font-poppins h-screen w-full bg-[#F6F8FA] flex overflow-hidden  ">
        <div className="">
          <Sidebar />
        </div>
        <div className="flex flex-col w-full">
          <div>
            <TopNavbar />
          </div>
          <div>
            <div className="flex m-10 ">
              <ExpenseTable />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}