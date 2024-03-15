import { View, Text } from "react-native";
import Button from "../components/Button";
import { useState } from "react";
import { INITIAL_GOALS } from "../sample data/InitialGoals";
import GoalsList from "../components/GoalsList";

const defaultGoal = {
    title: null,
    description: null,
    progress: null,
    goal: null
}

export default function ListScreen({navigation}) {
    const [goals, setGoals] = useState(INITIAL_GOALS); // The goals the app is working with
    
    const OnGoalClick = (goal) => {
        console.log("Goal title: " + goal.title);
        navigation.navigate("EditScreen", { goal });
    };

    return (
        <View>
            <GoalsList goals={goals} onGoalClick={OnGoalClick}/>
            <Button label="Add Goal" onclick={() => { navigation.navigate("AddScreen"); }}/>
            <Button label="Edit Goal" onclick={(goal) => { navigation.navigate("EditScreen", { goal }); }}/>
            <Button label="Delete Goal" onclick={(goal) => { setGoals(goals.map((currentgoal) => { return goal.title !== currentgoal.title; })); }}/>
        </View>
    );
}