import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useContext } from "react";
import { CalendarDaysIcon } from "react-native-heroicons/solid";
import { WeatherContext } from "../context/AppContext";
import { weatherImages } from "../images";
import { colors } from "../colors";

const Forecast = () => {
  const windowHeight = Dimensions.get("screen").height;
  const { weather, setWeather } = useContext(WeatherContext);

  return (
    <View
      style={{
        marginBottom: 2,
        bottom: windowHeight > 700 ? "50%" : "53%",
        paddingLeft: 20,
        paddingTop: 50,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginHorizontal: 5,
          paddingBottom: 15,
        }}
      >
        <CalendarDaysIcon size="22" color="white" />
        <Text style={{ color: "white", paddingLeft: 10 }}>Daily forecast</Text>
      </View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{}}
      >
        {weather?.forecast?.forecastday?.map((item, index) => {
          let date = new Date(item.date);
          let options = { weekday: "long" };
          let dayName = date.toLocaleDateString("en-US", options);

          return (
            <View
              key={index}
              style={{
                marginRight: 20,
                backgroundColor: colors.search(0.15),
                justifyContent: "center",
                alignItems: "center",

                borderRadius: 18,
                padding: 10,
              }}
            >
              <Image
                source={weatherImages[item?.day?.condition?.text]}
                style={{ width: 50, height: 50 }}
              />
              <Text style={{ color: "white" }}>{dayName}</Text>
              <Text style={{ color: "white", fontWeight: "400", fontSize: 18 }}>
                {item?.day?.avgtemp_c}&#176;
              </Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Forecast;

const styles = StyleSheet.create({});
