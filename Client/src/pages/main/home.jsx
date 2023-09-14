import React from "react";
import Newcards from "../../components/home-cards";
import Testimonials from "../../components/home-testimonials";
import { Button } from "@material-tailwind/react";
import Footers from "../../components/home-footer";
import { Link } from "react-router-dom";
//import Newnav from "../../components/newnav";
import Navingation_home from "../../components/homenavbar";

//import hero from "public/hero.png"

function Landing() {
  return (
    <div
      className="font-poppins relative overflow bg-cover bg-no-repeat w-screen h-screen text-white"
      style={{
        backgroundImage: "url('/hero.png')",
        //  background: "linear-gradient(90deg, rgba(131, 126, 226, 1) 24%, rgba(114, 114, 226, 1) 58%, rgba(0, 212, 255, 1) 100%)"
      }}
    >
      <Navingation_home />
      <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        {/* <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center" alt="hero" src="/hero.png" /> */}
        <div class="text-center lg:w-5/12 w-full">
          <h1 className="mt-3 mb-0 text-7xl font-bold leading-tight">
            Your Journey, Starts Here
          </h1>
          {/* <h1 className="my-3 text-5xl font-bold leading-tight">Starts Here</h1> */}

          <p className="text-2xl mb-8 text-white drop-shadow-md ">
            Travo makes your travelling life easier by streamlining all your
            travel needs under a single roof!
          </p>
          <div className="flex justify-center mx-auto">
            <Link
              className="ml-4 hover:underline bg-white text-gray-800 font-bold rounded-full  py-4 px-8"
              to="/signup"
            >
              Begin Now!
            </Link>
            <Link className="hover:underline bg-violet-950 text-white font-bold rounded-full  py-4 px-8">
              User Stories
            </Link>
          </div>
        </div>
      </div>

      <Button className="drop-shadow-lg p-2 pl-5 pr-5  bg-rose-700 font-poppins ml-10 mb-10 font-bold text-2xl text-white">
        <h1>Trending Destinations</h1>
      </Button>

      <Newcards />
      <Button className="drop-shadow-lg p-2 mt-10 pl-5 pr-5  bg-rose-700 font-poppins ml-10 mb-10 font-bold text-2xl text-white">
        <h1>Customer Testimonials</h1>
      </Button>
      <Testimonials />
      <Footers />
    </div>
  );
}

export default Landing;
