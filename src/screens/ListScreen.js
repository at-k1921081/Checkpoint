import { View } from "react-native";
import { Button, ButtonTray } from "../components/Button";
import { useState } from "react";
import { INITIAL_GOALS } from "../sample data/InitialGoals";
import GoalsUI from "../components/GoalsUI";
import FilePickerManager from "react-native-file-picker";

export default function ListScreen({navigation}) {
    const [goals, setGoals] = useState(INITIAL_GOALS); // The goals the app is working with
    const [selectedGoal, setSelectedGoal] = useState(null);
    
    const handleAdd = (goal) => setGoals([...goals, goal]);
    const handleEdit = (updatedGoal) => setGoals(goals.map((goal) => (goal.index === updatedGoal.index ? updatedGoal : goal)));
    const handleSelect = (goal) => setSelectedGoal(goal);
    const handleDelete = () => { setGoals(goals.filter((goal) => goal.index !== selectedGoal.index)); setSelectedGoal(null); };

    const onAdd = (goal) => { handleAdd(goal); navigation.navigate("ListScreen"); }
    const onEdit = (goal) => {
        handleEdit(goal);
        setSelectedGoal(null);
        navigation.navigate("ListScreen");
    }

    const gotoAddScreen = () => navigation.navigate("AddScreen", { onAdd });
    const gotoEditScreen = () => {
        if (selectedGoal != null) {
            navigation.navigate("EditScreen", { selectedGoal, onEdit });
        }
    }

    const onOpenFile = () => {
        FilePickerManager.showFilePicker((response) => {
            console.log("Response = " + response);

            if (response.didCancel)
                console.log("Cancelled");
            else if (response.error)
                console.log("File error");
            else
                this.setState({file: response});
        });
    }

    return (
        <View>
            <GoalsUI goals={goals} onGoalClick={handleSelect} goal={selectedGoal}/>
            <ButtonTray>
                <Button label="Add Goal" onclick={gotoAddScreen}/>
                <Button label="Edit Goal" onclick={gotoEditScreen}/>
                <Button label="Delete Goal" onclick={handleDelete}/>
                <Button label="Open File" onclick={onOpenFile}/>
            </ButtonTray>
        </View>
    );
}