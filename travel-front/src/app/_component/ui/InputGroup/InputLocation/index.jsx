"use client";

import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

import { Box } from "@mui/material";
import styles from "./inputlocation.module.css";
import GoogleMap from "@/app/_component/common/GoogleMap";

import googleMapApi from "@/api/googleMap";

const InputDetailTitle = ({ setMapOpen, mapOpen, setForm, form }) => {
  const [placeName, setPlaceName] = useState("");

  const onMapClick = async (event) => {
    const { latLng } = event;
    const latitude = latLng.lat();
    const longitude = latLng.lng();
    const data = await googleMapApi.resData({ latitude, longitude });
    if (data.results[0]) {
      setPlaceName(data.results[0].formatted_address);
      let photo = "";
      if (data.results[0].photos) photo = data.results[0]?.photos[0].getUrl();
      const temppoint = { lat: latitude, lng: longitude };
      setForm((prev) => {
        const temp = JSON.parse(JSON.stringify(prev));

        temp.locationName = data.results[0].formatted_address;
        temp.photo = photo;
        temp.location = temppoint;
        console.log(temp);

        return temp;
      });
    }
  };

  const onPlacesChanged = (searchBoxRef, setPosition, setForm) => {
    const place = searchBoxRef.current.getPlaces()[0];
    if (!place) return;
    const phoneNumber = place?.international_phone_number;
    const address = place?.formatted_address;
    setPlaceName(address);
    setForm((prev) => {
      const temp = JSON.parse(JSON.stringify(prev));
      temp.locationName = address;
      return temp;
    });
    let photo = "";
    if (place.photos) photo = place.photos[0].getUrl();
    const pos = {
      lat: place.geometry.location.lat(),
      lng: place.geometry.location.lng(),
    };
    setPosition(pos);
    setForm((prev) => {
      const temp = JSON.parse(JSON.stringify(prev));
      temp.locationName = address;
      temp.location = pos;
      temp.photo = photo;
      temp.phone = phoneNumber;
      console.log(temp);
      return temp;
    });
  };

  // location,  placeName,
  return (
    <Box className={styles.inputTitleWrapper}>
      <p className={styles.inputLable}>장소</p>
      <Box
        className={styles.locationInputBox}
        // eslint-disable-next-line
        onClick={() => {
          setMapOpen(true);
        }}
      >
        <SearchIcon />
        {placeName && (
          <p className={styles.locationText}>
            {placeName.length >= 15
              ? `${placeName.slice(0, 15)}...`
              : placeName}
          </p>
        )}
      </Box>
      <GoogleMap
        setMapOpen={setMapOpen}
        mapOpen={mapOpen}
        form={form}
        setForm={setForm}
        onPlaceChanged={onPlacesChanged}
        onMapClick={onMapClick}
      />
    </Box>
  );
};

export default InputDetailTitle;
