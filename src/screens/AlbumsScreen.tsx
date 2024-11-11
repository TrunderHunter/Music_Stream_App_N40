import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import {
  Ionicons,
  MaterialIcons,
  Entypo,
  Octicons,
  FontAwesome,
  AntDesign,
  Feather,
} from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import {
  setSong,
  setPlaylist,
  playRandomSong,
} from "../redux/features/currentSong/currentSongSlice";
import CurrentSong from "../components/CurrentSong";

import { NavigationProp, RouteProp } from "@react-navigation/native";

type AlbumsScreenProps = {
  route: RouteProp<
    {
      params: {
        playList: {
          uri: string;
          title: string;
          subtitle: string;
          description: string;
        };
      };
    },
    "params"
  >;
  navigation: NavigationProp<any>;
};

const AlbumsScreen = ({ route, navigation }: AlbumsScreenProps) => {
  const dispatch = useDispatch();
  const { playList } = route.params;

  const songList = [
    {
      id: 1,
      title: "FLOWER",
      artist: "Jessica Gonzalez",
      duration: 216,
      numberOfListen: 2100000,
      img: "https://res.cloudinary.com/dnta8sd9z/image/upload/v1731293869/ReactNative_MusicApp/PlayList/My%20Library/Image_101_xediif.png",
    },
    {
      id: 2,
      title: "Shape of You",
      artist: "Ed Sheeran",
      duration: 215,
      numberOfListen: 68000000,
      img: "https://res.cloudinary.com/dnta8sd9z/image/upload/v1731293865/ReactNative_MusicApp/PlayList/My%20Library/Image_102_rqmime.png",
    },
    {
      id: 3,
      title: "Blinding Lights",
      artist: "Brian Baliey",
      duration: 279,
      numberOfListen: 93000000,
      img: "https://res.cloudinary.com/dnta8sd9z/image/upload/v1731293867/ReactNative_MusicApp/PlayList/My%20Library/Image_103_tpof2j.png",
    },
    {
      id: 4,
      title: "Levitating",
      artist: "Anthony Taylor",
      duration: 823,
      numberOfListen: 9000000,
      img: "https://res.cloudinary.com/dnta8sd9z/image/upload/v1731293865/ReactNative_MusicApp/PlayList/My%20Library/Image_104_owz7bu.png",
    },
    {
      id: 5,
      title: "Astronaut In The Ocean",
      artist: "Pedro Moreno",
      duration: 216,
      numberOfListen: 23000000,
      img: "https://res.cloudinary.com/dnta8sd9z/image/upload/v1731293866/ReactNative_MusicApp/PlayList/My%20Library/Image_105_bwr9tc.png",
    },
    {
      id: 6,
      title: "Dynamite",
      artist: "Elena Jimenez",
      duration: 396,
      numberOfListen: 10000000,
      img: "https://res.cloudinary.com/dnta8sd9z/image/upload/v1731293865/ReactNative_MusicApp/PlayList/My%20Library/Image_106_wvfn6t.png",
    },
  ];

  const handleSongPress = (song: {
    id: number;
    title: string;
    artist: string;
    duration: number;
    numberOfListen: number;
    img: string;
  }) => {
    dispatch(setPlaylist(songList));
    dispatch(setSong(song));
  };

  const handleRandomPress = () => {
    dispatch(setPlaylist(songList));
    dispatch(playRandomSong());
  };

  const handlePlayPress = () => {
    dispatch(setPlaylist(songList));
    dispatch(setSong(songList[0]));
  };

  const formatNumberOfListen = (numberOfListen: number) => {
    if (numberOfListen >= 1000000) {
      return (numberOfListen / 1000000).toFixed(1) + "M";
    } else if (numberOfListen >= 1000) {
      return (numberOfListen / 1000).toFixed(0) + "K";
    } else {
      return numberOfListen.toString();
    }
  };

  const formatNumberOfDuration = (duration: number) => {
    return `${Math.floor(duration / 60)}:${(duration % 60)
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <View style={styles.container}>
      {/* Header Back */}
      <View style={styles.header}>
        <Ionicons
          name="chevron-back"
          size={28}
          color="gray"
          onPress={() => navigation.goBack()}
        />
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
            <Octicons name="dot-fill" size={24} color="gray" />
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
          <TouchableOpacity onPress={handleRandomPress}>
            <FontAwesome name="random" size={24} color="gray" />
          </TouchableOpacity>
          <TouchableOpacity onPress={handlePlayPress}>
            <AntDesign name="play" size={58} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      {/* List Song, use FlatList */}
      <FlatList
        data={songList}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingVertical: 10,
              borderBottomWidth: 1,
              borderBottomColor: "#f5f5f5",
            }}
            onPress={() => handleSongPress(item)}
          >
            <View
              style={{
                flexDirection: "row",
                gap: 10,
                alignItems: "center",
              }}
            >
              <Image
                source={{ uri: item.img }}
                style={{ width: 70, height: 70 }}
              />
              <View>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "bold",
                  }}
                >
                  {item.title}
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    color: "gray",
                    marginVertical: 4,
                  }}
                >
                  {item.artist}
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    gap: 14,
                    alignItems: "center",
                  }}
                >
                  <Feather name="play" size={20} color="gray" />
                  <Text
                    style={{
                      fontSize: 14,
                      color: "gray",
                      marginLeft: -8,
                    }}
                  >
                    {formatNumberOfListen(item.numberOfListen)}
                  </Text>
                  <Octicons name="dot-fill" size={20} color="gray" />
                  <Text
                    style={{
                      fontSize: 14,
                      color: "gray",
                      marginLeft: -8,
                    }}
                  >
                    {formatNumberOfDuration(item.duration)}
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                gap: 10,
                alignItems: "center",
              }}
            >
              <Entypo name="dots-three-horizontal" size={24} color="gray" />
            </View>
          </TouchableOpacity>
        )}
      />
      {/* <View style={{ height: 220 }}></View> */}
      <CurrentSong />
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
    position: "relative",
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
