import { Pressable, StyleSheet, Text, View } from "react-native";

export default function GoalItem({goal, onSelect}) {
    return (
        <Pressable onPress={() => onSelect(goal)} style={styles.item}>
            <View>
                <Text>{goal.title}</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    item: {
        border: "1px solid grey",
        padding: 5,
        backgroundColor: "white"
    }
});