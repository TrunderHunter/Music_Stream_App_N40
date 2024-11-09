import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const Header = () => {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/images/logoHeader.png")} />
      <View style={styles.rightContainer}>
        <AntDesign name="bells" size={24} color="black" />
        <Image source={require("../assets/images/AvatarHeader.png")} />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    width: "100%",
  },
  rightContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
});
