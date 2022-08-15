import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Divider } from "react-native-elements/dist/divider/Divider";

export const bottomTabsIcons = [
  {
    name: "Home",
    active: require("../../assets/fill-home.png"),
    inactive: require("../../assets/outline-home.png"),
  },
  {
    name: "Search",
    active: require("../../assets/fill-search.png"),
    inactive: require("../../assets/outline-search.png"),
  },
  {
    name: "Reels",
    active: require("../../assets/fill-reel.png"),
    inactive: require("../../assets/outline-reel.png"),
  },
  {
    name: "Heart",
    active: require("../../assets/fill-heart.png"),
    inactive: require("../../assets/outline-heart.png"),
  },
  {
    name: "Profile",
    active: require("../../assets/active-profile.png"),
    inactive: require("../../assets/inactive-profile.png"),
  },
];

const BottomTabs = ({ icons }) => {
  const [activeTab, setActiveTab] = useState("Home");

  const Icon = ({ icon }) => (
    <TouchableOpacity onPress={() => setActiveTab(icon.name)}>
      <Image
        source={activeTab === icon.name ? icon.active : icon.inactive}
        style={styles.icon}
      />
    </TouchableOpacity>
  );
  return (
    <View style={styles.wrapper}>
      <Divider width={1} orientation="vertical" />
      <View style={styles.container}>
        {icons.map((icon, index) => (
          <Icon key={index} icon={icon} />
        ))}
      </View>
    </View>
  );
};

export default BottomTabs;
const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    width: "100%",
    bottom: "0%",
    zIndex: 999,
    backgroundColor: "#000",
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    height: 50,
    paddingTop: 10,
  },
  icon: {
    width: 30,
    height: 30,
  },
});
