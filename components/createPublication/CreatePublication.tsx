import React, { useEffect, useState } from "react";
import {
  Image,
  NativeSyntheticEvent,
  StyleSheet,
  Text,
  TextInput,
  TextInputChangeEventData,
  TouchableOpacity,
  View,
} from "react-native";

import Camera from "../camera/Camera";
import FormButton from "../button/FormButton";

import { colors } from "../../assets/styles/globalStyles";
import LocationIcon from "../../iconsComponents/postItemIcons/LocationIcon";
import RemuveIcon from "../../iconsComponents/createPublicationIcons/RemuveIcon";

const CreatePublication = () => {
  const [isPhotoUploaded, setIsPhotoUploaded] = useState(null);
  const [photoTitle, setPhotoTitle] = useState("");
  const [photoLocation, setPhotoLocation] = useState("");
  const [isButtonDisable, setIsButtonDisable] = useState(true);

  useEffect(() => {
    console.log(isPhotoUploaded);
  }, [isPhotoUploaded]);

  useEffect(() => {
    if (photoTitle && isPhotoUploaded) {
      setIsButtonDisable(false);
    } else {
      setIsButtonDisable(true);
    }
  }, [isPhotoUploaded, photoTitle]);

  const onChangePhotoTitle = (evt: NativeSyntheticEvent<TextInputChangeEventData>): void => {
    const value = evt.nativeEvent.text;
    setPhotoTitle(value);
  };
  const onChangePhotoLocation = (evt: NativeSyntheticEvent<TextInputChangeEventData>): void => {
    const value = evt.nativeEvent.text;
    setPhotoLocation(value);
  };

  const saveDataImage = (image: any) => {
    setIsPhotoUploaded(image);
  };

  const onSubmit = () => {
    console.log(onSubmit);
    alert("Publication published");
    setIsPhotoUploaded(null);
    setPhotoTitle("");
    setPhotoLocation("");
  };
  return (
    <View style={styles.container}>
      <View style={styles.cameraContainer}>
        <Image
          // source={require("../../assets/images/publicationImage.png")}
          style={[styles.image]}
        />
        <Camera
          saveDataImage={saveDataImage}
          active={isPhotoUploaded ? false : true}
        />
      </View>
      <Text style={styles.discription}>
        {isPhotoUploaded ? "Завантажте фото" : "Редагувати фото"}
      </Text>
      <View style={styles.form}>
        <TextInput
          value={photoTitle}
          onChange={onChangePhotoTitle}
          placeholder="Назва..."
          style={styles.input}
        />
        <View style={styles.inputLocationWripper}>
          <LocationIcon style={styles.locationIcon} />
          <TextInput
            value={photoLocation}
            onChange={onChangePhotoLocation}
            placeholder="Місцевість..."
            style={styles.input}
          />
        </View>
        <FormButton
          text={"Опубліковати"}
          onSubmit={onSubmit}
          isDisabled={isButtonDisable}
        />
      </View>
      {!isButtonDisable && (
        <TouchableOpacity
          style={styles.remuveBtn}
          onPress={() => {}}
        >
          <RemuveIcon style={styles.remuveIcon} />
        </TouchableOpacity>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",

    flexDirection: "column",
    alignContent: "center",
    justifyContent: "flex-start",
  },
  cameraContainer: {
    width: "100%",
    height: 240,

    alignContent: "center",
    justifyContent: "center",
    flexDirection: "row",

    borderRadius: 8,
    backgroundColor: colors.borderColor,
    borderColor: colors.borderColor,
  },
  image: {
    width: "100%",
    borderRadius: 8,
  },

  discription: {
    marginTop: 8,

    fontSize: 16,
    fontWeight: "400",
    lineHeight: 18,
    color: colors.secondoryTextColor,
  },
  form: {
    marginTop: 32,
  },
  input: {
    height: 50,
    width: "100%",
    marginTop: 16,
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 25,

    borderBottomWidth: 1,
    borderBottomColor: colors.borderColor,
  },
  inputLocationWripper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  locationIcon: {
    position: "absolute",
    left: -3,
    top: "40%",
  },
  remuveBtn: {
    width: 70,
    height: 40,

    marginBottom: 0,
    marginTop: "auto",
    marginLeft: "auto",
    marginRight: "auto",

    borderRadius: 20,
    backgroundColor: colors.inputColor,
  },
  remuveIcon: {
    position: "absolute",
    left: "30%",
    top: "20%",
  },
});

export default CreatePublication;
