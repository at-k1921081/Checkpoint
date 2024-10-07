import { KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { Button, ButtonTray } from "./Button";
import Icons from "./Icons";

export default function Form({children, onSubmit, onCancel, submitLabel, submitIcon}) {
    return (
        <KeyboardAvoidingView>
            <ScrollView>{children}</ScrollView>

            <ButtonTray>
                <Button label={submitLabel} icon={submitIcon} onclick={onSubmit}/>
                <Button label="Cancel" icon={<Icons.Close/>} onclick={onCancel}/>
            </ButtonTray>
        </KeyboardAvoidingView>
    );
}

const InputText = ({label, value, onChange}) => {
    return (
        <View style={styles.inputText}>
            <Text>{label}</Text>
            <TextInput style={styles.textInput} value={value} onChangeText={onChange}/>
        </View>
    );
}

Form.InputText = InputText;

const styles = StyleSheet.create({
    textInput: {
        border: "1px solid grey",
        padding: 5
    },
    inputText: {
        margin: 5
    }
});