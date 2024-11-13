import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";
import React from "react";
import {
  Ionicons,
  FontAwesome,
  AntDesign,
  Entypo,
  Feather,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import CurrentSong from "../components/CurrentSong";

const FeedScreen = () => {
  const formatDuration = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  const formatTimePosted = (hours: number) => {
    if (hours < 24) {
      return `${hours}h`;
    } else {
      const days = Math.floor(hours / 24);
      return `${days}d`;
    }
  };

  const feedData = [
    // Example feed data
    {
      id: 1,
      avatar:
        "https://res.cloudinary.com/dnta8sd9z/image/upload/v1731293868/ReactNative_MusicApp/PlayList/My%20Library/Image_107_tye76l.png",
      posterName: "Jessica Gonzalez",
      hoursPosted: 72,
      imageBackground:
        "https://res.cloudinary.com/dnta8sd9z/image/upload/v1731470243/ReactNative_MusicApp/song/Image_93_rtqsmy.png",
      songName: "Flower",
      singerName: "Jessica Gonzalez",
      listens: 125,
      duration: 315,
      hearts: 20,
      comments: 3,
      reposts: 1,
    },
    {
      id: 2,
      avatar:
        "https://res.cloudinary.com/dnta8sd9z/image/upload/v1731513119/ReactNative_MusicApp/FeedScreens/Avatar_5_fmlclz.png",
      posterName: "William King",
      hoursPosted: 120,
      imageBackground:
        "https://res.cloudinary.com/dnta8sd9z/image/upload/v1731513118/ReactNative_MusicApp/FeedScreens/Image_94_nweigo.png",
      songName: "Me",
      singerName: "William King",
      listens: 245,
      duration: 300,
      hearts: 45,
      comments: 9,
      reposts: 2,
    },
  ];

  const renderFeedItem = ({ item }: { item: (typeof feedData)[0] }) => (
    <View style={styles.feedItem}>
      <View style={styles.feedItemHeader}>
        <Image source={{ uri: item.avatar }} style={styles.avatar} />
        <View style={styles.posterInfo}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 4,
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 16,
              }}
            >
              {item.posterName}
            </Text>
            <AntDesign name="checkcircleo" size={16} color="#1bbef9" />
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: "gray",
              }}
            >
              Posted a track
            </Text>
            <Entypo name="dot-single" size={30} color="gray" />
            <Text
              style={{
                color: "gray",
              }}
            >
              {formatTimePosted(item.hoursPosted)}
            </Text>
          </View>
        </View>
      </View>
      <ImageBackground
        source={{ uri: item.imageBackground }}
        style={styles.imageBackground}
      >
        <View style={styles.songInfo}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              color: "white",
            }}
          >
            {item.songName}
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                color: "white",
                fontWeight: "medium",
              }}
            >
              {item.singerName}
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                alignContent: "center",
              }}
            >
              <Feather name="play" size={24} color="white" />
              <Text
                style={{
                  color: "white",
                  marginLeft: 8,
                }}
              >
                {item.listens}
              </Text>
              <Entypo name="dot-single" size={30} color="white" />
              <Text
                style={{
                  color: "white",
                }}
              >
                {formatDuration(item.duration)}
              </Text>
            </View>
          </View>
        </View>
      </ImageBackground>

      <View style={styles.socialStats}>
        <View style={styles.socialIcons}>
          <Feather name="heart" size={24} color="gray" />
          <Text style={styles.iconText}>{item.hearts}</Text>
          <MaterialCommunityIcons
            name="comment-text-outline"
            size={24}
            color="gray"
            style={styles.iconSpacing}
          />

          <Text style={styles.iconText}>{item.comments}</Text>
          <Feather
            name="repeat"
            size={24}
            color="gray"
            style={styles.iconSpacing}
          />
          <Text style={styles.iconText}>{item.reposts}</Text>
        </View>
        <TouchableOpacity>
          <Ionicons name="ellipsis-horizontal" size={24} color="gray" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Feed</Text>
        <Ionicons name="tv-outline" size={24} color="black" />
      </View>
      <FlatList
        data={feedData}
        renderItem={renderFeedItem}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
      />
      <CurrentSong />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 18,
  },
  feedItem: {
    marginTop: 30,
  },
  feedItemHeader: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  posterInfo: {
    marginLeft: 10,
  },
  imageBackground: {
    width: "100%",
    height: 300,
    marginTop: 10,
    justifyContent: "flex-end",
  },
  songInfo: {
    padding: 20,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    gap: 10,
  },
  socialStats: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  socialIcons: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconText: {
    marginLeft: 5,
  },
  iconSpacing: {
    marginLeft: 15,
  },
});

export default FeedScreen;
