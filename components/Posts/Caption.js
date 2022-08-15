import { View, Text } from "react-native";
import React from "react";

const Caption = ({ postData }) => {
  return (
    <View>
      <Text style={{ color: "#fff" }}>
        <Text style={{ fontWeight: "600" }}>{postData.user}</Text>
        {" " + postData.caption}
      </Text>
    </View>
  );
};

export default Caption;
