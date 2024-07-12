// src/components/PlaceSearchInput.js

import React, { useRef, useEffect } from 'react';

const PlaceSearchInput = ({ onPlaceSelected }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (window.google && inputRef.current) {
      const autocomplete = new window.google.maps.places.Autocomplete(inputRef.current);
      autocomplete.addListener('place_changed', () => {
        const place = autocomplete.getPlace();
        if (place.geometry) {
          onPlaceSelected({
            lat: place.geometry.location.lat(),
            lng: place.geometry.location.lng(),
          });
        }
      });
    }
  }, []);

  return (
    <input
      ref={inputRef}
      type="text"
      className="w-full p-2 border rounded"
      placeholder="Search for a place"
    />
  );
};

export default PlaceSearchInput;
