export const APIKEY = "AIzaSyCcH7dm5y1_YuHJXFPrclQy_SPH9P6Lx2U";
const FetchUrl = (point) =>
  `https://maps.googleapis.com/maps/api/geocode/json?latlng=${point.latitude},${point.longitude}&key=${APIKEY}`;

const googleMapApi = {
  resData: async (point) => {
    const res = await fetch(FetchUrl(point));
    return res.json();
  },
};

export default googleMapApi;
