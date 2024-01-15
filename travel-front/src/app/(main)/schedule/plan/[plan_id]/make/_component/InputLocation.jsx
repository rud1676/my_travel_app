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
import Make from "../make.style";
import googleMapApi, { APIKEY } from "@/api/googleMap";

import { Pretendard_Regular } from "@/assets/fonts/fonts";

const libraries = ["places"];

const MapSearchComponent = ({
  onMapClick,
  setMapOpen,
  setForm,
  addr,
  setAddr,
}) => {
  const [center, setCenter] = useState({ lat: 37.5665, lng: 126.978 }); // Initial position (Seoul for this example)
  const [position, setPosition] = useState(null);
  const searchBoxRef = useRef();

  const onPlacesChanged = () => {
    const place = searchBoxRef.current.getPlaces()[0];
    if (!place) return;
    const phoneNumber = place?.international_phone_number;
    const address = place?.formatted_address;
    setAddr(address);
    let photo = "";
    if (place.photos) photo = place.photos[0].getUrl();
    const pos = {
      lat: place.geometry.location.lat(),
      lng: place.geometry.location.lng(),
    };
    setPosition(pos);
    setCenter(pos);
    setForm((prev) => {
      const temp = JSON.parse(JSON.stringify(prev));

      temp.locationName = address;
      temp.location = pos;
      temp.photo = photo;
      temp.phone = phoneNumber;
      return temp;
    });
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
          <Make.BackButton
            onClick={() => {
              setMapOpen(false);
            }}
          >
            <Image width={17} height={29} src={ArrowBack.src} alt="" />
          </Make.BackButton>
          <input
            type="text"
            placeholder="Search location"
            style={{
              width: `calc(100% - 77px)`,
              borderRadius: "10px",
              background: "#E2E2E2",
              boxShadow: "0px 2px 1px 0px rgba(0, 0, 0, 0.25) inset",
            }}
            value={addr}
            onChange={(e) => {
              setAddr(e.target.value);
            }}
          />
        </div>
      </StandaloneSearchBox>
      <GoogleMap
        options={{ mapTypeControl: false }}
        center={center}
        onClick={(e) => {
          const latitude = e.latLng.lat();
          const longitude = e.latLng.lng();
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

const InputDetailTitle = ({ setMapOpen, mapOpen, setForm, form }) => {
  const mapRef = useRef();
  const [addr, setAddr] = useState("");

  const onMapClick = async (event) => {
    const { latLng } = event;
    const latitude = latLng.lat();
    const longitude = latLng.lng();
    const data = await googleMapApi.resData({ latitude, longitude });
    if (data.results[0]) {
      setAddr(data.results[0].formatted_address);
      let photo = "";
      if (data.results[0].photos) photo = data.results[0]?.photos[0].getUrl();
      const temppoint = { latitude, longitude };
      setForm((prev) => {
        const temp = JSON.parse(JSON.stringify(prev));

        temp.locationName = data.results[0].formatted_address;
        temp.photo = photo;
        temp.location = temppoint;
        return temp;
      });
    }
  };

  useEffect(() => {
    if (mapOpen) mapRef.current.style.display = "block";
    else mapRef.current.style.display = "none";
    setAddr(form.locationName);
  }, [mapOpen, form]);

  return (
    <Make.InputTitleWrapper>
      <Make.InputLable className={Pretendard_Regular.className}>
        장소
      </Make.InputLable>
      <Make.LocationInputBox
        // eslint-disable-next-line
        onClick={() => {
          setMapOpen(true);
        }}
      >
        <SearchIcon />
        {addr && (
          <Make.LocationText>
            {addr.length >= 15 ? `${addr.slice(0, 15)}...` : addr}
          </Make.LocationText>
        )}
      </Make.LocationInputBox>
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
          form={form}
          addr={addr}
          setAddr={setAddr}
          setForm={setForm}
          setMapOpen={setMapOpen}
          onMapClick={onMapClick}
        />
      </div>
    </Make.InputTitleWrapper>
  );
};

export default InputDetailTitle;
