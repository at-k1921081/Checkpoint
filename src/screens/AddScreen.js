import { View, Text } from "react-native";
import GoalForm from "../components/GoalForm";

export default function AddScreen({navigation, route}) {
    const { onAdd } = route.params;

    return (
        <View>
            <GoalForm originalGoal={null} onSubmit={onAdd} onCancel={navigation.goBack}/>
        </View>
    );
}