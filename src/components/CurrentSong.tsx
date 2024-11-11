import React, { useEffect } from "react";
import { View, Text, Image, StyleSheet, Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import {
  updateTime,
  closeSong,
  playPause,
} from "../redux/features/currentSong/currentSongSlice";

const CurrentSong = () => {
  const dispatch = useDispatch();
  const { song, isPlaying, currentTime } = useSelector(
    (state: {
      currentSong: { song: any; isPlaying: boolean; currentTime: number };
    }) => state.currentSong
  );

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

  if (!song) return null;

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        {/* Song info */}
        <View style={styles.songInfo}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image source={{ uri: song.img }} style={styles.image} />
            <View style={styles.songContent}>
              <Text style={styles.title}>{song.title}</Text>
              <Text style={styles.artist}>{song.artist}</Text>
            </View>
          </View>
          <View style={styles.controls}>
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
    </View>
  );
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
});

export default CurrentSong;
