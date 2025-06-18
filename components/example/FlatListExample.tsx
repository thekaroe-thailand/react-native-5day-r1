import React from "react";
import { View, Text, FlatList, StyleSheet } from 'react-native';

const DATA = Array.from({ length: 20 }).map((_, i) => ({
    id: i.toString(),
    title: 'Item ' + (i + 1)
}));

export default function FlatListExample() {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>FlatList Example</Text>
            <FlatList data={DATA} keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text style={styles.itemText}>{item.title}</Text>
                    </View>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 12
    },
    listContent: {
        alignItems: 'center',
        paddingVertical: 12
    },
    item: {
        width: 300,
        padding: 16,
        marginVertical: 6,
        backgroundColor: '#ffe082',
        borderRadius: 6,
        alignItems: 'center'
    },
    itemText: {
        fontSize: 16
    }
})