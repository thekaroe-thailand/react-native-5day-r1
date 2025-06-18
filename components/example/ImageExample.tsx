import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

export default function ImageExample() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>ตัวอย่างการแสดงรูปภาพ</Text>
            <Image source={require('../../assets/images/react-logo.png')}
                style={styles.image}
                resizeMode='contain'
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    text: {
        marginBottom: 12,
        fontSize: 18
    },
    image: {
        width: 100,
        height: 100
    }
})