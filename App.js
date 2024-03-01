import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import ListScreen from './src/screens/ListScreen';
import EditScreen from './src/screens/EditScreen';
import AddScreen from './src/screens/AddScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ListScreen">
        <Stack.Screen name="ListScreen" component={ListScreen} options={{title: "Checkpoint"}}/>
        <Stack.Screen name="EditScreen" component={EditScreen} options={{title: "Edit Goal"}}/>
        <Stack.Screen name="AddScreen" component={AddScreen} options={{title: "Add New Goal"}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}