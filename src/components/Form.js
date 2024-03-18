import { KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import Button from "./Button";
import Icons from "./Icons";

export default function Form({children, onSubmit, onCancel, submitLabel, submitIcon}) {
    return (
        <KeyboardAvoidingView>
            <ScrollView>{children}</ScrollView>

            <Button label={submitLabel} icon={submitIcon} onclick={onSubmit}/>
            <Button label="Cancel" icon={<Icons.Close/>} onclick={onCancel}/>
        </KeyboardAvoidingView>
    );
}

const InputText = ({label, value, onChange}) => {
    return (
        <View>
            <Text>{label}</Text>
            <TextInput value={value} onChangeText={onChange}/>
        </View>
    );
}

Form.InputText = InputText;