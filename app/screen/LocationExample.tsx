import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import * as Location from 'expo-location';
import { router } from 'expo-router';

export default function LocationExample() {
    const [location, setLocation] = useState<Location.LocationObject | null>(null);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);

    const getLocation = async () => {
        const { status } = await Location.requestForegroundPermissionsAsync();

        if (status !== 'granted') {
            setErrorMsg('Permission to access location was denined');
            return;
        }

        const loc = await Location.getCurrentPositionAsync();
        setLocation(loc);
    }

    useEffect(() => {
        getLocation();
    }, []);

    const locationText = () => {
        if (errorMsg) {
            return errorMsg;
        } else if (location) {
            const lat = location.coords.latitude;
            const long = location.coords.longitude;
            return 'Lat: ' + lat + ', Lng' + long;
        }
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Button title='รีเฟรสพิกัด' onPress={getLocation} />
            <Text>{locationText()}</Text>
            <Button title='home' onPress={() => router.back()} />
        </View>
    )
}


