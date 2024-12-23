import "react-native-gesture-handler";
import { useEffect } from "react";
import { ActivityIndicator, Text } from "react-native";
import { StatusBar } from "expo-status-bar";

import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./navigation/StackNavigator";

import { Provider, useDispatch } from "react-redux";
import { PersistGate } from "redux-persist/es/integration/react";
import store from "./redax/store/store";

import { authStateChanged } from "./utiles/auth";

import Loader from "./components/reusable/loader/Loader";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Light": require("./assets/fonts/Roboto-Light.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return <Loader />;
  }

  return (
    <Provider store={store.store}>
      <PersistGate
        loading={<Loader />}
        persistor={store.persistor}
      >
        <AuthListener />
        {/* <NavigationContainer>
          <StackNavigator />
        </NavigationContainer> */}
      </PersistGate>
    </Provider>
  );
}

const AuthListener = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    authStateChanged(dispatch);
  }, [dispatch]);

  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};
