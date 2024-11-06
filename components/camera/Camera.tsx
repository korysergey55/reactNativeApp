import { FC, useState } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { CameraView, CameraType, useCameraPermissions } from "expo-camera";

import CameraIcon from "../../iconsComponents/createPublicationIcons/CameraIcon";
import { colors } from "../../assets/styles/globalStyles";

type PropTypes = {
  outerStyle?: boolean;
};

const Camera: FC<PropTypes> = ({ outerStyle = false }) => {
  const [facing, setFacing] = useState<CameraType>("back");
  const [permission, requestPermission] = useCameraPermissions();

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={styles.message}>We need your permission to show the camera</Text>
        <Button
          onPress={requestPermission}
          title="grant permission"
        />
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing(current => (current === "back" ? "front" : "back"));
  }

  return (
    <View style={styles.cameracContainer}>
      <CameraView
        facing={facing}
        style={[styles.camera, outerStyle ? { backgroundColor: "#FFFFFF4D" } : null]}
      >
        <TouchableOpacity
          style={[styles.cameraButton, outerStyle ? { backgroundColor: "#FFFFFF4D" } : null]}
          onPress={toggleCameraFacing}
        >
          <CameraIcon style={styles.cameraIcon} />
        </TouchableOpacity>
      </CameraView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  message: {
    textAlign: "center",
    paddingBottom: 10,
  },
  cameracContainer: {
    position: "absolute",
    top: "40%",

    alignContent: "center",
    justifyContent: "center",
  },
  camera: {
    height: "auto",
    backgroundColor: colors.bgColor,
    borderRadius: 50,
  },
  cameraButton: {
    width: 60,
    height: 60,
    backgroundColor: colors.bgColor,
    borderRadius: 50,
  },
  cameraIcon: {
    position: "absolute",
    left: "30%",
    top: "30%",

    alignContent: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
});

export default Camera;
