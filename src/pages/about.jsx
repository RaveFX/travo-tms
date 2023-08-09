import React from "react";

function AboutUs() {
  return (
    <div>
      <div className="flex flex-col w-full">
        <div className="bg-[#f6f8fa] flex flex-col">
          <div className="bg-[url(https://file.rendit.io/n/3i4TPysZvF8Hgrd4sLHb.png)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex flex-col justify-between pb-[144px] gap-[174px]">
            <div className="shadow-[0px_4px_100px_0px_rgba(0,_0,_0,_0.03)] bg-white flex flex-row justify-between items-center pl-24 pr-20">
              <img
                src="https://file.rendit.io/n/8cbUepLQcci8uEQg1qxL.png"
                className="my-3"
              />
              <div className="flex flex-row gap-5 items-center">
                <div className="text-sm font-['Inter'] tracking-[-0.16] leading-[22px] text-[#026940] mr-2 w-8 shrink-0">
                  Plans
                </div>
                <div className="text-sm font-['Inter'] tracking-[-0.16] leading-[22px] text-[#026940] w-10 shrink-0">
                  About
                </div>
                <div className="whitespace-nowrap text-sm font-['Inter'] tracking-[-0.16] leading-[22px] text-[#026940] mr-2 w-20 shrink-0">
                  Contact us
                </div>
                <div className="text-sm font-['Inter'] tracking-[-0.16] leading-[22px] text-[#026940] mr-2 w-8 shrink-0">
                  Help
                </div>
                <div className="text-sm font-['Inter'] tracking-[-0.16] leading-[17.6px] text-[#026940] mr-5 w-8 shrink-0">
                  Login
                </div>
                <div className="shadow-[0px_2px_0px_0px_rgba(65,_61,_69,_0.2)] bg-[#0c6ff9] flex flex-col justify-center h-12 items-center rounded-[32px]">
                  <div className="text-sm font-['Inter'] font-bold leading-[17.6px] text-white w-1/2 mx-6">
                    Signup
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-between items-start ml-40 mr-[176px]">
              <div className="flex flex-col mb-2 gap-8 w-3/5 items-center">
                <div className="text-center whitespace-nowrap text-6xl font-['Poppins'] font-medium leading-[36px] text-white self-start w-[298px]">
                  Our Story
                </div>
                <img
                  src="https://file.rendit.io/n/Gagi9v8jVoqWHgmvphki.png"
                  className="mb-px"
                />
                <div className="text-justify text-2xl font-['Poppins'] leading-[36px] text-white self-stretch mr-2">
                  At Travo, we believe that travel should be a seamless and
                  unforgettable experience. That's why we have developed a
                  comprehensive Travel Management System designed to simplify
                  the process of planning, booking, and managing your travel
                  arrangements. Whether you're a seasoned traveler or embarking
                  on your first adventure, our platform is here to make your
                  journey hassle-free and enjoyable.
                </div>
              </div>
              <div className="self-end flex flex-col gap-10">
                <div className="text-justify text-2xl font-['Poppins'] leading-[36px] text-white">
                  Our team of travel experts has leveraged the latest technology
                  to create a user-friendly platform that caters to all your
                  travel needs. We understand that every traveler is unique, and
                  that's why our system offers a wide range of features and
                  services to accommodate your preferences and requirements.
                </div>
                <div className="text-justify text-2xl font-['Poppins'] leading-[36px] text-white">
                  With our Travel Management System, you can explore an
                  extensive selection of destinations, including popular tourist
                  hotspots, hidden gems, and off-the-beaten-path locations. Our
                  platform provides detailed information about each destination,
                  including attractions, landmarks, activities, and local
                  insights, ensuring that you make the most of your travel
                  experience.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
