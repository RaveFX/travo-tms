import React from "react";
import { Link } from "react-router-dom";
import TopNavbar from "../../components/navbar-general";
import Sidebar from "../../components/sidebar-rave";
import { Switch, Typography, Button, CardBody } from "@material-tailwind/react";

function Comptravs() {
  // Define an array with data for each item
  const travelData = [
    {
      name: "Colombo-Ella",
      images: [
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=256&h=256&q=80",
        "https://www.spring.org.uk/images/man-8-1.jpg",
        "https://helios-i.mashable.com/imagery/articles/02RpvwFM3kDzdCCY5OiIKi3/images-2.fit_lim.size_376x.jpg",
        "https://wl-5minutecrafts.cf.tsp.li/resize/728x/jpg/d73/65b/b5b6be59598fd143a0d71eb61c.jpg",
        "https://www.seekpng.com/png/detail/57-576498_man-face-png-happy-people-face-png.png",
        // Add other image URLs here
      ],
    },
    {
      name: "Colombo-Trincomalee",
      images: [
        "https://img.freepik.com/free-photo/handsome-cheerful-man-with-happy-smile_176420-18028.jpg",
        "https://wl-brightside.cf.tsp.li/resize/728x/jpg/337/af8/e797ca5cab85b8864dd49a290b.jpg",
        "https://cdnstorage.sendbig.com/unreal/female.webp",
        "https://www.seekpng.com/png/detail/57-576498_man-face-png-happy-people-face-png.png",
        // Add other image URLs here
      ],
    },
    {
      name: "Colombo-Hortan Plains",
      images: [
        "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg",
        "https://img.freepik.com/free-photo/close-up-portrait-smiling-young-woman-looking-camera_171337-17994.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOKgf1btqasr29ElrKVN80RPZxRDi4qTMnwQ&usqp=CAU",
        "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW4lMjBmYWNlfGVufDB8fDB8fHww&w=1000&q=80",
        "https://helios-i.mashable.com/imagery/articles/02RpvwFM3kDzdCCY5OiIKi3/images-2.fit_lim.size_376x.jpg",
        "https://wl-5minutecrafts.cf.tsp.li/resize/728x/jpg/d73/65b/b5b6be59598fd143a0d71eb61c.jpg",
        // Add other image URLs here
      ],
    },
    // Add more objects for other items
  ];

  return (
    <div className="flex flex-row">
      {travelData.map((item, index) => (
        <div
          key={index}
          className="my-8 flex w-[30%] ml-5 rounded-xl border border-gray-100 p-4 text-left text-gray-600 shadow-lg sm:p-4"
        >
          <div className="flex flex-row">
            <div>
              <div className="flex flex-row gap-10 mb-5">
                <div className="flex">
                  <p className="text-sm">{item.name}</p>
                </div>
                <div className="flex">
                  <button className="cursor-pointer bg-slate-300 border py-2 px-8 text-center text-xs leading-tight transition-colors duration-150 ease-in-out hover:border-gray-500 rounded-lg">
                    Request
                  </button>
                </div>
              </div>

              <div className="flex flex-col items-center space-y-4">
                <div className="flex  -space-x-3">
                  {item.images.map((image, imageIndex) => (
                    <img
                      key={imageIndex}
                      className="h-12 w-12 object-cover rounded-full ring ring-white"
                      src={image}
                      alt={`Traveler ${index + 1}`}
                    />
                  ))}
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-300 font-semibold text-white ring ring-white">
                    +{item.images.length}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function Comptravs2() {
  // Define an array with data for each item
  const travelData2 = [
    {
      name: "Colombo-Jaffna",
      images: [
        "https://helios-i.mashable.com/imagery/articles/02RpvwFM3kDzdCCY5OiIKi3/images-2.fit_lim.size_376x.jpg",
        "https://wl-5minutecrafts.cf.tsp.li/resize/728x/jpg/d73/65b/b5b6be59598fd143a0d71eb61c.jpg",
        "https://www.seekpng.com/png/detail/57-576498_man-face-png-happy-people-face-png.png",
        // Add other image URLs here
      ],
    },
    {
      name: "Colombo-Adams Peak",
      images: [
        "https://cdnstorage.sendbig.com/unreal/female.webp",
        "https://www.seekpng.com/png/detail/57-576498_man-face-png-happy-people-face-png.png",
        // Add other image URLs here
      ],
    },
    {
      name: "Colombo-Hortan Plains",
      images: [
        "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg",
        "https://img.freepik.com/free-photo/close-up-portrait-smiling-young-woman-looking-camera_171337-17994.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOKgf1btqasr29ElrKVN80RPZxRDi4qTMnwQ&usqp=CAU",
        "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW4lMjBmYWNlfGVufDB8fDB8fHww&w=1000&q=80",
        "https://helios-i.mashable.com/imagery/articles/02RpvwFM3kDzdCCY5OiIKi3/images-2.fit_lim.size_376x.jpg",
        "https://wl-5minutecrafts.cf.tsp.li/resize/728x/jpg/d73/65b/b5b6be59598fd143a0d71eb61c.jpg",
        // Add other image URLs here
      ],
    },
    // Add more objects for other items
  ];

  return (
    <div className="flex flex-row">
      {travelData2.map((item, index) => (
        <div
          key={index}
          className="my-8 flex w-[30%] ml-5 rounded-xl border border-gray-100 p-4 text-left text-gray-600 shadow-lg sm:p-4"
        >
          <div className="flex flex-row">
            <div>
              <div className="flex flex-row gap-10 mb-5">
                <div className="flex">
                  <p className="text-sm">{item.name}</p>
                </div>
                <div className="flex">
                  <button
                    disabled
                    className="cursor-pointer text-white bg-slate-400 border py-2 px-8 text-center text-xs leading-tight transition-colors duration-150 ease-in-out hover:border-gray-500 rounded-lg"
                  >
                    Request Sent
                  </button>
                </div>
              </div>

              <div className="flex flex-col items-center space-y-4">
                <div className="flex  -space-x-3">
                  {item.images.map((image, imageIndex) => (
                    <img
                      key={imageIndex}
                      className="h-12 w-12 object-cover rounded-full ring ring-white"
                      src={image}
                      alt={`Traveler ${index + 1}`}
                    />
                  ))}
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-300 font-semibold text-white ring ring-white">
                    +{item.images.length}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function Comptravs3() {
  // Define an array with data for each item
  const travelData3 = [
    {
      name: "Colombo-Jaffna",
      images: [
        "https://helios-i.mashable.com/imagery/articles/02RpvwFM3kDzdCCY5OiIKi3/images-2.fit_lim.size_376x.jpg",
        "https://wl-5minutecrafts.cf.tsp.li/resize/728x/jpg/d73/65b/b5b6be59598fd143a0d71eb61c.jpg",
        "https://www.seekpng.com/png/detail/57-576498_man-face-png-happy-people-face-png.png",
        // Add other image URLs here
      ],
    },
    {
      name: "Colombo-Adams Peak",
      images: [
        "https://cdnstorage.sendbig.com/unreal/female.webp",
        "https://www.seekpng.com/png/detail/57-576498_man-face-png-happy-people-face-png.png",
        // Add other image URLs here
      ],
    },
    {
      name: "Colombo-Hortan Plains",
      images: [
        "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg",
        "https://img.freepik.com/free-photo/close-up-portrait-smiling-young-woman-looking-camera_171337-17994.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOKgf1btqasr29ElrKVN80RPZxRDi4qTMnwQ&usqp=CAU",
        "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW4lMjBmYWNlfGVufDB8fDB8fHww&w=1000&q=80",
        "https://helios-i.mashable.com/imagery/articles/02RpvwFM3kDzdCCY5OiIKi3/images-2.fit_lim.size_376x.jpg",
        "https://wl-5minutecrafts.cf.tsp.li/resize/728x/jpg/d73/65b/b5b6be59598fd143a0d71eb61c.jpg",
        // Add other image URLs here
      ],
    },
    // Add more objects for other items
  ];

  return (
    <div className="flex flex-row">
      {travelData3.map((item, index) => (
        <div
          key={index}
          className="my-8 flex w-[30%] ml-5 rounded-xl border border-gray-100 p-4 text-left text-gray-600 shadow-lg sm:p-4"
        >
          <div className="flex flex-row">
            <div>
              <div className="flex flex-row gap-10 mb-5">
                <div className="flex">
                  <p className="text-sm">{item.name}</p>
                </div>
                <div className="flex">
                  <button
                    disabled
                    className="cursor-pointer text-white bg-slate-400 border py-2 px-8 text-center text-xs leading-tight transition-colors duration-150 ease-in-out hover:border-gray-500 rounded-lg"
                  >
                    Community
                  </button>
                </div>
              </div>

              <div className="flex flex-col items-center space-y-4">
                <div className="flex  -space-x-3">
                  {item.images.map((image, imageIndex) => (
                    <img
                      key={imageIndex}
                      className="h-12 w-12 object-cover rounded-full ring ring-white"
                      src={image}
                      alt={`Traveler ${index + 1}`}
                    />
                  ))}
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-300 font-semibold text-white ring ring-white">
                    +{item.images.length}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
function Comptravs4() {
  // Define an array with data for each item
  const travelData4 = [
    {
      name: "Colombo-Ella",
      images: [
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=256&h=256&q=80",
        "https://www.spring.org.uk/images/man-8-1.jpg",
        "https://helios-i.mashable.com/imagery/articles/02RpvwFM3kDzdCCY5OiIKi3/images-2.fit_lim.size_376x.jpg",
        "https://wl-5minutecrafts.cf.tsp.li/resize/728x/jpg/d73/65b/b5b6be59598fd143a0d71eb61c.jpg",
        "https://www.seekpng.com/png/detail/57-576498_man-face-png-happy-people-face-png.png",
        // Add other image URLs here
      ],
    },
    {
      name: "Colombo-Trincomalee",
      images: [
        "https://img.freepik.com/free-photo/handsome-cheerful-man-with-happy-smile_176420-18028.jpg",
        "https://wl-brightside.cf.tsp.li/resize/728x/jpg/337/af8/e797ca5cab85b8864dd49a290b.jpg",
        "https://cdnstorage.sendbig.com/unreal/female.webp",
        "https://www.seekpng.com/png/detail/57-576498_man-face-png-happy-people-face-png.png",
        // Add other image URLs here
      ],
    },
    {
      name: "Colombo-Hortan Plains",
      images: [
        "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg",
        "https://img.freepik.com/free-photo/close-up-portrait-smiling-young-woman-looking-camera_171337-17994.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOKgf1btqasr29ElrKVN80RPZxRDi4qTMnwQ&usqp=CAU",
        "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW4lMjBmYWNlfGVufDB8fDB8fHww&w=1000&q=80",
        "https://helios-i.mashable.com/imagery/articles/02RpvwFM3kDzdCCY5OiIKi3/images-2.fit_lim.size_376x.jpg",
        "https://wl-5minutecrafts.cf.tsp.li/resize/728x/jpg/d73/65b/b5b6be59598fd143a0d71eb61c.jpg",
        // Add other image URLs here
      ],
    },
    // Add more objects for other items
  ];

  return (
    <div className="flex flex-row">
      {travelData4.map((item, index) => (
        <div
          key={index}
          className="my-8 flex w-[30%] ml-5 rounded-xl border border-gray-100 p-4 text-left text-gray-600 shadow-lg sm:p-4"
        >
          <div className="flex flex-row">
            <div>
              <div className="flex flex-row gap-10 mb-5">
                <div className="flex">
                  <p className="text-sm">{item.name}</p>
                </div>
                <div className="flex">
                  <button className="cursor-pointer bg-slate-300 border py-2 px-8 text-center text-xs leading-tight transition-colors duration-150 ease-in-out hover:border-gray-500 rounded-lg">
                    Accept
                  </button>
                </div>
              </div>

              <div className="flex flex-col items-center space-y-4">
                <div className="flex  -space-x-3">
                  {item.images.map((image, imageIndex) => (
                    <img
                      key={imageIndex}
                      className="h-12 w-12 object-cover rounded-full ring ring-white"
                      src={image}
                      alt={`Traveler ${index + 1}`}
                    />
                  ))}
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-300 font-semibold text-white ring ring-white">
                    +{item.images.length}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

const Tabs = ({ color }) => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div className="flex flex-wrap mx-10">
        <div className="w-[100%]">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 1
                    ? "text-white bg-[#22577A]"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Matches
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 2
                    ? "text-white bg-[#22577A]"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                Sent
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 3
                    ? "text-white bg-[#22577A]"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                Received
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 4
                    ? "text-white bg-[#22577A]"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(4);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                My Buddies
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <Comptravs />
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <Comptravs2 />
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                  <Comptravs4 />
                </div>
                <div className={openTab === 4 ? "block" : "hidden"} id="link1">
                  <Comptravs3 />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

function TabsRender() {
  return (
    <>
      <Tabs color="black" />;
    </>
  );
}

function Travelbuddy() {
  return (
    <>
      <div className="font-poppins w-full bg-[#F6F8FA] flex overflow-hidden ">
        <div className=" fixed">
          <Sidebar />
        </div>
        <div className="flex flex-col w-full ml-[18.5%]">
          <TopNavbar />

          <div>
            <div className="flex-row ml-10 mt-[2%] bg-white p-5 rounded-lg w-[93%]  flex">
              <div className="flex">
                <h1 className="font-bold text-red-700 text-lg">
                  {" "}
                  | TravelBuddy
                </h1>
              </div>
              <div className="flex ml-10">
                <Switch className="" />
              </div>
            </div>

            <div className="flex flex-row">
              <div className="mt-5 ml-10 mb-5 flex"></div>
              <div className="mt-5 ml-10 mb-5 flex"></div>
            </div>
          </div>

          <div>
            <TabsRender />
          </div>

          <div className="flex z-10">
            <div className="ml-10 flex"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Travelbuddy;
