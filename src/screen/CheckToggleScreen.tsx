import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import CheckBox from '@react-native-community/checkbox';
import { useState } from "react";

const CheckToggleScreen = () => {
    const [checkBox1, setCheckBox1] = useState(false);
    const [checkBox2, setCheckBox2] = useState(false);
    const [checkBox3, setCheckBox3] = useState(false);

    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');
    const [input3, setInput3] = useState('');
    const [savedData, setSavedData] = useState<{ a?: string; b?: string; c?: string }>({});

    const listData = () => {
        setSavedData({
            a: input1 || '',
            b: input2 || '',
            c: input3 || ''
        });
    };

    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <View style={styles.checkboxRow}>
                    <CheckBox
                        value={checkBox1}
                        onValueChange={(newValue: boolean) => setCheckBox1(newValue)}
                        tintColors={{ true: 'black', false: 'black' }}
                    />
                    <Text style={styles.textStyle}>A</Text>
                </View>
                <TextInput
                    style={checkBox1 ? styles.inputStyle : styles.disabled}
                    editable={checkBox1}
                    placeholder={checkBox1 ? "Enter text" : "Disabled"}
                    value={checkBox1 ? input1 : ''}
                    onChangeText={setInput1}
                    cursorColor={'black'}
                    placeholderTextColor={'gray'}
                />
            </View>
            <View style={styles.row}>
                <View style={styles.checkboxRow}>
                    <CheckBox
                        value={checkBox2}
                        onValueChange={(newValue: boolean) => setCheckBox2(newValue)}
                        tintColors={{ true: 'black', false: 'black' }}
                    />
                    <Text style={styles.textStyle}>B</Text>
                </View>
                <TextInput
                    style={checkBox2 ? styles.inputStyle : styles.disabled}
                    editable={checkBox2}
                    placeholder={checkBox2 ? "Enter text" : "Disabled"}
                    value={checkBox2 ? input2 : ''}
                    onChangeText={setInput2}
                    cursorColor={'black'}
                    placeholderTextColor={'gray'}
                />
            </View>
            <View style={styles.row}>
                <View style={styles.checkboxRow}>
                    <CheckBox
                        value={checkBox3}
                        onValueChange={(newValue: boolean) => setCheckBox3(newValue)}
                        tintColors={{ true: 'black', false: 'black' }}
                    />
                    <Text style={styles.textStyle}>C</Text>
                </View>
                <TextInput
                    style={checkBox3 ? styles.inputStyle : styles.disabled}
                    editable={checkBox3}
                    placeholder={checkBox3 ? "Enter text" : "Disabled"}
                    value={checkBox3 ? input3 : ''}
                    onChangeText={setInput3}
                    cursorColor={'black'}
                    placeholderTextColor={'gray'}
                />
            </View>

            <TouchableOpacity
                style={styles.button}
                onPress={listData}
                disabled={!checkBox1 && !checkBox2 && !checkBox3}
            >
                <Text style={{ color: 'white' }}>Save</Text>
            </TouchableOpacity>
            {
                Object.keys(savedData).length > 0 && (
                    <View style={styles.savedDataContainer}>
                        <Text>Saved Data:</Text>
                        {savedData.a && <Text style={styles.textStyle}>A: {savedData.a}</Text>}
                        {savedData.b && <Text style={styles.textStyle}>B: {savedData.b}</Text>}
                        {savedData.c && <Text style={styles.textStyle}>C: {savedData.c}</Text>}
                    </View>
                )
            }
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20
    },
    textStyle: {
        color: 'black',
        marginTop: 7
    },
    checkboxRow: {
        flexDirection: 'row'
    },
    inputStyle: {
        width: 200,
        height: 40,
        borderWidth: 1.5,
        borderRadius: 3,
        marginLeft: 20,
        paddingHorizontal: 10,
        color: 'black'
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10
    },
    button: {
        width: 110,
        height: 40,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginTop: 20
    },
    disabled: {
        width: 200,
        height: 40,
        borderWidth: 1,
        borderRadius: 3,
        marginLeft: 20,
        paddingHorizontal: 10,
        borderColor: 'gray'
    },
    savedDataContainer: {
        marginTop: 20,
        alignItems: 'flex-start'
    }
});

export default CheckToggleScreen;
