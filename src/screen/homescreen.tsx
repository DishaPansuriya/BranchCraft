import React from 'react';
import { View, Text, Button, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import { ApplicationScreenProps } from '../navigation/stack';

const HomeScreen = ({ navigation }: ApplicationScreenProps) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('DishaMode')} style={styles.button}>
                <Text style={styles.textStyle}>Disha</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('PratikMode')} style={styles.button}>
                <Text style={styles.textStyle}>Pratik</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f2f2f2'
    }
})
export default HomeScreen
