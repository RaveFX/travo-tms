import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';

function Map() {
  const { id } = useParams();
  const [hotels, setHotels] = useState([]);
  const [activities,setActivities]=useState([]);
  const [attractions, setAttractions] = useState([]);

  useEffect(() => {
    loadHotels();
  }, []);

  const loadHotels = async () => {
    try {
      const result = await axios.get(`http://localhost:8080/api/v1/trip/selectedHotelListForMap/${id}`)
      setHotels(result.data);
    } catch (error) {
      console.error('Error loading hotels:', error);
    }
  };

  useEffect(() => {
    loadActivities();
  }, []);

  const loadActivities = async () => {
    try {
      const result = await axios.get(`http://localhost:8080/api/v1/trip/selectedActivityListForMap/${id}`)
      setActivities(result.data);
    } catch (error) {
      console.error('Error loading activities:', error);
    }
  };

  useEffect(() => {
    loadAttractions();
  }, []);

  const loadAttractions = async () => {
    try {
      const result = await axios.get(`http://localhost:8080/api/v1/trip/selectedAttractionListForMap/${id}`)
      setAttractions(result.data);
    } catch (error) {
      console.error('Error loading attractions:', error);
    }
  };
  return (
    <div className="flex flex-col m-5 gap-1 p-5 w-[420px] h-[600px] bg-white rounded-lg shadow-lg z-[1000]">
      <div className="p-1 m-0 h-full">
      <LoadScript googleMapsApiKey="AIzaSyACalhnjQdYpaOrtk1JxGkJWqV8iNW-CLA">
          <GoogleMap
            center={{ lat: 7.8731, lng: 80.7718 }} // Set your default center position here
            zoom={7.3} // Set your default zoom level here
            mapContainerStyle={{ width: '100%', height: '100%' }}
          >
            {hotels.map((hotel, index) => (
              <Marker
                key={index}
                position={{ lat: parseFloat(hotel.latitude), lng: parseFloat(hotel.longitude) }}
                label={{
                  text: hotel.hotel_name, // Display hotel name as a label on the marker
                  color: '#ffffff', // Text color
                  fontSize: '14px', // Font size
                  backgroundColor: '#007bff', // Background color
                  padding: '8px', // Padding around the label text
                  borderRadius: '4px', // Border radius
                }}
              />
            ))}
            {activities.map((activity, index) => (
              <Marker
                key={index}
                position={{ lat: parseFloat(activity.latitude), lng: parseFloat(activity.longitude) }}
                label={{
                  text: activity.company_name, // Display hotel name as a label on the marker
                  color: '#ffffff', // Text color
                  fontSize: '14px', // Font size
                  backgroundColor: '#007bff', // Background color
                  padding: '8px', // Padding around the label text
                  borderRadius: '4px', // Border radius
                }}
              />
            ))}
            {attractions.map((attraction, index) => (
              <Marker
                key={index}
                position={{ lat: parseFloat(attraction.latitude), lng: parseFloat(attraction.longitude) }}
                label={{
                  text: attraction.name, // Display hotel name as a label on the marker
                  color: '#ffffff', // Text color
                  fontSize: '14px', // Font size
                  backgroundColor: '#007bff', // Background color
                  padding: '8px', // Padding around the label text
                  borderRadius: '4px', // Border radius
                }}
              />
            ))}
          </GoogleMap>
        </LoadScript>
      
      </div>
    </div>
  );

  
}


export default Map;
