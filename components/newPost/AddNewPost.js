import { StyleSheet, Text, View } from "react-native";
import FormikPostUploader from "./FormikPostUploader";
import NewPostHeader from "./NewPostHeader";

const AddNewPost = () => {
  return (
    <View style={styles.container}>
      <NewPostHeader />
      <FormikPostUploader />
    </View>
  );
};

export default AddNewPost;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
});
