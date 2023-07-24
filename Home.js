import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { Octicons } from "@expo/vector-icons";
import { StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const handleImagePress = () => {
    navigation.navigate("Favorites");
  };

  const navigation = useNavigation();

  const handleSearchPress = () => {
    navigation.navigate("Search");
  };

  const screenWidth = Dimensions.get("window").width;
  const screenHeight = Dimensions.get("window").height;

  const imageWidth = screenWidth * 0.8;
  const imageHeight = screenHeight * 0.6;

  const imageWidth2 = screenWidth * 0.2;
  const imageHeight2 = screenHeight * 0.05;

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <View style={styles.container3}>
        <Text style={[styles.greenText, { paddingRight: 5 }]}>
          Вас я приветствую,{"\n"} избранное здесь ваше
        </Text>
        <TouchableOpacity onPress={handleImagePress}>
          <Image
            source={require("./assets/cuteYouda.webp")}
            style={{
              width: imageWidth2,
              height: imageHeight2,
              borderRadius: 4,
            }}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.goldenrodText}>Star Wars App</Text>
      <Image
        source={require("./assets/logo.jpg")}
        style={{
          width: imageWidth,
          height: imageHeight,
        }}
      />

      <Text style={styles.goldenrodSmText}>
        Здесь вы можете найти любимых персонажей из киновселенной звёздных войн
      </Text>

      <View style={styles.container2}>
        <TouchableOpacity onPress={handleSearchPress}>
          <Text style={[styles.whiteText, { paddingRight: 5 }]}>Search</Text>
        </TouchableOpacity>
        <Octicons
          name="search"
          size={20}
          color="white"
          onPress={handleSearchPress}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 50,
    backgroundColor: "black",
    color: "white",
  },
  container2: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 25,
  },
  container3: {
    position: "absolute",
    top: 0,
    right: 0,
    paddingBottom: 15,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    width: "100%",
  },
  goldenrodText: {
    color: "goldenrod",
    fontSize: 24,
    fontWeight: "bold",
    alignSelf: "center",
  },
  goldenrodSmText: {
    color: "goldenrod",
    fontSize: 18,
    fontWeight: "bold",
    alignSelf: "center",
    textAlign: "center",
  },
  whiteText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    alignSelf: "center",
    textAlign: "center",
  },
  greenText: {
    color: "green",
    fontSize: 10,
    fontWeight: "bold",
    alignSelf: "center",
    textAlign: "center",
  },
});

export default Home;
