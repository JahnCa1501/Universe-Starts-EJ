import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from './src/components/screens/Home';
import Apod from './src/components/screens/Apod';
import Neo from './src/components/screens/Neo'
import MarsRover from './src/components/screens/MarsRover'

const Stack = createStackNavigator(); 

export default function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ title: "UNIVERSE STARTS EJ"}}/>
        <Stack.Screen name="APOD" component={Apod} options={{ title: "Astronomic Picture of the day"}}/>
        <Stack.Screen name="NEO" component={Neo} options={{ title: "Near Earth Object"}}/>
        <Stack.Screen name="MRP" component={MarsRover} options={{ title: "Mars Rover Photos"}}/>
      </Stack.Navigator> 
    </NavigationContainer>
  ); s
}


