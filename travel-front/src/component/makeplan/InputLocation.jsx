"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import SearchIcon from "@mui/icons-material/Search";
import {
  GoogleMap,
  LoadScript,
  Marker,
  StandaloneSearchBox,
} from "@react-google-maps/api";

import ArrowBack from "@/assets/img/Arrow_Back.svg";
import { HeaderBackButton } from "@/app/(main)/(home)/home.style";
import {
  InputTitleWrapper,
  LocationInputBox,
  InputLable,
  LocationText,
} from "@/app/plandetail/style";
import googleMapApi, { APIKEY } from "@/api/googleMap";

import { Pretendard_Regular } from "@/assets/fonts/fonts";

const libraries = ["places"];

const MapSearchComponent = ({
  mapRef,
  onMapClick,
  setFormLocationName,
  formLocationName,
  setFormLocation,
  setImgsrc,
  setMapOpen,
  mapOpen,
  setPhoneNumber,
}) => {
  useEffect(() => {
    if (mapOpen) mapRef.current.style.display = "block";
    else mapRef.current.style.display = "none";
  }, [mapOpen, mapRef]);

  const [center, setCenter] = useState({ lat: 37.5665, lng: 126.978 }); // Initial position (Seoul for this example)
  const [position, setPosition] = useState(null);
  const searchBoxRef = useRef();

  const onPlacesChanged = () => {
    const place = searchBoxRef.current.getPlaces()[0];
    if (place.international_phone_number) {
      setPhoneNumber(place.international_phone_number);
    }
    if (place && place.geometry && place.geometry.location) {
      setPosition({
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng(),
      });
      setCenter({
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng(),
      });
      const addr = place.formatted_address;
      if (place.photos) {
        console.log(place.photos);

        setImgsrc(place.photos[0].getUrl());
      }

      setFormLocationName(addr);
      const temp = {
        latitude: place.geometry.location.lat(),
        longitude: place.geometry.location.lng(),
      };
      setFormLocation(temp);
    }
  };

  return (
    <LoadScript googleMapsApiKey={APIKEY} libraries={libraries}>
      <StandaloneSearchBox
        onLoad={(ref) => (searchBoxRef.current = ref)}
        onPlacesChanged={onPlacesChanged}
      >
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
          <HeaderBackButton
            onClick={() => {
              setMapOpen(false);
            }}
          >
            <Image width={17} height={29} src={ArrowBack.src} alt="" />
          </HeaderBackButton>
          <input
            type="text"
            placeholder="Search location"
            style={{
              width: `calc(100% - 77px)`,
              borderRadius: "10px",
              background: "#E2E2E2",
              boxShadow: "0px 2px 1px 0px rgba(0, 0, 0, 0.25) inset",
            }}
            value={formLocationName}
            onChange={(e) => {
              setFormLocationName(e.target.value);
            }}
          />
        </div>
      </StandaloneSearchBox>
      <GoogleMap
        options={{ mapTypeControl: false }}
        center={center}
        onClick={(e) => {
          const { latLng } = e;
          const latitude = latLng.lat();
          const longitude = latLng.lng();
          setPosition({
            lat: latitude,
            lng: longitude,
          });
          onMapClick(e);
        }}
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

const InputDetailTitle = ({
  formLocationName,
  setFormLocationName,
  setPhoneNumber,
  setFormLocation,
  setImgsrc,
  setMapOpen,
  mapOpen,
}) => {
  const mapRef = useRef();

  const onMapClick = async (event) => {
    const { latLng } = event;
    const latitude = latLng.lat();
    const longitude = latLng.lng();

    const data = await googleMapApi.resData({ latitude, longitude });
    if (data.results && data.results.length > 0) {
      setFormLocationName(data.results[0].formatted_address);

      if (data.results[0].photos) {
        setImgsrc(data.results[0].photos[0].getUrl());
      }
      const temp = { latitude, longitude };
      setFormLocation(temp);
    }
  };
  useEffect(() => {
    if (mapOpen) mapRef.current.style.display = "block";
    else mapRef.current.style.display = "none";
  }, [mapOpen, mapRef]);
  return (
    <InputTitleWrapper>
      <InputLable className={Pretendard_Regular.className}>장소</InputLable>
      <LocationInputBox
        // eslint-disable-next-line
        onClick={(_) => {
          setMapOpen(true);
        }}
      >
        <SearchIcon />
        <LocationText>
          {formLocationName.length >= 10
            ? `${formLocationName.slice(0, 15)}...`
            : formLocationName}
        </LocationText>
      </LocationInputBox>
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
          setPhoneNumber={setPhoneNumber}
          mapOpen={mapOpen}
          setMapOpen={setMapOpen}
          setImgsrc={setImgsrc}
          onMapClick={onMapClick}
          formLocationName={formLocationName}
          setFormLocationName={setFormLocationName}
          setFormLocation={setFormLocation}
          mapRef={mapRef}
        />
      </div>
    </InputTitleWrapper>
  );
};

export default InputDetailTitle;
