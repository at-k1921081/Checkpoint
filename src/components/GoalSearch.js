import { Picker } from "@react-native-picker/picker";
import { StyleSheet, TextInput, View, Text } from "react-native";


export default function GoalSearch({onSearchGoals, type, onChangeType}) {
    return (
        <View style={styles.searchView}>
            <Text style={styles.text}>Search: </Text>
            <TextInput onChangeText={onSearchGoals} style={styles.textInput}/>
            <Picker mode="dropdown" selectedValue={type} onValueChange={onChangeType} style={styles.picker}>
                <Picker.Item value={"Title"} label="Title"/>
                <Picker.Item value={"Category"} label="Category"/>
            </Picker>
        </View>
    );
}

const styles = StyleSheet.create({
    searchView: {
        flexDirection: "row",
        minHeight: 50,
        justifyContent: "center",
        margin: 10
    },
    textInput: {
        border: "1px solid black",
        flex: 1
    },
    text: {
        alignSelf: "center"
    },
    picker: {
        marginLeft: 5
    }
});