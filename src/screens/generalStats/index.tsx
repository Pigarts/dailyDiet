import { useEffect, useState } from "react";
import { BackButton, Card, CardDescription, CardHeading, Container, Content, Description, Heading, PageHeader, StatusBarColor, Title } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { ActivityIndicator, View } from "react-native";
import { FoodStorageDTO } from "src/DTOS/foodStorageDTO";
import { foodGetAll } from "@storage/food/getAll";
import { ArrowLeft } from "phosphor-react-native";
import { useTheme } from "styled-components/native";

export function Status() {
    const [totalFoods, setTotalFoods] = useState(0)
    const [goodFoods, setGoodFoods] = useState(0)
    const [badFoods, setBadFoods] = useState(0)
    const [percentage, setPercentage] = useState(0)
    const [betterSequence, setBetterSequence] = useState(0)
    
    const [foods, setFoods] = useState<FoodStorageDTO[]>()
    const {COLORS} = useTheme()
   
    
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
                   
                <ArrowLeft  color={percentage > 50 ? COLORS.GREENDARK : COLORS.REDDARK}
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

                <View style={{ flexDirection: "row", gap: 12, justifyContent: "space-between" }}>

                <Card 
                    type={"GOOD"}
                    style={{
                          maxWidth: "48%",
                          flex:1
                    }}
                    >
                   <CardHeading> {goodFoods} </CardHeading>
                   <CardDescription numberOfLines={5}>refeições dentro da dieta</CardDescription>
                </Card>
                <Card 
                    type={"BAD"}
                    style={{
                        maxWidth: "48%",
                        flex:1
                  }}
                    >
                   <CardHeading> {badFoods} </CardHeading>
                   <CardDescription numberOfLines={5}>refeições fora da dieta</CardDescription>
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