// import React, { useState } from 'react';
// import { Button, StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
// import { Dropdown, MultiSelect } from 'react-native-element-dropdown';

// const initialData = [
//     { label: 'Item 1', value: '1' },
//     { label: 'Item 2', value: '2' },
//     { label: 'Item 3', value: '3' },
//     { label: 'Item 4', value: '4' },
//     { label: 'Item 5', value: '5' },
//     { label: 'Item 6', value: '6' },
//     { label: 'Item 7', value: '7' },
//     { label: 'Item 8', value: '8' },
// ];

// const DropdownComponent = () => {
//     const [data, setData] = useState(initialData);
//     const [value, setValue] = useState(null);
//     const [isFocus, setIsFocus] = useState(false);
//     const [searchValue, setSearchValue] = useState('');

//     const renderLabel = () => {
//         if (value || isFocus) {
//             return (
//                 <Text style={[styles.label, isFocus && { color: 'blue' }]}>
//                     Categories
//                 </Text>
//             );
//         }
//         return null;
//     };

//     const addCategory = () => {
//         const newIndex = (data.length + 1).toString();
//         const newCategory = { label: searchValue, value: newIndex };
//         setData([...data, newCategory]);
//         setSearchValue('');
//     };

//     return (
//         <View style={styles.container}>
//             {renderLabel()}
//             <View style={styles.dropdownContainer}>
//                 {/* <Dropdown
//                     style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
//                     placeholderStyle={styles.placeholderStyle}
//                     selectedTextStyle={styles.selectedTextStyle}
//                     inputSearchStyle={styles.inputSearchStyle}
//                     iconStyle={styles.iconStyle}
//                     itemTextStyle={{ color: 'black' }}
//                     data={data}
//                     search
//                     maxHeight={300}
//                     labelField="label"
//                     valueField="value"
//                     placeholder={!isFocus ? 'Select item' : '...'}
//                     searchPlaceholder="Search..."
//                     value={value}
//                     onFocus={() => setIsFocus(true)}
//                     onBlur={() => setIsFocus(false)}
//                     onChangeText={(text: string) => {
//                         setSearchValue(text);
//                         console.log("Search Value:", text);
//                     }}
//                     onChange={(item: any) => {
//                         setValue(item.value);
//                         setIsFocus(false);
//                         console.log("Selected Item:", item);
//                     }}
//                 // renderInputSearch={() => {
//                 //     return (
//                 //         <Image source={require('../svg/check.png')} style={{ width: 10, backgroundColor: 'red', height: 20 }} />
//                 //     )
//                 // }}
//                 /> */}

//                 <Button title="Add" onPress={addCategory} />
//             </View>
//         </View>
//     );
// };

// export default DropdownComponent;

// const styles = StyleSheet.create({
//     container: {
//         backgroundColor: 'white',
//         padding: 16,
//     },
//     dropdownContainer: {
//         flexDirection: 'row',
//         alignItems: 'center',
//     },
//     dropdown: {
//         flex: 1,
//         height: 50,
//         borderColor: 'gray',
//         borderWidth: 0.5,
//         borderRadius: 8,
//         paddingHorizontal: 8,
//     },
//     label: {
//         position: 'absolute',
//         backgroundColor: 'white',
//         left: 22,
//         top: 8,
//         zIndex: 999,
//         paddingHorizontal: 8,
//         fontSize: 14,
//     },
//     placeholderStyle: {
//         fontSize: 16,
//         color: 'black',
//     },
//     selectedTextStyle: {
//         fontSize: 16,
//         color: 'black',
//     },
//     iconStyle: {
//         width: 20,
//         height: 20,
//     },
//     inputSearchStyle: {
//         height: 40,
//         fontSize: 16,
//         color: 'black',
//     },
// });
// import React, { useState } from 'react';
// import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import { MultiSelect } from 'react-native-element-dropdown';

// const data = [
//     { label: 'Item 1', value: '1' },
//     { label: 'Item 2', value: '2' },
//     { label: 'Item 3', value: '3' },
//     { label: 'Item 4', value: '4' },
//     { label: 'Item 5', value: '5' },
//     { label: 'Item 6', value: '6' },
//     { label: 'Item 7', value: '7' },
//     { label: 'Item 8', value: '8' },
// ];

// const DropdownScreen = () => {
//     const [selected, setSelected] = useState<string[]>([]);

//     return (
//         <View style={styles.container}>
//             <MultiSelect
//                 maxSelect={5}
//                 style={styles.dropdown}
//                 placeholderStyle={styles.placeholderStyle}
//                 selectedTextStyle={styles.selectedTextStyle}
//                 inputSearchStyle={styles.inputSearchStyle}
//                 iconStyle={styles.iconStyle}
//                 search
//                 data={data}
//                 containerStyle={{ borderWidth: 0, borderRadius: 20 }}
//                 labelField="label"
//                 valueField="value"
//                 placeholder="Select Category"
//                 searchPlaceholder="Search categories..."
//                 value={selected}
//                 onChange={(item: any) => setSelected(item)}
//                 renderSelectedItem={(item, unSelect) => (
//                     <View style={styles.selectedItem}>
//                         <Text style={styles.selectedItemText}>{item.label}</Text>
//                         <TouchableOpacity onPress={() => unSelect && unSelect(item)}>
//                             <Image
//                                 source={require('../svg/check.png')}
//                                 style={styles.icon}
//                             />
//                         </TouchableOpacity>
//                     </View>
//                 )}
//                 renderItem={({ label, value }) => (
//                     <View style={[styles.item, { borderWidth: selected.includes(value) ? 1.5 : 0, borderRadius: 8 }]}>
//                         <Text style={styles.textItem}>{label}</Text>
//                     </View>
//                 )}
//             />
//         </View>
//     );
// };


// const styles = StyleSheet.create({
//     container: { padding: 16 },
//     dropdown: {
//         height: 50,
//         backgroundColor: 'transparent',
//         borderBottomColor: 'gray',
//         borderBottomWidth: 0.5,
//         color: 'black'
//     },
//     placeholderStyle: {
//         fontSize: 16,
//         color: 'black'
//     },
//     selectedTextStyle: {
//         fontSize: 14,
//         color: 'black'
//     },
//     iconStyle: {
//         width: 20,
//         height: 20
//     },
//     inputSearchStyle: {
//         height: 40,
//         fontSize: 16,
//         color: 'black'
//     },
//     icon: {
//         width: 20,
//         height: 20,
//         tintColor: '#000'
//     },
//     selectedItem: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         padding: 5,
//         borderRadius: 12,
//         backgroundColor: '#f0f0f0',
//     },
//     selectedItemText: {
//         fontSize: 14,
//         marginRight: 10,
//         color: 'black'
//     },
//     item: {
//         padding: 10,
//         borderRadius: 8
//     },
//     textItem: {
//         fontSize: 16,
//         color: 'black'
//     },
// });

// export default DropdownScreen;
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const DropdownScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Country Drop Down</Text>
            <TouchableOpacity style={styles.dropdownSelector}>

            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    heading: {
        color: 'black',
        textAlign: 'center',
        marginTop: 100,
        fontSize: 24,
        fontWeight: '700'
    },
    dropdownSelector: {
        width: '90%',
        height: 50,
        borderRadius: 10,
        borderColor: '#8e8e8e',
        alignSelf: 'center',
        marginTop: 50,
        borderWidth: 0.5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15
    }
})
export default DropdownScreen