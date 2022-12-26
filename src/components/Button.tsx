import React from "react";
import { Text, TouchableOpacity } from "react-native";

import theme from "../constants/Theme";

type ButtonProps = {
  label: string;
  btnType: "primary" | "secondary";
  onPress?: () => void;
};

const Button = ({ label, btnType, onPress }: ButtonProps) => {
  const { colors } = theme;
  const bg = btnType === "primary" ? colors.primary : colors.background2;
  const fg = btnType === "primary" ? colors.background : colors.text;
  return (
    <TouchableOpacity
      onPress={onPress || (() => console.log("Pressed"))}
      style={{
        width: "100%",
        height: 45,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: bg,
        borderRadius: 45,
      }}
    >
      <Text
        style={{ color: fg, fontSize: 18, fontFamily: "SFProText-SemiBold" }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

// eslint-disable-next-line import/no-default-export
export default Button;
