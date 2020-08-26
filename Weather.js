import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { isBackgroundLocationAvailableAsync } from "expo-location";

const weatherOptions = {
  Clouds: {
    iconName: "ios-cloud",
    gradient: ["#bdc3c7", "#2c3e50"],
    title: "Even sky is filled with clouds,",
    subtitle: "the sun still shines above.",
  },
  Thunderstorm: {
    iconName: "ios-thunderstorm",
    gradient: ["#240b36", "#c31432"],
    title: "Thunderstorm above your head,",
    subtitle: "go back to your sweethome.",
  },
  Drizzle: {
    iconName: "md-rainy",
    gradient: ["#8360c3", "#2ebf91"],

    title: "Is this drizzle going to be",
    subtitle: "getting lighter or heavier?",
  },
  Rain: {
    iconName: "ios-rainy",
    gradient: ["#000046", "#1CB5E0"],

    title: "Some people feel the rain.",
    subtitle: "Others just get wet.",
  },
  Snow: {
    iconName: "md-snow",
    gradient: ["#DAE2F8", "#D6A4A4"],

    title: "Knock, knock",
    subtitle: "Do you wanna build a snowman?",
  },
  Atmosphere: {
    iconName: "ios-alert",
    gradient: ["#E55D87", "#5FC3E4"],

    title: "Something happens,",
    subtitle: "take a care",
  },
  Clear: {
    iconName: "md-sunny",
    gradient: ["#FBD786", "#f7797d"],

    title: "Let's enjoy the Clear day",
    subtitle: "how lovely it is",
  },
};

export default function Weather({ temp, condition }) {
  return (
    <LinearGradient
      style={styles.container}
      colors={weatherOptions[condition].gradient}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
        <Ionicons
          name={weatherOptions[condition].iconName}
          size={120}
          color="black"
          color="white"
        />
        <Text style={styles.temp}>{temp}°C</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.subtitle}>
          {weatherOptions[condition].subtitle}
        </Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Clear",
    "Clouds",
  ]).isRequired,
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  temp: {
    fontSize: 35,
    color: "white",
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    marginTop: 130,
    color: "white",
    fontWeight: "100",
    fontSize: 40,
    marginBottom: 20,
    paddingHorizontal: 40,
  },
  subtitle: {
    color: "white",
    fontSize: 24,
    fontWeight: "700",
    paddingHorizontal: 40,
  },
  textContainer: {
    flex: 1,
    alignItems: "flex-start",
  },
});
