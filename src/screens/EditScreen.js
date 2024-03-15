import { View, Text } from "react-native";
import { useState } from "react";

export default function EditScreen({navigation, route}) {
    const { goal } = route.params;

    return (
        <View>
            <Text>This is the edit screen</Text>
            <Text>Title: {goal.title}<br/>Description:<br/>{goal.description}<br/>
                Progress: {goal.progress}<br/>Goal: {goal.goal}</Text>
        </View>
    );
}