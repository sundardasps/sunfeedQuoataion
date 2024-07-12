import {
    Autocomplete,
    GoogleMap,
    MarkerF,
    useJsApiLoader,
  } from "@react-google-maps/api";
import { useState } from "react";

function Location() {
    const [location, setLocation] = useState({
        lat: 48.856614,
        lng: 2.3522219,
      });
      const [currentLocation, setCurrentLocation] = useState({
        lat: 48.856614,
        lng: 2.3522219,
      });
      const [mapResult, setMapResult] =
        useState<google.maps.places.Autocomplete | null>(null);
      const [map, setMap] = useState<google.maps.Map | null>(null);
  return (
    <div>
      
    </div>
  )
}

export default Location
