import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/web-component/Sidebar";
import TopNavbar from "../../components/web-component/Navbar";
import {
  HeartIcon
} from "@heroicons/react/24/outline";
function Community() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  // const handleNavigate = () => {
  //   // Example: Navigate to '/other-page' when the button is clicked
  //   navigate('/planner');
  // };

  //   const [activeTab, setActiveTab] = React.useState("all trips");
  const handleCreateTripClick = () => {
    setIsOpen(true);
  };

  const handleOpenCalander = () => {
    setIsOpen(true);
  };

  const posts = [
    {
      profileImage: "/traveler/trip.jpg", // Replace with your image URLs
      username: "User1",
      media: "/traveler/trip.jpg", // Replace with your image URLs or video URLs
      caption:
        "Nestled in Sri Lanka's heart, Sigiriya stands as an enigmatic testament to history and nature's artistry. As the sun graces its ancient walls, a journey through time and beauty begins. Ascending the stone staircases, frescoes whisper tales of a bygone era, leading to a summit that unveils an awe-inspiring panorama. Amidst the ruins, echoes of architectural brilliance resound, bridging past and present. Sigiriya's allure extends to its symmetrical gardens and the Mirror Wall, reflecting both history and visitors' reflections. Nearby, Pidurangala Rock offers a different perspective, framing Sigiriya against a canvas of sky. Wildlife safari adventures at Minneriya National Park unveil elephants' grace and a vibrant avian tapestry, celebrating Sri Lanka's biodiversity. Culinary delights follow, as traditional dishes share stories through flavor. Sigiriya isn't just a rock; it's a journey through cultural echoes and natural wonders, leaving an indelible mark on all who wander its paths.",
      likes: 0, // Add a property for tracking likes
    },
    {
      profileImage: "/traveler/trip.jpg", // Replace with your image URLs
      username: "User1",
      media: "/traveler/trip.jpg", // Replace with your image URLs or video URLs
      caption:
        "Nestled in Sri Lanka's heart, Sigiriya stands as an enigmatic testament to history and nature's artistry. As the sun graces its ancient walls, a journey through time and beauty begins. Ascending the stone staircases, frescoes whisper tales of a bygone era, leading to a summit that unveils an awe-inspiring panorama. Amidst the ruins, echoes of architectural brilliance resound, bridging past and present. Sigiriya's allure extends to its symmetrical gardens and the Mirror Wall, reflecting both history and visitors' reflections. Nearby, Pidurangala Rock offers a different perspective, framing Sigiriya against a canvas of sky. Wildlife safari adventures at Minneriya National Park unveil elephants' grace and a vibrant avian tapestry, celebrating Sri Lanka's biodiversity. Culinary delights follow, as traditional dishes share stories through flavor. Sigiriya isn't just a rock; it's a journey through cultural echoes and natural wonders, leaving an indelible mark on all who wander its paths.",
      likes: 0, // Add a property for tracking likes
    },
    // Add more posts here...
  ];

  const handleLikeClick = (index) => {
    const updatedPosts = [...posts];
    updatedPosts[index].isLiked = !updatedPosts[index].isLiked;

    if (updatedPosts[index].isLiked) {
      updatedPosts[index].likes += 1;
    } else {
      updatedPosts[index].likes -= 1;
    }

    setPosts(updatedPosts);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar active="Community" />
      <div className="flex flex-col w-full bg-[#D9D9D9] bg-opacity-20 ">
        <TopNavbar />
        <div className="overflow-y-scroll" style={{ scrollbarWidth: "none" }}>
          {/* Cover Photo and Profile Picture Section */}
          <div className="relative h-[22%] bg-black coverImage ">
            <div className="absolute bottom-0 left-8 md:left-6 pb-1 md:pb-1">
              <img
                src="/traveler/trip.jpg"
                alt="Profile"
                className="h-[100px] w-[100px] rounded-full border-1 border-white"
              />
            </div>
          </div>
          {/* Post Section */}
          <div className="flex flex-col item-center px-4 py-6 md:p-8 space-y-8 ">
            {posts.map((post, index) => (
              <div
                key={index}
                className="flex flex-col items-center bg-white w-[75%] rounded-lg shadow-md p-4"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={post.profileImage}
                    alt={`${post.username}'s Profile`}
                    className="h-12 w-12 rounded-full"
                  />
                  <span className="font-semibold text-lg">{post.username}</span>
                </div>
                <div className="flex flex-row ">
                  <img
                    src={post.media}
                    alt="Post Media"
                    className="mt-4 object-cover w-[500px] h-[700px] rounded-lg"
                  />
                  <div className="flex flex-col justify-between ml-4">
                    <p className="mt-2 p-8 text-gray-800">{post.caption}</p>
                    <button
                      onClick={() => handleLikeClick(index)}
                      className="flex items-center text-red-500"
                    >
                      {post.isLiked ? (
                      <HeartIcon className="h-6 w-6 text-red-500" />
                    ) : (
                      <HeartIcon className="h-6 w-6" />
                    )}
                      {post.likes} 
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Community;
