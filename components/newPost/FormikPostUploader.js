import { Image, StyleSheet, Text, TextInput, View, Button } from "react-native";
import * as yup from "yup";
import { Formik } from "formik";
import { useState } from "react";
import { Divider } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import validUrl from "valid-url";

const PLACEHOLDER_IMG =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/1022px-Placeholder_view_vector.svg.png";

const uploadPostSchema = yup.object().shape({
  imageUrl: yup.string().url().required("A URL is required"),
  caption: yup.string().max(2200, "Caption has reached the character limit"),
});

const FormikPostUploader = () => {
  const [thumbnailUrl, setThumbnailUrl] = useState(PLACEHOLDER_IMG);
  const navigation = useNavigation();
  return (
    <>
      <Formik
        initialValues={{ caption: "", imageUrl: "" }}
        onSubmit={(values) => {
          console.log(values);
          console.log("Your post was uploaded successfully");
          navigation.goBack();
        }}
        validationSchema={uploadPostSchema}
        validateOnMount={true}
      >
        {({
          handleBlur,
          handleChange,
          handleSubmit,
          values,
          errors,
          isValid,
        }) => (
          <>
            <View
              style={{
                margin: 20,
                flexDirection: "row",
                justifyConten: "space-between",
              }}
            >
              <Image
                source={{
                  uri: validUrl.isUri(thumbnailUrl)
                    ? thumbnailUrl
                    : PLACEHOLDER_IMG,
                }}
                style={{ width: 100, height: 100 }}
              />

              <View style={{ marginLeft: 20 }}>
                <TextInput
                  style={{ color: "#fff", fontSize: 20 }}
                  placeholder="write somthing..."
                  placeholderTextColor="gray"
                  multiline={true}
                  onChange={handleChange("caption")}
                  onBlur={handleBlur("caption")}
                  value={values.caption}
                />
              </View>
            </View>
            <Divider width={0.2} orientation="vartical" />
            <TextInput
              style={{ color: "#fff", fontSize: 18 }}
              placeholder="Enter image url"
              placeholderTextColor={"gray"}
              onChangeText={handleChange("imageUrl")}
              onChange={(e) => setThumbnailUrl(e.nativeEvent.text)}
              onBlur={handleBlur("imageUrl")}
              value={values.imageUrl}
            />

            {errors.imageUrl && (
              <Text style={{ fontSize: 10, color: "red" }}>
                {errors.imageUrl}
              </Text>
            )}
            <Button onPress={handleSubmit} title="Share" disabled={!isValid} />
          </>
        )}
      </Formik>
    </>
  );
};

export default FormikPostUploader;

const styles = StyleSheet.create({});
