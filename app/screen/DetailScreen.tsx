import { useRouter } from "expo-router";
import { Button, View, Text } from "react-native";

export default function DetailScreen() {
    const router = useRouter();

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Detail Screen</Text>
            <Button title='กลับหน้าแรก' onPress={() => router.back()} />
        </View>
    )
}