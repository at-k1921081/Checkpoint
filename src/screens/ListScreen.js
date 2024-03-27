import { View } from "react-native";
import { Button, ButtonTray } from "../components/Button";
import { useState } from "react";
import { INITIAL_GOALS } from "../sample data/InitialGoals";
import GoalsUI from "../components/GoalsUI";

export default function ListScreen({navigation}) {
    const [goals, setGoals] = useState(INITIAL_GOALS); // The goals the app is working with
    const [visibleGoals, setVisibleGoals] = useState(goals); // The goals that will be visible with the current search
    const [selectedGoal, setSelectedGoal] = useState(null);
    const [selectedIndex, setSelectedIndex] = useState(null);
    
    const handleAdd = (goal) => setGoals([...goals, goal]);
    const handleEdit = (updatedGoal) => setGoals(goals.map((goal) => (goal.index === updatedGoal.index ? updatedGoal : goal)));
    const handleSelect = (goal) => setSelectedGoal(goal);
    const handleDelete = () => { setGoals(goals.filter((goal) => goal.index !== selectedIndex)); setSelectedGoal(null); };

    const onAdd = (goal) => { handleAdd(goal); setVisibleGoals(goals); navigation.navigate("ListScreen"); }
    const onEdit = (goal) => {
        handleEdit(goal);
        setSelectedGoal(null);
        setVisibleGoals(goals);
        navigation.navigate("ListScreen");
    }
    const onDelete = (goal) => {
        handleDelete(goal);
        setVisibleGoals(goals);
    }

    const gotoAddScreen = () => navigation.navigate("AddScreen", { onAdd });
    const gotoEditScreen = () => {
        if (selectedGoal != null) {
            navigation.navigate("EditScreen", { selectedGoal, onEdit });
        }
    }

    return (
        <View>
            <GoalsUI goals={goals} visibleGoals={visibleGoals} setVisibleGoals={setVisibleGoals} onGoalClick={handleSelect} goal={selectedGoal}
                selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex}/>
            <ButtonTray>
                <Button label="Add Goal" onclick={gotoAddScreen}/>
                <Button label="Edit Goal" onclick={gotoEditScreen}/>
                <Button label="Delete Goal" onclick={onDelete}/>
            </ButtonTray>
        </View>
    );
}