import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Dimensions, ActivityIndicator, Button } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { router } from 'expo-router';

export default function GoogleMapExample() {
    const [location, setLocation] = useState<Location.LocationObject | null>(null);

    useEffect(() => {
        (async () => {
            const { status } = await Location.requestForegroundPermissionsAsync();

            if (status !== 'granted') return;

            const loc = await Location.getCurrentPositionAsync();
            setLocation(loc);
        })();
    }, []);

    if (!location) {
        return (
            <View>
                <ActivityIndicator size='large' />
            </View>
        )
    }

    const lat = location.coords.latitude;
    const long = location.coords.longitude;

    return (
        <View style={styles.container}>
            <MapView style={styles.map}
                initialRegion={{
                    latitude: lat,
                    longitude: long,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01
                }}
            >
                <Marker
                    coordinate={{
                        latitude: lat,
                        longitude: long
                    }}
                    title='ตำแหน่งของคุณ'
                />
            </MapView>
            <Button title='home' onPress={() => router.back()} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    }
})