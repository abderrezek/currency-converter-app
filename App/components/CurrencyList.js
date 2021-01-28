import React from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  FlatList,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import Modal from "react-native-modal";

import { RowItem, RowSeparator } from "./RowItem";
import currencies from "../constants/currencyList";

const CurrencyListComponent = ({ modal, setModal, changeCurrency }) => {
  const { visible, currency, type } = modal;

  console.log("render modal");
  console.log(currency);

  const iconChecked = (title) =>
    title === currency ? <Entypo name="check" size={24} color="black" /> : null;

  return (
    <Modal
      isVisible={visible}
      onBackButtonPress={() => setModal({ visible: false })}
      onBackdropPress={() => setModal({ visible: false })}
      propagateSwipe
      // backdropColor="none"
    >
      <View style={styles.modalView}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Currency List</Text>
          <TouchableOpacity
            style={styles.closeBtn}
            onPress={() => setModal({ visible: false })}
          >
            <Entypo name="cross" size={35} />
          </TouchableOpacity>
        </View>

        {/* <ScrollView style={styles.listView}>
          {currencyList.map((item, i) => (
            <Fragment key={i}>
              <RowItem
                title={item.title}
                onPress={item.onPress}
                rightIcon={iconChecked(item.title)}
              />
              {i < currencyList.length - 1 ? <RowSeparator /> : null}
            </Fragment>
          ))}
        </ScrollView> */}
        <FlatList
          data={currencies}
          renderItem={({ item }) => (
            <RowItem
              title={item}
              onPress={() => {
                changeCurrency(type, item);
                setModal({ visible: false });
              }}
              rightIcon={iconChecked(item)}
            />
          )}
          keyExtractor={(item) => item}
          ItemSeparatorComponent={() => <RowSeparator />}
        />
      </View>
    </Modal>
  );
};

export const CurrencyList = React.memo(CurrencyListComponent);
// export const CurrencyList = React.memo(
//   CurrencyListComponent,
//   (prevProps, nextProps) =>
//     nextProps.item.attribute.name === prevProps.item.attribute.name
// );

const styles = StyleSheet.create({
  modalView: {
    backgroundColor: "white",
    borderRadius: 5,
    padding: 5,
    height: "70%",
  },
  header: {
    // backgroundColor: "red",
    height: "12%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginHorizontal: 10,
  },
  closeBtn: {},
  listView: {
    // backgroundColor: "green",
    height: "88%",
  },
});
