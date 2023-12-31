import React from "react";
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
      <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        {/* <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center" alt="hero" src="/hero.png" /> */}
        <div class="text-center lg:w-5/12 w-full">
          <h1 className="mt-3 mb-0 text-4xl font-bold leading-tight">
            Your Journey
          </h1>
          <h1 className="my-3 text-5xl font-bold leading-tight">Starts Here</h1>

          <p className="text-2xl mb-8 text-white drop-shadow-md ">
          Travo makes your travelling life easier by streamlining
all your travel needs under a single roof!
          </p>
          <div className="flex justify-center mx-auto">
            <button className="hover:underline bg-violet-950 text-white font-bold rounded-full  py-4 px-8">
              Begin Now!
            </button>
            <button className="ml-4 hover:underline bg-white text-gray-800 font-bold rounded-full  py-4 px-8">
              User Stories
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
