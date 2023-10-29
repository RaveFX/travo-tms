import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "../../api/axios";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/web-component/Sidebar";
import TopNavbar from "../../components/web-component/Navbar";
import { PlusIcon } from "@heroicons/react/24/outline";
import { Button, Typography,Avatar } from "@material-tailwind/react";
import { IdentificationIcon } from "@heroicons/react/24/solid";

function CommunityProfile() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [userPosts, setUserPosts] = useState([]);

  let user_id, profileImage;

  if (id === undefined) {
    console.log(id);
    user_id = sessionStorage.getItem("user_id");
    profileImage = sessionStorage.getItem("profileImage");
  } else {
    console.log(id);
    user_id = id;
  }

  useEffect(() => {
    const fetchUserPosts = async () => {
      try {
        const response = await axios.get(
          `/community/posts-by-creator/${user_id}`
        ); // Replace '123' with the actual creator ID
        console.log(response.data);
        setUserPosts(response.data);
      } catch (error) {
        console.error("Error fetching user posts:", error);
      }
    };

    fetchUserPosts();
  }, []);

  const navigateToCreatePost = () => {
    navigate("/create-post"); // Use the URL path to your CreatePost component
  };

  const navigateToFeed = () => {
    navigate("/traveler/community");
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar active="Community" />
      <div className="flex flex-col w-full bg-[#D9D9D9] bg-opacity-20 mb-4">
        <TopNavbar />
        <div
          className="overflow-y-scroll min-h-screen mb-4"
          style={{ scrollbarWidth: "none" }}
        >
          {/* Cover Photo and Profile Picture Section */}
          
          <div className="relative h-[22%] bg-black coverImage pb-4 ">
            <div className="absolute bottom-2 left-8 md:left-6 pb-1 md:pb-1">
              <Avatar
                variant="circular"
                alt="candice"
                src={`data:application/img;base64,${profileImage}`}
                className="w-[100px] h-[100px] p-0 m-0"
              />
            </div>
            <Button
              onClick={navigateToFeed}
              className="!absolute bottom-[20PX] right-[5px] justify-center mr-4 p-4 md:w-fit shadow: bg-blur hover:shadow-none active:shadow-none focus:shadow-none bg-[#22577A] rounded-full font-poppins font-extrabold "
            >
              {" "}
              <Typography>Back to Feed</Typography>
            </Button>
          </div>

          {/* Photo Grid Section */}
          <Button
            onClick={navigateToCreatePost}
            className="!absolute bottom-[20PX] right-[5px] justify-center mr-4 p-4 md:w-fit shadow-none hover:shadow-none active:shadow-none focus:shadow-none bg-gradient-to-b from-[#377A85] to-[#72C075] rounded-full font-poppins font-extrabold animated-button"
          >
            {" "}
            <PlusIcon className="w-7 h-7" />
          </Button>

          <div className="flex justify-center container mx-auto pr-2 pl-2 m-2">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-[25px]">
              {userPosts.map((post, index) => (
                <div key={index} className=" w-fill h-[500px] gap-[25px]">
                  <img
                    src={`data:application/img;base64,${post.image}`}
                    alt={`Post ${index}`}
                    className="object-cover  w-[500px] h-[500px] rounded-lg shadow-md"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommunityProfile;
