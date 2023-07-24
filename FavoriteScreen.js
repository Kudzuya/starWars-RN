import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";

const FavoriteScreen = () => {
  const sizedH = Dimensions.get("window").height;
  const sizedW = Dimensions.get("window").width;

  const imageH = sizedH * 0.3;
  const imageW = sizedW * 0.6;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ваши любимые персонажи и звездолёты из "Звездных войн"</Text>
      <Image
        source={require("./assets/favorite-added.png")}
        style={[styles.image, { height: imageH, width: imageW }]}
      />
      <Text style={styles.description}>
        Вы можете добавить ещё персонажей в свой список избранных и просматривать их здесь!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  title: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  image: {
    width: Dimensions.get("window").width * 0.8,
    height: 200,
    resizeMode: "cover",
    borderRadius: 10,
    marginBottom: 20,
  },
  description: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
    paddingHorizontal: 20,
  },
});

export default FavoriteScreen;
