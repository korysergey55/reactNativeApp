import React, { FC } from "react";
import { StyleSheet, TextInput, View, ViewProps } from "react-native";
import { colors } from "../../assets/styles/globalStyles";

type InputProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  outerStyles?: ViewProps["style"];
  rightButton?: React.JSX.Element;
  secureTextEntry?: boolean;
};

const Input: FC<InputProps> = ({
  value,
  onChange,
  placeholder,
  outerStyles,
  rightButton,
  secureTextEntry,
}) => {
  return (
    <View style={[styles.input, outerStyles]}>
      <TextInput
        value={value}
        placeholder={placeholder}
        onChangeText={onChange}
        secureTextEntry={secureTextEntry}
      />
      {rightButton}
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    width: "100%",
    height: 50,

    padding: 16,

    borderRadius: 8,
    borderWidth: 1,

    borderColor: colors.borderColor,
    backgroundColor: colors.inputColor,
  },
});

export default Input;
