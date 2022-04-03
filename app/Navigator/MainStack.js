import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../Screen/HomeScreen";



const Stack = createStackNavigator();

export default AuthStack = () => {
   return (
    <Stack.Navigator screenOptions={{
        headerShown:false
    }}>
        <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
   )
}