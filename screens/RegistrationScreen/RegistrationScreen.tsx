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

import Input from "../../components/input/Input";
import FormButton from "../../components/button/FormButton";
import UserAvatar from "../../components/userAvatar/UserAvatar";
import ShowPasswordBtn from "../../components/schowPasswordBtn/ShowPasswordBtn";
import validateEmail from "../../utiles/emailValidation";
import { registerDB } from "../../utiles/auth";

const { width: diwiceWidth, height: diwiceHeight } = Dimensions.get("screen");

const RegistrationScreen = () => {
  const { navigate } = useNavigation<any>();

  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
      // Логіка для переходу на інший екран або відображення повідомлення про успіх
      await registerDB({ email, password });
      setIsUsetRegistrated(true);
      navigate("Login");
    } catch (err) {
      console.error("Login error:", err);
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
            source={require("../../assets/images/heroImage.jpg")}
            style={styles.image}
            resizeMode="cover"
          />
          <View style={styles.formComtainer}>
            <UserAvatar
              outerStyles={styles.outerAvatarStyles}
              button={true}
            />
            <Text style={styles.formTitle}>Реєстрація</Text>
            <View style={styles.inputsComtainer}>
              <Input
                value={login}
                onChange={handleChangeLogin}
                placeholder="Логін"
              />
              <Input
                value={email}
                onChange={handleChangeEmail}
                placeholder="Адреса електронної пошти"
              />
              <Input
                value={password}
                onChange={handleChangePassword}
                secureTextEntry={isPasswordVisible}
                placeholder="Пароль"
                outerStyles={styles.outerStylesBtn}
                rightButton={
                  password.length ? (
                    <ShowPasswordBtn
                      text={isPasswordVisible ? "Показати" : "Приховати"}
                      handleShowPassword={handleShowPassword}
                    />
                  ) : null
                }
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

export default RegistrationScreen;
