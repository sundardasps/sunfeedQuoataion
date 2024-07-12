import React, { useState } from "react";
import { Map, Marker } from "@vis.gl/react-google-maps";
import FormTitle from "./FormTitle";
import InputLabel from "./InputLabel";
import InputField from "./InputField";
import { Button } from "flowbite-react";
import { Search } from "flowbite-react-icons/outline";
import { locationMarker } from "../../assets/index";
import FileUploade from "./FileUpload";
import { usePhotoGallery } from "../../hooks/usePhotoGallery";
import Camera from "./Camera";

const isValidLatLng = (value, min, max) => {
  const num = parseFloat(value);
  return !isNaN(num) && num >= min && num <= max;
};

const GoogleMap = () => {
  const [markerLocation, setMarkerLocation] = useState({
    lat: 51.509865,
    lng: -0.118092,
  });

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

  const { takePhoto } = usePhotoGallery();

  const take = () => {
    takePhoto();
  };

  return (
    <div className="justify-evenly space-y-5">
      <div className="w-full md:flex justify-between items-end">
        <div className="mb-2 md:mb-0 md:w-2/3">
          <div className="mb-2 block">
            <InputLabel label="Phone Number (Mobile)" />
          </div>
          <InputField />
        </div>
        <Button className="bg-[#65AC32] w-full md:w-auto" type="submit">
          <Search /> Get Location
        </Button>
      </div>
      <div className="md:flex gap-4 justify-between items-end">
        <div className="md:w-2/3">
          <div className="flex justify-start items-start gap-1">
            <img src={locationMarker} alt="icon" />
            <InputLabel label="Latitude" />
          </div>
          <InputField
            value={markerLocation.lat}
            onChange={handleLatChange}
          />
        </div>
        <div className="md:w-2/3">
          <div className="flex justify-start items-start gap-1">
            <img src={locationMarker} alt="icon" />
            <InputLabel label="Longitude" />
          </div>
          <InputField
            value={markerLocation.lng}
            onChange={handleLngChange}
          />
        </div>
      </div>
      <div className="h-[300px] w-full rounded-md border">
        <Map
          style={{ borderRadius: "20px" }}
          defaultZoom={13}
          center={markerLocation}
          gestureHandling={"greedy"}
          mapTypeControl
        >
          <Marker position={markerLocation} />
        </Map>
      </div>
    </div>
  );
};

export default GoogleMap;
