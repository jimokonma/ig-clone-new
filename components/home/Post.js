import { View, Text } from "react-native";
import { Divider } from "react-native-elements";
import Caption from "../Posts/Caption";
import Comments from "../Posts/Comments";
import Likes from "../Posts/Likes";
import PostFooter from "../Posts/PostFooter";
import PostHeader from "../Posts/PostHeader";
import PostImage from "../Posts/PostImage";

const Post = ({ postData }) => {
  return (
    <View style={{ marginBottom: 10 }}>
      <Divider width={1} orientation="vertical" />
      <PostHeader data={postData} />
      <PostImage image={postData.imageUrl} />
      <View style={{ marginHorizontal: 10 }}>
        <PostFooter />
        <Likes likes={postData.likes} />
        <Caption postData={postData} />
        <Comments comments={postData.comments} />
      </View>
    </View>
  );
};

export default Post;
