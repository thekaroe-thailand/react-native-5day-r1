import { router } from "expo-router";
import { Alert, Linking, View, Button, StyleSheet } from "react-native"

const openApp = async (url: string) => {
    const supported = await Linking.canOpenURL(url);

    if (supported) {
        Linking.openURL(url);
    } else {
        Alert.alert('ไม่สามารถเปิดแอพได้', url);
    }
}

export default function LinkAppExample() {
    return (
        <View style={styles.container}>
            <Button title='เปิด Google (Browser)'
                onPress={() => openApp('https://www.google.com')} />
            <View style={styles.space}></View>
            <Button title='เปิด LINE'
                onPress={() => openApp('line://app')} />
            <View style={styles.space}></View>
            <Button title="โทร 0812345678"
                onPress={() => openApp('tel:0812345678')} />
            <View style={styles.space}></View>
            <Button title='ส่งอีเมล'
                onPress={() => openApp('mailto:someone@example.com')} />
            <View style={styles.space}></View>
            <Button title="HOME" onPress={() => router.back()} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15
    },
    space: {
        height: 16
    }
})