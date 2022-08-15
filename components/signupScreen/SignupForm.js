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
import { auth, db } from "../../Firebase";
import { collection, addDoc, setDoc, doc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignupForm = () => {
  const navigation = useNavigation();

  const signupFromSchema = yup.object().shape({
    email: yup.string().email().required("An email is required"),
    username: yup
      .string()
      .required()
      .min(2, "A username is required with at least 2 characters"),
    password: yup
      .string()
      .required()
      .min(6, "Your password has to have at least 8 characters"),
  });
  const getRandomProfilePicture = async () => {
    const res = await fetch("https://randomuser.me/api");
    const data = await res.json();
    const image = data.results[0].picture.large;
    return image;
  };
  const onSignup = async (email, password, username) => {
    try {
      const authUser = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const newData = {
        ownerId: authUser.user.uid,
        username: username,
        email: authUser.user.email,
        profile_picture: await getRandomProfilePicture(),
      };

      const userData = await setDoc(
        doc(db, "users", authUser.user.email),
        newData
      );
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  return (
    <View style={styles.wrapper}>
      <Formik
        initialValues={{ email: "", username: "", password: "" }}
        onSubmit={(values) =>
          onSignup(values.email, values.password, values.username)
        }
        validationSchema={signupFromSchema}
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
                    1 > values.username.length || values.username.length >= 2
                      ? "#ccc"
                      : "red",
                },
              ]}
            >
              <TextInput
                placeholderTextColor={"#444"}
                placeholder="username"
                autoCapitalize="none"
                keyboardType="default"
                autoFocus={true}
                onChangeText={handleChange("username")}
                onBlur={handleBlur("username")}
                value={values.username}
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
            <Pressable
              titleSize={20}
              style={styles.button(isValid)}
              onPress={handleSubmit}
            >
              <Text style={styles.buttonText}>Sign up</Text>
            </Pressable>
          </View>
        )}
      </Formik>
      <View style={styles.signupContainer}>
        <Text>Have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
          <Text style={{ color: "#6bb0f5" }}> Log in</Text>
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

export default SignupForm;
