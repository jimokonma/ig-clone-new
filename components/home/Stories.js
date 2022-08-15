import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { USERS } from "../../data/Users";
export default function Stories() {
  return (
    <View style={styles.storiesContainer}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {USERS.map((story, index) => {
          return (
            <View key={index} style={{ alignItems: "center" }}>
              <Image source={{ uri: story.image }} style={styles.image} />
              <Text style={styles.username}>
                {story.user.length > 11
                  ? story.user.slice(0, 10).toLowerCase() + "..."
                  : story.user.toLocaleLowerCase()}
              </Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  storiesContainer: {
    width: "100%",
    marginVertical: 10,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginLeft: 6,
    borderWidth: 3,
    borderColor: "#ff8501",
  },
  username: {
    color: "#fff",
    fontSize: 12,
  },
});
