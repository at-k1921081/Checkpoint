import { View } from "react-native";
import Button from "./Button";

export default function GoalsList({goals, onGoalClick}) {
    return (
        <View>
            {
                goals.map((goal) => { return <Button label={goal.title} onclick={ () => onGoalClick(goal) } key={goal.title}/> })
            }
        </View>
    );
}