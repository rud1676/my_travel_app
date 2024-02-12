"use client";

import { useRef, useEffect, useState } from "react";
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

import googleMapApi from "@/api/googleMap";
import { GoogleMapAPIKey } from "@/util/keys";

const libraries = ["places"];

const MapSearchComponent = ({
  form,
  setForm,
  readonly,
  setMapOpen,
  onMapClick,
  onPlaceChanged,
}) => {
  const [position, setPosition] = useState({ lat: 37.5665, lng: 126.978 });
  const [center, setCenter] = useState({ lat: 37.5665, lng: 126.978 });
  useEffect(() => {
    if (form?.location) {
      setPosition({
        lat: form.location.coordinates[0],
        lng: form.location.coordinates[1],
      });
      setCenter({
        lat: form.location.coordinates[0],
        lng: form.location.coordinates[1],
      });
    }
  }, []);

  const searchBoxRef = useRef();

  return (
    <LoadScript googleMapsApiKey={GoogleMapAPIKey} libraries={libraries}>
      <StandaloneSearchBox
        onLoad={(ref) => (searchBoxRef.current = ref)}
        onPlacesChanged={() => {
          if (readonly) return;
          onPlaceChanged(searchBoxRef, setPosition, setForm);
        }}
      >
        <div className={styles.mapWrapper}>
          <Box
            className={styles.headerButton}
            onClick={() => {
              setMapOpen(false);
            }}
          >
            <Image width={17} height={29} src={ArrowBack.src} alt="뒤로가기" />
          </Box>
          <input
            readOnly={readonly}
            type="text"
            placeholder="Search location"
            className={styles.searchLocationInput}
            value={form?.locationName ? form?.locationName : ""}
            onChange={(e) => {
              setForm((prev) => {
                const temp = JSON.parse(JSON.stringify(prev));
                temp.locationName = e.target.value;
                return temp;
              });
            }}
          />
        </div>
      </StandaloneSearchBox>
      <GoogleMap
        options={{ mapTypeControl: false }}
        center={center}
        zoom={15}
        mapContainerStyle={{
          position: "fixed",
          width: "100%",
          height: "100vh",
        }}
        onClick={(e) => {
          const latitude = e.latLng.lat();
          const longitude = e.latLng.lng();
          setPosition({
            lat: latitude,
            lng: longitude,
          });
          setForm((prev) => {
            const temp = JSON.parse(JSON.stringify(prev));
            temp.location = {
              lat: latitude,
              lng: longitude,
            };
            return temp;
          });
          onMapClick(e);
        }}
      >
        {position && <Marker position={position} />}
      </GoogleMap>
    </LoadScript>
  );
};

const GoogleMapComponent = ({
  setMapOpen,
  mapOpen,
  readonly,
  onMapClick,
  onPlaceChanged,
  setForm,
  form,
}) => {
  const mapRef = useRef();
  useEffect(() => {
    if (mapOpen) mapRef.current.style.display = "block";
    else mapRef.current.style.display = "none";
  }, [mapOpen, mapRef]);

  return (
    <div ref={mapRef} className={styles.mapContainer}>
      <MapSearchComponent
        form={form}
        setForm={setForm}
        readonly={readonly}
        setMapOpen={setMapOpen}
        onMapClick={onMapClick}
        onPlaceChanged={onPlaceChanged}
      />
    </div>
  );
};

export default GoogleMapComponent;
