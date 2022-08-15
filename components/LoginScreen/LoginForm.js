import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";
import * as yup from "yup";
import Validator from "email-validator";
import { auth } from "../../Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const LoginForm = () => {
  const navigation = useNavigation();

  const loginFromSchema = yup.object().shape({
    email: yup.string().email().required("An email is required"),
    password: yup
      .string()
      .required()
      .min(6, "Your password has to have at least 8 characters"),
  });

  const onLogin = async (email, password) => {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      Alert.alert("Login Failed", error.message);
    }
  };

  return (
    <View style={styles.wrapper}>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => onLogin(values.email, values.password)}
        validationSchema={loginFromSchema}
        validateOnMount={true}
      >
        {({ handleChange, handleBlur, handleSubmit, values, isValid }) => (
          <View>
            <View
              style={[
                styles.inputField,
                {
                  borderColor:
                    values.email.length < 1 || Validator.validate(values.email)
                      ? "#ccc"
                      : "red",
                },
              ]}
            >
              <TextInput
                placeholderTextColor={"#444"}
                placeholder="Phone number, username"
                autoCapitalize="none"
                keyboardType="email-address"
                textContentType="emailAddress"
                autoFocus={true}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
              />
            </View>
            <View
              style={[
                styles.inputField,
                {
                  borderColor:
                    1 > values.password.length || values.password.length >= 6
                      ? "#ccc"
                      : "red",
                },
              ]}
            >
              <TextInput
                placeholderTextColor={"#444"}
                placeholder="Password"
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={true}
                textContentType="password"
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
              />
            </View>
            <View style={{ alignItems: "flex-end", marginBottom: 30 }}>
              <Text style={{ color: "#6bb0f5" }}>Forgot password</Text>
            </View>
            <Pressable
              titleSize={20}
              style={styles.button(isValid)}
              onPress={handleSubmit}
            >
              <Text style={styles.buttonText}>Log in</Text>
            </Pressable>
          </View>
        )}
      </Formik>
      <View style={styles.signupContainer}>
        <Text>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("SignupScreen")}>
          <Text style={{ color: "#6bb0f5" }}> Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 80,
  },
  inputField: {
    borderRadius: 4,
    padding: 12,
    backgroundColor: "#fafafa",
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "gray",
  },
  button: (isValid) => ({
    backgroundColor: isValid ? "#0096f6" : "#9acaf7",
    alignItems: "center",
    justifyContent: "center",
    minHeight: 42,
    borderRadius: 4,
  }),
  buttonText: {
    fontWeight: "600",
    color: "#fff",
  },
  signupContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 30,
  },
});
export default LoginForm;
