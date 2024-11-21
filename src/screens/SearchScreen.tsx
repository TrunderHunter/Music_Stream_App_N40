import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const SearchScreen = () => {
  const [search, setSearch] = useState("");

  const data = [
    {
      id: "1",
      title: "Me",
      artist: "Jessica Gonzalez",
      plays: "2.1M",
      duration: "3:36",
      cover: "https://i.ibb.co/kqttvqV/Image-107.png",
    },
    {
      id: "2",
      title: "Me Inc",
      artist: "Anthony Taylor",
      plays: "68M",
      duration: "3:35",
      cover: "https://i.ibb.co/5TcvcBG/Image-106.png",
    },
    {
      id: "3",
      title: "Dozz me",
      artist: "Brian Bailey",
      plays: "93M",
      duration: "4:39",
      cover: "https://i.ibb.co/zV15c3d/Image-105.png",
    },
    {
      id: "4",
      title: "Eastss me",
      artist: "Anthony Taylor",
      plays: "9M",
      duration: "7:48",
      cover: "https://i.ibb.co/5Y8HmZD/Image-104.png",
    },
    {
      id: "5",
      title: "Me Ali",
      artist: "Pedro Moreno",
      plays: "23M",
      duration: "3:36",
      cover: "https://i.ibb.co/B2gLRsy/Image-103.png",
    },
    {
      id: "6",
      title: "Me quis a",
      artist: "Elena Jimenez",
      plays: "10M",
      duration: "6:22",
      cover: "https://i.ibb.co/xfYML8f/Image-102.png",
    },
    {
      id: "7",
      title: "Me light",
      artist: "John Smith",
      plays: "81M",
      duration: "5:15",
      cover: "https://i.ibb.co/kqttvqV/Image-107.png",
    },
  ];

 

  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <Ionicons name="search" size={20} color="gray" />
        <TextInput
          style={styles.input}
          placeholder="Search"
          value={search}
          onChangeText={(text) => setSearch(text)}
        />
        {search.length > 0 && (
          <TouchableOpacity onPress={() => setSearch("")}>
            <Ionicons name="close" size={20} color="gray" />
          </TouchableOpacity>
        )}
      </View>

      <View style={styles.tabs}>
        {["All", "Tracks", "Albums", "Artists"].map((tab, index) => (
          <Text
            key={index}
            style={[
              styles.tab,
              index === 0 ? styles.activeTab : null, // "All" tab is active
            ]}
          >
            {tab}
          </Text>
        ))}
      </View>
      

      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    padding: 10,
    borderRadius: 8,
    marginBottom: 16,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
  tabs: {
    flexDirection: "row",
    marginBottom: 16,
  },
  tab: {
    marginRight: 20,
    fontSize: 16,
    color: "gray",
  },
  activeTab: {
    fontWeight: "bold",
    color: "black",
    borderBottomWidth: 2,
    borderBottomColor: "black",
  },
  
});

export default SearchScreen;
