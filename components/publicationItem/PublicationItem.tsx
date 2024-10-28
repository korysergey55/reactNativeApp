import React, { FC } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import CommentIcon from "../../iconsComponents/postItemIcons/CommentIcon";
import LikeIcon from "../../iconsComponents/postItemIcons/LikeIcon";
import LocationIcon from "../../iconsComponents/postItemIcons/LocationIcon";

import { colors } from "../../assets/styles/globalStyles";

// type propsTypes = {
//   title: string;
//   comments?: number;
//   likes?: number;
//   location?: string;
//   source: any;
// };
type propsTypes = any;

const PublicationItem: FC<propsTypes> = ({ item }) => {
  return (
    <View style={styles.itemContainer}>
      <Image
        style={styles.image}
        source={item.source}
        width={20}
        height={20}
      />
      <Text style={styles.title}>{item.title}</Text>
      <View>
        <View style={styles.commentsWripper}>
          <CommentIcon />
          <Text style={styles.comments}>{item.comments ? item.comments : 0}</Text>
        </View>
        <View style={styles.likesWripper}>
          <LikeIcon />
          <Text style={styles.likes}>{item.likes ? item.likes : 0}</Text>
        </View>
        <View style={styles.locationWripper}>
          <LocationIcon />
          <Text style={styles.location}>{item.location ? item.location : "No location"}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {},
  image: {},
  title: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    fontWeight: 500,
    lineHeight: 19,
    color: colors.primaryTextColor,
  },
  commentsWripper: {},
  comments: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 19,
    color: colors.primaryTextColor,
  },
  likesWripper: {},
  likes: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    fontWeight: 500,
    lineHeight: 19,
    color: colors.primaryTextColor,
  },
  locationWripper: {},
  location: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    fontWeight: 500,
    lineHeight: 19,
    color: colors.primaryTextColor,
  },
});

export default PublicationItem;
