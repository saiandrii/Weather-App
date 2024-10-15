import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useContext, useState } from "react";
import { MapPinIcon } from "react-native-heroicons/solid";
import { fetchForecast } from "../api/weather";
import { storeData } from "../AsyncStorage";
import { WeatherContext } from "../context/AppContext";

const LocationItem = ({ item, index }) => {
  const { places, setPlaces } = useContext(WeatherContext);
  const { searchToggle, setSearchToggle } = useContext(WeatherContext);
  const { weather, setWeather } = useContext(WeatherContext);

  const handleLocation = (item) => {
    setPlaces([]);
    setSearchToggle(false);
    fetchForecast({ cityName: item.name, days: "7" }).then((data) => {
      setWeather(data);
      storeData("city", item.name);
    });
  };
  return (
    <TouchableOpacity
      onPress={() => handleLocation(item)}
      key={index}
      style={{
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 15,
        marginVertical: 10,
        padding: 3,
      }}
    >
      <MapPinIcon size="20" color="grey" />
      <Text style={{ fontSize: 15, paddingLeft: 5 }}>
        {item?.name}, {item?.country}
      </Text>
    </TouchableOpacity>
  );
};

export default LocationItem;

const styles = StyleSheet.create({});
