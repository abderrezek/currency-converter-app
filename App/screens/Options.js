import React from "react";
import { SafeAreaView, ScrollView, StatusBar, StyleSheet } from "react-native";
import { Entypo } from "@expo/vector-icons";

import colors from "../constants/colors";
import { RowItem, RowSeparator } from "../components/RowItem";

const Options = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.white} />

      <ScrollView>
        <RowItem
          title="Themes"
          onPress={() => alert("todo!")}
          rightIcon={
            <Entypo name="chevron-right" size={20} color={colors.blue} />
          }
        />
        <RowSeparator />

        <RowItem
          title="React Native Basics"
          onPress={() => alert("todo!")}
          rightIcon={<Entypo name="export" size={20} color={colors.blue} />}
        />
        <RowSeparator />

        <RowItem
          title="Themes"
          onPress={() => alert("todo!")}
          rightIcon={null}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default Options;
