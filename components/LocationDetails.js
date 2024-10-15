import { Image, StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { WeatherContext } from "../context/AppContext";
import { weatherImages } from "../images";

const LocationDetails = () => {
  const { weather, setWeather } = useContext(WeatherContext);

  const { current, location } = weather;

  return (
    <>
      <View
        style={{
          marginBottom: 2,
          bottom: "50%",
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            color: "white",
            fontSize: 25,
            textAlign: "center",
          }}
        >
          {location?.name}
        </Text>
        <Text
          style={{
            fontWeight: "bold",
            color: "lightgrey",
            fontSize: 20,
            textAlign: "center",
          }}
        >
          {location?.country}
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            paddingTop: 10,
            paddingBottom: 10,
          }}
        >
          <Image
            source={weatherImages[current?.condition?.text]}
            style={{ width: 132, height: 132 }}
          />
        </View>
        <View style={{}}>
          <Text
            style={{
              textAlign: "center",
              fontWeight: "bold",
              color: "white",
              fontSize: 35,
              paddingTop: 10,
            }}
          >
            {current?.temp_c}&#176;
          </Text>
          <Text
            style={{
              textAlign: "center",
              fontWeight: "bold",
              color: "white",
              fontSize: 15,
              paddingTop: 5,
            }}
          >
            {current?.condition?.text}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",

            justifyContent: "space-around",
            paddingTop: 20,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../assets/wind.png")}
              style={{ width: 20, height: 20 }}
            />
            <Text
              style={{ paddingLeft: 10, color: "white", fontWeight: "400" }}
            >
              {current?.wind_kph} km
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../assets/drop.png")}
              style={{ width: 20, height: 20 }}
            />
            <Text
              style={{ paddingLeft: 10, color: "white", fontWeight: "400" }}
            >
              {current?.humidity}%
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../assets/sun.png")}
              style={{ width: 20, height: 20 }}
            />
            <Text
              style={{ paddingLeft: 10, color: "white", fontWeight: "400" }}
            >
              {weather?.forecast?.forecastday[0]?.astro?.sunrise}
            </Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default LocationDetails;

const styles = StyleSheet.create({});
