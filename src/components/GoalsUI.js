import { StyleSheet, View } from "react-native";
import { useState } from "react";
import GoalsList from "./GoalsList";
import GoalView from "./GoalView";
import GoalSearch from "./GoalSearch";

export default function GoalsUI({goals, visibleGoals, setVisibleGoals, onGoalClick, goal, selectedIndex, setSelectedIndex}) {
    const [searchType, setSearchType] = useState("Title");

    const onSearchGoals = (query) => {
        const searchTitles = (query) => { return goals.filter((g) => { return g.title.includes(query); }) };
        const searchCategories = (query) => goals.filter((g) => { return g.category.includes(query); });

        if (searchType == "Title") setVisibleGoals(searchTitles(query));
        else if (searchType == "Category") setVisibleGoals(searchCategories(query));
    }

    const onChangeType = (itemValue, itemIndex) => {
        setSearchType(itemValue);
    }

    return (
        <View>
            <GoalSearch onSearchGoals={onSearchGoals} type={searchType} onChangeType={onChangeType}/>
            <View style={styles.ui}>
                <GoalsList goals={visibleGoals} onGoalClick={onGoalClick} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex}/>
                <GoalView selectedGoal={goal}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    ui: {
        flexDirection: "row"
    }
});