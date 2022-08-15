import { Image, StyleSheet, Text, View } from "react-native";
import LoginForm from "../components/LoginScreen/LoginForm";

const LoginScreen = () => (
  <View style={styles.container}>
    <View style={styles.logoContainer}>
      <Image
        source={{
          uri: "https://www.transparentpng.com/thumb/logo-instagram/YfpFOL-logo-instagram-free-transparent.png",
          width: 80,
          height: 80,
        }}
      />
    </View>
    <LoginForm />
  </View>
);

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 80,
    paddingHorizontal: 12,
  },
  logoContainer: {
    alignItems: "center",
  },
});
