import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import TopNavbar from '../../components/web-component/Navbar';
import { GoogleMap, LoadScript, Marker, useJsApiLoader } from '@react-google-maps/api';
import PlacesAutocomplete, {
  geocodeByLatLng,
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';

const containerStyle = {
  width: '100%',
  height: '500px',
};

const center = {
  lat: 7.8731,
  lng: 80.7718,
};



function ActivityAgentRegister() {
  const user_id = sessionStorage.getItem('user_id');
  let navigate = useNavigate();

  const [selectedPlace, setSelectedPlace] = useState(null);
  const [searchValue, setSearchValue] = useState('');
  const [markerPosition, setMarkerPosition] = useState(null);

  const [user, setUser] = useState({
    longitude: null,
    latitude: null,
    company_name: "",
    brn: "",
    contact_num: "",
    category: "",
  });
  const [errors, setErrors] = useState({});

  const {
    longitude,
    latitude,
    company_name,
    brn,
    contact_num,
    category,
  } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (markerPosition) {
      reverseGeocode(markerPosition);
    }
  }, [markerPosition]);

  const reverseGeocode = async (position) => {
    try {
      const { lat, lng } = position; // Destructure latitude and longitude from the position object
      const geocoder = new window.google.maps.Geocoder(); // Create a Geocoder instance from the Google Maps JavaScript API
      // Use the geocode method of the Geocoder instance to perform reverse geocoding
      geocoder.geocode({ location: { lat, lng } }, (results, status) => {
        if (status === 'OK' && results[0]) {// Check if the geocoding was successful and if there are results
          setSearchValue(results[0].formatted_address);// Update the searchValue with the formatted address
        } else {
          console.error('Reverse geocode failed with status:', status);
        }
      });
    } catch (error) {
      console.error('Error reverse geocoding:', error);
    }
  };

  const handlePlaceSelect = async (address) => {
    try {
      const results = await geocodeByAddress(address);
      const latLng = await getLatLng(results[0]);
      setSelectedPlace(latLng);
    } catch (error) {
      console.error('Error selecting place:', error);
    }
  };

  const handleMarkerDrag = (e) => {
    const newPosition = { lat: e.latLng.lat(), lng: e.latLng.lng() };
    setMarkerPosition(newPosition);

  // Update the user state with latitude and longitude
  setUser({ ...user, latitude: newPosition.lat, longitude: newPosition.lng });
  };

  const autocompleteServiceOptions = {
    componentRestrictions: { country: 'LK' },
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = {};

    if (!user.company_name) {
      validationErrors.company_name = "Company Name is required";
    }

    if (!user.brn) {
      validationErrors.brn = "BRN is required";
    } else if (!/^[0-9]{9}[A-Za-z]$/.test(user.brn)) {
      validationErrors.brn = "Invalid BRN format";
    }

    const res1 = await axios.get(
      `http://localhost:8080/api/v1/auth/checkBRN/${user.brn}`
    );
    if (res1.data.status === "Error") {
      validationErrors.brn = "BRN already exists";
    }
    console.log(res1);

    if (!user.contact_num) {
      validationErrors.contact_num = "Contact number is required";
    } else if (!/^[0-9]{10}$/.test(user.contact_num)) {
      validationErrors.contact_num = "Invalid contact number format";
    }

    if (!user.category) {
      validationErrors.category = "Category is required";
    }

    // if (!user.longitude) {
    //   validationErrors.longitude = "Longitude is required";
    // }

    // if (!user.latitude) {
    //   validationErrors.latitude = "Latitude is required";
    // }
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      await axios.post(
        `http://localhost:8080/api/v1/auth/register/activity_agent/${user_id}`,
        user
      );
      navigate("/register_success");
    }
  };

  return (
    <div className="py-1 sm:py-20">
    <TopNavbar />
      <div className="mx-auto grid max-w-9xl gap-x-8 gap-y-20 px-6 lg:px-0 lg:mr-20 xl:grid-cols-2">
        <div className="max-w-3xl">
          <div className="mx-auto max-w-2xl text-center">
            <div className="grid xl:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Activities
                </h2>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Input your information
                </h2>
              </div>
              <div>
                <p className="mt-2 text-sm leading-8 text-gray-600">
                  We need you to help us with some basic information for your
                  account creation. Here are our terms and conditins. Please
                  read them carefully.
                </p>
              </div>
            </div>
          </div>
          <form
            className="mx-auto mt-16 max-w-xl sm:mt-20"
            onSubmit={(e) => onSubmit(e)}
          >
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 mt-10">
              <div>
                <label
                  htmlFor="company_name"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Company name
                </label>
                {errors.company_name && (
                  <p className="text-red-500">{errors.company_name}</p>
                )}
                <div className="mt-2.5">
                  <input
                    type="text"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    name="company_name"
                    value={company_name}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="brn"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  BRN
                </label>
                {errors.brn && <p className="text-red-500">{errors.brn}</p>}
                <div className="mt-2.5">
                  <input
                    type="text"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    name="brn"
                    value={brn}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 mt-5">
              <div>
                <label
                  htmlFor="contact_num"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Contact number
                </label>
                {errors.contact_num && (
                  <p className="text-red-500">{errors.contact_num}</p>
                )}
                <div className="mt-2.5">
                  <input
                    type="text"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    name="contact_num"
                    value={contact_num}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="category"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Category
                </label>
                {errors.category && (
                  <p className="text-red-500">{errors.category}</p>
                )}
                <div className="mt-2.5">
                  <select
                    name="category"
                    value={category}
                    onChange={(e) => onInputChange(e)}
                    className="block w-full rounded-md border-0 px-3.5 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  >
                    <option>{category}</option>
                    <option value="Safari">Safari</option>
                    <option value="Elephant Orphanage">
                      Elephant Orphanage
                    </option>
                    <option value="Whales and Dolphins watching">
                      Whales and Dolphins watching
                    </option>
                    <option value="Tours">Tours</option>
                    <option value="Boat Tours">Boat Tours</option>
                    <option value="Surfing">Surfing</option>
                    <option value="Arts and Crafts">Arts and Crafts</option>
                    <option value="Yoga">Yoga</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="border-b border-gray-900/10 pb-12"></div>
            <div className="relative mt-10">
          <label htmlFor="location" className="block text-sm font-semibold leading-6 text-gray-900">
            Location
          </label>
          <LoadScript
            googleMapsApiKey="AIzaSyACalhnjQdYpaOrtk1JxGkJWqV8iNW-CLA"
            libraries={['places']}
          >
          <PlacesAutocomplete
          value={searchValue}
          onChange={setSearchValue}
          onSelect={handlePlaceSelect}
          autocompleteService={autocompleteServiceOptions}
        >
          {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
            <div>
              <input
                {...getInputProps({
                  placeholder: 'Search for a location...',
                  className: 'location-search-input',
                })}
              style={{width:"500px"}}/>
              <div className="autocomplete-dropdown-container">
                {loading && <div>Loading...</div>}
                {suggestions.map((suggestion) => {
                  const className = suggestion.active
                    ? 'suggestion-item--active'
                    : 'suggestion-item';
                  return (
                    <div
                      {...getSuggestionItemProps(suggestion, {
                        className,
                      })}
                    >
                      <span>{suggestion.description}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </PlacesAutocomplete>
         
        <GoogleMap
        mapContainerStyle={containerStyle}
        center={selectedPlace || center}
        zoom={8}
      >
        {selectedPlace && (
          <Marker
            position={selectedPlace}
            draggable={true}
            onDragEnd={handleMarkerDrag}
          />
        )}
      </GoogleMap>
          </LoadScript>
        </div>
            

            

            <div className="mt-10">
              <button
                type="submit"
                className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Register
              </button>
            </div>
          </form>
        </div>
        <div className="lg:fixed top-0 right-0 mt-20 max-w-3xl">
          <img className="" src="/main/activity_register.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default ActivityAgentRegister;
