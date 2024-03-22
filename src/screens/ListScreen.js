import { View } from "react-native";
import { Button, ButtonTray } from "../components/Button";
import { useState } from "react";
import { INITIAL_GOALS } from "../sample data/InitialGoals";
import GoalsList from "../components/GoalsList";
import GoalsUI from "../components/GoalsUI";

export default function ListScreen({navigation}) {
    const [goals, setGoals] = useState(INITIAL_GOALS); // The goals the app is working with
    
    const handleEdit = (updatedGoal) => setGoals(goals.map((goal) => (goal.index === updatedGoal.index ? updatedGoal : goal)));

    const onEdit = (goal) => {
        handleEdit(goal);
        navigation.navigate("ListScreen");
    }

    const gotoAddScreen = () => navigation.navigate("AddScreen");
    const gotoEditScreen = (goal) => navigation.navigate("EditScreen", { goal, onEdit });

    return (
        <View>
            <GoalsUI goals={goals} onGoalClick={gotoEditScreen}/>
            <ButtonTray>
                <Button label="Add Goal" onclick={gotoAddScreen}/>
                <Button label="Edit Goal" onclick={gotoEditScreen}/>
                <Button label="Delete Goal" onclick={(goal) => { setGoals(goals.map((currentgoal) => { return goal.title !== currentgoal.title; })); }}/>
            </ButtonTray>
        </View>
    );
}