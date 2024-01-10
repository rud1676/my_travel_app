"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";

import {
  GoogleMap,
  LoadScript,
  Marker,
  StandaloneSearchBox,
} from "@react-google-maps/api";
import ArrowBack from "@/assets/img/Arrow_Back.svg";
import HomeStyle from "@/app/(main)/(home)/home.style";

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
      googleMapsApiKey="AIzaSyBl9pQdLUycOlg7QKL9CQoo_aK4yyw0hSA"
      libraries={libraries}
    >
      <StandaloneSearchBox onLoad={(ref) => (searchBoxRef.current = ref)}>
        <div
          style={{
            position: "absolute",
            display: "flex",
            zIndex: 99,
            width: "100%",
            height: "30px",
            marginTop: "57px",
          }}
        >
          <HomeStyle.HeaderBackButton
            onClick={() => {
              setMapOpen(false);
            }}
          >
            <Image width={17} height={29} src={ArrowBack.src} alt="" />
          </HomeStyle.HeaderBackButton>
          <input
            readOnly
            type="text"
            placeholder="Search location"
            style={{
              width: `calc(100% - 77px)`,
              borderRadius: "10px",
              background: "#E2E2E2",
              boxShadow: "0px 2px 1px 0px rgba(0, 0, 0, 0.25) inset",
            }}
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
    <div
      ref={mapRef}
      style={{
        position: "absolute",
        display: "none",
        width: "100vw",
        height: "100vh",
        zIndex: 99,
        top: 0,
        left: 0,
      }}
    >
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
