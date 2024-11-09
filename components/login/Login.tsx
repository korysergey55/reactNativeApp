import React, { useEffect, useState } from "react";
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

import { getUserInfoSelector } from "../../redax/selectors/selectors";
import { useDispatch, useSelector } from "react-redux";

import { loginDB } from "../../utiles/auth";

import Input from "../input/Input";
import ShowPasswordBtn from "../schowPasswordBtn/ShowPasswordBtn";
import FormButton from "../button/FormButton";

import { colors } from "../../assets/styles/globalStyles";

const { width: diwiceWidth, height: diwiceHeight } = Dimensions.get("screen");

const Login = () => {
  const { navigate } = useNavigation<any>();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);

  const dispatch = useDispatch();
  const userInfo = useSelector(getUserInfoSelector);

  useEffect(() => {
    setEmail("");
    setPassword("");
  }, [userInfo]);

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
    console.log("onLogin");
    if (!email || !password) {
      alert("Feelds cant be empty");
      return;
    }
    try {
      await loginDB({ email, password }, dispatch);
      navigate("Home");
    } catch (err) {
      if (err) {
        alert("Is not correct email or password");
      }
      console.error("Login error:", err);
    }
  };

  return (
    // <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    //   <KeyboardAvoidingView
    //     style={styles.container}
    //     behavior={Platform.OS === "ios" ? "padding" : "height"}
    //   >
    <View style={styles.formComtainer}>
      <Text style={styles.formTitle}>Login</Text>
      <View style={styles.inputsComtainer}>
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
                text={isPasswordVisible ? "Schow" : "Hide"}
                handleShowPassword={handleShowPassword}
              />
            ) : null
          }
        />
      </View>

      <FormButton
        text={"Login"}
        onSubmit={onSubmit}
      />
      <TouchableOpacity
        onPress={() => {
          navigate("Registration");
        }}
      >
        <View style={styles.containerLinkButton}>
          <Text style={styles.linkButton}> Don't have account? </Text>
          <Text style={styles.linkButton}> SignUp</Text>
        </View>
      </TouchableOpacity>
    </View>
    //   </KeyboardAvoidingView>
    // </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  image: {
    position: "absolute",
    width: diwiceWidth,
    height: diwiceHeight,
  },
  formComtainer: {
    position: "absolute",
    bottom: 0,

    alignItems: "center",
    justifyContent: "flex-start",

    width: diwiceWidth,
    minHeight: "50%",
    height: "auto",

    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 111,

    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: colors.bgColor,
  },
  formTitle: {
    marginTop: 32,
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
  outerStylesBtn: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
  },
  outerAvatarStyles: {
    position: "absolute",
    top: "-20%",
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

export default Login;
