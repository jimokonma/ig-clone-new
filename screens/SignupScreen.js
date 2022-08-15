import { Image, StyleSheet, View } from "react-native";
import SignupForm from "../components/signupScreen/SignupForm";
const SignupScreen = () => (
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
    <SignupForm />
  </View>
);

export default SignupScreen;

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
