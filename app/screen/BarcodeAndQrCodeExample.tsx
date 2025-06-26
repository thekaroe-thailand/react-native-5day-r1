import { Camera, CameraView } from "expo-camera";
import { useEffect, useState } from "react";
import { Text, View, Button, StyleSheet, TouchableOpacity } from "react-native";

export default function BarcodeAndQrCodeExample() {
    const [hasPermission, setHasPermission] = useState<boolean | null>(null);
    const [type, setType] = useState('back');
    const [scanned, setScanned] = useState(false);

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const handleBarCodeScanned = ({ type, data }: { type: string, data: string }) => {
        console.log("SCANNED", type, data);
    }

    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>
    }

    if (hasPermission === false) {
        return <Text>No Access to camera</Text>
    }

    const cameraType = type === 'back' ? 'back' : 'front';

    return (
        <View style={{ flex: 1 }}>
            <CameraView style={{ flex: 1 }}
                barcodeScannerSettings={{
                    barcodeTypes: ['qr', 'ean13', 'ean8', 'code128', 'pdf417']
                }}
                onBarcodeScanned={handleBarCodeScanned}
                facing="back"
            />
            <TouchableOpacity style={styles.flipButton}
                onPress={() => setType(cameraType === 'back' ? 'front' : 'back')}>
                <Text style={styles.flipText}>Flip</Text>
            </TouchableOpacity>
            {scanned && (
                <Button title="สแกนใหม่" onPress={() => setScanned(false)} />
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    flipButton: {
        position: 'absolute',
        bottom: 40,
        right: 30,
        backgroundColor: '#000',
        padding: 10,
        borderRadius: 8
    },
    flipText: {
        color: '#fff',
        fontSize: 18
    }
})