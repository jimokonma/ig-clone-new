import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

const PostHeader = ({ data }) => {
  return (
    <View style={styles.headerContainer}>
      <View style={{ flexDirection: "row" }}>
        <Image
          source={{ uri: data.profile_picture }}
          style={styles.headerProfileImage}
        />
        <Text style={styles.username}>{data.username}</Text>
      </View>
      <View>
        <Text style={{ color: "#fff", fontWeight: "900" }}>...</Text>
      </View>
    </View>
  );
};

export default PostHeader;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 10,
  },
  headerProfileImage: {
    width: 40,
    height: 40,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#ff8501",
  },
  username: {
    color: "#fff",
    margin: 5,
  },
});
