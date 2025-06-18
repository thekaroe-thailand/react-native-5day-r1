import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function TextInputExample() {
    const [text, setText] = useState('');
    const [submitted, setSubmitted] = useState('');
    const handlePress = () => {
        setSubmitted(text);
    };
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 18, marginBottom: 8 }}>กรอกข้อความ</Text>
            <TextInput
                style={{
                    height: 40,
                    borderColor: 'gray',
                    borderWidth: 1,
                    width: '100%',
                    paddingHorizontal: 8,
                    marginBottom: 12,
                    borderRadius: 10
                }}
                placeholder='พิมพ์ที่นี่...' value={text} onChangeText={setText} />
            <Button title='ยืนยัน' onPress={handlePress} />
            {submitted !== '' && (
                <Text style={{ marginTop: 16, fontSize: 16, color: 'green' }}>
                    ข้อความที่กรอก: {submitted}
                </Text>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})