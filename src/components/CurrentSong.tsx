import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Modal,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  AntDesign,
  FontAwesome,
  Entypo,
  MaterialCommunityIcons,
  Feather,
} from "@expo/vector-icons";
import {
  updateTime,
  closeSong,
  playPause,
  nextSong,
  prevSong,
  playRandomSong,
} from "../redux/features/currentSong/currentSongSlice";

const CurrentSong = () => {
  const dispatch = useDispatch();
  const { song, isPlaying, currentTime } = useSelector(
    (state: {
      currentSong: { song: any; isPlaying: boolean; currentTime: number };
    }) => state.currentSong
  );

  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;
    if (isPlaying) {
      interval = setInterval(() => {
        dispatch(updateTime(currentTime + 1));
      }, 1000);
    } else if (!isPlaying && currentTime !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isPlaying, currentTime, dispatch]);

  const handlePlayPause = () => {
    dispatch(playPause());
  };

  const handleClose = () => {
    dispatch(closeSong());
  };

  const handleNext = () => {
    dispatch(nextSong());
  };

  const handlePrev = () => {
    dispatch(prevSong());
  };

  const handleRandom = () => {
    dispatch(playRandomSong());
  };

  if (!song) return null;

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        {/* Song info */}
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <View style={styles.songInfo}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Image source={{ uri: song.img }} style={styles.image} />
              <View style={styles.songContent}>
                <Text
                  style={[styles.title, { maxWidth: 200 }]}
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  {song.title}
                </Text>
                <Text style={styles.artist}>{song.artist}</Text>
              </View>
            </View>
            <View style={styles.controls}>
              <AntDesign name="hearto" size={28} color="white" />
              <AntDesign
                name={isPlaying ? "pausecircleo" : "playcircleo"}
                size={40}
                color="white"
                onPress={() => handlePlayPause()}
              />
              <FontAwesome
                name="close"
                size={32}
                color="white"
                onPress={handleClose}
              />
            </View>
          </View>
        </TouchableOpacity>

        {/* Progress bar */}
        <View style={styles.progressBar}>
          <View
            style={{
              ...styles.progress,
              width: `${(currentTime / song.duration) * 100}%`,
            }}
          />
        </View>
      </View>

      {/* Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <ImageBackground
          style={styles.modalContainer}
          source={{
            uri: "https://res.cloudinary.com/dnta8sd9z/image/upload/v1731465209/ReactNative_MusicApp/a53392f0-2d90-48a0-8bfe-0ec9018d1b8b.png",
          }}
        >
          <View style={styles.modalHeader}>
            <Text style={styles.modalHeaderTitle}>Play</Text>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <AntDesign name="down" size={24} color="white" />
            </TouchableOpacity>
          </View>
          <View style={styles.modalBody}>
            <Text style={styles.modalTitle}>{song.title}</Text>
            <Text style={styles.modalArtist}>{song.artist}</Text>
            <View style={styles.waveform}>
              {/* Placeholder for waveform */}
            </View>
            <View style={styles.timeContainer}>
              <Text style={styles.timeText}>{formatTime(currentTime)}</Text>
              <Text style={styles.timeText}>{formatTime(song.duration)}</Text>
            </View>
            <View style={styles.modalControls}>
              <FontAwesome
                name="random"
                size={24}
                color="white"
                onPress={handleRandom}
              />
              <AntDesign
                name="stepbackward"
                size={24}
                color="white"
                onPress={handlePrev}
              />
              <AntDesign
                name={isPlaying ? "pausecircleo" : "playcircleo"}
                size={80}
                color="white"
                onPress={() => handlePlayPause()}
              />
              <AntDesign
                name="stepforward"
                size={24}
                color="white"
                onPress={handleNext}
              />
              <Entypo name="dots-three-horizontal" size={24} color="white" />
            </View>
            <View style={styles.socialContainer}>
              <View style={styles.socialStats}>
                <AntDesign name="hearto" size={24} color="white" />
                <Text
                  style={{
                    color: "white",
                    fontSize: 16,
                    marginLeft: -10,
                  }}
                >
                  12k
                </Text>
                <MaterialCommunityIcons
                  name="comment-text-outline"
                  size={24}
                  color="white"
                />
                <Text
                  style={{
                    color: "white",
                    fontSize: 16,
                    marginLeft: -10,
                  }}
                >
                  450
                </Text>
              </View>
              <Feather name="upload" size={24} color="white" />
            </View>
          </View>
        </ImageBackground>
      </Modal>
    </View>
  );
};

const formatTime = (time: number) => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
};

const styles = StyleSheet.create({
  wrapper: {
    height: 86,
    alignItems: "center",
  },
  container: {
    position: "absolute",
    bottom: 0,
    width: 400,
    backgroundColor: "#000",
    padding: 16,
    paddingBottom: 6,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
  },
  songInfo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  songContent: {
    flexDirection: "column",
    marginLeft: 10,
  },
  title: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
  },
  artist: {
    fontSize: 16,
    color: "white",
  },
  image: {
    width: 50,
    height: 50,
  },
  controls: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    gap: 18,
    paddingRight: 10,
  },
  progressBar: {
    height: 4,
    backgroundColor: "#333",
    borderRadius: 5,
    overflow: "hidden",
    marginTop: 10,
  },
  progress: {
    height: "100%",
    backgroundColor: "#fff",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 18,
  },
  modalHeaderTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  modalBody: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 18,
    paddingBottom: 60,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  modalArtist: {
    fontSize: 18,
    color: "white",
    opacity: 0.5,
  },
  waveform: {
    width: "100%",
    height: 100,
    backgroundColor: "#eee",
    marginVertical: 20,
  },
  timeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  timeText: {
    fontSize: 16,
    color: "white",
  },
  modalControls: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    marginTop: 20,
  },
  socialContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 38,
  },
  socialStats: {
    flexDirection: "row",
    gap: 20,
  },
});

export default CurrentSong;
