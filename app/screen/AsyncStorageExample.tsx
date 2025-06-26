import React, { useState } from 'react'
import { View, Text, Button, TextInput, StyleSheet } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { router } from 'expo-router'

export default function AsyncStorageExample() {
    const [value, setValue] = useState('');
    const [storedValue, setStoredValue] = useState('');

    const saveData = async () => {
        try {
            await AsyncStorage.setItem('myKey', value)
        } catch (e) {
            alert('error')
        }
    }

    const readData = async () => {
        try {
            const v = await AsyncStorage.getItem('myKey');
            setStoredValue(v ?? '');
        } catch (e) {
            alert('error')
        }
    }

    const removeData = async () => {
        try {
            await AsyncStorage.removeItem('myKey');
            setStoredValue('');
        } catch (e) {
            alert('error');
        }
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder='กรอกข้อความ'
                value={value}
                onChangeText={setValue}
            />
            <Button title='บันทึก' onPress={saveData} />
            <Button title='อา่นข้อมูล' onPress={readData} />
            <Button title='ลบข้อมูล' onPress={removeData} />
            <Text>ข้อความที่อ่านได้ : {storedValue}</Text>
            <Button title='Home' onPress={() => router.back()} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        borderWidth: 1,
        borderColor: '#aaa',
        padding: 8,
        margin: 8,
        width: 200
    }
})