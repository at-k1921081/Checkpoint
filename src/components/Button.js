import { Pressable, Text } from "react-native";

export default function Button({label, onclick}) {
    return (
        <Pressable onPress={onclick}>
            <Text>{label}</Text>
        </Pressable>
    );
}