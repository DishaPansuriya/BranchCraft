import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import homescreen from '../screen/homescreen';

const Stack = createStackNavigator();

export default function MyStack() {
return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="homescreen" component={homescreen} />
    </Stack.Navigator>
);
}
