import { Pressable, StyleSheet, Text, View } from "react-native";

export default function GoalItem({goal, onSelect}) {
    return (
        <Pressable onPress={() => onSelect(goal)}>
            <View>
                <Text>{goal.title}</Text>
            </View>
        </Pressable>
    )
}