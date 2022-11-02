import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Onboarding } from "./src/Onboarding";
import { LoadAssets } from "./src/components";

const fonts = {
  "SFProText-Bold": require("./assets/fonts/bold.otf"),
  "SFProText-SemiBold": require("./assets/fonts/semibold.otf"),
  "SFProText-Regular": require("./assets/fonts/regular.otf"),
}

const AuthStack = createStackNavigator();
const AuthNavigator = () => {
  return (
    <AuthStack.Navigator screenOptions={{headerShown: false}} >
      <AuthStack.Screen name="Onboarding" component={Onboarding} />
    </AuthStack.Navigator>
  );
};

export default function App() {
  return (
    <LoadAssets {...{fonts}} >
      <AuthNavigator />
    </LoadAssets>
  );
} 
