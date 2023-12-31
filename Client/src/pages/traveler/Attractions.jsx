import React, { useEffect, useState } from "react";
import Sidebar from "../../components/web-component/Sidebar";
import TopNavbar from "../../components/web-component/Navbar";
import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";
import { Rating, Button } from "@material-tailwind/react";
import axios from "axios";

function Attractions() {
  const [isSubSidebarOpen, setIsSubSidebarOpen] = useState(false);
  const [subSidebarState, setSubSidebarState] = useState(1);
  const [attractions, setAttractions] = useState([]);
  // const [kandy, setkandy] = useState([]);
  // const [galle, setGalle] = useState([]);
  // const [matara, setMatara] = useState([]);
  // const [trinco, setTrinco] = useState([]);
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
        setAttractions(attractionsData);
        setLoading(false); // Set loading to false after data is fetched  
      } catch (error) {
        console.error('Error fetching attractions: ', error);
        setLoading(false); // Set loading to false in case of an error
      }
    };

    fetchAttractions();
  }, []);

 

  

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
        <div className="container mx-auto p-8">
          <h1 className="text-3xl font-poppins font-extrabold text-[#2AB57D] mb-6">Attractions in Sri Lanka</h1>
          <div className="">
            <div className="flex sm:flex-row flex-wrap w-full overflow-y-auto xs:justify-center">
              {loading ? (
                <p>Loading...</p>
              ) : (
                attractions.map((attraction) => (
                  <div
                    key={attraction.place_id}

                    className="card card-compact rounded-xl  bg-white sm:w-60 w-86 h-96  sm:mx-6 my-2 relative shadow-xl  hover:bg-slate-100"
                  >
                  <figure>
                  {attraction.photos && attraction.photos.length > 0 ? (
                    <img
                      src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${attraction.photos[0].photo_reference}&key=AIzaSyACalhnjQdYpaOrtk1JxGkJWqV8iNW-CLA`}
                      alt={`${attraction.name} - Photo`}
                      className="rounded-xl sm:w-56 w-72 h-36 sm:m-2 m-4 cursor-pointer"
                    />
                  ) : (
                    <img
                      src="/main/no_image_available.jpeg" // Provide the path to your default image
                      alt="Default Image"
                      className="rounded-xl sm:w-56 w-72 h-36 sm:m-2 m-4 cursor-pointer"
                    />
                  )}
                </figure>
                  <div className="card-body mx-5 h-40">
                    <h2 className="text-lg font-semibold mb-2">{attraction.name}</h2>
                    <p>Address: {attraction.formatted_address}</p>
                    <p>Rating: {attraction.rating}</p>
                    
                  </div>  
                  <Button className="bg-green  ml-36">Add</Button>
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