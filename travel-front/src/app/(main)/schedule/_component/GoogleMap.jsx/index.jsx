"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";

import styles from "./googlemap.module.css";
import { Box } from "@mui/material";

import {
  GoogleMap,
  LoadScript,
  Marker,
  StandaloneSearchBox,
} from "@react-google-maps/api";
import ArrowBack from "@/assets/img/Arrow_Back.svg";

const libraries = ["places"];

const MapSearchComponent = ({
  placeName,
  location,
  mapRef,
  setMapOpen,
  mapOpen,
}) => {
  useEffect(() => {
    if (mapOpen) mapRef.current.style.display = "block";
    else mapRef.current.style.display = "none";
  }, [mapOpen, mapRef]);

  const position = {
    lat: location.coordinates[0],
    lng: location.coordinates[1],
  };

  const searchBoxRef = useRef();

  return (
    <LoadScript
      googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}
      libraries={libraries}
    >
      <StandaloneSearchBox onLoad={(ref) => (searchBoxRef.current = ref)}>
        <div className={styles.mapWrapper}>
          <Box
            className={styles.headerButton}
            onClick={() => {
              setMapOpen(false);
            }}
          >
            <Image width={17} height={29} src={ArrowBack.src} alt="" />
          </Box>
          <input
            readOnly
            type="text"
            placeholder="Search location"
            className={styles.searchLocationInput}
            value={placeName}
          />
        </div>
      </StandaloneSearchBox>
      <GoogleMap
        options={{ mapTypeControl: false }}
        center={position}
        zoom={15}
        mapContainerStyle={{
          position: "fixed",
          width: "100%",
          height: "100vh",
        }}
      >
        {position && <Marker position={position} />}
      </GoogleMap>
    </LoadScript>
  );
};

const GoogleMapComponent = ({ location, setMapOpen, placeName, mapOpen }) => {
  const mapRef = useRef();

  useEffect(() => {
    if (mapOpen) mapRef.current.style.display = "block";
    else mapRef.current.style.display = "none";
  }, [mapOpen, mapRef]);

  return (
    <div ref={mapRef} className={styles.mapContainer}>
      <MapSearchComponent
        location={location}
        placeName={placeName}
        mapOpen={mapOpen}
        setMapOpen={setMapOpen}
        mapRef={mapRef}
      />
    </div>
  );
};

export default GoogleMapComponent;
