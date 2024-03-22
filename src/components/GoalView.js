import { Text, View, StyleSheet } from "react-native";

export default function GoalView() {
    return (
        <View style={styles.goalView}>
            <Text style={styles.title}>Goal title</Text>
            <Text style={styles.description}>Goal Description</Text>
            <View style={styles.progression}>
                <Text>Progress</Text>
                <Text> / </Text>
                <Text>Goal</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    goalView: {
        marginLeft: "50px",
        marginRight: "50px",
        justifyContent: "center"
    },
    title: {
        position: "absolute",
        top: 0,
        alignSelf: "center"
    },
    description: {
        alignSelf: "center"
    },
    progression: {
        flexDirection: "row",
        position: "absolute",
        bottom: 0,
        alignSelf: "center"
    }
});