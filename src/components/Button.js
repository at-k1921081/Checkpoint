import { StyleSheet, Pressable, Text, View } from "react-native";

export function Button({label, onclick}) {
    return (
        <Pressable onPress={onclick} style={styles.button}>
            <Text>{label}</Text>
        </Pressable>
    );
}

export function ButtonTray({children}) {
    return (
        <View style={styles.buttonTray}>
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        minHeight: 50,
        borderWidth: 1,
        borderRadius: 7,
        borderColor: "grey",
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        padding: 3,
        flex: 1,
        flexDirection: "row",
        gap: 5
    },
    buttonTray: {
        flexDirection: "row",
        gap: 15,
        minHeight: 50,
        margin: 5
    }
});