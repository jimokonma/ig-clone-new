import { View, Text } from "react-native";
import React from "react";

const Likes = ({ likes }) => {
  return (
    <View>
      <Text style={{ color: "#fff", fontWeight: "600" }}>
        {likes.toLocaleString("en")} Likes
      </Text>
    </View>
  );
};

export default Likes;
