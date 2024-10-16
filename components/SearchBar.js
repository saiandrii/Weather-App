import {
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useCallback, useContext } from "react";
import { colors } from "../colors";
import { WeatherContext } from "../context/AppContext";
import { MagnifyingGlassIcon } from "react-native-heroicons/outline";
import LocationItem from "./LocationItem";
import { debounce } from "lodash";
import { fetchLocations } from "../api/weather";

const SearchBar = () => {
  const windowHeight = Dimensions.get("screen").height;

  const { searchToggle, setSearchToggle } = useContext(WeatherContext);
  const { places, setPlaces } = useContext(WeatherContext);
  const handleSearch = (value) => {
    if (value.length > 2) {
      fetchLocations({ cityName: value }).then((data) => {
        setPlaces(data);
      });
    }
  };

  const handleTextDebounce = useCallback(debounce(handleSearch, 1200), []);

  return (
    <View
      style={{
        height: windowHeight > 700 ? "75%" : "65%",
        zIndex: 50,
        paddingTop: 10,
        paddingHorizontal: 10,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          height: 45,
          alignItems: "center",
          borderRadius: 50,
          backgroundColor: searchToggle ? colors.search(0.2) : "transparent",
          justifyContent: searchToggle ? "space-between" : "flex-end",
          paddingRight: 3,
        }}
      >
        {searchToggle ? (
          <TextInput
            onChangeText={handleTextDebounce}
            placeholder="Search city"
            placeholderTextColor={"lightgrey"}
            style={{ paddingLeft: 15, color: "white" }}
            maxLength={80}
          />
        ) : null}

        <TouchableOpacity
          onPress={() => setSearchToggle(!searchToggle)}
          style={{
            backgroundColor: colors.search(0.3),
            borderRadius: 50,
            height: 40,
            width: 40,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <MagnifyingGlassIcon size="23" color="white" />
        </TouchableOpacity>
      </View>
      {places.length > 0 && searchToggle ? (
        <View
          style={{
            position: "absolute",
            width: "100%",
            left: 10,
            backgroundColor: "#d0ccd4",
            marginTop: 65,
            borderRadius: 30,
          }}
        >
          {places.map((item, index) => {
            return <LocationItem item={item} index={index} />;
          })}
        </View>
      ) : null}
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({});
