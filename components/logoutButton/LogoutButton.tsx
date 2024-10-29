import React from "react";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import HeaderLogoutIcon from "../../iconsComponents/headerIcons/HeaderLogoutIcon";

const LogoutButton = () => {
  const { navigate } = useNavigation<any>();

  const onPressBtn = () => {
    navigate("Login");
  };

  return (
    <TouchableOpacity onPress={onPressBtn}>
      <HeaderLogoutIcon />
    </TouchableOpacity>
  );
};

export default LogoutButton;
