import AsyncStorage from "@react-native-async-storage/async-storage"
import { FOOD_COLLECTION } from "src/config/storageConfig"
import { foodGetAll } from "./getAll"
import { AppError } from "@utils/appError"
import { FoodStorageDTO } from "../../DTOS/foodStorageDTO"

export async function foodDelete(foodToRemove:FoodStorageDTO) {
    try {
        const storagedFoods = await foodGetAll()
        const foodsWithoutFoodToRemove = storagedFoods.filter(iten => iten.time !==  foodToRemove.time)
        
        const storage = await JSON.stringify(foodsWithoutFoodToRemove)

        await AsyncStorage.setItem(FOOD_COLLECTION, storage)

    } catch(error) {
        throw error
    }
} 