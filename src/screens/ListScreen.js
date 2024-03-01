import { View, Text } from "react-native";
import Button from "../components/Button";
import { useState } from "react";

const defaultGoal = {
    title: null,
    description: null,
    progress: null,
    goal: null
}

export default function ListScreen({navigation}) {
    const [goals, setGoals] = useState([]); // The goals the app is working with

    return (
        <View>
            
            <Button label="Add Goal" onclick={() => { navigation.navigate("AddScreen"); }}/>
            <Button label="Edit Goal" onclick={(goal) => { navigation.navigate("EditScreen", goal); }}/>
            <Button label="Delete Goal" onclick={(goal) => { setGoals(goals.map((currentgoal) => { return goal.title !== currentgoal.title; })); }}/>
        </View>
    );
}