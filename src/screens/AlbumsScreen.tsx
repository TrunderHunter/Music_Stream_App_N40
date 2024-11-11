import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import {
  Ionicons,
  MaterialIcons,
  Entypo,
  Octicons,
  FontAwesome,
  AntDesign,
} from "@expo/vector-icons";

const AlbumsScreen = ({ route }: { route: any }) => {
  const { playList } = route.params;

  return (
    <View style={styles.container}>
      {/* Header Back */}
      <View style={styles.header}>
        <Ionicons name="chevron-back" size={28} color="gray" />
        <MaterialIcons name="connected-tv" size={28} color="gray" />
      </View>

      {/* Infomation */}
      <View style={styles.info}>
        <Image source={{ uri: playList.uri }} style={styles.infoImage} />
        <View>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              textAlign: "justify",
            }}
          >
            {playList.title} - {playList.subtitle}
          </Text>
          <View
            style={{
              marginVertical: 8,
              gap: 10,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Entypo name="heart-outlined" size={20} color="blue" />
            <Text
              style={{
                color: "gray",
                fontSize: 16,
              }}
            >
              1,234
            </Text>
            <Octicons name="dot-fill" size={24} color="black" />
            <Text
              style={{
                color: "gray",
                fontSize: 16,
              }}
            >
              05:10:18
            </Text>
          </View>
          <Text
            style={{
              fontSize: 16,
              color: "gray",
              textAlign: "justify",
              lineHeight: 24,
            }}
          >
            {playList.description}
          </Text>
        </View>
      </View>

      {/* Button Play */}
      <View style={styles.wrapperButtonPlay}>
        <View style={styles.buttonPlayLeft}>
          <Entypo name="heart-outlined" size={24} color="gray" />
          <Entypo name="dots-three-horizontal" size={24} color="gray" />
        </View>

        <View style={styles.buttonPlayRight}>
          <FontAwesome name="random" size={24} color="gray" />
          <AntDesign name="play" size={58} color="black" />
        </View>
      </View>

      {/* List Song */}
    </View>
  );
};

export default AlbumsScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    paddingTop: 30,
    justifyContent: "flex-start",
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 4,
    paddingVertical: 10,
  },
  info: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingVertical: 10,
    alignItems: "center",
  },
  infoImage: {
    width: "40%",
    height: 140,
  },
  wrapperButtonPlay: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingVertical: 10,
    alignContent: "center",
    alignItems: "center",
  },
  buttonPlayLeft: {
    flexDirection: "row",
    gap: 28,
    alignItems: "center",
  },
  buttonPlayRight: {
    flexDirection: "row",
    gap: 28,
    alignItems: "center",
  },
});
