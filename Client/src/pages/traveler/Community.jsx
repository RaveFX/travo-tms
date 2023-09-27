import React, { useState, useEffect } from "react";
import axios from "../../api/axios";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/web-component/Sidebar";
import TopNavbar from "../../components/web-component/Navbar";
import { HeartIcon as OutlineHeartIcon } from "@heroicons/react/24/outline";
import { HeartIcon as SolidHeartIcon } from "@heroicons/react/24/solid";
import { Button } from "@material-tailwind/react";
function Community() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [postDetails, setPostDetails] = useState([]);

  // const handleNavigate = () => {
  //   // Example: Navigate to '/other-page' when the button is clicked
  //   navigate('/planner');
  // };

  //   const [activeTab, setActiveTab] = React.useState("all trips");
  //   const handleCreateTripClick = () => {
  //     setIsOpen(true);
  //   };

  //   const handleOpenCalander = () => {
  //     setIsOpen(true);
  //   };

  //   const posts = [
  const [posts, setPosts] = useState([
    {
      profileImage: "/traveler/trip.jpg", // Replace with your image URLs
      username: "User1",
      media: "/traveler/trip.jpg", // Replace with your image URLs or video URLs
      caption:
        "Nestled in Sri Lanka's heart, Sigiriya stands as an enigmatic testament to history and nature's artistry. As the sun graces its ancient walls, a journey through time and beauty begins. Ascending the stone staircases, frescoes whisper tales of a bygone era, leading to a summit that unveils an awe-inspiring panorama. Amidst the ruins, echoes of architectural brilliance resound, bridging past and present. Sigiriya's allure extends to its symmetrical gardens and the Mirror Wall, reflecting both history and visitors' reflections. Nearby, Pidurangala Rock offers a different perspective, framing Sigiriya against a canvas of sky. Wildlife safari adventures at Minneriya National Park unveil elephants' grace and a vibrant avian tapestry, celebrating Sri Lanka's biodiversity. Culinary delights follow, as traditional dishes share stories through flavor. Sigiriya isn't just a rock; it's a journey through cultural echoes and natural wonders, leaving an indelible mark on all who wander its paths.",
      isLiked: false,
      likes: 0,
    },
    {
      profileImage: "/traveler/trip.jpg", // Replace with your image URLs
      username: "User1",
      media: "/traveler/trip.jpg", // Replace with your image URLs or video URLs
      caption:
        "Nestled in Sri Lanka's heart, Sigiriya stands as an enigmatic testament to history and nature's artistry. As the sun graces its ancient walls, a journey through time and beauty begins. Ascending the stone staircases, frescoes whisper tales of a bygone era, leading to a summit that unveils an awe-inspiring panorama. Amidst the ruins, echoes of architectural brilliance resound, bridging past and present. Sigiriya's allure extends to its symmetrical gardens and the Mirror Wall, reflecting both history and visitors' reflections. Nearby, Pidurangala Rock offers a different perspective, framing Sigiriya against a canvas of sky. Wildlife safari adventures at Minneriya National Park unveil elephants' grace and a vibrant avian tapestry, celebrating Sri Lanka's biodiversity. Culinary delights follow, as traditional dishes share stories through flavor. Sigiriya isn't just a rock; it's a journey through cultural echoes and natural wonders, leaving an indelible mark on all who wander its paths.",
      isLiked: false,
      likes: 0,
    },
    // Add more posts here...
  ]);

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

    // const posts = postDetails.map()
    // const getImage = async (id=posts.creator_id) =>{
    //   try {
    //     let response = await axios.get(`/post_img/${id}`, {
    //       headers: { "Content-Type": "application/json" },
    //       withCredentials: true,
    //     });
    //     console.log(response.data);
    //     setPostDetails(response.data);
    //   } catch (err) {
    //     console.error(err);
    //   }
    // }
    // console.log("Before");
    // getImage();
    // console.log("After");
  }, []);

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar active="Community" />
      <div className="flex flex-col w-full bg-[#D9D9D9] bg-opacity-20 mb-4">
        <TopNavbar />
        <div
          className="overflow-y-scroll min-h-[100vh] mb-4"
          style={{ scrollbarWidth: "none" }}
        >
          {/* Cover Photo and Profile Picture Section */}
          <div className="relative h-[22%] bg-black coverImage ">
            <div className="absolute bottom-2 left-8 md:left-6 pb-1 md:pb-1">
              <img
                src="/traveler/trip.jpg"
                alt="Profile"
                className="h-[100px] w-[100px] rounded-full border-1 border-white"
              />
            </div>
            <Button onClick={navigateToCreatePost} className="absolute top-[90PX] right-0 h-[3rem] m-4 justify-center py-2 md:w-[150px] shadow-none hover:shadow-none active:shadow-none focus:shadow-none bg-[#22577A] rounded-full font-poppins font-extrabold">Create Post</Button>
          </div>
          {/* Post Section */}
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
                    <div className="flex items-center space-x-4">
                      <img
                        src={post.profileImage}
                        alt={`${post.username}'s Profile`}
                        className="h-6 w-6 rounded-full"
                      />
                      <span className="font-semibold text-lg">
                        {post.username}
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
