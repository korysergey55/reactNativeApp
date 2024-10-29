import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../../assets/styles/globalStyles";
import CameraIcon from "../../iconsComponents/createPublicationIcons/CameraIcon";

const CreatePublication = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cameraContainer}>
        {/* <Image style={styles.image} /> */}
        <TouchableOpacity style={styles.cameraButton}>
          <CameraIcon />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: { width: "100%", height: "100%" },
  cameraContainer: {
    alignContent: "center",
    justifyContent: "center",

    width: "100%",
    height: "auto",
    minHeight: 240,

    borderRadius: 8,
    backgroundColor: colors.borderColor,
    borderColor: colors.borderColor,
  },
  image: {},
  cameraButton: {
    alignContent: "center",
    justifyContent: "center",

    width: 60,
    height: 60,
    backgroundColor: colors.bgColor,
    borderRadius: 50,
  },
});

export default CreatePublication;
