import AsyncStorage from "@react-native-async-storage/async-storage"
import { FOOD_COLLECTION } from "src/config/storageConfig"
import { foodGetAll } from "./getAll"
import { AppError } from "@utils/appError"
import { FoodStorageDTO } from "../../DTOS/foodStorageDTO"

export async function foodCreate(food:FoodStorageDTO) {
    try {
        
        console.log(food)
        const storagedFoods = await foodGetAll()

        const storage = await JSON.stringify([food, ...storagedFoods ])

        await AsyncStorage.setItem(FOOD_COLLECTION, storage)
    } catch(error) {
        throw error
    }
} 