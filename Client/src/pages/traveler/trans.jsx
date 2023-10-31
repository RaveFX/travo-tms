

import React, { useState } from "react";
import TabBar from "../../components/web-component/TabBar";
import Sidebar from "../../components/web-component/Sidebar";
import TopNavbar from "../../components/web-component/Navbar";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
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

const transactionData = [
  {
    id: 1,
    name: "Store Payment",
    amount: 5000,
    currency: "LKR",
    parties: "Store Name, Your Name",
    details: "Payment for shopping",
  },
  {
    id: 2,
    name: "Hotel Reservation",
    amount: 7500,
    currency: "LKR",
    parties: "Hotel Name, Your Name",
    details: "Hotel booking for a weekend trip",
  },
  {
    id: 3,
    name: "Car Rental",
    amount: 3000,
    currency: "LKR",
    parties: "Car Rental Company, Your Name",
    details: "Rental of a car for the trip",
  },
  {
    id: 4,
    name: "Guide Payment",
    amount: 2000,
    currency: "LKR",
    parties: "Tour Guide, Your Name",
    details: "Payment for tour guide services",
  },
];

const Transactions = () => {
  const [activeTab, setActiveTab] = useState("all");

  const transactionCategories = Array.from(
    new Set(transactionData.map((transaction) => transaction.name))
  );

  const handleTabSelect = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar active="Transactions" />
      <div className="flex flex-col w-full bg-[#D9D9D9] bg-opacity-20 mb-4">
        <TopNavbar />
        <div className="h-[10%] pt-8">
          {/* <TabBar
            data={data}
            activeTab={activeTab}
            handleTabSelect={handleTabSelect}
            className="absolute top-[500px] mt-4 mr-4 z-10 h"
          /> */}
        </div>
        <div
          className="overflow-y-scroll min-h-screen mb-4"
          style={{ scrollbarWidth: "none" }}
        >
          <Tabs>
            <TabList>
              <Tab key="all">All</Tab>
              {transactionCategories.map((category) => (
                <Tab key={category}>{category}</Tab>
              ))}
            </TabList>
            <TabPanel key="all">
              <div className="h-full mx-6 grid gap-4 grid-cols-1">
                {transactionData.map((transaction) => (
                  <Card key={transaction.id} className="mt-6">
                    <CardBody>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="mb-4 h-12 w-12 text-gray-900"
                      >
                        <path
                          fillRule="evenodd"
                          d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
                          clipRule="evenodd"
                        />
                        <path d="M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z" />
                      </svg>
                      <Typography variant="h5" color="blue-gray" className="mb-2">
                        {transaction.name}
                      </Typography>
                      <Typography>
                        Amount: {transaction.amount} {transaction.currency}
                      </Typography>
                      <Typography>
                        Parties Involved: {transaction.parties}
                      </Typography>
                      <Typography>Details: {transaction.details}</Typography>
                    </CardBody>
                  </Card>
                ))}
              </div>
            </TabPanel>
            {transactionCategories.map((category) => (
              <TabPanel key={category}>
                <div className="h-full mx-6 grid gap-4 grid-cols-1">
                  {transactionData
                    .filter((transaction) => transaction.name === category)
                    .map((transaction) => (
                      <Card key={transaction.id} className="mt-6">
                        <CardBody>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="mb-4 h-12 w-12 text-gray-900"
                          >
                            <path
                              fillRule="evenodd"
                              d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
                              clipRule="evenodd"
                            />
                            <path d="M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z" />
                          </svg>
                          <Typography variant="h5" color="blue-gray" className="mb-2">
                            {transaction.name}
                          </Typography>
                          <Typography>
                            Amount: {transaction.amount} {transaction.currency}
                          </Typography>
                          <Typography>
                            Parties Involved: {transaction.parties}
                          </Typography>
                          <Typography>Details: {transaction.details}</Typography>
                        </CardBody>
                      </Card>
                    ))}
                </div>
              </TabPanel>
            ))}
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Transactions;