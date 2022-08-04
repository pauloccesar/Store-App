import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import CartScreen from "../screens/CartScreen";

const Stack = createStackNavigator();

const Routes: React.FC = () => (
  <NavigationContainer>
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Cart" component={CartScreen} />
  </Stack.Navigator>
  </NavigationContainer>

);

export default Routes;