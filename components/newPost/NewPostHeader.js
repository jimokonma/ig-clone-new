import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function NewPostHEader() {
  const navigation = useNavigation();

  const handleNavigateToHomecreen = () => navigation.goBack();

  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={handleNavigateToHomecreen}>
        <Ionicons name="chevron-back-outline" size={24} color="#fff" />
      </TouchableOpacity>
      <Text style={styles.text}>NEW POST</Text>
      <Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    color: "#fff",
    alignSelf: "center",
    fontWeight: "bold",
  },
});
