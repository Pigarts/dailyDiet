export type FoodStorageDTO = {
    name: string
    description: string
    date: string
    time: string
    type: "GOOD" | "BAD" | undefined
}