import React, { Fragment } from "react";
import { SafeAreaView, ScrollView, StatusBar, StyleSheet } from "react-native";
import { Entypo } from "@expo/vector-icons";

import colors from "../constants/colors";
import { RowItem, RowSeparator } from "../components/RowItem";

const options = [
  {
    title: "Themes",
    onPress: () => alert("themes todo!"),
    rightIcon: <Entypo name="chevron-right" size={20} color={colors.blue} />,
  },
  {
    title: "Languages",
    onPress: () => alert("language todo!"),
    rightIcon: <Entypo name="chevron-right" size={20} color={colors.blue} />,
  },
  {
    title: "Themes",
    onPress: () => alert("todo!"),
    rightIcon: <Entypo name="chevron-right" size={20} color={colors.blue} />,
  },
];

const Options = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.white} />

      <ScrollView>
        {options.map((opt, i) => {
          return (
            <Fragment key={i}>
              <RowItem
                title={opt.title}
                onPress={opt.onPress}
                rightIcon={opt.rightIcon}
              />
              {i < options.length - 1 ? <RowSeparator /> : null}
            </Fragment>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default Options;
