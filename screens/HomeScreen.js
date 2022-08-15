import React, { useEffect } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import BottomTabs, { bottomTabsIcons } from "../components/home/BottomTabs";
import Header from "../components/home/Header";
import Post from "../components/home/Post";
import Stories from "../components/home/Stories";
import { POSTS } from "../data/posts";
import { db } from "../Firebase";
import {
  collection,
  collectionGroup,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";

const postRef = collectionGroup(db, "posts");

function HomeScreen(props) {
  useEffect(() => {
    const fetchData = async () => {
      const q = query(postRef);
      try {
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          // console.log(doc.id, " => ", doc.data());
          // console.log("...");
        });
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <Header />
      <Stories />
      <FlatList
        data={POSTS}
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
