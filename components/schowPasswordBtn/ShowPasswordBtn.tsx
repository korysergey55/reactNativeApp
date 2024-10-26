import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { colors } from "../../assets/styles/globalStyles";

type PropTypes = {
  handleShowPassword: () => void;
};

const ShowPasswordBtn: React.FC<PropTypes> = ({ handleShowPassword }) => {
  return (
    <TouchableOpacity>
      <Text
        style={styles.showPasswordBtn}
        onPress={handleShowPassword}
      >
        Показати
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
