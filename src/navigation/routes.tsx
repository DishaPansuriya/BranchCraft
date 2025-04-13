import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screen/HomeScreen';
import DishaModeScreen from '../screen/DishaModeScreen';
import PratikModeScreen from '../screen/PratikModeScreen';
import AnimationScreen from '../screen/Animation';
import CheckToggleScreen from '../screen/CheckToggleScreen';
import ServerDrivenUIScreen from '../screen/ServerDrivenUIScreen';
import HooksScreen from '../screen/HooksScreen';
import PasswordScreen from '../screen/PasswordScreen';
import DropdownScreen from '../screen/DropdownScreen';
import PaymentScreen from '../screen/PaymentScreen';

const Stack = createStackNavigator();

const MyStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="ServerDrivenUI">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="DishaMode" component={DishaModeScreen} />
            <Stack.Screen name="PratikMode" component={PratikModeScreen} />
            <Stack.Screen name="Animation" component={AnimationScreen} />
            <Stack.Screen name="CheckToggle" component={CheckToggleScreen} />
            <Stack.Screen name="ServerDrivenUI" component={ServerDrivenUIScreen} />
            <Stack.Screen name="Notification" component={HooksScreen} />
            <Stack.Screen name="Password" component={PasswordScreen} />
            <Stack.Screen name="Dropdown" component={DropdownScreen} />
            <Stack.Screen name="Payment" component={PaymentScreen} />
        </Stack.Navigator>
    )
}

export default MyStack;