import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

// Import your screens
import HomeScreen from '../components/HomeScreen';
import HistoryScreen from '../components/HistoryScreen';
import TouristSpotsScreen from '../components/TouristSpotScreen';
import GeographyScreen from '../components/GeographyScreen';

const Drawer = createDrawerNavigator();

// Main Navigator with Drawer
const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="History" component={HistoryScreen} />
        <Drawer.Screen name="Tourist Spots" component={TouristSpotsScreen} />
        <Drawer.Screen name="Geography" component={GeographyScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
