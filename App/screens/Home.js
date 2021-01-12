import React from "react";
import { View, StyleSheet, StatusBar, Image, Dimensions } from "react-native";

import colors from "../constants/colors";
import background from "../../assets/images/background.png";
import logo from "../../assets/images/logo.png";
import ConversionInput from "../components/ConversionInput";

const screen = Dimensions.get("window");

export default () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.blue} />

      <View style={styles.logoContainer}>
        <Image
          source={background}
          style={styles.logoBackground}
          resizeMode="contain"
        />
        <Image source={logo} style={styles.logo} resizeMode="contain" />
      </View>

      <ConversionInput
        text="USD"
        value="123"
        onButtonPress={() => alert("todo!")}
        keyboardType="numeric"
        onChangeText={(text) => console.log("text", text)}
      />
      <ConversionInput
        text="GBP"
        value="123"
        keyboardType="numeric"
        editable={false}
        onButtonPress={() => alert("todo!")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blue,
    justifyContent: "center",
    height: "100%",
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  logoBackground: {
    width: screen.width / 0.45,
    height: screen.width * 0.45,
  },
  logo: {
    position: "absolute",
    width: screen.width * 0.25,
    height: screen.width * 0.25,
  },
});
