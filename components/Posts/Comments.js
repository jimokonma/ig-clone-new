import { View, Text, TouchableOpacity, FlatList } from "react-native";
import React from "react";
import { useState } from "react";

const Comments = ({ comments }) => {
  const [showComments, setShowComments] = useState(false);
  return (
    <View>
      {showComments ? (
        <TouchableOpacity onPress={() => setShowComments(!showComments)}>
          <Text style={{ color: "#999999" }}>Hide comment</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={() => setShowComments(!showComments)}>
          {comments.length < 1 ? (
            <Text></Text>
          ) : comments.length === 1 ? (
            <Text style={{ color: "#999999" }}>View comment</Text>
          ) : (
            <Text style={{ color: "#999999" }}>
              View all {comments.length} comments
            </Text>
          )}
        </TouchableOpacity>
      )}
      <View>
        {showComments && (
          <FlatList
            data={comments}
            renderItem={(data) => {
              return (
                <View>
                  <Text style={{ color: "#fff", fontWeight: "600" }}>
                    {data.item.user}
                  </Text>
                  <Text style={{ color: "#cccccc" }}>{data.item.comment}</Text>
                </View>
              );
            }}
          />
        )}
      </View>
    </View>
  );
};

export default Comments;
