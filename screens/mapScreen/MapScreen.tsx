import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";

import Map from "../../components/map/Map";
import { imageLocationTypes } from "../../types/types";

const MapScreen = () => {
  const [position, setPosition] = useState<imageLocationTypes>();
  const {
    params: { imageLocation },
  } = useRoute<any>();

  useEffect(() => {
    if (imageLocation) {
      setPosition(imageLocation);
    }
  }, [imageLocation]);

  return (
    <SafeAreaView>
      <Map position={position && position} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: "Roboto-Regular",
    fontSize: 32,
    textAlign: "center",
    color: "black",
  },
});

export default MapScreen;
