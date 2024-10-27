import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  SafeAreaView,
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

import { colors } from "../../assets/styles/globalStyles";
import heroImage from "../../assets/images/heroImage.jpg";

import Input from "../../components/input/Input";
import FormButton from "../../components/button/FormButton";
import UserAvatar from "../../components/userAvatar/UserAvatar";
import ShowPasswordBtn from "../../components/schowPasswordBtn/ShowPasswordBtn";

const { width: diwiceWidth, height: diwiceHeight } = Dimensions.get("screen");

const RegistrationScreen = () => {
  const { navigate } = useNavigation();
  const [loginValue, setLogin] = useState("");
  const [emailValue, setEmail] = useState("");
  const [passwordValue, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);
  const [isUsetRegistrated, setIsUsetRegistrated] = useState(false);

  useEffect(() => {
    if (isUsetRegistrated) {
      navigate("Login");
    }
  }, [isUsetRegistrated]);

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

  const onSubmit = () => {
    console.log(`email:${emailValue}, password:${passwordValue}`);
    if (loginValue && passwordValue && emailValue) {
      setIsUsetRegistrated(true);
      navigate("Login");
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        {/* <SafeAreaView style={styles.formComtainer}>
        <Text style={styles.formTitle}>Реєстрація</Text>
      </SafeAreaView> */}
        <View style={styles.container}>
          <Image
            source={heroImage}
            style={styles.image}
            resizeMode="cover"
          />
          <View style={styles.formComtainer}>
            <UserAvatar outerStyles={styles.outerAvatarStyles} />
            <Text style={styles.formTitle}>Реєстрація</Text>
            <View style={styles.inputsComtainer}>
              <Input
                value={loginValue}
                onChange={handleChangeLogin}
                placeholder="Логін"
              />
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
                rightButton={<ShowPasswordBtn handleShowPassword={handleShowPassword} />}
              />
            </View>
            <FormButton
              text={"Зареєстуватися"}
              onSubmit={onSubmit}
            />
            <TouchableOpacity
              onPress={() => {
                navigate("Login");
              }}
            >
              <View style={styles.containerLinkButton}>
                <Text style={styles.linkButton}> Вже є акаунт? </Text>
                <Text style={styles.linkButton}> Увійти</Text>
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
    justifyContent: "center",
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

    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: colors.bgColor,
  },
  formTitle: {
    marginTop: 92,
    fontFamily: "Roboto-Regular",
    fontSize: 30,
    fontWeight: 500,
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

export default RegistrationScreen;
