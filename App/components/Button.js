import React from "react";
import { TouchableOpacity, Image, StyleSheet, Text } from "react-native";

import reverse from "../../assets/images/reverse.png";
import colors from "../constants/colors";

export const Button = ({ onPress, text }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Image style={styles.buttonIcon} source={reverse} resizeMode="contain" />
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
  },
  buttonIcon: {
    marginRight: 10,
    width: 20,
    height: 20,
  },
  buttonText: {
    fontSize: 16,
    color: colors.white,
  },
});
