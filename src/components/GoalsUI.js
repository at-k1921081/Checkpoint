import { StyleSheet, View } from "react-native";
import GoalsList from "./GoalsList";
import GoalView from "./GoalView";

export default function GoalsUI({goals, onGoalClick, goal, selectedIndex, setSelectedIndex}) {
    return (
        <View style={styles.ui}>
            <GoalsList goals={goals} onGoalClick={onGoalClick} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex}/>
            <GoalView selectedGoal={goal}/>
        </View>
    );
}

const styles = StyleSheet.create({
    ui: {
        flexDirection: "row"
    }
});