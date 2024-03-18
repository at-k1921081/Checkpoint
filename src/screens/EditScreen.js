import { View } from "react-native";
import GoalForm from "../components/GoalForm";

export default function EditScreen({navigation, route}) {
    const { goal, onEdit } = route.params;

    return (
        <View>
            <GoalForm originalGoal={goal} onSubmit={onEdit} onCancel={navigation.goBack}/>
        </View>
    );
}