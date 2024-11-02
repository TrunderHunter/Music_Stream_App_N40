import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

interface HomeScreenProps {
  navigation: any;
}

const HomeScreen = ({ navigation }: HomeScreenProps) => {
  return (
    <View>
      <Text>HomeScreen</Text>
      {/* Move to Albums screen */}
      <TouchableOpacity onPress={() => navigation.navigate("Albums")}>
        <Text>Albums</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
