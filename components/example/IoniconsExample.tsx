import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function IoniconsExample() {
    return (
        <View style={{ alignItems: 'center' }}>
            <Ionicons name='home' size={48} color='#2196f3' />
            <Text>Home Icon</Text>
            <Ionicons name='heart' size={48} color='red' />
            <Text>Heart Icon</Text>
            <AntDesign name="pluscircle" size={24} color="black" />
            <Text>Circle Plus</Text>
        </View>
    )
}