import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// components
import Home from "./Home";
import ItemScreen from "./ItemScreen";
import SearchScreen from "./SearchScreen";
import FavoriteScreen from "./FavoriteScreen";
import { FavoriteProvider } from "./FavoriteContext";

const Stack = createStackNavigator();

const App = () => {
  const headerStyle = {
    backgroundColor: "black",
  };

  const headerTitleStyle = {
    color: "goldenrod",
  };

  return (
    <FavoriteProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle,
            headerTitleStyle,
            headerTintColor: "white",
          }}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Item" component={ItemScreen} />
          <Stack.Screen name="Search" component={SearchScreen} />
          <Stack.Screen name="Favorites" component={FavoriteScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </FavoriteProvider>
  );
};

export default App;
