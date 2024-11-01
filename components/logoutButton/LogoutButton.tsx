import React, { FC } from "react";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import HeaderLogoutIcon from "../../iconsComponents/headerIcons/HeaderLogoutIcon";
import { ViewProps } from "react-native-svg/lib/typescript/fabric/utils";

type propTypes = {
  outerStyles?: ViewProps["style"];
};

const LogoutButton: FC<propTypes> = ({ outerStyles }) => {
  const { navigate } = useNavigation<any>();

  const onPressBtn = () => {
    navigate("Login");
  };

  return (
    <TouchableOpacity
      onPress={onPressBtn}
      style={[outerStyles ? outerStyles : null]}
    >
      <HeaderLogoutIcon />
    </TouchableOpacity>
  );
};

export default LogoutButton;
