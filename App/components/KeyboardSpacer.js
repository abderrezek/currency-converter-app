import React, { useState, useEffect } from "react";
import { Dimensions, Keyboard, Platform, StyleSheet, View } from "react-native";

export const KeyboardSpacer = ({ style, onToggle = () => null }) => {
  const [keyboardSpace, setKeyboardSpace] = useState(0);

  useEffect(() => {
    // When Show Keyboard
    const updateKeyboardSpace = (event) => {
      if (!event.endCoordinates) return;

      const { height } = Dimensions.get("window");
      const newKeyboardSpace = height / 2 - event.endCoordinates.screenY;
      setKeyboardSpace(newKeyboardSpace);
      onToggle(true, newKeyboardSpace);
    };
    const showEvt =
      Platform.OS === "android" ? "keyboardDidShow" : "keyboardWillShow";
    const showListener = Keyboard.addListener(showEvt, updateKeyboardSpace);

    // When Hide Keyboard
    const resetKeyboardSpace = () => {
      setKeyboardSpace(0);
      onToggle(false, 0);
    };
    const hideEvt =
      Platform.OS === "android" ? "keyboardDidHide" : "keyboardWillHide";
    const hideListener = Keyboard.addListener(hideEvt, resetKeyboardSpace);

    return () => {
      showListener.remove();
      hideListener.remove();
    };
  }, []);

  return <View style={[styles.container, { height: keyboardSpace }, style]} />;
};

const styles = StyleSheet.create({
  container: {
    left: 0,
    right: 0,
    bottom: 0,
  },
});
