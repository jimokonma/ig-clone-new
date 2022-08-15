import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

const PostImage = ({ image }) => {
  return (
    <View style={{ width: "100%", height: 450 }}>
      <Image source={{ uri: image }} style={styles.image} />
    </View>
  );
};

export default PostImage;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});
