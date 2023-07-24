import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import SearchScreen from './SearchScreen';
import FavoriteScreen from './FavoriteScreen';

const Stack = createStackNavigator();

const App = () => {
  const headerStyle = {
    backgroundColor: 'black',
  };

  const headerTitleStyle = {
    color: 'goldenrod',
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle,
          headerTitleStyle,
          headerTintColor: 'white', // Color for the back button (if enabled)
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="Favorites" component={FavoriteScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
