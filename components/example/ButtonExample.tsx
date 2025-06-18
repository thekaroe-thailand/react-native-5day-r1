import { useState } from "react";
import { View, Button, Text, StyleSheet } from "react-native";

export default function ButtonExample() {
    const [count, setCount] = useState(0);

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', gap: 3 }}>
                <Button onPress={() => setCount(count + 1)} title="Count up" />
                <Button onPress={() => setCount(count - 1)} title="Count down" />
            </View>

            <Text style={styles.text}>{count}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        margin: 10
    }
})