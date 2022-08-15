import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../../Firebase";
import { signOut } from "firebase/auth";
function Header(props) {
  const navigation = useNavigation();

  const handleAddPost = () => navigation.navigate("NewPostScreen");

  const onSignOut = async () => {
    try {
      await signOut(auth);
      console.log("signed out");
    } catch (error) {
      Alert.alert("SignOut Failur", error.message);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onSignOut}>
        <Image style={styles.logo} source={require("../../assets/logo.png")} />
      </TouchableOpacity>
      <View style={styles.iconsContainer}>
        <TouchableOpacity onPress={handleAddPost}>
          <AntDesign name="plussquareo" size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Feather name="heart" size={24} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.unReadBadge}>
            <Text style={styles.unReadBadgeText}>11</Text>
          </View>
          <Image
            style={styles.icon}
            source={require("../../assets/messanger.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  logo: {
    width: 100,
    height: 50,
    resizeMode: "contain",
  },
  iconsContainer: {
    flexDirection: "row",
    width: "30%",
    justifyContent: "space-evenly",
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: "contain",
  },
  unReadBadge: {
    width: 25,
    height: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ff3250",
    position: "absolute",
    zIndex: 99,
    right: -10,
    top: -10,
    borderRadius: 25,
  },
  unReadBadgeText: {
    color: "#fff",
    fontWeight: "600",
  },
});
