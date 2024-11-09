import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  FlatList,
  ImageBackground,
} from "react-native";
import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/features/auth/authSlice";
import Header from "../../components/Header";
import { Colors } from "../../constants/Colors";
import { AntDesign } from "@expo/vector-icons";

interface HomeScreenProps {
  navigation: any;
}

const HomeScreen = ({ navigation }: HomeScreenProps) => {
  const dispatch = useDispatch();

  const handleSelectAlbum = () => {
    navigation.navigate("Albums");
  };

  const suggestions = [
    {
      id: "1",
      title: "Reflection",
      artist: "Christina Aguilera",
      image:
        "https://res.cloudinary.com/dnta8sd9z/image/upload/v1731122493/singer01_ldq1tv.jpg",
    },
    {
      id: "2",
      title: "In The Stars",
      artist: "Benson Boone",
      image:
        "https://res.cloudinary.com/dnta8sd9z/image/upload/v1731122808/suuget02_asuc7b.jpg",
    },
    {
      id: "3",
      title: "The Best of Me",
      artist: "David Foster",
      image:
        "https://res.cloudinary.com/dnta8sd9z/image/upload/v1731123882/suuget03_ne4d6e.jpg",
    },
    {
      id: "4",
      title: "Reflection",
      artist: "Christina Aguilera",
      image:
        "https://res.cloudinary.com/dnta8sd9z/image/upload/v1731122493/singer01_ldq1tv.jpg",
    },
    {
      id: "5",
      title: "In The Stars",
      artist: "Benson Boone",
      image:
        "https://res.cloudinary.com/dnta8sd9z/image/upload/v1731122808/suuget02_asuc7b.jpg",
    },
    {
      id: "6",
      title: "The Best of Me",
      artist: "David Foster",
      image:
        "https://res.cloudinary.com/dnta8sd9z/image/upload/v1731123882/suuget03_ne4d6e.jpg",
    },
  ];

  const charts = [
    {
      id: "1",
      title: "Top 50 Canada",
      description: "Daily chart-toppers update",
    },
    {
      id: "2",
      title: "Top 50 Global",
      description: "Daily chart-toppers update",
    },
  ];

  const albums = [
    { id: "1", title: "ME", artist: "Jessica Gonzalez", image: "url-to-image" },
    {
      id: "2",
      title: "Magna Nost",
      artist: "Brian Thomas",
      image: "url-to-image",
    },
  ];

  const artists = [
    { id: "1", name: "Jennifer Wilson", image: "url-to-image" },
    { id: "2", name: "Elizabeth Hall", image: "url-to-image" },
    { id: "3", name: "Elizabeth Hall", image: "url-to-image" },
    { id: "4", name: "Elizabeth Hall", image: "url-to-image" },
    { id: "5", name: "Elizabeth Hall", image: "url-to-image" },
    { id: "6", name: "Elizabeth Hall", image: "url-to-image" },
  ];

  return (
    <View
      style={{
        backgroundColor: Colors.light.background,
        flex: 1,
      }}
    >
      <Header />
      <ScrollView style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.greeting}>Good morning,</Text>
          <Text style={styles.userName}>Ashley Scott</Text>
          <View style={styles.searchBar}>
            <AntDesign name="search1" size={24} color="black" />
            <TextInput placeholder="What you want to listen to?" />
          </View>
        </View>

        {/* Suggestions */}
        <Text style={styles.sectionTitle}>Suggestions for you</Text>
        <FlatList
          data={suggestions}
          horizontal
          renderItem={({ item }) => (
            <ImageBackground
              source={{ uri: item.image }}
              style={styles.suggestionCard}
              imageStyle={{ borderRadius: 8 }}
            >
              <View style={styles.wrapperSuggestionCardContent}>
                <Text style={styles.suggestionTitle}>{item.title}</Text>
                <Text style={styles.suggestionArtist}>{item.artist}</Text>
              </View>
            </ImageBackground>
          )}
          keyExtractor={(item) => item.id}
        />

        {/* Charts */}
        <Text style={styles.sectionTitle}>Charts</Text>
        <FlatList
          data={charts}
          horizontal
          renderItem={({ item }) => (
            <View style={styles.chartCard}>
              <Text style={styles.chartTitle}>{item.title}</Text>
              <Text style={styles.chartDescription}>{item.description}</Text>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />

        {/* Trending Albums */}
        <Text style={styles.sectionTitle}>Trending albums</Text>
        <FlatList
          data={albums}
          horizontal
          renderItem={({ item }) => (
            <View style={styles.albumCard}>
              <Image source={{ uri: item.image }} style={styles.albumImage} />
              <Text style={styles.albumTitle}>{item.title}</Text>
              <Text style={styles.albumArtist}>{item.artist}</Text>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />

        {/* Popular Artists */}
        <Text style={styles.sectionTitle}>Popular artists</Text>
        <FlatList
          data={artists}
          horizontal
          renderItem={({ item }) => (
            <View style={styles.artistCard}>
              <Image source={{ uri: item.image }} style={styles.artistImage} />
              <Text style={styles.artistName}>{item.name}</Text>
              <TouchableOpacity style={styles.followButton}>
                <Text style={styles.followText}>Follow</Text>
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: { padding: 16, backgroundColor: "#fff" },
  header: { marginBottom: 20 },
  greeting: { fontSize: 24, color: Colors.gray.light },
  userName: { fontSize: 28, fontWeight: "bold" },
  searchBar: {
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 50,
    backgroundColor: "#fff",
    flexDirection: "row",
    borderWidth: 1,
    gap: 10,
  },
  sectionTitle: { fontSize: 18, fontWeight: "bold", marginVertical: 10 },
  suggestionCard: {
    width: 150,
    marginRight: 10,
    height: 300,
    justifyContent: "flex-end",
  },
  suggestionTitle: { fontWeight: "bold", color: "#fff" },
  suggestionArtist: { color: "#fff" },
  wrapperSuggestionCardContent: {
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 10,
  },
  chartCard: {
    width: 120,
    padding: 10,
    backgroundColor: "#eef",
    borderRadius: 8,
    marginRight: 10,
  },
  chartTitle: { fontWeight: "bold" },
  chartDescription: { color: "#555" },
  albumCard: { width: 150, marginRight: 10 },
  albumImage: { width: "100%", height: 100, borderRadius: 8 },
  albumTitle: { fontWeight: "bold" },
  albumArtist: { color: "#888" },
  artistCard: { alignItems: "center", marginRight: 10, marginBottom: 30 },
  artistImage: { width: 80, height: 80, borderRadius: 40 },
  artistName: { marginTop: 5 },
  followButton: {
    backgroundColor: "#333",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginTop: 5,
  },
  followText: { color: "#fff" },
});
