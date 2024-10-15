import axios from "axios";

import { apikey } from "./APIKEY";

const forecast = (props) =>
  `https://api.weatherapi.com/v1/forecast.json?key=${apikey}&q=${props.cityName}&days=${props.days}&aqi=no&alerts=no`;
const locations = (props) =>
  `https://api.weatherapi.com/v1/search.json?key=${apikey}&q=${props.cityName}`;
const apiCall = async (endpoint) => {
  const options = { method: `GET`, url: endpoint };
  try {
    const response = await axios.request(options);
    return response.data;
  } catch (e) {
    console.log(e);
    return null;
  }
};

export const fetchForecast = (params) => {
  return apiCall(forecast(params));
};
export const fetchLocations = (params) => {
  return apiCall(locations(params));
};
