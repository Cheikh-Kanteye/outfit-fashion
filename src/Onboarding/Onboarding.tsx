import { View, SafeAreaView, ScrollView, Dimensions } from "react-native";
import React from "react";
import { Slide, SubSlide } from "../components";
import { SLIDE_DATA } from "../constants";
import { StatusBar } from "expo-status-bar";
import Animated from "react-native-reanimated";

const { height, width } = Dimensions.get("screen");

const Onboarding = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <StatusBar style="dark" />
      <View
        style={{
          width,
          height: height * 0.61,
          backgroundColor: "cyan",
          borderBottomRightRadius: 75,
          overflow: "hidden",
        }}
      >
        <Animated.ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal
          snapToInterval={width}
          decelerationRate="fast"
        >
          {SLIDE_DATA.map((slide, index) => {
            return (
              <Slide key={index} title={slide.title} right={!!(index % 2)} />
            );
          })}
        </Animated.ScrollView>
      </View>
      <View style={{ flex: 1, width, backgroundColor: "cyan" }}>
        <View
          style={{
            flex: 1,
            backgroundColor: "white",
            borderTopLeftRadius: 75,
            overflow: "hidden",
          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              width: SLIDE_DATA.length * width,
            }}
          >
            {SLIDE_DATA.map((subslide, index) => {
              return (
                <SubSlide
                  key={index}
                  subtitle={subslide.subtitle}
                  description={subslide.description}
                />
              );
            })}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Onboarding;
