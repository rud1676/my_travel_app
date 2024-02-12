import { GoogleMapAPIKey } from "@/util/keys";
const FetchUrl = (point) =>
  `https://maps.googleapis.com/maps/api/geocode/json?latlng=${point.latitude},${point.longitude}&key=${GoogleMapAPIKey}`;

const googleMapApi = {
  resData: async (point) => {
    const res = await fetch(FetchUrl(point));
    return res.json();
  },
};

export default googleMapApi;
