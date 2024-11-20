import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const songs = [
  {
    id: "1",
    title: "FLOWER",
    artist: "Jessica Gonzalez",
    plays: "2.1M",
    duration: "3:36",
    liked: true,
    cover: { uri: "https://i.ibb.co/kqttvqV/Image-107.png" }, // Đường dẫn ảnh từ Internet
  },
  {
    id: "2",
    title: "Shape of You",
    artist: "Anthony Taylor",
    plays: "68M",
    duration: "3:35",
    liked: true,
    cover: { uri: "https://i.ibb.co/5TcvcBG/Image-106.png" },
  },
  {
    id: "3",
    title: "Blinding Lights",
    artist: "Ashley Scott",
    songs: "4 songs",
    liked: false,
    cover: { uri: "https://i.ibb.co/zV15c3d/Image-105.png" },
  },
  {
    id: "4",
    title: "Levitating",
    artist: "Anthony Taylor",
    plays: "9M",
    duration: "7:48",
    liked: true,
    cover: { uri: "https://i.ibb.co/5Y8HmZD/Image-104.png" },
  },
  {
    id: "5",
    title: "Astronaut in the Ocean",
    artist: "Pedro Moreno",
    plays: "23M",
    duration: "3:36",
    liked: false,
    cover: { uri: "https://i.ibb.co/B2gLRsy/Image-103.png" },
  },
  {
    id: "6",
    title: "Dynamite",
    artist: "Elena Jimenez",
    plays: "10M",
    duration: "6:22",
    liked: true,
    cover: { uri: "https://i.ibb.co/xfYML8f/Image-102.png" },
  },
];


const LibraryScreen = () => {
  const renderItem = ({ item }) => (
    <View style={styles.songItem}>
      <Image source={item.cover} style={styles.songImage} />
      <View style={styles.songDetails}>
        <Text style={styles.songTitle}>{item.title}</Text>
        <Text style={styles.songInfo}>
          {item.artist} • {item.plays} • {item.duration || item.songs}
        </Text>
      </View>
      {item.duration && (
        <TouchableOpacity>
          <Ionicons
            name={item.liked ? "heart" : "heart-outline"}
            size={24}
            color={item.liked ? "blue" : "gray"}
          />
        </TouchableOpacity>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Your Library</Text>
        <Ionicons name="search" size={24} color="black" />
      </View>
      <View style={styles.tags}>
        {["Playlists", "New tag", "Songs", "Albums", "Artists"].map((tag) => (
          <TouchableOpacity key={tag} style={styles.tag}>
            <Text style={styles.tagText}>{tag}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.artistContainer}>
        <Image
          source={{uri:"https://i.ibb.co/YcnJ0L7/Image-101.png"}}
          style={styles.artistImage}
        />
        <View>
          <Text style={styles.artistName}>Mer Watson</Text>
          <Text style={styles.artistFollowers}>1.234K Followers</Text>
        </View>
        <TouchableOpacity style={styles.followButton}>
          <Text style={styles.followText}>Follow</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={songs}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  tags: {
    flexDirection: "row",
    marginBottom: 16,
  },
  tag: {
    marginRight: 10,
    backgroundColor: "#f0f0f0",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 16,
  },
  tagText: {
    fontSize: 14,
    fontWeight: "500",
  },
  artistContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  artistImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  artistName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  artistFollowers: {
    fontSize: 12,
    color: "gray",
  },
  followButton: {
    marginLeft: "auto",
    backgroundColor: "#000",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  followText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },
  songItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  songImage: {
    width: 50,
    height: 50,
    borderRadius: 8,
    marginRight: 10,
  },
  songDetails: {
    flex: 1,
  },
  songTitle: {
    fontSize: 16,
    fontWeight: "500",
  },
  songInfo: {
    fontSize: 12,
    color: "gray",
  },
});

export default LibraryScreen;
