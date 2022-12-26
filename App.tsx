import * as React from "react";
import {
  setPositionAsync,
  setBackgroundColorAsync,
  setButtonStyleAsync,
} from "expo-navigation-bar";
import { createStackNavigator } from "@react-navigation/stack";
import { setStatusBarTranslucent } from "expo-status-bar";

import { Onboarding } from "./src/Onboarding";
import { LoadAssets } from "./src/components";
import type { StackParamList } from "./type";

const fonts = {
  "SFProText-Bold": require("./assets/fonts/bold.otf"),
  "SFProText-SemiBold": require("./assets/fonts/semibold.otf"),
  "SFProText-Regular": require("./assets/fonts/regular.otf"),
};

const AuthStack = createStackNavigator<StackParamList>();
const AuthNavigator = () => {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="Onboarding" component={Onboarding} />
    </AuthStack.Navigator>
  );
};
setPositionAsync("absolute");
setButtonStyleAsync("dark");
setBackgroundColorAsync("rgba(0,0,0,0.01)");
setStatusBarTranslucent(true);

const App = () => {
  return (
    <LoadAssets fonts={fonts}>
      <AuthNavigator />
    </LoadAssets>
  );
};

// eslint-disable-next-line import/no-default-export
export default App;
