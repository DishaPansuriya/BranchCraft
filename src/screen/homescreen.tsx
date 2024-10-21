import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { ApplicationScreenProps } from '../navigation/navigations';

export const HomeScreen = ({ navigation }: ApplicationScreenProps) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('DishaMode')} style={styles.button}>
                <Text style={styles.textStyle}>Disha</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('PratikMode')} style={styles.button}>
                <Text style={styles.textStyle}>Pratik </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        width: 200,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        borderRadius: 10,
        margin: 10
    },
    textStyle: {
        fontSize: 18,
        color: 'white',
        fontWeight: '400'
    }
})