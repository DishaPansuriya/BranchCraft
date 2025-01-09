// import React, { useState } from 'react';
// import { View, Text, Button, Alert, TextInput, SafeAreaView, StyleSheet } from 'react-native';
// import phonepeSDK from 'react-native-phonepe-pg';
// import Base64 from "react-native-base64";
// import sha256 from "sha256";

// const PaymentScreen = () => {
//     const [data, setData] = useState({
//         mobile: '',
//         amount: ''
//     });

//     const [environment] = useState('SANDBOX');  // Ensure correct environment
//     const [merchantId] = useState('PGTESTPAYUAT86');  // Use correct Merchant ID
//     const [appId] = useState<any>(null);
//     const [enableLogging] = useState(true);

//     const generateTransactionId = () => {
//         const timestamp = Date.now();
//         const random = Math.floor(Math.random() * 1000000);
//         return `T${timestamp}${random}`;
//     };

//     const SubmitHandler = async () => {
//         try {
//             await phonepeSDK.init(environment, merchantId, appId, enableLogging);

//             const requestBody = {
//                 merchantId: merchantId,
//                 merchantTransactionId: generateTransactionId(),
//                 merchantUserId: '',
//                 amount: data.amount,
//                 mobileNumber: data.mobile,
//                 callbackUrl: '',
//                 paymentInstrument: {
//                     type: 'PAY_PAGE'
//                 }
//             };

//             const salt_key = 'YOUR_SALT_KEY';  // Replace with actual salt key
//             const salt_Index = 1;

//             const payload = JSON.stringify(requestBody);
//             const payload_main = Base64.encode(payload);
//             const string = payload_main + "/pg/v1/pay" + salt_key;
//             const checksum = sha256(string) + '###' + salt_Index;

//             console.log("Payload Main:", payload_main);
//             console.log("String for Checksum:", string);
//             console.log("Checksum:", checksum);

//             const response = await phonepeSDK.startTransaction(
//                 payload_main,
//                 checksum,
//                 null,
//                 null
//             );
//             console.log("Transaction Response:", response);
//         } catch (error: any) {
//             console.error("Transaction Error:", error);
//             Alert.alert("Transaction Error", error.message || "An error occurred.");
//         }
//     };

//     return (
//         <View style={styles.container}>
//             <SafeAreaView>
//                 <TextInput
//                     style={styles.inputStyle}
//                     placeholder='Enter Mobile Number'
//                     onChangeText={(txt) => setData({ ...data, mobile: txt })}
//                     placeholderTextColor='gray'
//                 />
//                 <TextInput
//                     style={styles.inputStyle}
//                     placeholder='Enter Amount'
//                     onChangeText={(txt) => setData({ ...data, amount: txt })}
//                     placeholderTextColor='gray'
//                 />
//                 <Button color='black' title='Pay' onPress={SubmitHandler} />
//             </SafeAreaView>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center'
//     },
//     inputStyle: {
//         width: 380,
//         color: 'gray',
//         borderWidth: 1,
//         borderRadius: 5,
//         borderColor: 'gray',
//         marginVertical: 5,
//         paddingLeft: 17
//     }
// });

// export default PaymentScreen;

import React, { useState } from 'react';
import { View, Text, Button, Alert, TextInput, SafeAreaView, StyleSheet } from 'react-native';
import phonepeSDK from 'react-native-phonepe-pg';
import Base64 from "react-native-base64";
import sha256 from "sha256";

const PaymentScreen = () => {
    const [data, setData] = useState({
        mobile: '',
        amount: ''
    });

    const environment = 'SANDBOX';
    const merchantId = 'PGTESTPAYUAT86';
    const saltKey = '96434309-7796-489d-8924-ab56988a6076';
    const saltIndex = 1;

    const generateTransactionId = () => {
        const timestamp = Date.now();
        const random = Math.floor(Math.random() * 1000000);
        return `T${timestamp}${random}`;
    };

    const handlePayment = async () => {
        try {
            await phonepeSDK.init(environment, merchantId, '', true);
            // await phonepeSDK.init(environment, merchantId, null, true);

            const transactionId = generateTransactionId();

            const requestBody = {
                merchantId: merchantId,
                merchantTransactionId: transactionId,
                merchantUserId: '',
                amount: data.amount,
                mobileNumber: data.mobile,
                callbackUrl: '',
                paymentInstrument: {
                    type: 'PAY_PAGE'
                }
            };

            const payload = JSON.stringify(requestBody);
            const payloadEncoded = Base64.encode(payload);

            const stringToHash = `${payloadEncoded}/pg/v1/pay${saltKey}`;
            const checksum = sha256(stringToHash) + `###${saltIndex}`;

            const response = await phonepeSDK.startTransaction(payloadEncoded, checksum, null, null);

            if (response.status == 'SUCCESS') {
                Alert.alert('Payment Successful', `Transaction ID: ${transactionId}`);
            } else {
                console.log("PhonePe Error Response:", response);
                Alert.alert('Payment Failed', response.message || 'Transaction failed');
            }

        } catch (error: any) {
            console.error("Transaction Error:", error);
            Alert.alert("Transaction Error", error.message || "An error occurred.");
        }
    };

    return (
        <View style={styles.container}>
            <SafeAreaView>
                <Text style={styles.title}>PhonePe Payment</Text>
                <TextInput
                    style={styles.inputStyle}
                    placeholder='Enter Mobile Number'
                    keyboardType='phone-pad'
                    onChangeText={(txt) => setData({ ...data, mobile: txt })}
                    placeholderTextColor='gray'
                />
                <TextInput
                    style={styles.inputStyle}
                    placeholder='Enter Amount (in Paise)'
                    keyboardType='numeric'
                    onChangeText={(txt) => setData({ ...data, amount: txt })}
                    placeholderTextColor='gray'
                />
                <Button color='black' title='Pay Now' onPress={handlePayment} />
            </SafeAreaView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    inputStyle: {
        width: 380,
        color: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'gray',
        marginVertical: 5,
        paddingLeft: 17
    }
});

export default PaymentScreen;
