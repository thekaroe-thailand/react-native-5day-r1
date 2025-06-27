import { View, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function IndexScreen() {
    const router = useRouter();

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', gap: 16 }}>
            <Button title='ไปหน้า Home' onPress={() => router.push('/screen/HomeScreen')} />
            <Button title='ไปหน้า Detail'
                onPress={() => router.push({
                    pathname: '/screen/DetailScreen',
                    params: {
                        name: 'kob',
                        age: 40
                    }
                })} />
            <Button title='ไปหน้า Screen Size'
                onPress={() => router.push('/screen/ScreenSize')} />
            <Button title='ไปหน้า CheckOriantation' onPress={() => router.push('/screen/CheckOrientation')} />
            <Button title='ไปหน้า CheckInternetConnection' onPress={() => router.push('/screen/CheckInternetConnect')} />
            <Button title='ไปหน้า LinkAppExample'
                onPress={() => router.push('/screen/LinkAppExample')} />
            <Button title='ไปหน้า Location' onPress={() => router.push('/screen/LocationExample')} />
            <Button title='ไปหน้า Google Map' onPress={() => router.push('/screen/GoogleMapExample')} />
            <Button title='ไปหน้า AsyncStorageExample' onPress={() => router.push('/screen/AsyncStorageExample')} />
            <Button title='ไปหน้า CameraExample' onPress={() => router.push('/screen/CameraExample')} />
            <Button title='ไปหน้า BarcodeAndQrCodeExample' onPress={() => router.push('/screen/BarcodeAndQrCodeExample')} />
            <Button title='ไปหน้า ImagePickerExample' onPress={() => router.push('/screen/ImagePickerExample')} />
            <Button title='ไปหน้า ApiExample' onPress={() => router.push('/screen/ApiExample')} />
        </View>
    )
}