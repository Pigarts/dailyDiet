
import { ThemeProvider } from "styled-components"
import { useFonts, NunitoSans_400Regular, NunitoSans_700Bold } from "@expo-google-fonts/nunito-sans"
import theme from "../src/theme"
import { Routes } from "@routes/index";
import { ActivityIndicator, StatusBar, Text, View } from "react-native";


export default function Index() {
  const [ fontsLoaded ] = useFonts({NunitoSans_400Regular, NunitoSans_700Bold})
 
  return (
    <ThemeProvider theme={theme}>
      {
      fontsLoaded ? <>
      <Routes/>
        <StatusBar
            barStyle="dark-content"
            backgroundColor="#00000000"
            translucent
        />
        </> 
        : 
        <View style={{flex: 1, justifyContent: "center", backgroundColor: "FAFAFA"}}>
        <ActivityIndicator/>
        </View>
      }
        
 
    </ThemeProvider>
  );
}
