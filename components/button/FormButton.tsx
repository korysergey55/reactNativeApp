import React, { FC } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { ViewProps } from "react-native-svg/lib/typescript/fabric/utils";
import { colors } from "../../assets/styles/globalStyles";

type ButtonProps = {
  text: string;
  onSubmit: () => void;
  outerStyles?: ViewProps["style"];
  isDisabled?: boolean;
};
const FormButton: FC<ButtonProps> = ({ text, onSubmit, outerStyles, isDisabled }) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        isDisabled ? styles.buttonDisable : null,
        outerStyles ? outerStyles : null,
      ]}
      onPress={onSubmit}
      disabled={isDisabled ? true : false}
    >
      <Text style={[styles.buttonText, isDisabled ? styles.buttonTextDisable : null]}>{text}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",

    width: "100%",
    height: 51,

    marginTop: 59,

    borderRadius: 100,
    backgroundColor: colors.buttonColor,
  },
  buttonDisable: {
    backgroundColor: colors.inputColor,
    color: colors.secondoryTextColor,
  },

  buttonText: {
    justifyContent: "center",
    alignItems: "center",

    fontFamily: "Roboto-Regular",
    fontSize: 16,
    fontWeight: 400,
    textAlign: "center",
    lineHeight: 18.75,

    color: colors.bgColor,
  },
  buttonTextDisable: {
    color: colors.secondoryTextColor,
  },
});

export default FormButton;
