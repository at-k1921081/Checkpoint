import { StyleSheet, View } from "react-native";
import GoalsList from "./GoalsList";
import GoalView from "./GoalView";

export default function GoalsUI({goals, onGoalClick}) {
    return (
        <View style={styles.ui}>
            <GoalsList goals={goals} onGoalClick={onGoalClick}/>
            <GoalView/>
        </View>
    );
}

const styles = StyleSheet.create({
    ui: {
        flexDirection: "row"
    }
});