import React, { useState, useEffect } from "react";
import axios from "../../api/axios";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/web-component/Sidebar";
import TopNavbar from "../../components/web-component/Navbar";
import {
  HeartIcon as OutlineHeartIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";
import { HeartIcon as SolidHeartIcon } from "@heroicons/react/24/solid";
import { Button, Typography, Avatar } from "@material-tailwind/react";

function Community() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [postDetails, setPostDetails] = useState([]);

  const handleLikeClick = async (postId) => {
    try {
      const updatedPostDetails = postDetails.map((post) => {
        if (post.id === postId) {
          const updatedPost = { ...post };
          updatedPost.isLiked = !updatedPost.isLiked;
          updatedPost.likes += updatedPost.isLiked ? 1 : -1;
          return updatedPost;
        }
        return post;
      });
      setPostDetails(updatedPostDetails);

      // Send a request to update likes on the server
      await axios.put(`/community/like-post/${postId}`);
    } catch (error) {
      console.error("Error updating post like:", error);
    }
  };

  const navigateToCreatePost = () => {
    navigate("/create-post"); // Use the URL path to your CreatePost component
  };

  const navigateToProfile = () => {
    navigate("/community-profile"); // Use the URL path to your CreatePost component
  };

  const navigateToUser = (id) => {
    navigate("/community-profile/" + id); // Use the URL path to your CreatePost component
  };

  useEffect(() => {
    const getPostDetails = async () => {
      try {
        let response = await axios.get(`/community/all-post`, {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        });
        console.log(response.data);
        setPostDetails(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    getPostDetails();
  }, []);

  const profileImage = sessionStorage.getItem("profileImage");

  return (
    <div className="flex h-screen overflow-hidden ">
      <Sidebar active="Community" />
      <div className="flex flex-col w-full bg-[#D9D9D9] bg-opacity-20 mb-4">
        <TopNavbar />
        <div
          className="overflow-y-scroll min-h-screen mb-4"
          style={{ scrollbarWidth: "none" }}
        >
          {/* Cover Photo and Profile Picture Section */}
          <div className="relative h-[22%] ">
            <div className="absolute inset-0 bg-black bg-opacity-90 coverImage"></div>
            <div className="absolute bottom-2 left-8 md:left-6 pb-1 md:pb-1">
            <Avatar
              variant="circular"
              alt="candice"
              src={`data:application/img;base64,${profileImage}`}
              className="w-[100px] h-[100px] p-0 m-0"
            />
            </div>
            <Button
              onClick={navigateToProfile}
              className="!absolute bottom-[20PX] right-[5px] justify-center mr-4 p-4 md:w-fit shadow: bg-blur hover:shadow-none active:shadow-none focus:shadow-none bg-[#22577A] rounded-full font-poppins font-extrabold "
            >
              {" "}
              <Typography>Go to Profile</Typography>
            </Button>
          </div>
          {/* Post Section */}
          <Button
            onClick={navigateToCreatePost}
            className="!absolute bottom-[20PX] right-[5px] justify-center mr-4 p-4 md:w-fit shadow-none hover:shadow-none active:shadow-none focus:shadow-none bg-gradient-to-b from-[#377A85] to-[#72C075] rounded-full font-poppins font-extrabold animated-button"
          >
            {" "}
            <PlusIcon className="w-7 h-7" />
          </Button>
          <div className="flex flex-col w-full px-4 py-6 md:p-8 space-y-8 ">
            {postDetails.map((post, index) => (
              <div
                key={index}
                className="flex md:flex-row flex-col justify-center bg-white rounded-lg shadow-md p-4"
              >
                <div className="flex md:flex-row flex:col">
                  <img
                    src={`data:application/img;base64,${post.image}`}
                    alt="Post Media"
                    className="mt-4 object-cover md:w-[500px] md:h-[600px] w-[250px] h-[300px] rounded-lg"
                  />
                  <div className="flex flex-col ml-4">
                    <div
                      className="flex items-center space-x-4"
                      onClick={() => navigateToUser(post.creator_id)}
                    >
                      <img
                        src={`data:application/img;base64,${post.profileImage}`}
                        className="h-6 w-6 rounded-full"
                      />
                      <span className="font-semibold text-lg">
                        {`${post.firstName} ${post.lastName}`}
                      </span>
                    </div>
                    <hr className="my-2" />
                    <div className="flex flex-col justify-between h-full space-x-4">
                      <p className="mt-1 p-4 pt-0 w-[600px] text-gray-800">
                        {post.description}
                      </p>
                      <button
                        onClick={() => handleLikeClick(index)}
                        className="flex items-center text-red-500 gap-2"
                      >
                        {post.isLiked ? (
                          <SolidHeartIcon className="h-6 w-6 " />
                        ) : (
                          <OutlineHeartIcon className="h-6 w-6" />
                        )}
                        {post.likes}
                      </button>
                    </div>
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
