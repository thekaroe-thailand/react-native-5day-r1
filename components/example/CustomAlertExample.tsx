import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default function CustomAlertExample() {
    const [visible, setVisible] = useState(false);

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity onPress={() => setVisible(true)}>
                <Text>Show Custome Alert</Text>
            </TouchableOpacity>
            <Modal visible={visible} transparent animationType='fade'
                onRequestClose={() => setVisible(false)}>
                <View style={styles.container}>
                    <View style={styles.modalContent}>
                        <Image source={require('../../assets/images/icon.png')}
                            style={{ width: 48, height: 48, marginBottom: 12 }}
                        />
                        <Text style={styles.modalTitle}>แจ้งเตือน</Text>
                        <Text style={{ marginBottom: 16 }}>คุณต้องการลบข้อมูลใช่ไหม ?</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity onPress={() => setVisible(false)}
                                style={{ marginRight: 16 }}>
                                <Text style={{ color: 'red' }}>ยกเลิก</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setVisible(false)}>
                                <Text style={{ color: 'green' }}>ยืนยัน</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.3)'
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 24,
        borderRadius: 12,
        alignItems: 'center'
    },
    modalTitle: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 8
    }
})