import { MaterialIcons } from "@expo/vector-icons";

export default function Icons() {};

const Edit = () => <MaterialIcons name="edit" size={16}/>;
const Delete = () => <MaterialIcons name="delete" size={16}/>;
const Add = () => <MaterialIcons name="add" size={16}/>;
const Close = () => <MaterialIcons name="close" size={16}/>;

Icons.Add = Add;
Icons.Delete = Delete;
Icons.Edit = Edit;
Icons.Close = Close;