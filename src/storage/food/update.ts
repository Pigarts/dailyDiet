import AsyncStorage from '@react-native-async-storage/async-storage';
import { FoodStorageDTO } from 'src/DTOS/foodStorageDTO';
import { FOOD_COLLECTION } from 'src/config/storageConfig';


export async function UpdateFoodByTime(time: string, updatedFood: FoodStorageDTO) {
    try {
        const storage = await AsyncStorage.getItem(`${FOOD_COLLECTION}`);
        const foods: FoodStorageDTO[] = storage ? JSON.parse(storage) : [];
        const foodIndex = foods.findIndex(memoryItem => memoryItem.time === time);
        if (foodIndex === -1) {
            throw new Error('Item não encontrado');
        }

        foods[foodIndex] = updatedFood;
        const updated = JSON.stringify(foods)
        await AsyncStorage.setItem(`${FOOD_COLLECTION}`, updated);
        console.log("NEW:", updated)
    } catch (erro) {
        throw erro;
    }
}
