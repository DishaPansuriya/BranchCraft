import React from 'react';
import { View, Text ,Button, StyleSheet,Alert} from 'react-native';

const HomeScreen = () => {
    return (
        <View style={Style.container}>
            <Text>Welcome to Home Screen</Text>
            <Button
                title="Pratik"
                onPress={() => Alert.alert(
                'hello !')}
                />
        </View>
    );
};

const Style = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#f2f2f2'
    }
})

export default HomeScreen;  
