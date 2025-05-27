import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { backBtn } from '../assets/images'

export default function CustomHeader(props: any) {
  const {
    title,
    rightBtn
  } = props
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => props.navigation.goBack()} disabled>
        <Image source={backBtn} style={{ height: 20, width: 20 }} />
      </TouchableOpacity>
      <Text style={styles.header}>{title}</Text>
      <TouchableOpacity>
        <Image source={rightBtn} style={{ height: 20, width: 20 }} />
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: 20,
    marginTop: 10,
    justifyContent: "space-between"
  },
  header: {
    fontSize: 24,
    color: "black",
    fontWeight: "600"
  },
  leftArrow: {
    width: 100,
    height: 100,
    tintColor: "black"
  }
})