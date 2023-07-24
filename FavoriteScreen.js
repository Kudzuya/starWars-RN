import React from 'react';
import { useFavorites } from "./FavoriteContext";
import { View, Text, StyleSheet, Image, FlatList, Dimensions, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const FavoriteScreen = () => {
  const { favorites, removeFromFavorites } = useFavorites();

  const sizedH = Dimensions.get("window").height;
  const sizedW = Dimensions.get("window").width;

  const imageH = sizedH * 0.3;
  const imageW = sizedW * 0.6;

  const handleRemoveItem = (item) => {
    removeFromFavorites(item);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ваши любимые персонажи и звездолёты из "Звездных войн"</Text>
      <Image
        source={require("./assets/favorite-added.png")}
        style={[styles.image, { height: imageH, width: imageW }]}
      />
      <FlatList
        data={favorites}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.item}>{item.name}</Text>
            <TouchableOpacity onPress={() => handleRemoveItem(item)}>
              <AntDesign name="delete" size={20} color="orangered" style={styles.deleteIcon} />
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item) => item.name}
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
    color: "goldenrod",
    fontSize: 18,
    textAlign: "center",
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center", 
    marginBottom: 5,
  },
  item: {
    fontSize: 18,
    color: "white",
    marginRight: 10,
    color: "goldenrod",
    alignSelf: 'center',
  },
  deleteIcon: {
    paddingTop: 5,
  },
});

export default FavoriteScreen;
