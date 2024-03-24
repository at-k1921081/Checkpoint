import { Text, View, StyleSheet } from "react-native";

const defaultGoal = {
    title: "Goal Title",
    description: "This is the description",
    progress: 0.0,
    goal: 1.0,
    index: 100
}

export default function GoalView({selectedGoal}) {
    const goal = (selectedGoal == null) ? defaultGoal : selectedGoal;

    return (
        <View style={styles.goalView}>
            <Text style={styles.title}>{goal.title}</Text>
            <Text style={styles.description}>{goal.description}</Text>
            <View style={styles.progression}>
                <Text>{goal.progress} / {goal.goal}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    goalView: {
        marginLeft: "50px",
        marginRight: "50px",
        justifyContent: "center",
        border: "1px solid black",
        backgroundColor: "white",
        padding: 15
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