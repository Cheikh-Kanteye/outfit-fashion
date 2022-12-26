import React, { useState, useRef } from "react";
import { Dimensions, SafeAreaView, View, StatusBar } from "react-native";
import Animated, {
  Extrapolate,
  interpolate,
  interpolateColor,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";

import { Button, Slide, SubSlide } from "../components";
import { SLIDE_DATA } from "../constants";
import theme, { Box } from "../constants/Theme";

const { height, width } = Dimensions.get("screen");

type IndicatorProps = {
  i: number;
  scrollX: Animated.SharedValue<number>;
};

const Indicator = ({ i, scrollX }: IndicatorProps) => {
  const animatedStyle = useAnimatedStyle(() => {
    const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
    return {
      transform: [
        {
          scale: withSpring(
            interpolate(
              scrollX.value,
              inputRange,
              [0.6, 1.1, 0.6],
              Extrapolate.CLAMP
            )
          ),
        },
      ],
      opacity: interpolate(
        scrollX.value,
        inputRange,
        [0.3, 1, 0.3],
        Extrapolate.CLAMP
      ),
    };
  });

  return (
    <Animated.View
      style={[
        {
          backgroundColor: "#2CB9B0",
          width: 8,
          height: 8,
          borderRadius: 4,
          marginHorizontal: 2,
        },
        animatedStyle,
      ]}
    />
  );
};

const Onboarding = () => {
  const scrollX = useSharedValue(0);
  const lastIndex = SLIDE_DATA.length - 1;
  const [isLastSlide, setIsLastSlide] = useState(false);
  const { spacing } = theme;
  const slideRef = useRef<Animated.ScrollView>(null);
  const sldeBgColors = ["#c0eaf6", "#beecc5", "#ffe4d9", "#ffdddc"];
  const inputRange = [...sldeBgColors.map((_, index) => index * width)];
  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (e) => {
      scrollX.value = e.contentOffset.x;
    },
    onMomentumEnd(event) {
      const currentIndex = Math.floor(event.contentOffset.x / width);
      if (currentIndex === lastIndex) {
        setIsLastSlide(true);
      }
      setIsLastSlide(false);
    },
  });
  const animatedBgStyle = useAnimatedStyle(() => {
    const outputRange = [...sldeBgColors.map((color) => color)];
    return {
      backgroundColor: interpolateColor(scrollX.value, inputRange, outputRange),
    };
  });
  const transformStyle = useAnimatedStyle(() => {
    const outputRange = [...sldeBgColors.map((_, index) => -index * width)];
    return {
      transform: [
        {
          translateX: withTiming(
            interpolate(scrollX.value, inputRange, outputRange)
          ),
        },
      ],
    };
  });

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <StatusBar barStyle="dark-content" />
      <Animated.View
        style={[
          {
            width,
            height: height * 0.61,
            borderBottomRightRadius: 75,
            overflow: "hidden",
          },
          animatedBgStyle,
        ]}
      >
        <Animated.ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal
          snapToInterval={width}
          decelerationRate="fast"
          onScroll={scrollHandler}
          ref={slideRef}
        >
          {SLIDE_DATA.map((slide, index) => {
            return (
              <Slide key={index} title={slide.title} right={!!(index % 2)} />
            );
          })}
        </Animated.ScrollView>
      </Animated.View>
      <Animated.View style={[{ flex: 1, width }, animatedBgStyle]}>
        <View
          style={{
            flex: 1,
            backgroundColor: "white",
            borderTopLeftRadius: 75,
            overflow: "hidden",
          }}
        >
          <Box
            flexDirection={"row"}
            justifyContent={"center"}
            alignItems={"center"}
            position="absolute"
            height={80}
            left={0}
            right={0}
          >
            {SLIDE_DATA.map((_, i) => {
              return <Indicator key={i} i={i} scrollX={scrollX} />;
            })}
          </Box>
          <Animated.View
            style={[
              {
                flex: 0.8,
                flexDirection: "row",
                width: SLIDE_DATA.length * width,
              },
              transformStyle,
            ]}
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
          </Animated.View>
          <Box
            position={"absolute"}
            bottom={60}
            left={0}
            right={0}
            justifyContent={"center"}
            alignItems={"center"}
            style={{ paddingHorizontal: spacing.l }}
          >
            <Button
              label={"Next"}
              btnType={!isLastSlide ? "secondary" : "primary"}
              onPress={() => console.log("Next")}
            />
          </Box>
        </View>
      </Animated.View>
    </SafeAreaView>
  );
};

// eslint-disable-next-line import/no-default-export
export default Onboarding;
