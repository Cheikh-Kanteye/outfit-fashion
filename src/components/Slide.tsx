import { View, Text, SafeAreaView, Dimensions } from "react-native";
import React from "react";

const { width, height } = Dimensions.get("screen");

interface SlideProps {
  title: string;
  right?: boolean;
}

const Slide = ({ right, title }: SlideProps) => {
  const transform = [
    { translateY: (height * 0.61 - 100) / 2 },
    { translateX: right ? width / 2 - 45 : -width / 2 + 45 },
    { rotate: right ? "-90deg" : "90deg" },
  ];
  return (
    <SafeAreaView style={{ width: width, height: "100%" }}>
      <View
        style={{
          width,
          height: 100,
          justifyContent: "center",
          transform,
          overflow: "hidden",
        }}
      >
        <Text
          style={{
            fontSize: 70,
            lineHeight: 76,
            fontFamily: "SFProText-Bold",
            textAlign: "center",
          }}
        >
          {title}
        </Text>
      </View>
    </SafeAreaView>
  );
};

// eslint-disable-next-line import/no-default-export
export default Slide;
