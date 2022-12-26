import { View, Text } from "react-native";
import React from "react";

interface SubSlideProps {
  subtitle: string;
  description: string;
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
          fontSize: 24,
        }}
      >
        {subtitle}
      </Text>
      <Text
        style={{
          textAlign: "center",
          fontFamily: "SFProText-Regular",
          fontSize: 16,
          paddingHorizontal: 24,
        }}
      >
        {description}
      </Text>
    </View>
  );
};

// eslint-disable-next-line import/no-default-export
export default SubSlide;
