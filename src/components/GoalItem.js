import { Pressable, StyleSheet, Text, View } from "react-native";

export default function GoalItem({goal, onSelect, selectedIndex, setSelectedIndex}) {
    return (
        <Pressable onPress={() => { onSelect(goal); setSelectedIndex(goal.index); }}
            style={selectedIndex == goal.index ? styles.selectedItem : styles.item}>
            <View>
                <Text>{goal.title}</Text>
                <Text style={styles.categoryText}>{goal.category}</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    item: {
        border: "1px solid grey",
        padding: 5,
        backgroundColor: "white"
    },
    selectedItem: {
        border: "1px solid grey",
        padding: 5,
        backgroundColor: "lightblue"
    },
    categoryText: {
        color: "dimgrey",
        fontSize: 12
    }
});