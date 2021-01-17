import React, { useState } from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  Image,
  Dimensions,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { format } from "date-fns";
import { Entypo } from "@expo/vector-icons";

import background from "../../assets/images/background.png";
import logo from "../../assets/images/logo.png";
import colors from "../constants/colors";
import { ConversionInput } from "../components/ConversionInput";
import { Button } from "../components/Button";
import { KeyboardSpacer } from "../components/KeyboardSpacer";

const screen = Dimensions.get("window");

export default ({ navigation }) => {
  const [scrollEnabled, setScrollEnabled] = useState(false);
  const [baseCurrency, setBaseCurrency] = useState("USD");
  const [quoteCurrency, setQuoteCurrency] = useState("DZD");
  const conversionRate = 0.89824;
  const date = "2021-03-23";

  const swapCurrencies = () => {
    let swap = baseCurrency;
    setBaseCurrency(quoteCurrency);
    setQuoteCurrency(swap);
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.blue} />
      <ScrollView scrollEnabled={scrollEnabled}>
        {/* Button Passing To Options */}
        <SafeAreaView style={styles.header}>
          <TouchableOpacity onPress={() => navigation.push("Options")}>
            <Entypo name="cog" size={32} color={colors.white} />
          </TouchableOpacity>
        </SafeAreaView>

        {/* Content */}
        <View style={styles.content}>
          {/* Logo */}
          <View style={styles.logoContainer}>
            <Image
              source={background}
              style={styles.logoBackground}
              resizeMode="contain"
            />
            <Image source={logo} style={styles.logo} resizeMode="contain" />
          </View>

          <Text style={styles.textHeader}>Currency Converter</Text>

          {/* Inputs */}
          <View style={styles.inputContainer}>
            <ConversionInput
              text={baseCurrency}
              defaultValue="124"
              onButtonPress={() => alert("todo!")}
              keyboardType="numeric"
              onChangeText={(text) => console.log("text", text)}
            />
            <ConversionInput
              text={quoteCurrency}
              defaultValue="123"
              keyboardType="numeric"
              editable={false}
              onButtonPress={() => alert("todo!")}
            />
          </View>

          {/* Reverse Button & Text Info */}
          <Text style={styles.text}>
            {`1 ${baseCurrency} = ${conversionRate} ${quoteCurrency} as of ${format(
              new Date(date),
              "MM do, yyyy"
            )}`}
          </Text>
          <Button text="Reverse Currencies" onPress={swapCurrencies} />
          <KeyboardSpacer onToggle={(visible) => setScrollEnabled(visible)} />
        </View>
      </ScrollView>
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
  content: {
    paddingTop: screen.height * 0.1,
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
  textHeader: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
    marginBottom: 20,
  },
  text: {
    fontSize: 14,
    color: colors.white,
    textAlign: "center",
  },
  inputContainer: {
    marginBottom: 10,
  },
  header: {
    alignItems: "flex-end",
    marginHorizontal: 25,
  },
});
