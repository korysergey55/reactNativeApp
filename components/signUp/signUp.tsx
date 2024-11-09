import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import { registerDB } from "../../utiles/auth";
import validateEmail from "../../utiles/emailValidation";

import Input from "../input/Input";
import UserAvatar from "../userAvatar/UserAvatar";
import ShowPasswordBtn from "../schowPasswordBtn/ShowPasswordBtn";
import FormButton from "../button/FormButton";

import { colors } from "../../assets/styles/globalStyles";

const { width: diwiceWidth, height: diwiceHeight } = Dimensions.get("screen");

const SignUp = () => {
  const { navigate } = useNavigation<any>();

  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isPasswordVisible, setIsPasswordVisible] = useState(true);

  const handleChangeLogin = (value: string) => {
    setLogin(value);
  };
  const handleChangeEmail = (value: string) => {
    setEmail(value);
  };
  const handleChangePassword = (value: string) => {
    setPassword(value);
  };

  function handleShowPassword() {
    setIsPasswordVisible(prev => !prev);
  }

  const onSubmit = async () => {
    console.log(`email:${email}, password:${password}`);
    if (!validateEmail(email)) {
      alert("Email is not valid. Pleasee enter valid email.");
      return;
    }
    if (password.length < 6) {
      alert("Password must be at least 6 characters long.");
      return;
    }

    try {
      await registerDB({ email, password });
      navigate("Login");
    } catch (err) {
      if (err) {
        alert("Somsing went wrong...");
      }
      console.error("Login error:", err);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <View style={styles.formComtainer}>
          <UserAvatar
            outerStyles={styles.outerAvatarStyles}
            button={true}
          />
          <Text style={styles.formTitle}>SignUp</Text>
          <View style={styles.inputsComtainer}>
            <Input
              value={login}
              onChange={handleChangeLogin}
              placeholder="Login"
            />
            <Input
              value={email}
              onChange={handleChangeEmail}
              placeholder="Email"
            />
            <Input
              value={password}
              onChange={handleChangePassword}
              secureTextEntry={isPasswordVisible}
              placeholder="Password"
              outerStyles={styles.outerStylesBtn}
              rightButton={
                password.length ? (
                  <ShowPasswordBtn
                    text={isPasswordVisible ? "Show" : "Hide"}
                    handleShowPassword={handleShowPassword}
                  />
                ) : null
              }
            />
          </View>
          <FormButton
            text={"SignUp"}
            onSubmit={onSubmit}
          />
          <TouchableOpacity
            onPress={() => {
              navigate("Login");
            }}
          >
            <View style={styles.containerLinkButton}>
              <Text style={styles.linkButton}> Do You have account? </Text>
              <Text style={styles.linkButton}> Login</Text>
            </View>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  formComtainer: {
    alignItems: "center",
    justifyContent: "flex-start",

    width: diwiceWidth,
    minHeight: "50%",
    height: "auto",

    paddingLeft: 16,
    paddingRight: 16,

    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: colors.bgColor,
  },
  formTitle: {
    marginTop: 92,
    fontFamily: "Roboto-Regular",
    fontSize: 30,
    fontWeight: "500",
    lineHeight: 35,
    textAlign: "center",
    color: colors.primaryTextColor,
  },
  inputsComtainer: {
    width: "100%",
    gap: 16,
    marginTop: 32,
  },
  showPasswordBtn: {
    fontFamily: "Roboto-Medium",
    fontSize: 16,
    lineHeight: 18.75,
    color: colors.activeTextColor,
  },
  outerStylesBtn: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  outerAvatarStyles: {
    position: "absolute",
    top: "-10%",
    zIndex: 10,
  },

  containerLinkButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
    marginBottom: 45,
  },
  linkButton: {
    marginTop: 16,

    fontFamily: "Roboto-Medium",
    fontSize: 16,
    lineHeight: 18.75,
    color: colors.activeTextColor,
  },
});

export default SignUp;
