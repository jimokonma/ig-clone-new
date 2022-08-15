import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { Feather, FontAwesome, FontAwesome5 } from "@expo/vector-icons";

const PostFooter = () => {
  return (
    <View style={styles.footerContainer}>
      <View style={styles.footerIcons}>
        <View
          style={{
            flexDirection: "row",
            width: "32%",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <TouchableOpacity>
            <Feather name="heart" size={24} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesome5 name="comment" size={24} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Feather name="send" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <Feather name="bookmark" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PostFooter;

const styles = StyleSheet.create({
  footerContainer: {
    marginVertical: 10,
  },
  footerIcons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
