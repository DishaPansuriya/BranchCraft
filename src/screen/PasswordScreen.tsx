// import AsyncStorage from "@react-native-async-storage/async-storage"
import { useNavigation } from "@react-navigation/native"
// import { useEffect, useState } from "react"
// import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
// import ReactNativeBiometrics, { BiometryTypes } from 'react-native-biometrics'

// const PasswordScreen = () => {
//     const [password, setPassword] = useState('')
//     const [error, setError] = useState('')
//     const navigation: any = useNavigation()
//     useEffect(() => {
//         const setInitialPassword = async () => {
//             await AsyncStorage.setItem('appPassword', 'disha');
//         };
//         setInitialPassword()
//     }, [])

//     const handleLogin = async () => {
//         const savedPassword = await AsyncStorage.getItem('appPassword')
//         if (password === savedPassword) {
//             navigation.replace('ServerDrivenUI')
//         } else {
//             console.log('jkdhf');
//             setError('Incorrect password')
//         }
//     }


//     const rnBiometrics = new ReactNativeBiometrics()
//     const biometrics = async () => {
//         const { biometryType } = await rnBiometrics.isSensorAvailable()

//         if (biometryType === BiometryTypes.Biometrics) {

//         }
//     }
//     biometrics()
//     return (
//         <View style={styles.conatiner}>
//             <Text style={styles.textStyle}>Password</Text>
//             <View style={{ flexDirection: 'row' }}>
//                 <TextInput
//                     placeholder="Enter Password"
//                     secureTextEntry
//                     value={password}
//                     onChangeText={setPassword}
//                     style={styles.textInput}
//                     cursorColor='black'
//                     placeholderTextColor='gray'
//                 />
//                 <View>
//                     <TouchableOpacity style={styles.button} onPress={handleLogin}>
//                         <Image source={require('../svg/check.png')} resizeMode="contain" style={styles.image} />
//                     </TouchableOpacity>
//                 </View>
//             </View>
//             {error ? <Text style={styles.errText}>{error}</Text> : null}
//         </View>
//     )
// }

// const styles = StyleSheet.create({
//     conatiner: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center'
//     },
//     textStyle: {
//         fontSize: 18,
//         color: 'black',
//         fontWeight: '700',
//         marginBottom: 15,
//         marginLeft: -240
//     },
//     textInput: {
//         borderWidth: 1,
//         borderColor: 'black',
//         borderRadius: 5,
//         width: 250,
//         paddingHorizontal: 10,
//         color: 'black',
//         fontSize: 16,
//         height: 60,
//     },
//     button: {
//         width: 60,
//         height: 60,
//         backgroundColor: 'black',
//         justifyContent: 'center',
//         alignItems: 'center',
//         borderRadius: 5,
//         marginLeft: 10
//     },
//     errText: {
//         fontSize: 13,
//         color: 'red',
//         marginLeft: -210,
//         marginTop: 5
//     },
//     image: {
//         height: 20,
//     }
// })
// export default PasswordScreen

// import RNBiometrics from "react-native-simple-biometrics";

// const PasswordScreen = async () => {
//     const navigation: any = useNavigation()
//     const can = await RNBiometrics.canAuthenticate();
//     console.log("can.........", can);

//     if (can) {
//         try {
//             // navigation
//             await RNBiometrics.requestBioAuth("prompt-title", "prompt-message");
//         } catch (error) {
//             console.log(error);

//         }
//     }
// }
// export default PasswordScreen

import React, { useEffect, useState } from 'react';
import { View, Text, Button, Alert } from 'react-native';
import SimpleBiometrics from 'react-native-simple-biometrics';

const FingerprintAuthScreen: React.FC = () => {
    const [isBiometricSupported, setIsBiometricSupported] = useState(false);

    useEffect(() => {
        SimpleBiometrics.canAuthenticate()
            .then((isAvailable) => {
                setIsBiometricSupported(isAvailable);
            })
            .catch((error) => {
                console.log('Biometric authentication not supported:', error);
                setIsBiometricSupported(false);
            });
    }, []);

    const handleFingerprintAuth = async () => {
        try {
            const success = await SimpleBiometrics.requestBioAuth(
                'Authenticate',
                'Use fingerprint to unlock the app'
            );
            if (success) {
                Alert.alert('Authentication Successful!', 'You have unlocked the app with your fingerprint.');
            } else {
                Alert.alert('Authentication Failed', 'Fingerprint authentication was not successful.');
            }
        } catch (error) {
            console.error('Authentication error:', error);
            Alert.alert('Error', 'An error occurred during fingerprint authentication.');
        }
    };

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            {isBiometricSupported ? (
                <>
                    <Text>You can also use your Fingerprint Authentication</Text>
                    <Button title="Authenticate with Fingerprint" onPress={handleFingerprintAuth} />
                </>
            ) : (
                <Text>Fingerprint Authentication is not supported on this device.</Text>
            )}
        </View>
    );
};

export default FingerprintAuthScreen;
