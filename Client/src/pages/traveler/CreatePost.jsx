import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreatePost() {
  const navigate = useNavigate();
  const [postText, setPostText] = useState(""); // State to store post text
  const [selectedImage, setSelectedImage] = useState(null); // State to store selected image
  const [location, setLocation] = useState(""); // State to store location
  const MAX_WORD_LIMIT = 200; // Maximum word limit for the description

  // Function to handle post submission
  const handlePostSubmit = () => {
    // Perform post submission logic here (e.g., sending data to a server)
    // You can use selectedImage, postText, and location to create and upload the post
    // Reset states after successful submission
    setSelectedImage(null);
    setPostText("");
    setLocation("");
  };

  // Function to update word count in the description box
  const updateWordCount = () => {
    const wordCount = postText.trim().split(/\s+/).length;
    return MAX_WORD_LIMIT - wordCount;
  };

  // Function to handle file drop for drag and drop functionality
  const handleFileDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      setSelectedImage(file);
    }
  };

  // Prevent the browser's default behavior when files are dragged over the drop area
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  // Function to handle file input change (browse button)
  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setSelectedImage(file);
    }
  };

  return (
    <div className="flex h-screen justify-center items-center bg-[#D9D9D9]">
      <div className="bg-white p-8 rounded-lg shadow-md w-[600px] flex flex-col">
        <h1 className="text-2xl font-semibold mb-4">Create a Post</h1>
        <div className="flex">
          <div className="w-1/2 pr-4">
            <div
              className="border border-dashed border-gray-300 h-[200px] flex items-center justify-center relative"
              onDrop={handleFileDrop}
              onDragOver={handleDragOver}
            >
              {selectedImage ? (
                <img
                  src={URL.createObjectURL(selectedImage)}
                  alt="Selected"
                  className="h-[200px] w-auto"
                />
              ) : (
                <p className="text-gray-500">
                  Drag and drop an image here or{" "}
                  <label className="text-blue-500 cursor-pointer hover:underline">
                    browse
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileInputChange}
                      className="hidden"
                    />
                  </label>
                  .
                </p>
              )}
            </div>
          </div>
          <div className="w-1/2">
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Description</label>
              <textarea
                placeholder="Enter your post description..."
                value={postText}
                onChange={(e) => setPostText(e.target.value)}
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                maxLength={MAX_WORD_LIMIT}
              />
              <p className="text-gray-500 text-sm mt-2">
                Word Count: {updateWordCount()} / {MAX_WORD_LIMIT}
              </p>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Location</label>
              <input
                type="text"
                placeholder="Add a location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
          </div>
        </div>
        <div className="mt-4 text-right">
          <button
            type="button"
            onClick={handlePostSubmit}
            className="bg-[#57CC99] text-white font-semibold py-2 px-4 rounded-lg hover:bg-[#57CC99] focus:outline-none"
          >
            Submit Post
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreatePost;
