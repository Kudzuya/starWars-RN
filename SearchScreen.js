import React from 'react';
import { View, Text, StyleSheet, TextInput, Dimensions } from "react-native";

const SearchScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.searchText}>Введите вашего персонажа:</Text>
      <TextInput
        style={styles.input}
        placeholder="Search..."
        placeholderTextColor="goldenrod"
      />
      <View>
        <Text>Здесь все персонажи и звездолёты</Text>
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
    color: 'goldenrod',
  },
  input: {
    width: Dimensions.get("window").width * 0.8,
    height: 40,
    backgroundColor: "gray",
    color: "white",
    paddingHorizontal: 10,
    marginTop: 20,
    color: 'goldenrod',
  },
});

export default SearchScreen;
