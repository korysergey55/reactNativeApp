import React, { FC, useState } from "react";
import { StyleSheet, TextInput, View, ViewProps } from "react-native";
import { colors } from "../../assets/styles/globalStyles";

type InputProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  outerStyles?: ViewProps["style"];
  rightButton?: any;
  secureTextEntry?: boolean;
};
// React.JSX.Element
const Input: FC<InputProps> = ({
  value,
  onChange,
  placeholder,
  outerStyles,
  rightButton,
  secureTextEntry,
}) => {
  const [isFocused, setFocus] = useState(false);

  const onFocus = () => {
    setFocus(true);
  };
  const onBlur = () => {
    setFocus(false);
  };
  return (
    <View style={[styles.input, isFocused && styles.onFocusStyle, outerStyles]}>
      <TextInput
        value={value}
        onChangeText={onChange}
        maxLength={30}
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        placeholderTextColor={colors.secondoryTextColor}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      {rightButton}
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    width: "100%",
    height: 50,
    overflow: "hidden",

    padding: 16,
    borderRadius: 8,
    borderWidth: 1,

    borderColor: colors.borderColor,
    backgroundColor: colors.inputColor,
  },
  onFocusStyle: {
    borderWidth: 1,
    borderColor: colors.buttonColor,
    backgroundColor: colors.bgColor,
  },
});

export default Input;
