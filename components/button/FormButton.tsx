import React, { FC } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { colors } from "../../assets/styles/globalStyles";


type ButtonProps = {
    text:string,
}
const FormButton: FC<ButtonProps> = ({text}) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => {}}
    >
      <Text style={styles.buttonText}>{text}</Text>
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

    borderRadius:100,
    backgroundColor: colors.buttonColor,
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
});

export default FormButton;
