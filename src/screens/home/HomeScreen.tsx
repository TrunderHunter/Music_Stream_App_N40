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
  ];

  const charts = [
    {
      id: "1",
      title: "Top 50",
      subtitle: "Canada",
      description: "Daily chart-toppers update",
      uri: "https://res.cloudinary.com/dnta8sd9z/image/upload/v1731126342/ReactNative_MusicApp/Charts/charts01_vpxica.jpg",
    },
    {
      id: "2",
      title: "Top 50",
      subtitle: "Global",
      description: "Daily chart-toppers update",
      uri: "https://res.cloudinary.com/dnta8sd9z/image/upload/v1731126441/ReactNative_MusicApp/Charts/charts04_de0htv.jpg",
    },
    {
      id: "3",
      title: "Top 50",
      subtitle: "USA",
      description: "Daily chart-toppers update",
      uri: "https://res.cloudinary.com/dnta8sd9z/image/upload/v1731126442/ReactNative_MusicApp/Charts/charts03_kuspgo.jpg",
    },
    {
      id: "4",
      title: "Top 50",
      subtitle: "UK",
      description: "Daily chart-toppers update",
      uri: "https://res.cloudinary.com/dnta8sd9z/image/upload/v1731126443/ReactNative_MusicApp/Charts/charts02_mfq0hj.jpg",
    },
  ];

  const albums = [
    {
      id: "1",
      title: "ME",
      artist: "Jessica Gonzalez",
      image:
        "https://res.cloudinary.com/dnta8sd9z/image/upload/v1731285166/ReactNative_MusicApp/TrendingAlbums/trend01_grcujf.png",
    },
    {
      id: "2",
      title: "Magna Nost",
      artist: "Brian Thomas",
      image:
        "https://res.cloudinary.com/dnta8sd9z/image/upload/v1731285166/ReactNative_MusicApp/TrendingAlbums/trend02_z6aphj.png",
    },
    {
      id: "3",
      title: "The Best of Me",
      artist: "David Foster",
      image:
        "https://res.cloudinary.com/dnta8sd9z/image/upload/v1731285165/ReactNative_MusicApp/TrendingAlbums/trend03_lvnknj.png",
    },
  ];

  const artists = [
    {
      id: "1",
      name: "Jennifer Wilson",
      image:
        "https://res.cloudinary.com/dnta8sd9z/image/upload/v1731285423/ReactNative_MusicApp/PopularArtists/Image_39_aph9l7.png",
    },
    {
      id: "2",
      name: "Elizabeth Hall",
      image:
        "https://res.cloudinary.com/dnta8sd9z/image/upload/v1731285423/ReactNative_MusicApp/PopularArtists/Image_40_uet8uc.png",
    },
    {
      id: "3",
      name: "Elizabeth Hall",
      image:
        "https://res.cloudinary.com/dnta8sd9z/image/upload/v1731285423/ReactNative_MusicApp/PopularArtists/Image_41_ly5ydy.png",
    },
    {
      id: "4",
      name: "Sabrina Carpenter",
      image:
        "https://res.cloudinary.com/dnta8sd9z/image/upload/v1731285651/ReactNative_MusicApp/PopularArtists/SabrinaCarpenter.png",
    },
    {
      id: "5",
      name: "Taylor Swift",
      image:
        "https://res.cloudinary.com/dnta8sd9z/image/upload/v1731285903/ReactNative_MusicApp/PopularArtists/taylor-swift-photo-phone-wallpaper-hd-uhdpaper.com-609_2_a_lrjpcm.jpg",
    },
    {
      id: "6",
      name: "Lil Nas X",
      image:
        "https://res.cloudinary.com/dnta8sd9z/image/upload/v1731286006/ReactNative_MusicApp/PopularArtists/lil-nas-x-met-gala-2024-singer-phone-wallpaper-hd-uhdpaper.com-864_3_a_mv3pqo.jpg",
    },
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
          showsHorizontalScrollIndicator={false}
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
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={styles.chartCard}>
              <ImageBackground
                source={{ uri: item.uri }}
                style={styles.chartImageBackground}
              >
                <Text style={styles.chartTitle}>{item.title}</Text>
                <Text style={styles.chartSubtitle}>{item.subtitle}</Text>
              </ImageBackground>
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
          showsHorizontalScrollIndicator={false}
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
          showsHorizontalScrollIndicator={false}
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
    marginRight: 14,
  },
  chartImageBackground: {
    width: 120,
    height: 120,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  chartSubtitle: { color: "#fff" },
  chartTitle: { fontWeight: "bold", color: "#fff" },
  chartDescription: {
    color: "#555",
    textAlign: "justify",
  },
  albumCard: { width: 120, marginRight: 14 },
  albumImage: { width: 120, height: 120, borderRadius: 8 },
  albumTitle: { fontWeight: "bold" },
  albumArtist: { color: "#888" },
  artistCard: { alignItems: "center", marginRight: 14, marginBottom: 30 },
  artistImage: { width: 120, height: 120, borderRadius: 99 },
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
