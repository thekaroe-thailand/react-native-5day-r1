import IoniconsExample from "@/components/example/IoniconsExample";
import React from "react";
import { StyleSheet, ScrollView } from 'react-native'
export default function ProductGrid() {

  return (
    <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContent}>
      <IoniconsExample />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#fff'
  },
  scrollViewContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})