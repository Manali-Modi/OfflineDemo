import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function CustomButton(props: any) {
    const {
        title,
        onPress
    } = props
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress}>
                <View style={styles.btnContainer}>
                    <Text style={styles.btnTxt}>{title}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 24
    },
    btnContainer: {
        borderWidth: 0.8,
        borderColor: "#262835",
        backgroundColor: "black",
        padding: 20,
        borderRadius: 10
    },
    btnTxt: {
        fontSize: 18,
        fontWeight: "600",
        color: "#E0DEE2",
        textAlign: "center"
    }
})