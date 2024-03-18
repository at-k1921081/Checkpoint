import { View } from "react-native";
import Button from "../components/Button";
import { useState } from "react";
import { INITIAL_GOALS } from "../sample data/InitialGoals";
import GoalsList from "../components/GoalsList";

export default function ListScreen({navigation}) {
    const [goals, setGoals] = useState(INITIAL_GOALS); // The goals the app is working with
    
    const handleEdit = (updatedGoal) => setGoals(goals.map((goal) => (goal.title == updatedGoal.title ? updatedGoal : goal)));

    const onEdit = (goal) => {
        handleEdit(goal);
        navigation.navigate("ListScreen");
    }

    const OnGoalClick = (goal) => {
        navigation.navigate("EditScreen", { goal, onEdit });
    };

    return (
        <View>
            <GoalsList goals={goals} onGoalClick={OnGoalClick}/>
            <Button label="Add Goal" onclick={() => { navigation.navigate("AddScreen"); }}/>
            <Button label="Edit Goal" onclick={(goal) => { navigation.navigate("EditScreen", { goal, onEdit }); }}/>
            <Button label="Delete Goal" onclick={(goal) => { setGoals(goals.map((currentgoal) => { return goal.title !== currentgoal.title; })); }}/>
        </View>
    );
}