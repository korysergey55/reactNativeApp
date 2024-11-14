import React, { FC } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { colors } from "../../../assets/styles/globalStyles";

type PropTypes = {
  color?: string;
  size?: "small" | "large";
};

const Loader: FC<PropTypes> = ({ color, size }) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator
        style={styles.loader}
        color={color ? color : colors.buttonColor}
        size={size ? size : "large"}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: "50%",
    left: "50%",
    zIndex: 9999,
  },
  loader: {},
});

export default Loader;
