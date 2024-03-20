import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { Transak } from "@transak/transak-sdk";
import transakConfig from "../../configs/transakConfig";

type Props = {};

const TransakScreen = (props: Props) => {
  useEffect(() => {
    const transak = new Transak(transakConfig);

    transak.init();
  });

  return (
    <View style={styles.container}>
      <Text style={styles.text}>React Native Expo Demo - Transak</Text>
    </View>
  );
};

export default TransakScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
  },
});
