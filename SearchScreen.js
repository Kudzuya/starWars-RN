import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Dimensions,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

const SearchScreen = () => {
  const [searchText, setSearchText] = useState("");
  const [characters, setCharacters] = useState([]);
  const [spaceships, setSpaceships] = useState([]); 

  const fetchCharacters = async () => {
    try {
      const response = await axios.get("https://swapi.dev/api/people/");
      setCharacters(response.data.results);
    } catch (error) {
      console.error("Error fetching characters:", error);
    }
  };

  const fetchSpaceships = async () => {
    try {
      const response = await axios.get("https://swapi.dev/api/starships/");
      setSpaceships(response.data.results);
    } catch (error) {
      console.error("Error fetching spaceships:", error);
    }
  };

  useEffect(() => {
    fetchCharacters();
    fetchSpaceships();
  }, []);

  const ItemScreen = ({ route }) => {
    const { item } = route.params;
  };
  const navigation = useNavigation();

  const handleItemPress = (item) => {
    navigation.navigate("Item", { item });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.searchText}>Введите имя персонажа/корабля:</Text>
      <TextInput
        style={styles.input}
        placeholder="Search..."
        placeholderTextColor="goldenrod"
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
      />
      <View>
        <Text style={styles.resultText}>Персонажи:</Text>
        <FlatList
          data={characters.filter((character) =>
            character.name.toLowerCase().includes(searchText.toLowerCase())
          )}
          keyExtractor={(item) => item.url}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleItemPress(item)}>
              <Text style={styles.listItem}>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
        <Text style={styles.resultText}>Космические корабли:</Text>
        <FlatList
          data={spaceships.filter((spaceship) =>
            spaceship.name.toLowerCase().includes(searchText.toLowerCase())
          )}
          keyExtractor={(item) => item.url}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleItemPress(item)}>
              <Text style={styles.listItem}>{item.name}</Text>
            </TouchableOpacity>
          )}
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
    backgroundColor: "black",
  },
  searchText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    color: "goldenrod",
  },
  input: {
    width: Dimensions.get("window").width * 0.8,
    height: 40,
    backgroundColor: "gray",
    color: "white",
    paddingHorizontal: 10,
    marginTop: 20,
    color: "goldenrod",
    borderRadius: 5,
  },
  resultText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    color: "goldenrod",
    marginTop: 20,
  },
  listItem: {
    color: "white",
    fontSize: 16,
    marginTop: 6,
  },
});

export default SearchScreen;
