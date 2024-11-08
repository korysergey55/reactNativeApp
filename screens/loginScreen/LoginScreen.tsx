import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  View,
  Image,
  Text,
  Dimensions,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import Input from "../../components/input/Input";
import FormButton from "../../components/button/FormButton";
import ShowPasswordBtn from "../../components/schowPasswordBtn/ShowPasswordBtn";

import { colors } from "../../assets/styles/globalStyles";

const { width: diwiceWidth, height: diwiceHeight } = Dimensions.get("screen");

const LoginScreen = () => {
  const { navigate } = useNavigation<any>();
  const [emailValue, setEmail] = useState("");
  const [passwordValue, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);
  const [isUsetLogined, setisUsetLogined] = useState(false);

  useEffect(() => {
    setEmail("");
    setPassword("");
    if (isUsetLogined) {
      navigate("Home");
    }
  }, [isUsetLogined]);

  const handleChangeEmail = (value: string) => {
    setEmail(value);
  };
  const handleChangePassword = (value: string) => {
    setPassword(value);
  };

  function handleShowPassword() {
    setIsPasswordVisible(prev => !prev);
  }

  const onSubmit = () => {
    console.log(`email:${emailValue}, password:${passwordValue}`);
    if (!emailValue || !passwordValue) {
      alert("Feelds cant be empty");
      return;
    }
    setisUsetLogined(true);
    navigate("Home");
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={styles.container}>
          <Image
            source={require("../../assets/images/heroImage.jpg")}
            style={styles.image}
            resizeMode="cover"
          />
          <View style={styles.formComtainer}>
            <Text style={styles.formTitle}>Увійти</Text>
            <View style={styles.inputsComtainer}>
              <Input
                value={emailValue}
                onChange={handleChangeEmail}
                placeholder="Адреса електронної пошти"
              />
              <Input
                value={passwordValue}
                onChange={handleChangePassword}
                secureTextEntry={isPasswordVisible}
                placeholder="Пароль"
                outerStyles={styles.outerStylesBtn}
                rightButton={
                  passwordValue.length ? (
                    <ShowPasswordBtn
                      text={isPasswordVisible ? "Показати" : "Приховати"}
                      handleShowPassword={handleShowPassword}
                    />
                  ) : null
                }
              />
            </View>
            <FormButton
              text={"Увійти"}
              onSubmit={onSubmit}
            />
            <TouchableOpacity
              onPress={() => {
                navigate("Registration");
              }}
            >
              <View style={styles.containerLinkButton}>
                <Text style={styles.linkButton}> Немає акаунту? </Text>
                <Text style={styles.linkButton}> Зареєструватися</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
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

export default LoginScreen;
