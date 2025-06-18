import { View, Text, Alert } from 'react-native';

export default function AlertExample() {
    const showAlert = () => {
        Alert.alert(
            'แจ้งเตือน',
            'คุณต้องการลบข้อมูลใช่ไหม',
            [
                {
                    text: 'ยกเลิก', onPress: () => {
                        Alert.alert('cancel')
                    }
                },
                {
                    text: 'ยืนยัน', onPress: () => {
                        Alert.alert('confirm')
                    }
                }
            ]
        );
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text onPress={showAlert} style={{ fontSize: 18, color: 'blue' }}>
                กดเพื่อแสดง Alert Dialog
            </Text>
        </View>
    )
}