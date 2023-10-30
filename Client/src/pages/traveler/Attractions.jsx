import React, { useEffect, useState } from "react";
import Sidebar from "../../components/web-component/Sidebar";
import TopNavbar from "../../components/web-component/Navbar";
import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";
import { Button, Input } from "@material-tailwind/react";
import { StarIcon } from "@heroicons/react/24/outline";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import TabBar from '../../components/web-component/TabBar';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from "axios";

function Attractions() {
  const { id , day} = useParams();
  const [isSubSidebarOpen, setIsSubSidebarOpen] = useState(false);
  const [subSidebarState, setSubSidebarState] = useState(1);
  const [attractions, setAttractions] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    const fetchAttractions = async () => {
      try {
        const response1 = await axios.get('http://localhost:8080/api/v1/places/famous-places');
        const response2 = await axios.get('http://localhost:8080/api/v1/places/attractions');
        const response3 = await axios.get('http://localhost:8080/api/v1/places/places-in-kandy');
        const response4 = await axios.get('http://localhost:8080/api/v1/places/places-in-galle');
        const response5 = await axios.get('http://localhost:8080/api/v1/places/places-in-matara');
        const response6 = await axios.get('http://localhost:8080/api/v1/places/places-in-nuwaraeliya');
        const response7 = await axios.get('http://localhost:8080/api/v1/places/waterfalls');
        const response8 = await axios.get('http://localhost:8080/api/v1/places/places-in-trincomalee');
        const response9 = await axios.get('http://localhost:8080/api/v1/places/places-in-jaffna');
        const response10 = await axios.get('http://localhost:8080/api/v1/places/rivers');
        const attractionsData = [
          ...response1.data.results,
          ...response2.data.results,
          ...response3.data.results,
          ...response4.data.results,
          ...response5.data.results,
          ...response6.data.results,
          ...response7.data.results,
          ...response8.data.results,
          ...response9.data.results,
          ...response10.data.results
        ];
        const uniqueAttractions = new Set();

      // Iterate through the attractionsData and add them to the Set
        attractionsData.forEach(attraction => {
        // Check if the attraction's place_id is not in the Set, then add it
        if (!uniqueAttractions.has(attraction.place_id)) {
          uniqueAttractions.add(attraction);
        }
      });
       setAttractions([...uniqueAttractions]);
        setLoading(false); // Set loading to false after data is fetched  
      } catch (error) {
        console.error('Error fetching attractions: ', error);
        setLoading(false); // Set loading to false in case of an error
      }
    };

    fetchAttractions();
  }, []);

  useEffect(() => {
    initializeAutocomplete();
  }, []);
  

  const handleAddAttraction = async (attraction) => {
    try {
      const photoReference = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${attraction.photos[0].photo_reference}&key=AIzaSyACalhnjQdYpaOrtk1JxGkJWqV8iNW-CLA`;
      console.log('Photo Reference:', photoReference);
      // Make a POST request to your backend API endpoint to store the attraction details
      await axios.post("http://localhost:8080/api/v1/trip/add-attraction", {
        place_id: attraction.place_id,
        name: attraction.name,
        address : attraction.formatted_address,
        latitude: attraction.geometry.location.lat, // Include latitude
        longitude: attraction.geometry.location.lng, // Include longitude
        img_url: photoReference,
        trip_id: id,
        day : day
      });
      
      // Handle success, e.g., show a success message to the user
      console.log("Attraction added successfully!");
      // Display a success message using SweetAlert2
      Swal.fire({
        icon: 'success',
        title: 'Attraction added successfully!',
        showConfirmButton: false,
        timer: 1500, // Automatically close after 1.5 seconds
        customClass: {
          container: 'custom-swal-container' // Define your custom class here
        },
        style: {
          zIndex: 100000 // Set a high z-index value
        }
      });
    } catch (error) {
      // Handle error, e.g., show an error message to the user
      console.error("Error adding attraction: ", error);
    }
  };

  const handleAddSearchedAttraction = async (attraction) => {
    try {
      const photoReference = `${attraction.photos[0].getUrl()}`;
      console.log('Photo Reference:', photoReference);
      // Make a POST request to your backend API endpoint to store the attraction details
      await axios.post("http://localhost:8080/api/v1/trip/add-attraction", {
        place_id: attraction.place_id,
        name: attraction.name,
        address : attraction.formatted_address,
        latitude: attraction.geometry.location.lat(), // Access latitude using lat() method
        longitude: attraction.geometry.location.lng(),
        img_url: photoReference,
        trip_id: id,
        day : day
      });
      
      // Handle success, e.g., show a success message to the user
      console.log("Attraction added successfully!");
      // Display a success message using SweetAlert2
      Swal.fire({
        icon: 'success',
        title: 'Attraction added successfully!',
        showConfirmButton: false,
        timer: 1500, // Automatically close after 1.5 seconds
        customClass: {
          container: 'custom-swal-container' // Define your custom class here
        },
        style: {
          zIndex: 100000 // Set a high z-index value
        }
      });
    } catch (error) {
      // Handle error, e.g., show an error message to the user
      console.error("Error adding attraction: ", error);
    }
  };

  const initializeAutocomplete = () => {
    const input = document.getElementById("search-input");
    const options = {
      types: ["establishment"], // Restrict the search to geographical locations
      componentRestrictions: { country: "LK" }, // Limit results to Sri Lanka
    };
    const autocomplete = new window.google.maps.places.Autocomplete(input, options);
  
    autocomplete.addListener("place_changed", () => {
      const place = autocomplete.getPlace();
      console.log(place);
      const selectedAttraction = {
        place_id: place.place_id,
        name: place.name,
        formatted_address: place.formatted_address,
        latitude: place.geometry.location.lat(), // Access latitude using lat() method
        longitude: place.geometry.location.lng(),
        img_url: place.photos[0].getUrl(),
        rating: place.rating || 0,
      };
      console.log(place.photos[0].getUrl());

      // Update searchResults state with selected attraction
      setSearchResults([place]);
      
    });
  };
  

  const data = [
    {
      label: "All",
      value: `traveler/attractions/${id}/${day}`,
      desc: ``,
      
    },
    {
      label: "Colombo",
      value: `traveler/attractions_colombo/${id}/${day}`,
      desc: ``,
    },
    {
      label: "Kandy",
      value: `traveler/attractions_kandy/${id}/${day}`,
      desc: ``,
    },
    {
      label: "Anuradhapura",
      value: `traveler/attractions_anuradhapura/${id}/${day}`,
      desc: ``,
    },
    {
      label: "Galle",
      value: `traveler/attractions_galle/${id}/${day}`,
      desc: ``,
    },
    {
      label: "Nuwara Eliya",
      value: `traveler/attractions_nuwaraeliya/${id}/${day}`,
      desc: ``,
    },
    {
      label: "Polonnaruwa",
      value: `traveler/attractions_polonnaruwa/${id}/${day}`,
      desc: ``,
    },
    {
      label: "Jaffna",
      value: `traveler/attractions_jaffna/${id}/${day}`,
      desc: ``,
    },
    {
      label: "Trincomalee",
      value: `traveler/attractions_trincomalee/${id}/${day}`,
      desc: ``,
    },
   
  ];

  

  const mapStyles = {
    height: "500px",
    width: "100%",
  };

  return (
    <div className="flex h-screen  ">
        <Sidebar
        active="My Trips"
        isSubSidebarOpen={isSubSidebarOpen}
        setIsSubSidebarOpen={setIsSubSidebarOpen}
        subSidebarState={subSidebarState}
        setSubSidebarState={setSubSidebarState}
      />
      <div className="flex flex-col w-full bg-[#D9D9D9] bg-opacity-20 z-[10000] ">
        <TopNavbar />
        <div className='flex justify-between'>
              <div className="w-[100%] pt-8 overflow-x-auto gap-6">
                  <TabBar data={data} />
              </div>
             
          </div>
        <div className="container mx-4  overflow-hidden">
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          <h1 className="text-3xl font-poppins font-extrabold text-[#2AB57D] mb-6">Attractions in Sri Lanka</h1>
          <div className="relative flex w-full gap-2 md:w-max rounded-full mr-10">
            <Input
                type="search"
                id="search-input"
                label="Search for a place..."
                className="pr-20 rounded-full style-none"
                containerProps={{
                    className: "min-w-[288px]",
                }}
            />
            <Button size="sm" className="!absolute right-1 top-1 rounded-full bg-[#57CC99] hover:shadow-none active:shadow-none">
                <MagnifyingGlassIcon className="h-4 w-4" />
            </Button>
        </div>
        </div>
        <div className="overflow-y-auto h-[calc(100vh-150px)] mr-4" style={{ scrollbarWidth: 'none' }}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
            {searchResults.map((result) => (
              <div
              key={result.place_id}

              className="bg-white p-4 rounded-lg shadow border relative"
            >
            <div className="flex items-center justify-center mb-2">
            {result.photos && result.photos.length > 0 ? (
              <img
                src={`${result.photos[0].getUrl()}`}
                alt={`${result.name} - Photo`}
                className="w-full h-44 rounded-md object-cover"
              />
            ) : (
              <img
                src="/main/no_image_available.jpeg" // Provide the path to your default image
                alt="Default Image"
                className="rounded-xl sm:w-56 w-full h-44 sm:m-2 m-4 cursor-pointer"
              />
            )}
          </div>
          <h2 className="text-xl font-semibold mb-2">{result.name}</h2>
                <p className="mb-2">Address: {result.formatted_address}</p>
                <div className="flex items-center mb-2">
                <span className="mr-2 flex flex-row gap-1 justify-center">{result.rating.toFixed(1)}<StarIcon  className="w-4 h-4 strok-yellow"/></span>
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-4 w-4 text-yellow-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="ml-1 text-sm text-gray-500">
                    ({result.rating}  reviews)
                  </span>
                  <div className="absolute bottom-2 right-2">
                    <Button className="bg-green"  onClick={() => handleAddSearchedAttraction(result)}>Add</Button>
                  </div>
                
                </div>
                  </div>
                  </div>
                ))
             }
              {loading ? (
                <p>Loading...</p>
              ) : (
                attractions.map((attraction) => (
                  <div
                    key={attraction.place_id}

                    className="bg-white p-4 rounded-lg shadow border relative"
                  >
                  <div className="flex items-center justify-center mb-2">
                  {attraction.photos && attraction.photos.length > 0 ? (
                    <img
                      src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${attraction.photos[0].photo_reference}&key=AIzaSyACalhnjQdYpaOrtk1JxGkJWqV8iNW-CLA`}
                      alt={`${attraction.name} - Photo`}
                      className="w-full h-44 rounded-md object-cover"
                    />
                  ) : (
                    <img
                      src="/main/no_image_available.jpeg" // Provide the path to your default image
                      alt="Default Image"
                      className="rounded-xl sm:w-56 w-72 h-36 sm:m-2 m-4 cursor-pointer"
                    />
                  )}
                </div>
                <h2 className="text-xl font-semibold mb-2">{attraction.name}</h2>
                <p className="mb-2">Address: {attraction.formatted_address}</p>
                <div className="flex items-center mb-2">
                <span className="mr-2 flex flex-row gap-1 justify-center">{attraction.rating.toFixed(1)}<StarIcon  className="w-4 h-4 strok-yellow"/></span>
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-4 w-4 text-yellow-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="ml-1 text-sm text-gray-500">
                    ({attraction.rating}  reviews)
                  </span>
                  <div className="absolute bottom-2 right-2">
                    <Button className="bg-green"  onClick={() => handleAddAttraction(attraction)}>Add</Button>
                  </div>
                
                </div>
                  </div>
                  </div>
                ))
              )}
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Attractions