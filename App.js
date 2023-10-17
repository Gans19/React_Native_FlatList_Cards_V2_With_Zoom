import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { PaperProvider } from "react-native-paper";
import Cards from "./Cards";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Details from "./Details";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
        <PaperProvider>
      
          <Stack.Navigator>
            <Stack.Screen
              name="Cards"
              options={{
                title: "Gallery",
              }}
              component={Cards}
            />
            <Stack.Screen name="Details" component={Details} />
          </Stack.Navigator>
          {/* <Cards /> */}
   
        </PaperProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
