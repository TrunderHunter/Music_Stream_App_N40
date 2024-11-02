import { Colors } from "../constants/Colors";
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const IntroScreen = () => {
  return (
    <View>
      <ImageBackground
        source={require("../assets/images/splash.png")}
        style={{
          width: "100%",
          height: "100%",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <Image
          source={require("../assets/images/logo.png")}
          style={{
            marginTop: 100,
          }}
        />
        <Text
          style={{
            fontSize: 50,
            fontWeight: 700,
            marginTop: 100,
            color: "white",
          }}
        >
          Your music
        </Text>
        <Text
          style={{
            fontSize: 50,
            marginTop: 8,
            fontWeight: 700,
            color: "white",
            paddingHorizontal: 100,
            textAlign: "center",
          }}
        >
          Your artists
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: "black",
            padding: 20,
            borderRadius: 99,
            marginTop: 120,
            width: "80%",
            alignItems: "center",
          }}
          onPress={() => {}}
        >
          <Text
            style={{
              color: "white",
              fontSize: 16,
              fontWeight: 500,
            }}
          >
            Create an account
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            marginTop: 20,
            width: "80%",
            alignItems: "center",
            backgroundColor: "white",
            padding: 20,
            borderRadius: 99,
          }}
          onPress={() => {
            // Move to Home screen
          }}
        >
          <Text
            style={{
              color: Colors.textBlue.light,
              fontSize: 16,
              fontWeight: 500,
            }}
          >
            i already have an account
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default IntroScreen;
