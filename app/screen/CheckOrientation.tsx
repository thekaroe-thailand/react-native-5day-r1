import { useWindowDimensions, View, Text, Button } from "react-native";
import { router } from "expo-router";

export default function CheckOrientation() {
    const { width, height } = useWindowDimensions();
    const isPortrait = height >= width;

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>
                {isPortrait ? 'หน้าจอเป็นแนวตั้ง (Portrait)' : 'หน้าจอเป็นแนวนอน (Landscape)'}
            </Text>
            <Button title='กลับหน้าแรก' onPress={() => router.back()} />

        </View>
    )
}