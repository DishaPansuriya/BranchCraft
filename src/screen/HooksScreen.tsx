import React, { useCallback, useContext, useDeferredValue, useLayoutEffect, useMemo, useReducer, useRef, useState, useTransition } from "react"
import { ActivityIndicator, Button, findNodeHandle, FlatList, SafeAreaView, StyleSheet, Text, TextInput, UIManager, View } from "react-native"

//**************** useContext ****************//
const ThemeContext = React.createContext('light')
//**************** useContext ****************//
const initialState = { count: 0 }
const reducer = (state: any, action: any) => {
    switch (action.type) {
        case 'increment': return { count: state.count + 1 }
        case 'decrement': return { count: state.count - 1 }
        default: return state
    }
}
//**************** useMemo ****************//
const ExpensiveCaculation = (num: any) => {
    return num * 2
}
//**************** useCallback ****************//

const HooksScreen = () => {
    //**************** useContext ****************//
    // const theme = useContext(ThemeContext)
    // return <Text style={{ color: theme === 'light' ? 'gray' : '#000' }}>hello</Text>

    //**************** useReducer ****************//
    // const [state, dispatch] = useReducer(reducer, initialState)
    // return (
    //     <View>
    //         <Text style={{ color: 'black', textAlign: 'center', marginTop: 50 }}>{state.count}</Text>
    //         <Button title="Increment" onPress={() => dispatch({ type: 'increment' })} />
    //         <Button title="Decrement" onPress={() => dispatch({ type: 'decrement' })} />
    //     </View>
    // )

    //**************** useCallback ****************//
    // const [count, setCount] = useState(0)
    // const increment = useCallback(() => {
    //     setCount((prevCount) => prevCount + 1)
    // }, [])
    // return (
    //     <View>
    //         <Text style={{ color: 'black', fontSize: 20, marginTop: 50, textAlign: 'center', marginBottom: 14 }}>Count:{count}</Text>
    //         <Button title="Increment" onPress={increment} />
    //     </View>
    // )

    //**************** useMemo ****************//
    // const [count, setCount] = useState(0)
    // const doubleCount = useMemo(() => ExpensiveCaculation(count), [count])
    // return (
    //     <View>
    //         <Text style={{ color: 'black' }}>Doubled Count: {doubleCount}</Text>
    //         <Button title="Increment" onPress={() => setCount(count + 1)} />
    //     </View>
    // )

    //**************** useRef ****************//
    // const countRef = useRef(0)
    // const handleClick = () => {
    //     countRef.current += 1
    //     console.log(countRef.current);
    // }
    // return <Button title="Increment" onPress={handleClick} />

    //**************** useLayoutEffect ****************//
    // const [boxWidth, setBoxWidth] = useState(0)

    // const handleLayout = (event: { nativeEvent: { layout: { width: number } } }) => {
    //     const { width } = event.nativeEvent.layout;
    //     setBoxWidth(width);
    // };

    // return (
    //     <View style={styles.container}>
    //         <View style={styles.box} onLayout={handleLayout} />
    //         <Text style={styles.text}>Box Width: {boxWidth}</Text>
    //     </View>
    // );

    //**************** useTransition ****************//
    // const [isPending, startTransition] = useTransition();
    // const [count, setCount] = useState(0);

    // const handleClick = () => {
    //     startTransition(() => {
    //         setCount(count => count + 1);
    //     })
    // }
    // return (
    //     <SafeAreaView
    //         style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    //         {isPending && <ActivityIndicator />}
    //         <Text style={{ color: 'black', fontSize: 20, marginBottom: 16 }}>{count}</Text>
    //         <Button title="Count" onPress={() => handleClick()} />
    //     </SafeAreaView>
    // )

    //**************** useDeferredValue ****************//
    const [inputValue, setInputValue] = useState('')
    const deferredValue = useDeferredValue(inputValue);

    const data = ['apple', 'banana', 'grape', 'orange', 'strawberry'];

    const filteredData = data.filter(item => item.toLowerCase().includes(deferredValue.toLowerCase()))
    return (
        <View>
            <TextInput
                placeholder="Type to search..."
                value={inputValue}
                onChangeText={setInputValue}
                style={{ borderWidth: 1, padding: 10, marginBottom: 10, color: 'black' }}
                placeholderTextColor={'gray'}
                cursorColor={'black'}
            />
            <FlatList
                data={filteredData}
                keyExtractor={(item) => item}
                renderItem={({ item }) => <Text style={styles.text}>{item}</Text>}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    box: {
        width: 100,
        height: 100,
        backgroundColor: 'tomato',
    },
    text: {
        color: 'black',
        fontSize: 20,
        marginTop: 10
    }
})
export default HooksScreen