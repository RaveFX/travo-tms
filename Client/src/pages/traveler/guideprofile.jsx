import React from "react";
import { Link } from "react-router-dom";
import TopNavbar from "../../components/navbar-general";
import Sidebar from "../../components/sidebar-rave";
import { Button } from "@material-tailwind/react";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css

// import {
//   Card,
//   CardHeader,
//   CardBody,
//   CardFooter,
//   Typography,
//   Button,
// } from "@material-tailwind/react";

class Connfbut extends React.Component {
  submit = () => {
    confirmAlert({
      title: "Manual Confirmation",
      message: "Are you sure to Confirm this arrival?",
      buttons: [
        {
          label: "Yes",
          onClick: () => alert("Confirmed"),
        },
        {
          label: "No",
          onClick: () => alert("Cancelled"),
        },
      ],
    });
  };

  render() {
    return (
      <div className="container font-poppins">
        <Button className=" bg-[#22577A] mx-17" onClick={this.submit}>
          Manual Confirmation
        </Button>
      </div>
    );
  }
}

function Profiledata() {
  return (
    <div>
      <div class="m-10 max-w-sm">
        <div class="rounded-lg border bg-white px-4 pt-8 pb-10 shadow-lg">
          <div class="relative mx-auto w-36 rounded-full">
            <span class="absolute right-0 m-3 h-3 w-3 rounded-full bg-green-500 ring-2 ring-green-300 ring-offset-2"></span>
            <img
              class="mx-auto h-auto w-full rounded-full"
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
              alt=""
            />
          </div>
          <h1 class="my-1 text-center text-xl font-bold leading-8 text-gray-900">
            Janaka Perera
          </h1>
          <h3 class="font-lg text-semibold text-center leading-6 text-gray-600">
            Tour Guide | JToursLK
          </h3>
          <p class="text-center text-sm leading-6 text-gray-500 hover:text-gray-600">
            A comprehensive travel companion, blending insightful
            recommendations and local insights for a memorable journey.
          </p>
          <ul class="mt-3 divide-y rounded bg-gray-100 py-2 px-3 text-gray-600 shadow-sm hover:text-gray-700 hover:shadow">
            <li class="flex items-center py-3 text-sm">
              <span>Joined On</span>
              <span class="ml-auto">Apr 08, 2020</span>
            </li>
            <li class="flex items-center py-3 text-sm">
              <span>Status</span>
              <span class="ml-auto">
                <span class="rounded-full bg-green-200 py-1 px-2 text-xs font-medium text-green-700">
                  Waiting for arrival
                </span>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function Guideqr() {
  return (
    <div>
      <div class="group my-10 flex w-[88%] h-[85%] max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
        <a
          class="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
          href="#"
        >
          <img
            class="peer absolute top-0 right-0 h-full w-full object"
            src="https://i.imgur.com/m2GyhHR.png"
            alt="product image"
          />
        </a>
        <div class="mt-4 px-5 pb-5">
          <a href="#">
            <h5 class="text-xl tracking-tight mt-2 text-slate-900">
              Let your guide scan this QR code to confirm guide’s arrival
            </h5>
          </a>
          <div class="mt-7 mx-5 mb-5 flex items-center justify-between">
            <Connfbut />
          </div>
        </div>
      </div>
    </div>
  );
}

function GuideProfile() {
  return (
    <>
      <div className="font-poppins w-full bg-[#F6F8FA] flex overflow-hidden ">
        <div className=" fixed">
          <Sidebar />
        </div>
        <div className="flex flex-col w-full ml-[18.5%]">
          <TopNavbar />

          <div>
            <div className="ml-10 mt-[2%] bg-white p-5 rounded-lg w-[93%]  flex">
              <h1 className="font-bold text-red-700 text-lg">
                {" "}
                | Guide Profile
              </h1>
            </div>

            <div className="flex flex-row">
              <div className="mt-5 ml-10 mb-5 flex">
                <Profiledata />
              </div>
              <div className="mt-5 ml-10 mb-5 flex">
                <Guideqr />
              </div>
            </div>
          </div>
          <div className="flex z-10">
            <div className="ml-10 flex"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GuideProfile;
