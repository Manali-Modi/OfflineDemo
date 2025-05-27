import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { styles } from './ProfileScreen.styles'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import { Data } from './ProfileScreenController'
import { profileImage } from '../../assets/images'
import CustomHeader from '../../components/CustomHeader'

const onRenderItem = (item: any, index: number) => {
  console.log("Item", item);

  return (
    <View style={styles.listContainer}>
      <CustomInput lable={item.lable} title={item.title} />
    </View>
  )
}
export default function ProfileScreen() {

  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader title="Profile Screen" />

      <View style={styles.bodyContainer}>
        <TouchableOpacity onPress={() => { }}>
          <Image source={profileImage} style={styles.profile} />
        </TouchableOpacity>
        <FlatList
          data={Data}
          renderItem={({ item, index }) => onRenderItem(item, index)}
        />
      </View>

      <View>
        <CustomButton title="Save" />
      </View>
    </SafeAreaView>
  )
}
