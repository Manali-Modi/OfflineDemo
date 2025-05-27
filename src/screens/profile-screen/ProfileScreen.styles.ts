import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff"
    },
    header: {
        justifyContent: "center",
        textAlign: "center",
        fontSize: 20,
        fontWeight: "500",
    },
    bodyContainer: {
        flex: 1,
    },
    profile: {
        height: 80,
        width: 80,
        alignSelf: "center",
        marginTop: 20,
        borderWidth: 1,
        borderRadius: 50
    },
    listContainer: {
        marginTop: 20
    },
})