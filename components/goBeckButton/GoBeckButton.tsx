import React from "react";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import HeaderRigthIcon from "../../iconsComponents/HeaderRigthIcon";

const GoBeckButton = () => {
  const { navigate } = useNavigation();

  const onPressBtn = () => {
    navigate("Posts");
  };

  return (
    <TouchableOpacity onPress={onPressBtn}>
      <HeaderRigthIcon />
    </TouchableOpacity>
  );
};

export default GoBeckButton;
