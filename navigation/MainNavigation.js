import { createStackNavigator } from "@react-navigation/stack";
import { Routes } from "./Routes";
import Home from "../screens/home/Home";

const Stack = createStackNavigator();

const MainNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={Routes.Home} component={Home} />
        </Stack.Navigator>
    );
};

export default MainNavigation;



