import { ScrollView } from "react-native";
import GoalForm from "../components/GoalForm";

export default function EditScreen({navigation, route}) {
    const { selectedGoal, onEdit } = route.params;

    return (
        <ScrollView>
            <GoalForm originalGoal={selectedGoal} onSubmit={onEdit} onCancel={navigation.goBack}/>
        </ScrollView>
    );
}