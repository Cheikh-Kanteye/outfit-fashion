import { View, Text } from "react-native";
import React from "react";

interface SubSlideProps {
  subtitle: String;
  description: String;
}

const SubSlide = ({ subtitle, description }: SubSlideProps) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        height: "100%",
      }}
    >
      <Text
        style={{
          textAlign: "center",
          fontFamily: "SFProText-SemiBold",
          fontSize: 30,
        }}
      >
        {subtitle}
      </Text>
      <Text
        style={{
          textAlign: "center",
          fontFamily: "SFProText-Regular",
          fontSize: 18,
          paddingHorizontal: 24,
        }}
      >
        {description}
      </Text>
    </View>
  );
};

export default SubSlide;
