import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

import colors from "../constants/colors";

const RowItemComponent = ({ title, onPress, rightIcon }) => (
  <TouchableOpacity onPress={onPress} style={styles.row}>
    <Text style={styles.title}>{title}</Text>
    {rightIcon}
  </TouchableOpacity>
);
// export const RowItem = React.memo(RowItemComponent);
export const RowItem = RowItemComponent;

const RowSeparatorComponent = () => <View style={styles.separator} />;
// export const RowSeparator = React.memo(RowSeparatorComponent);
export const RowSeparator = RowSeparatorComponent;

const styles = StyleSheet.create({
  row: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: colors.white,
  },
  title: {
    color: colors.text,
    fontSize: 16,
  },
  separator: {
    backgroundColor: colors.border,
    height: StyleSheet.hairlineWidth,
    marginLeft: 20,
  },
});
