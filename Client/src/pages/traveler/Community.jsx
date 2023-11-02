import React, { useState, useEffect } from "react";
import axios from "../../api/axios";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/web-component/Sidebar";
import TopNavbar from "../../components/web-component/Navbar";
import { Banner } from "../../components/web-component/profileBanner";
import {
  HeartIcon as OutlineHeartIcon,
  MagnifyingGlassIcon,
  PlusIcon,
  Squares2X2Icon,
} from "@heroicons/react/24/outline";
import { HeartIcon as SolidHeartIcon } from "@heroicons/react/24/solid";
import { Button, Input, Typography, Avatar } from "@material-tailwind/react";

function Community() {
  const navigate = useNavigate();
  const [postDetails, setPostDetails] = useState([]);
  const [search, setSearch] = useState("");
  const [results, setResults] = useState(null);

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

  useEffect(() => {
    if (search === "") {
      return;
    }
    const searchTraveler = async () => {
      try {
        let response = await axios.get(`/traveler/search/${search}`, {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        });
        setResults(response.data);
      } catch (err) {
        console.error("Not Found");
      }
    };
    searchTraveler();
  }, [search]);

  // const handleLikeClick = async (postId) => {
  //   try {
  //     const updatedPostDetails = postDetails.map((post) => {
  //       if (post.id === postId) {
  //         const updatedPost = { ...post };
  //         updatedPost.isLiked = !updatedPost.isLiked;
  //         updatedPost.likes += updatedPost.isLiked ? 1 : -1;
  //         return updatedPost;
  //       }
  //       return post;
  //     });
  //     setPostDetails(updatedPostDetails);

  //     // Send a request to update likes on the server
  //     await axios.put(`/community/like-post/${postId}`);
  //   } catch (error) {
  //     console.error("Error updating post like:", error);
  //   }
  // };

  const navigateToCreatePost = () => {
    navigate("/create-post"); // Use the URL path to your CreatePost component
  };

  const navigateToProfile = () => {
    navigate("/community-profile"); // Use the URL path to your CreatePost component
  };

  const navigateToUser = (id) => {
    navigate("/community-profile/" + id); // Use the URL path to your CreatePost component
  };

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
          <Banner>
            <div className="flex flex-row justify-between h-[60px]">
              <Button
                onClick={navigateToCreatePost}
                className="!absolute bottom-[20PX] right-[5px] justify-center mr-4 p-4 md:w-fit shadow-none hover:shadow-none active:shadow-none focus:shadow-none bg-gradient-to-b from-[#377A85] to-[#72C075] rounded-full font-poppins font-extrabold "
              >
                {" "}
                <PlusIcon className="w-7 h-7" />
              </Button>
              <Button
                onClick={navigateToProfile}
                className="!absolute bottom-[100PX] right-[5px] justify-center mr-4 p-4 md:w-fit shadow-none hover:shadow-none active:shadow-none focus:shadow-none bg-gradient-to-b from-[#377A85] to-[#72C075] rounded-full font-poppins font-extrabold"
              >
                <Squares2X2Icon className="w-7 h-7" />
              </Button>

              <div className="!relative top-[1.5rem] right-[5px] flex w-full gap-2 md:w-max rounded-full">
                <Input
                  type="search"
                  label="Type here..."
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                  className="pr-20 rounded-full style-none !focus:ring-8 !focus:outline-none !active:ring-0 !active:outline-none !hover:ring-0 !hover:outline-none"
                  containerProps={{
                    className: "min-w-[288px]",
                  }}
                />
                <Button
                  size="sm"
                  className="!absolute right-1 top-1 rounded-full bg-[#57CC99] hover:shadow-none active:shadow-none"
                >
                  <MagnifyingGlassIcon className=" bg-[#57CC99] h-4 w-4" />
                </Button>
              </div>

              {results && search !== "" && results.length > 0 && (
                <div className="absolute top-[295px] right-8 w-[250px] bg-gray-100 rounded-b-lg">
                  {results.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-4 cursor-pointer p-2 hover:bg-gray-200 rounded-t-lg text-1xl"
                      onClick={() => navigateToUser(item.id)}
                    >
                      <img
                        src={`data:application/img;base64,${item.profileImage}`}
                        className="h-6 w-6 rounded-full"
                      />
                      <span className="text-md">
                        {`${item.firstname} ${item.lastname}`}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </Banner>

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
                        className="flex items-center text-red gap-2"
                      >
                        {post.isLiked ? (
                          <SolidHeartIcon className="h-6 w-6 " />
                        ) : (
                          <OutlineHeartIcon className="h-6 w-6 colo" />
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
