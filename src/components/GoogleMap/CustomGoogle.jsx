import { GoogleMap, LoadScript } from "@react-google-maps/api";
import React from "react";
import styles from "./custom.module.css";

const center = {
  lat: -3.745,
  lng: -38.523,
};

const containerStyle = {
  width: "500px",
  height: "200px",
  borderRadius: "30px",
  marginRight: "20px",

};

const CustomGoogle = () => {
  return (
    <>
      <LoadScript>
  
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
        ></GoogleMap>
      </LoadScript>
    </>
  );
};
export default CustomGoogle;
