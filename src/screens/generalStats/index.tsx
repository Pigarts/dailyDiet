import { useEffect, useState } from "react";
import { BackButton, Card, CardDescription, CardHeading, Container, Content, Description, Heading, Icon, PageHeader, StatusBarColor, Title } from "./styles";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ActivityIndicator, View } from "react-native";
import { FoodStorageDTO } from "src/DTOS/foodStorageDTO";
import { GetFoodByTime } from "@storage/food/getByTime";
import { foodGetAll } from "@storage/food/getAll";

export function Status() {
    const [totalFoods, setTotalFoods] = useState(0)
    const [goodFoods, setGoodFoods] = useState(0)
    const [badFoods, setBadFoods] = useState(0)
    const [percentage, setPercentage] = useState(0)
    const [betterSequence, setBetterSequence] = useState(0)
    
    const [foods, setFoods] = useState<FoodStorageDTO[]>()
    
    const navigation = useNavigation()
    
    function handleackButton() {
        navigation.goBack()
    } 
    
    const getPercentage = (data: FoodStorageDTO[]) => {
        if (data.length < 1) {
            return;
        }
    
        const totalItems = data.length;
        const healthyItems = data.filter(item => item.type === "GOOD").length;
        const healthyFoodsPercentage = Math.round((healthyItems / totalItems) * 100);
        setTotalFoods(totalItems)
        setGoodFoods(healthyItems)
        setBadFoods(totalItems - healthyItems)
        setPercentage(healthyFoodsPercentage);
    }

    function longestGoodSequence(meals: FoodStorageDTO[]) {
        meals.sort((a, b) => {
            if (a.date === b.date) {
                return a.time.localeCompare(b.time);
            }
            return a.date.localeCompare(b.date);
        });
    
        let longestSequence: FoodStorageDTO[] = [];
        let currentSequence: FoodStorageDTO[] = [];
    
        meals.forEach(meal => {
            if (meal.type === "GOOD") {
                currentSequence.push(meal);
            } else {
                if (currentSequence.length > longestSequence.length) {
                    longestSequence = [...currentSequence];
                }
                currentSequence = [];
            }
        });
        
        if (currentSequence.length > longestSequence.length) {
            longestSequence = currentSequence;
        }
    
        setBetterSequence(longestSequence.length);
    }

    async function fetchData() {
        const data: FoodStorageDTO[] = await foodGetAll()
        getPercentage(data)
        longestGoodSequence(data)
        console.log(betterSequence)
        setFoods(data)
    }
    
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <>
        
            {foods ?
            <Container type={percentage > 50  ? "GOOD" : "BAD" }>
            <StatusBarColor type={percentage > 50  ? "GOOD" : "BAD" }/>
            <PageHeader type={percentage > 50  ? "GOOD" : "BAD" }>
                <BackButton onPress={handleackButton}>
                   
                <Icon type={percentage > 50  ? "GOOD" : "BAD" }
                    />

                </BackButton>
                <Title>{percentage}%</Title>
                <Description>das refeições dentro da dieta</Description>
            </PageHeader>
            <Content>
                <Heading> Estatísticas gerais </Heading>
                <Card >
                   <CardHeading> {betterSequence} </CardHeading>
                   <CardDescription>melhor sequência de pratos dentro da dieta</CardDescription>
                </Card>
                <Card >
                   <CardHeading> {totalFoods} </CardHeading>
                   <CardDescription>refeições registradas</CardDescription>
                </Card>

                <View style={
                    {
                        gap: 16,
                        flexDirection: "row", 
                    }
                }>

                <Card 
                    type={"GOOD"}
                    >
                   <CardHeading> {goodFoods} </CardHeading>
                   <CardDescription>refeições dentro da dieta</CardDescription>
                </Card>

                <Card 
                    type={"BAD"}
                    >
                   <CardHeading> {badFoods} </CardHeading>
                   <CardDescription>refeições registradas</CardDescription>
                </Card>
                    </View>
                
                </Content>
            </Container> 
                    : 
                    <View style={{flex: 1, justifyContent: "center", backgroundColor: "FAFAFA"}}>
                    <ActivityIndicator/>
                    </View>
}
        </>
    )
}