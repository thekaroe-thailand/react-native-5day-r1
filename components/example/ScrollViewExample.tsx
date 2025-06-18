import React from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";

export default function ScrollViewExample() {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>ScrollView Example</Text>
            <ScrollView style={styles.scrollView}
                contentContainerStyle={styles.scrollContent}
            >
                {Array.from({ length: 20 }).map((_, i) => (
                    <View key={i} style={styles.item}>
                        <Text style={styles.itemText}>Item {i + 1}</Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
        width: '100%'
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 12
    },
    scrollView: {
        width: '100%',
        maxHeight: 300,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        backgroundColor: '#f9f9f9'
    },
    scrollContent: {
        alignItems: 'center',
        paddingVertical: 12
    },
    item: {
        width: '90%',
        padding: 16,
        marginVertical: 6,
        backgroundColor: '#e3f2fd',
        borderRadius: 6,
        alignItems: 'center'
    },
    itemText: {
        fontSize: 16
    }
})