import { useState } from "react";
import Icons from "./Icons";
import Form from "./Form";

const defaultGoal = {
    title: null,
    description: null,
    progress: null,
    goal: null,
    index: null
};

export default function GoalForm({originalGoal, onSubmit, onCancel}) {
    const [goal, setGoal] = useState(originalGoal || defaultGoal);

    const handleChange = (field, value) => setGoal({...goal, [field]: value});
    const handleSubmit = () => onSubmit(goal);

    const submitLabel = originalGoal ? "Modify" : "Add";
    const submitIcon = originalGoal ? <Icons.Edit/> : <Icons.Add/>;

    return (
        <Form onSubmit={handleSubmit} onCancel={onCancel} submitLabel={submitLabel} submitIcon={submitIcon}>
            <Form.InputText label="Title" value={goal.title} onChange={(value) => handleChange("title", value)}/>
            <Form.InputText label="Description" value={goal.description} onChange={(value) => handleChange("description", value)}/>
            <Form.InputText label="Progress" value={goal.progress} onChange={(value) => handleChange("progress", value)}/>
            <Form.InputText label="Goal" value={goal.goal} onChange={(value) => handleChange("goal", value)}/>
            <Form.InputText label="Category" value={goal.category} onChange={(value) => handleChange("category", value)}/>
        </Form>
    );
}