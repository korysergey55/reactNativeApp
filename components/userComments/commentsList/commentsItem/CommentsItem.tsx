import React, { FC, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { conmmentTypes } from "../../../../types/types";
import { colors } from "../../../../assets/styles/globalStyles";

type propTypes = {
  item: conmmentTypes;
  index: number;
};

const CommentsItem: FC<propTypes> = ({ item, index }) => {
  const [needReverse, setNeedReverse] = useState(false);

  useEffect(() => {
    const even_or_odd = (index: number) => {
      if (index % 2 === 0) {
        setNeedReverse(true);
        return true;
      }
      setNeedReverse(false);
      return false;
    };
    even_or_odd(index);
  }, [index]);

  return (
    <View style={[styles.container, !needReverse ? { flexDirection: "row-reverse" } : null]}>
      <View style={styles.avatar}></View>
      <View style={styles.wripper}>
        <Text style={styles.comment}>{item.comment}</Text>
        <Text style={styles.date}>{item.date}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    gap: 16,
  },
  avatar: { width: 28, height: 28, borderRadius: 20, backgroundColor: colors.inputColor },
  wripper: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: 8,
    padding: 16,

    borderRadius: 8,
    backgroundColor: colors.inputColor,
  },
  comment: {
    fontFamily: "Roboto-Regular",
    fontSize: 18,
    fontWeight: "500",
    lineHeight: 18,
    color: colors.primaryTextColor,
  },
  date: {
    marginRight: 0,
    marginLeft: "auto",

    fontFamily: "Roboto-Regular",
    fontSize: 10,
    fontWeight: "400",
    lineHeight: 11,

    color: colors.secondoryTextColor,
  },
});

export default CommentsItem;
