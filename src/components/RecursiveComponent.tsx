import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';

type SchemaComponent = {
    type: string;
    props: any;
    children?: SchemaComponent[];
};

const ServerDrivenUI = () => {
    const [uiSchema, setUISchema] = useState<SchemaComponent | null>(null);
    useEffect(() => {
        const fetchSchema = async () => {
            const schema = {
                type: 'View',
                props: {
                    style: { flex: 1, justifyContent: 'center', alignItems: 'center' }
                },
                children: [
                    {
                        type: 'Text',
                        props: {
                            text: 'Welcome to Server-Driven UI',
                            style: { fontSize: 24, marginBottom: 20 }
                        }
                    },
                    {
                        type: 'Button',
                        props: {
                            title: 'Click Me',
                            onPress: 'handleClick'
                        }
                    }
                ]
            };
            setUISchema(schema);
        };
        fetchSchema();
    }, []);

    const handlePress = (action: string) => {
        if (action === 'handleClick') {
            Alert.alert('Button clicked!');
        }
    };

    const renderComponent = (component: SchemaComponent) => {
        switch (component.type) {
            case 'View':
                return (
                    <View style={component.props.style}>
                        {component.children?.map((child, index) => (
                            <React.Fragment key={index}>
                                {renderComponent(child)}
                            </React.Fragment>
                        ))}
                    </View>
                );
            case 'Text':
                return <Text style={component.props.style}>{component.props.text}</Text>
            case 'Button':
                return (
                    <Button
                        title={component.props.title}
                        onPress={() => handlePress(component.props.onPress)}
                    />
                );
            default:
                return null;
        }
    };

    return (
        <View style={styles.container}>
            {uiSchema ? renderComponent(uiSchema) : <Text>Loading UI...</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default ServerDrivenUI;
