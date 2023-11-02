import React, { useState, useEffect } from "react";
import axios from "../../api/axios";
import TabBar from "../../components/web-component/TabBar";
import Sidebar from "../../components/web-component/Sidebar";
import TopNavbar from "../../components/web-component/Navbar";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Switch,
} from "@material-tailwind/react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const data = [
  {
    label: "All Transactions",
    value: "all",
    desc: "View all transactions",
  },
  {
    label: "Store Payments",
    value: "store",
    desc: "View store payments",
  },
  {
    label: "Hotel Reservations",
    value: "hotel",
    desc: "View hotel reservations",
  },
  {
    label: "Car Rentals",
    value: "car",
    desc: "View car rentals",
  },
  {
    label: "Guide Payments",
    value: "guide",
    desc: "View guide payments",
  },
];

const Transactions = () => {
  const user_id = sessionStorage.getItem("user_id");

  const [activeTab, setActiveTab] = useState("all");

  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    const getReservation = async () => {
      try {
        let response = await axios.get(`/transaction/reservation/${user_id}`, {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        });
        console.log(response.data);
        setReservations(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    getReservation();
  }, []);

  const transactionCategories = [
    "All",
    "Hotel Reservation",
    "Store Payment",
    "Ticket Booking",
  ];

  const handleTabSelect = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar active="Transactions" />
      <div className="flex flex-col w-full bg-[#D9D9D9] bg-opacity-20 mb-4">
        <TopNavbar />
        <div
          className="overflow-y-scroll min-h-screen mb-4"
          style={{ scrollbarWidth: "none" }}
        >
          <Tabs className="p-3 m-3 border-0  ">
            <TabList>
              {transactionCategories.map((category) => (
                <Tab key={category}>{category}</Tab>
              ))}
            </TabList>
            {transactionCategories.map((category) => {
              let transactionData = [];

              if (category === "All") {
                transactionData = reservations;
              } else if (category === "Hotel Reservation") {
                transactionData = reservations;
              } else if (category === "Store Payment") {
                transactionData = null;
              } else if (category === "Ticket Booking") {
                transactionData = null;
              }

              return (
                <TabPanel key={category}>
                  <div className="h-full mx-6 grid gap-4 grid-cols-1">
                    {transactionData === null ? (
                      <Typography className="text-center">
                        No transactions found
                      </Typography>
                    ) : (
                      <>
                        {transactionData.map((transaction, key) => (
                          <Card key={key} className="mt-6">
                            <CardBody>
                              <Typography
                                variant="h5"
                                color="blue-gray"
                                className="mb-2"
                              >
                                Reservation Id : {transaction.reservation_id}
                              </Typography>
                              <Typography>
                                Payment: Rs.{transaction.payment}
                              </Typography>
                              <Typography>
                                Room Id: {transaction.room_id}
                              </Typography>
                              <Typography>Date: {transaction.date}</Typography>
                            </CardBody>
                          </Card>
                        ))}
                      </>
                    )}
                  </div>
                </TabPanel>
              );
            })}
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
