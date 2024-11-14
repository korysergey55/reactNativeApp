import { FC, useRef, useState } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { CameraView, CameraType, useCameraPermissions } from "expo-camera";
import * as MediaLibrary from "expo-media-library";

import CameraIcon from "../../iconsComponents/createPublicationIcons/CameraIcon";
import { colors } from "../../assets/styles/globalStyles";

type PropTypes = {
  saveDataImage: (image: any) => any;
  active?: boolean;
};

const Camera: FC<PropTypes> = ({ saveDataImage, active }) => {
  const [facing, setFacing] = useState<CameraType>("back");
  const [permission, requestPermission] = useCameraPermissions();
  const [permissionResponse, requestLibraryPermission] = MediaLibrary.usePermissions();

  const camera = useRef<any>(null);

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

  const takePhoto = async () => {
    console.log("takePhoto");
    if (!camera) return;
    const image = await camera.current?.takePictureAsync();
    console.log(image);

    if (image?.uri) {
      await MediaLibrary.saveToLibraryAsync(image.uri);
      saveDataImage(image);
    }
  };

  return (
    <View style={styles.cameraWripper}>
      <CameraView
        style={styles.camera}
        facing={facing}
        ref={camera}
        active={active ? active : true}
      >
        <TouchableOpacity
          style={styles.cameraButton}
          onPress={takePhoto}
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
    position: "absolute",
    top: "40%",
  },
  message: {
    textAlign: "center",
    paddingBottom: 10,
  },
  cameraWripper: {
    position: "absolute",
    top: "40%",

    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "transperent",
  },
  camera: {
    borderRadius: 50,
    backgroundColor: colors.bgColor,
  },
  cameraButton: {
    width: 60,
    height: 60,
    borderRadius: 50,
    // backgroundColor: colors.bgColor,
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
