import React, { useState } from "react";
import { ScrollView, StyleSheet } from "react-native";

import PublicationItem from "../publicationItem/PublicationItem";
const PublicationList = () => {
  const [posts, setPost] = useState([
    {
      title: "Захід на Чорному морі",
      comments: [
        {
          comment:
            "Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!",
          date: "16-05-2024",
        },
        {
          comment:
            "Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!",
          date: "16-05-2024",
        },
        {
          comment:
            "Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!",
          date: "16-05-2024",
        },
      ],
      likes: 5,
      location: "Ukraine",
      source: require("../../assets/images/publicationImage.png"),
    },
    {
      title: "Старий будиночок у Венеції",
      comments: [
        {
          comment:
            "Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!",
          date: "16-05-2024",
        },
        {
          comment:
            "Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!",
          date: "16-05-2024",
        },
        {
          comment:
            "Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!",
          date: "16-05-2024",
        },
        {
          comment:
            "Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!",
          date: "16-05-2024",
        },
        {
          comment:
            "Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!",
          date: "16-05-2024",
        },
      ],
      likes: 7,
      location: "Italy",
      source: require("../../assets/images/publicationImage.png"),
    },
    {
      title: "Ліс",
      comments: [
        {
          comment:
            "Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!",
          date: "16-05-2024",
        },
      ],
      likes: 1,
      location: "Ukraine",
      source: require("../../assets/images/publicationImage.png"),
    },
  ]);
  return (
    <ScrollView contentContainerStyle={styles.listContainer}>
      {posts?.map((post, index) => {
        return (
          <PublicationItem
            key={index}
            item={post}
          />
        );
      })}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  listContainer: {
    justifyContent: "center",
    alignItems: "center",
    gap: 32,
    marginTop: 32,
  },
});

export default PublicationList;
