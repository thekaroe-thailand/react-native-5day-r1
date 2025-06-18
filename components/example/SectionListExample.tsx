import React from 'react';
import { View, Text, SectionList, StyleSheet } from 'react-native';

const DATA = [
    {
        title: 'Group A',
        data: ['Apple', 'Banana', 'Mango']
    },
    {
        title: 'Group B',
        data: ['Coconut', 'Blueberry', 'Chery']
    }
]

export default function SectionListExample() {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>SectionList Example</Text>
            <SectionList
                sections={DATA}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text style={styles.itemText}>{item}</Text>
                    </View>
                )}
                renderSectionHeader={({ section: { title } }) => (
                    <Text>{title}</Text>
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
        marginTop: 12
    },
    item: {
        width: 300,
        padding: 14,
        backgroundColor: '#fff9c4',
        borderRadius: 6,
        alignItems: 'center'
    },
    itemText: {
        fontSize: 16
    }
})