import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState, useCallback, useEffect, useContext } from "react";
import { colors } from "../colors";

import { fetchForecast, fetchLocations } from "../api/weather";
import { weatherImages } from "../images";
import { getData, storeData } from "../AsyncStorage";

import { WeatherContext } from "../context/AppContext";
import SearchBar from "../components/SearchBar";
import LocationDetails from "../components/LocationDetails";
import Forecast from "../components/Forecast";

const HomeScreen = () => {
  const { weather, setWeather } = useContext(WeatherContext);

  useEffect(() => {
    fetchWeatherData();
  }, []);

  const fetchWeatherData = async () => {
    let city = await getData("city");
    let defaultCity = "London";
    if (city) defaultCity = city;
    fetchForecast({ cityName: defaultCity, days: "7" }).then((data) => {
      setWeather(data);
    });
  };
  return (
    <View style={{ flex: 1 }}>
      <StatusBar styles="light" />
      <Image
        blurRadius={70}
        source={require("../assets/cover.jpg")}
        style={styles.container}
      />
      <SafeAreaView style={{ flex: 1 }}>
        <SearchBar />
        <LocationDetails />
        <Forecast />
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: { width: "100%", height: "100%", position: "absolute" },
});
