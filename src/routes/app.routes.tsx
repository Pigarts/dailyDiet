import {createNativeStackNavigator} from "@react-navigation/native-stack"
import { Edit } from "@screens/editFood"
import { Feeedback } from "@screens/feedback"
import { Details } from "@screens/foodDetails"
import { Status } from "@screens/generalStats"
import { Home } from "@screens/home"
import { NewFood } from "@screens/newFood"

export function AppRoutes() {
    const {Navigator, Screen} = createNativeStackNavigator()


    return(
        <Navigator screenOptions={{headerShown: false}}>
            <Screen name="home" component={Home}/>
            <Screen name="status" component={Status}/>
            <Screen name="newFood" component={NewFood}/>
            <Screen name="feedback" component={Feeedback}/>
            <Screen name="details" component={Details}/>
            <Screen name="editFood" component={Edit}/>


        </Navigator>
    )

}