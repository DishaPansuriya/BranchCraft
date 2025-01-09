import { useEffect, useState } from "react"
import { Alert, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native"

const componentMap: any = {
    SafeAreaView: (props: any) => <SafeAreaView style={props.style}>{props.children}</SafeAreaView>,
    View: (props: any) => <View style={props.style}>{props.children}</View>,
    Text: (props: any) => <Text style={props.style}>{props.value}</Text>,
    Image: (props: any) => <Image resizeMode='contain' source={{ uri: props.source.uri }} style={props.style} />,
    Button: (props: any) => (
        <TouchableOpacity onPress={props.onPress} style={[props.style, styles.button]}>
            <Text style={styles.buttonText}>{props.title}</Text>
        </TouchableOpacity>
    )
}

const renderComponent = (componentSchema: any) => {
    if (!componentSchema || !componentSchema.type) return null;
    const Component = componentMap[componentSchema.type]
    if (!Component) {
        console.error(`Unknown component type:${componentSchema.type}`)
        return null
    }

    const { props, children } = componentSchema
    return (
        <Component {...props}>
            {children &&
                children.map((child: any, index: any) => {
                    return <>{renderComponent({ ...child, key: index })}</>
                })
            }
        </Component >
    )
}

const ServerDrivenUI = () => {
    const [layout, setLayout] = useState(null)

    const handleButtonClick = () => {
        Alert.alert('Success', 'You have just clicked the button.')
    }
    useEffect(() => {
        const mockApiResponse: any = {
            layout: {
                type: 'SafeAreaView',
                style: {
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                },
                children: [
                    {
                        type: 'Text',
                        props: {
                            value: 'Hello World!',
                            style: {
                                color: 'black',
                                fontSize: 24,
                                fontWeight: 'bold',
                                textAlign: 'center'
                            }
                        }
                    },
                    {
                        type: 'Image',
                        props: {
                            source: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoYhb61Moi9JBoHyjir5XfRZ-V-8OxIopyrw&s' },
                            style: {
                                width: 100,
                                height: 100
                            }
                        }
                    },
                    {
                        type: 'Button',
                        props: {
                            onPress: handleButtonClick,
                            title: 'Click Here!',
                            style: {
                                backgroundColor: "black",
                                padding: 10,
                                borderRadius: 5,
                                alignItems: 'center'
                            },
                        }
                    }
                ],
            }
        }
        setLayout(mockApiResponse.layout)
    }, [])

    if (!layout) {
        return <Text>Loading...</Text>
    }
    return <>{renderComponent(layout)}</>
}

const styles = StyleSheet.create({
    button: {
        padding: 10,
        borderRadius: 5,
        backgroundColor: "black",
        alignItems: "center",
    },
    buttonText: {
        color: "white",
        fontSize: 18,
        fontWeight: '500'
    }
})
export default ServerDrivenUI