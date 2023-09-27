import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../api/axios";
import { PhotoIcon } from "@heroicons/react/24/outline";

function CreatePost() {
  const navigate = useNavigate();
  const [postText, setPostText] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [location, setLocation] = useState("");
  const [predictions, setPredictions] = useState([]);
  const [autocompleteService, setAutocompleteService] = useState(null);
  const MAX_WORD_LIMIT = 200;

  const images = [];

  const handleImageUpload = async () => {
    const generateUniqueFileName = (file) => {
      const timestamp = new Date().getTime();
      const randomString = Math.random().toString(36).substring(2, 7);
      const originalFileName = file.name;
      const fileExtension = originalFileName.substring(
        originalFileName.lastIndexOf(".")
      );
      return `${timestamp}_${randomString}${fileExtension}`;
    };

    try {
      let imagename = generateUniqueFileName(selectedImage);
      console.log(imagename);
      const formData = new FormData();
      formData.append("image", selectedImage, imagename);

      const response = await axios.post("/community/upload-image", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      return imagename; // Assuming the backend returns the image URL.
    } catch (error) {
      console.error("Error uploading image:", error);
      throw error;
    }
  };
  useEffect(() => {
    if (window.google) {
      setAutocompleteService(
        new window.google.maps.places.AutocompleteService()
      );
    }
  }, []);

  const handlePostSubmit = async () => {
    try {
      const imageUrl = await handleImageUpload();
      console.log("Image URL:", imageUrl);

      const postData = {
        creator_id: sessionStorage.getItem("user_id"), // Replace with the actual creator_id
        post_img: imageUrl, // Use the image URL obtained from the upload
        description: postText,
        likes: 0,
        location: location,
      };

      const response = await axios.post("/community/create-post", postData);

      console.log("Post created successfully:", response.data);
      // Reset form fields or navigate to another page
    } catch (error) {
      // Handle errors here
      console.error("Error creating post:", error);
    }

    setSelectedImage(null);
    setPostText("");
    setLocation("");
  };

  const updateWordCount = () => {
    const wordCount = postText.length;
    return MAX_WORD_LIMIT - wordCount;
  };

  const handleFileDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      setSelectedImage(file);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleFileInputChange = (event) => {
    const { name, files } = event.target;
    const selectedFile = files[0];
    setSelectedImage(selectedFile);
  };

  const handleLocationChange = (e) => {
    const inputValue = e.target.value;
    setLocation(inputValue);

    if (autocompleteService) {
      autocompleteService.getPlacePredictions(
        {
          input: inputValue,
          types: ["geocode"],
        },
        (predictions) => {
          setPredictions(predictions || []);
        }
      );
    }
  };

  const handlePredictionClick = (prediction) => {
    setLocation(prediction.description);
    setPredictions([]);
  };

  return (
    <div className="flex h-screen justify-center items-center bg-[#D9D9D9]">
      <div className="bg-white p-8 rounded-lg shadow-md w-[600px] flex flex-col">
        <h1 className="text-1xl font-semibold mb-4">Create a Post</h1>
        <div className="flex">
          <div className="w-1/2 pr-4">
            <div
              className="border border-dashed border-gray-300 h-[300px] flex items-center justify-center relative"
              onDrop={handleFileDrop}
              onDragOver={handleDragOver}
            >
              {selectedImage ? (
                <img
                  src={URL.createObjectURL(selectedImage)}
                  alt="Selected"
                  className="h-[300px] w-auto"
                />
              ) : (
                <p className="flex flex-col justify-center text-gray-500">
                  <PhotoIcon className="ml-[110px] w-7 h-7" />
                  Drag and drop an image here or{" "}
                  <label className="flex flex-row justify-center ml-[30px] text-white bg-blue-500 cursor-pointer rounded-full w-fit pl-2 pr-2">
                    Select from computer
                    <input
                      type="file"
                      accept="image/*"
                      name="images"
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
              <p className="flex align-left text-gray-500 text-sm mt-2">
                {updateWordCount()} / {MAX_WORD_LIMIT}
              </p>
            </div>
            <div className="mb-4 relative">
              <label className="block text-gray-700 mb-2">Location</label>
              <input
                type="text"
                placeholder="Add a location"
                value={location}
                onChange={handleLocationChange}
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              />
              {predictions.length > 0 && (
                <div className="absolute left-0 mt-2 w-full bg-white border border-gray-300 rounded-lg shadow-lg">
                  {predictions.map((prediction) => (
                    <div
                      key={prediction.place_id}
                      className="px-4 py-2 cursor-pointer hover:bg-blue-100"
                      onClick={() => handlePredictionClick(prediction)}
                    >
                      {prediction.description}
                    </div>
                  ))}
                </div>
              )}
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
