import { useEffect, useState } from "react";
import { View, Text, Button } from "react-native";
import { router } from "expo-router";

export default function CheckInternetConnect() {
    const [isConnected, setIsConnected] = useState<boolean | null>(null);

    useEffect(() => {
        const checkInternet = async () => {
            try {
                const response = await fetch('https://www.google.com', { method: 'HEAD' });
                setIsConnected(response.ok);
            } catch (err) {
                setIsConnected(false);
            }
        };

        checkInternet();
    }, []);

    const textStatus = () => {
        if (isConnected === null) {
            return 'กำลังตรวจสอบการเชื่อมต่อ...';
        } else if (isConnected) {
            return 'เชื่อมต่ออินเทอเนตอยู่';
        } else {
            return 'ไม่ได้เชื่อมต่ออินเทอร์เนต';
        }
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>
                {textStatus()}
            </Text>
            <Button title='กลับหน้าแรก' onPress={() => router.back()} />
        </View>
    )
}