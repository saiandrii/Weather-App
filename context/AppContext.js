import { StyleSheet, Text, View } from "react-native";
import React, { createContext, useState } from "react";
const WeatherContext = createContext();
const AppProvider = ({ children }) => {
  const [places, setPlaces] = useState([]);
  const [searchToggle, setSearchToggle] = useState(false);
  const [weather, setWeather] = useState({});
  return (
    <WeatherContext.Provider
      value={{
        places,
        setPlaces,
        searchToggle,
        setSearchToggle,
        weather,
        setWeather,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export { WeatherContext, AppProvider };

const styles = StyleSheet.create({});
