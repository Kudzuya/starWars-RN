import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { useFavorites } from "./FavoriteContext";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const ItemScreen = ({ route }) => {
  const { item } = route.params;
  const [heartColor, setHeartColor] = useState("goldenrod");

  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();

  const toggleHeartColor = () => {
    if (isFavorite(item)) {
      removeFromFavorites(item);
      setHeartColor("goldenrod");
    } else {
      addToFavorites(item);
      setHeartColor("red");
    }
  };

  const navigation = useNavigation(); 

  const handleMoveToFavorites = () => {
    navigation.navigate("Favorites"); 
  };

  
  return (
    <View style={styles.container}>
      <Text style={styles.itemName}>{item.name}</Text>
      <View style={styles.itemInfoContainer}>
        {item.hasOwnProperty("height") && (
          <>
            <Text style={styles.itemInfo}>Рост: {item.height}</Text>
            <Text style={styles.itemInfo}>Вес: {item.mass}</Text>
            <Text style={styles.itemInfo}>Цвет волос: {item.hair_color}</Text>
            <Text style={styles.itemInfo}>Цвет кожи: {item.skin_color}</Text>
            <Text style={styles.itemInfo}>Цвет глаз: {item.eye_color}</Text>
            <Text style={styles.itemInfo}>Дата рождения: {item.birth_year}</Text>
            <Text style={styles.itemInfo}>Пол: {item.gender}</Text>
          </>
        )}
        {item.hasOwnProperty("cost_in_credits") && (
          <>
            <Text style={styles.itemInfo}>Модель: {item.model}</Text>
            <Text style={styles.itemInfo}>
              Производитель: {item.manufacturer}
            </Text>
            <Text style={styles.itemInfo}>
              Цена в валюте: {item.cost_in_credits}
            </Text>
            <Text style={styles.itemInfo}>Длинна: {item.length}</Text>
            <Text style={styles.itemInfo}>
              Максимальная скорость: {item.max_atmosphering_speed}
            </Text>
            <Text style={styles.itemInfo}>Экипаж: {item.crew}</Text>
            <Text style={styles.itemInfo}>Пассажиры: {item.passengers}</Text>
            <Text style={styles.itemInfo}>
              Грузовая вместимость: {item.cargo_capacity}
            </Text>
            <Text style={styles.itemInfo}>
              Потребление ресурсов: {item.consumables}
            </Text>
            <Text style={styles.itemInfo}>
              Оценка гипердвигателя: {item.hyperdrive_rating}
            </Text>
            <Text style={styles.itemInfo}>
              Скорость в мегасветовых часах: {item.MGLT}
            </Text>
            <Text style={styles.itemInfo}>
              Классификация: {item.starship_class}
            </Text>
          </>
        )}
      </View>
      <TouchableOpacity onPress={toggleHeartColor}>
        {heartColor === "goldenrod" ? (
          <AntDesign
            name="hearto"
            size={45}
            color="goldenrod"
            style={styles.heartIcon}
          />
        ) : (
          <AntDesign
            name="heart"
            size={45}
            color="red"
            style={styles.heartIcon}
          />
        )}
      </TouchableOpacity>
      <TouchableOpacity onPress={handleMoveToFavorites}>
        <Text style={styles.itemName}>Перейти в избранное</Text>
      </TouchableOpacity>
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
  itemName: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "goldenrod",
  },
  itemImage: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  itemInfoContainer: {
    alignItems: "flex-start",
  },
  itemInfo: {
    fontSize: 16,
    marginBottom: 5,
    color: "white",
  },
  heartIcon: {
    paddingTop: 20,
  },
});

export default ItemScreen;
