import { ScrollView } from "react-native";
import GoalItem from "./GoalItem";

// All the pressable goal item widgets combined into one
export default function GoalsList({goals, onGoalClick}) {
    return (
        <ScrollView>
            {
                goals.map((goal) => { return (<GoalItem goal={goal} onSelect={onGoalClick} key={goal.index}/>); })
            }
        </ScrollView>
    );
}