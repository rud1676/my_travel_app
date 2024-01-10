export const APIKEY = "AIzaSyBYIrcjDQiA_E0vMdTXc-u7TMs50l2E1xM";
const FetchUrl = (point) =>
  `https://maps.googleapis.com/maps/api/geocode/json?latlng=${point.latitude},${point.longitude}&key=${APIKEY}`;

const googleMapApi = {
  resData: async (point) => {
    const res = await fetch(FetchUrl(point));
    return res.json();
  },
};

export default googleMapApi;
