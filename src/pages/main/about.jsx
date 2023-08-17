import React from "react";
import { Link } from "react-router-dom";
import Navingation_home from "../components/newnav";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

function AboutUs() {
  return (
    <div className="font-poppins">
      <div>
        <Navingation_home />
      </div>
      <div className="bg-transparent ">
        <div className="flex flex-col bg-none justify-center m-20">
          <h1 className="text-3xl">About Us</h1>
        </div>

        <div className="flex flex-col bg-none justify-center m-20">
          <h1 className="text-2xl">
            Welcome to Travo, your ultimate travel companion that opens the door
            to unforgettable adventures and seamless journeys across the globe.
          </h1>
          <h1 className="text-xl mt-5">
            At Travo, we believe that travel is not just about reaching a
            destination, but about the entire experience that transforms you.
            Our mission is to empower travelers like you to explore with
            confidence, connect with cultures, and create cherished memories.
          </h1>
        </div>

        <div className="flex flex-col bg-none mx-20">
          <h1 className="text-3xl">Our Story</h1>
        </div>
        <div className="flex flex-row bg-none gap-10  text-justify mx-20">
          <div className="flex w-[35%]">
            <h1 className="text-xl my-10">
              Travo was born out of a shared passion for exploration and a
              vision to revolutionize the way people travel. Our diverse team of
              avid travelers, tech enthusiasts, and experienced globetrotters
              came together with the goal of making travel planning and
              exploration exciting, convenient, and personalized.{" "}
            </h1>
          </div>
          <div className="flex ml-10">
            <iframe
              width="700"
              height="280"
              src="https://www.youtube.com/embed/j-jx_nUqZII?controls=0"
              title="YouTube video player"
              frameborder="2"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>

        <div className="flex flex-col bg-none justify-center mx-20">
          <h1 className="text-3xl">What We Offer</h1>
        </div>
        <div className="flex flex-col bg-none justify-center mx-20">
          <h1 className="text-xl">
            <ol>
              <li className="my-10">
                <CheckCircleIcon className="w-10" />
                {""}
                Comprehensive Guides: Discover hidden gems and iconic landmarks
                alike with our meticulously curated travel guides. Unearth local
                secrets, must-visit attractions, and off-the-beaten-path
                treasures.
              </li>
              <li className="my-10">
                <CheckCircleIcon className="w-10 " /> Personalized
                Recommendations: Your journey is unique, and so are your
                preferences. Travo tailors recommendations to your interests,
                ensuring that every moment of your trip resonates with you.
              </li>
              <li className="my-10">
                <CheckCircleIcon className="w-10" /> Smooth Itineraries: Craft
                your ideal itinerary effortlessly. We provide easy-to-use tools
                for planning your days, making the most of your time without the
                stress.
              </li>
              <li className="my-10">
                <CheckCircleIcon className="w-10" /> Local Insights: Immerse
                yourself in the culture of your destination. Our platform
                connects you with local insiders who share authentic experiences
                and insider tips.
              </li>
              <li className="my-10">
                <CheckCircleIcon className="w-10" /> Booking Convenience: From
                flights to accommodations, Travo streamlines the booking
                process, making it simple and hassle-free.
              </li>
            </ol>
          </h1>
        </div>
        <div className="flex flex-col bg-none mx-20">
          <h1 className="text-xl">Contact Us</h1>
          <p>
            Have questions, suggestions, or feedback? We'd love to hear from
            you. Reach out to our dedicated support team at
            support@travoapp.com. Get ready to redefine how you travel. Welcome
            to Travo - Where Your Adventure Begins!
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
