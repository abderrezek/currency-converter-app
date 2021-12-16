import React, { useState, useContext } from "react";
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
  ActivityIndicator,
} from "react-native";
import { format } from "date-fns";
import { Entypo } from "@expo/vector-icons";

import background from "../../assets/images/background.png";
import logo from "../../assets/images/logo.png";
import colors from "../constants/colors";
import { ConversionInput } from "../components/ConversionInput";
import { Button } from "../components/Button";
import { KeyboardSpacer } from "../components/KeyboardSpacer";
import { ConversionContext } from "../util/ConversionContext";

const screen = Dimensions.get("window");

export default ({ navigation }) => {
  const {
    baseCurrency,
    quoteCurrency,
    swapCurrencies,
    date,
    rates,
    isLoading,
  } = useContext(ConversionContext);
  const [scrollEnabled, setScrollEnabled] = useState(false);
  const [value, setValue] = useState("100");
  const conversionRate = rates[quoteCurrency];

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

          {isLoading ? (
            <ActivityIndicator color={colors.white} size="large" />
          ) : (
            <>
              {/* Inputs */}
              <View style={styles.inputContainer}>
                <ConversionInput
                  text={baseCurrency}
                  defaultValue={value}
                  keyboardType="numeric"
                  onChangeText={(text) => setValue(text)}
                  onButtonPress={() => {
                    navigation.push("CurrencyList", {
                      title: "Base Currency",
                      isBaseCurrency: true,
                    });
                  }}
                />
                <ConversionInput
                  text={quoteCurrency}
                  defaultValue={
                    value &&
                    `${(parseFloat(value) * conversionRate).toFixed(2)}`
                  }
                  keyboardType="numeric"
                  editable={false}
                  onButtonPress={() => {
                    navigation.push("CurrencyList", {
                      title: "Quote Currency",
                      isBaseCurrency: false,
                    });
                  }}
                />
              </View>

              {/* Reverse Button & Text Info */}
              <Text style={styles.text}>
                {`1 ${baseCurrency} = ${conversionRate} ${quoteCurrency} as of ${
                  date && format(new Date(date), "MMM do, yyyy")
                }`}
              </Text>
              <Button text="Reverse Currencies" onPress={swapCurrencies} />
            </>
          )}
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
