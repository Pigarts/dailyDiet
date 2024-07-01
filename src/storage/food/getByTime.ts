import AsyncStorage from "@react-native-async-storage/async-storage"
import { FoodStorageDTO } from "src/DTOS/foodStorageDTO"
import { FOOD_COLLECTION } from "src/config/storageConfig"

export async function GetFoodByTime(time: string) {
    try{
        const storage = await AsyncStorage.getItem(`${FOOD_COLLECTION}`)

        const foods: FoodStorageDTO[] = storage ? JSON.parse(storage) : []
        const searsched = foods.filter(memoryItem => memoryItem.time === time)
        const searschedFood = searsched[0]
        return searschedFood
        
    } catch(erro) {
        throw(erro)
    }
}