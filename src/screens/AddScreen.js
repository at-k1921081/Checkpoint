import { ScrollView, Text } from "react-native";
import GoalForm from "../components/GoalForm";

export default function AddScreen({navigation, route}) {
    const { onAdd } = route.params;

    return (
        <ScrollView>
            <GoalForm originalGoal={null} onSubmit={onAdd} onCancel={navigation.goBack}/>
        </ScrollView>
    );
}