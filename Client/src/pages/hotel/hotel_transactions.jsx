import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker, useJsApiLoader } from '@react-google-maps/api';
import PlacesAutocomplete, {
  geocodeByLatLng,
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';

const containerStyle = {
  width: '500px',
  height: '500px',
};

const center = {
  lat: 7.8731,
  lng: 80.7718,
};

export default function Hotel_transactions() {
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [searchValue, setSearchValue] = useState('');
  const [markerPosition, setMarkerPosition] = useState(null);

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
    setMarkerPosition({ lat: e.latLng.lat(), lng: e.latLng.lng() });
  };

  const autocompleteServiceOptions = {
    componentRestrictions: { country: 'LK' },
  };

  return (
    <div className="App">
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
  );
}
