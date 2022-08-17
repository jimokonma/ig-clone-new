import React, { useEffect, useState } from "react";
import {
  Alert,
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
} from "react-native";
import BottomTabs, { bottomTabsIcons } from "../components/home/BottomTabs";
import Header from "../components/home/Header";
import Post from "../components/home/Post";
import Stories from "../components/home/Stories";
import { db } from "../Firebase";
import { collectionGroup, getDocs, query } from "firebase/firestore";

const postRef = collectionGroup(db, "posts");

function HomeScreen(props) {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const q = query(postRef);
      try {
        const querySnapshot = await getDocs(q);
        console.log(typeof querySnapshot);
        querySnapshot.forEach((doc) => {
          setPosts(doc.data());
        });
      } catch (error) {
        Alert.alert("Unable to Load data", error.message);
      }
    };
    fetchData();
  }, []);
  console.log([posts].length);
  return (
    <SafeAreaView style={styles.safeArea}>
      <Header />
      <Stories />
      <ScrollView>{/* <Post postData={posts} /> */}</ScrollView>
      <FlatList
        data={[posts]}
        renderItem={(data) => {
          return <Post postData={data.item} />;
        }}
      />
      <BottomTabs icons={bottomTabsIcons} />
    </SafeAreaView>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: "#000",
  },
});
