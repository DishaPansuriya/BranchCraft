import React, { useEffect, useState } from "react";
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
const bkgImage = require('../svg/HomeBackground.jpg')
const componentMap: any = {
    View: (props: any) => <View style={props.style}>{props.children}</View>,
    Text: (props: any) => <Text style={props.style}>{props.value}</Text>,
    Image: (props: any) => <Image resizeMode='contain' source={{ uri: props.source.uri }} style={props.style} />,
    Button: (props: any) => (
        <TouchableOpacity onPress={props.onPress} style={[props.style, props.button]}>
            <Text style={styles.buttonText}>{props.title}</Text>
        </TouchableOpacity>
    ),
    ImageBackground: (props: any) => <ImageBackground source={props.source} style={props.style}>
        {props.children}
    </ImageBackground>
}

const renderComponent = (componentSchema: any) => {
    if (!componentSchema || !componentSchema.type) return null

    const Component = componentMap[componentSchema.type]

    if (!Component) {
        console.error(`Unknown component type : ${componentSchema.type}`)
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
        </Component>
    )
}

const ServerDrivenUI = () => {
    const [layout, setLayout] = useState()
    useEffect(() => {
        const mockApiResponse: any = {
            layout: {
                type: 'ImageBackground',
                props: {
                    source: bkgImage,
                    style: styles.container
                },
                children: [
                    {
                        type: 'View',
                        props: {
                            style: styles.textArea,
                        },
                        children: [
                            {
                                type: 'Text',
                                props: {
                                    value: 'Pump House',
                                    style: styles.textStyle
                                }
                            },
                            {
                                type: 'Text',
                                props: {
                                    value: 'FIND OUT EXACTLY WHAT DIET & TRAINING WILL WORK SPECIFICALLY FOR YOU',
                                    style: styles.description
                                }
                            }
                        ]
                    },
                    {
                        type: 'Button',
                        props: {
                            title: 'Next',
                            style: styles.buttonStyle
                        }
                    }
                ]
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
    container: {
        flex: 1,
        alignItems: 'center',
        width: '100%'
    },
    textArea: {
        marginTop: 190,
        width: 360,
        height: 'auto',
        marginBottom: 40
    },
    textStyle: {
        fontSize: 48,
        color: 'white',
        textAlign: 'center',
        fontWeight: '800',
        marginBottom: 20
    },
    description: {
        fontSize: 12,
        textAlign: 'center',
        color: 'white',
        lineHeight: 24,
    },
    buttonStyle: {
        width: 266,
        height: 62,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20
    },
    buttonText: {
        color: 'black',
        fontSize: 18,
        fontWeight: '900'
    }
})
export default ServerDrivenUI