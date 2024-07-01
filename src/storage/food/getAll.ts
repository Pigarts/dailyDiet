import AsyncStorage from "@react-native-async-storage/async-storage";
import { FOOD_COLLECTION } from "src/config/storageConfig";
import { FoodStorageDTO } from "../../DTOS/foodStorageDTO";



export async function foodGetAll() {
    try {
        const storage = await AsyncStorage.getItem(FOOD_COLLECTION)
    
        const foods: FoodStorageDTO[] = storage ? JSON.parse(storage) : []
          


        return foods;

    } catch(error) {
        throw error;
    }
}