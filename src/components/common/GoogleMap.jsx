import React, { useEffect,useState } from "react";

import {
  Autocomplete,
  GoogleMap,
  MarkerF,
  useJsApiLoader,
} from "@react-google-maps/api";
import InputLabel from "./InputLabel";
import InputField from "./InputField";
import { Button, TextInput } from "flowbite-react";
import { Search } from "flowbite-react-icons/outline";
import { locationMarker } from "../../assets/index";
import ErrorMssgField from "./ErrorMssgField";
import { useSelector } from "react-redux";

const isValidLatLng = (value, min, max) => {
  const num = parseFloat(value);
  return !isNaN(num) && num >= min && num <= max;
};

const libraries = ["places", "drawing"]; 

const LocationMap = ({ location, setLocation, setFieldValue, errors,loading }) => {
  const data = useSelector((state) => state.proposalDetails);
  
  // -----------------------------------------------------------------------------//

  const [markerLocation, setMarkerLocation] = useState({
    lat: 51.509865,
    lng: -0.118092,
  });
  const [currentLocation, setCurrentLocation] = useState({
    lat: 48.856614,
    lng: 2.3522219,
  });

  const [mapResult, setMapResult] = useState(null);
  const [map, setMap] = useState(null);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    libraries: ["places", "drawing"],
  });

  const onPlaceChanged = () => {
    if (Object.keys(mapResult?.getPlace()).length === 1) return;
    const place = mapResult?.getPlace();
    const latitude = place?.geometry?.location?.lat();
    const longitude = place?.geometry?.location?.lng();
    console.log("Latitude", latitude);
    console.log("Longitude", longitude);

    setLocation({
      lat: latitude,
      lng: longitude,
    });
  };

  //-----------------------------------------------------------------------------//
  const handleLatChange = (e) => {
    const lat = e.target.value;
    if (isValidLatLng(lat, -90, 90)) {
      setMarkerLocation({ ...markerLocation, lat: parseFloat(lat) });
    }
  };

  const handleLngChange = (e) => {
    const lng = e.target.value;
    if (isValidLatLng(lng, -180, 180)) {
      setMarkerLocation({ ...markerLocation, lng: parseFloat(lng) });
    }
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
      setLocation({
        lat: latitude,
        lng: longitude,
      });
    });
  }, [data, setLocation]);

  useEffect(() => {
    if (location?.lat === 48.856614 && location?.lng === 2.3522219) return;
    setFieldValue("gps_tracker", [ location.lat, location.lng ]);
  }, [location,setFieldValue]);




  return (
    <div className="justify-evenly space-y-5">
    {isLoaded ? (
      <>
        <div className="w-full md:flex justify-between items-end">
          <div className="mb-2 md:mb-0 md:w-2/3">
            <div className="mb-2 block">
              <InputLabel label="Enter the address" />
            </div>
  
            <Autocomplete
              onPlaceChanged={onPlaceChanged}
              onLoad={(val) => {
                setMapResult(val);
              }}
              className="w-full"
            >
              <TextInput disabled={loading} />
            </Autocomplete>
          </div>
          <Button
            onClick={() => {
              setLocation(currentLocation);
              map?.panTo(currentLocation);
            }}
            disabled={loading}
            className="bg-[#65AC32] w-full md:w-auto"
          >
            <Search /> Get Location
          </Button>
        </div>
        <div className="md:flex gap-4 justify-between items-end">
          <div className="md:w-2/3">
            <div className="flex justify-start items-start gap-1">
              <img src={locationMarker} alt="icon" />
              <InputLabel label="Latitude"  />
            </div>
            <InputField disabled={loading} value={location?.lat} onChange={handleLatChange}  />
          </div>
          <div className="md:w-2/3">
            <div className="flex justify-start items-start gap-1">
              <img src={locationMarker} alt="icon" />
              <InputLabel label="Longitude" />
            </div>
            <InputField disabled={loading} value={location?.lng} onChange={handleLngChange} />
          </div>
        </div>
        {errors?.gps_tracker && (
          <ErrorMssgField errorMessage={errors?.gps_tracker} />
        )}
        <div className="relative h-[300px] w-full rounded-md">
          {loading && <div  className="absolute z-50 top-0 w-full h-full  opacity-20" />}
          <div
            id="print"
            className=" flex flex-1 flex-col h-[60%] md:h-full w-full "
          >
            <GoogleMap
              mapContainerStyle={{ width: "100%", height: "100%" }}
              center={location}
              zoom={20}
              onClick={(e) => {
                setLocation({
                  lat: e.latLng.lat(),
                  lng: e.latLng.lng(),
                });
              }}
              options={{
                zoomControl: false,
                fullscreenControl: false,
                keyboardShortcuts: false,
                mapTypeControl: false,
                streetViewControl: true,
                mapTypeId: "hybrid",
              }}
              onLoad={(map) => {
                setMap(map);
              }}
            >
              <MarkerF  position={location} />
            </GoogleMap>
          </div>
          <p className="text-sm font-bold ">(Please select your area with red mark.)</p>
        </div>
      </>
    ) : (
      <p>LOADING.....</p>
    )}
  </div>
  
  );
};

export default LocationMap;
