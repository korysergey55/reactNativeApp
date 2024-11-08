import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { colors } from "../../assets/styles/globalStyles";

type PropTypes = {
  text: string;
  handleShowPassword: () => void;
};

const ShowPasswordBtn: React.FC<PropTypes> = ({ text, handleShowPassword }) => {
  return (
    <TouchableOpacity>
      <Text
        style={styles.showPasswordBtn}
        onPress={handleShowPassword}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  showPasswordBtn: {
    fontFamily: "Roboto-Medium",
    fontSize: 16,
    lineHeight: 18.75,
    color: colors.activeTextColor,
  },
});

export default ShowPasswordBtn;
