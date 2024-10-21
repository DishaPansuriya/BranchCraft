import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screen/HomeScreen';
import DishaModeScreen from '../screen/DishaModeScreen';
import PratikModeScreen from '../screen/PratikModeScreen';

const Stack = createStackNavigator();

const MyStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="DishaMode" component={DishaModeScreen} />
            <Stack.Screen name="PratikMode" component={PratikModeScreen} />
        </Stack.Navigator>
    );
}

export default MyStack