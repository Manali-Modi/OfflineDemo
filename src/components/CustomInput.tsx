import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

export default function CustomInput(props: any) {
    const {
        lable,
        title,
        onChangeText,
        keyboardType,
        inputMainContainer,
        value
    } = props
    return (
        <View style={[styles.container, inputMainContainer]}>
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : undefined}>
                <Text style={styles.lableTxt}>{lable}</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        placeholder={title}
                        placeholderTextColor="grey"
                        onChangeText={onChangeText}
                        value={value}
                        keyboardType={keyboardType}
                        style={styles.inputTxt}
                    />
                </View>
            </KeyboardAvoidingView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 24
    },
    lableTxt: {
        fontSize: 20,
        fontWeight: "500",
        color: "#262835"
    },
    inputContainer: {
        marginTop: 10,
        borderWidth: 0.5,
        borderColor: "#262835",
        padding: 15,
        borderRadius: 10
    },
    inputTxt: {
        fontSize: 18,
        fontWeight: "500",
        color: "#262835",
        outlineWidth: 0,
    }
})