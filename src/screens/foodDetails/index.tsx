import { PageHeader } from "@components/pageHeader";
import { Container, Content, DateTitle, Description, NameTitle, ColorIndicator,BottomColorIndicatorStyle, Tag, TagDescription, StatusBarColor } from "./styles";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { GetFoodByTime } from "@storage/food/getByTime";
import { FoodStorageDTO } from "src/DTOS/foodStorageDTO";
import { ActivityIndicator, View } from "react-native";
import { Button } from "@components/button";
import { foodDelete } from "@storage/food/delete";
import { Modal, ModalBottonsProps } from "@components/modal";

type routeTypes = {
    type: string
    time: string
}

export function Details() {
    const [modal, setModal] = useState<boolean>(false)
    const [modalAction, setModalAction] = useState<ModalBottonsProps>()

    const [food, setFood] = useState<FoodStorageDTO>()
    const navigate = useNavigation()
    const route = useRoute()
    const { time } = route.params as routeTypes

    async function fetchData() {
        const data: FoodStorageDTO = await GetFoodByTime(time)
        setFood(data)
    }
    
    function editFood() {
        if(food) {
            navigate.navigate("editFood", {time: food.time})
        }
    }

    async function handledelete() {
        console.log(food)
        setModal(true)
        if(food) {
            await foodDelete(food)
        }
        navigate.navigate("home")
    }

   useEffect(() => {
        fetchData() 
    }, [])
 
    return(
        <>
            {
                food ?
             
        <Container type={food.type == "GOOD" ? "GOOD" : "BAD" }>
                <StatusBarColor type={food.type == "GOOD" ? "GOOD" : "BAD" }/>
            <PageHeader 
                title="Refeição"
                type={food.type}
                />
                
            <Content>
                <View>
                <View 
                style={{
                    gap: 24
                }}
                >
                <View>
                    <NameTitle>
                        {food.name}
                    </NameTitle>
                    <Description>
                        {food.description}
                    </Description>
                </View>
                <View>
                    <DateTitle>
                        Data e hora
                    </DateTitle>
                    <Description>
                        {`${food.date} às ${food.time.slice(0, -3)}`}
                    </Description>
                </View>
                <Tag>
                    <ColorIndicator type={food.type === "GOOD" ? "GOOD" : "BAD"}/>
                    <TagDescription>{ food.type ==="GOOD" ? "dentro da dieta" : "fora da dieta"}</TagDescription>
                </Tag>
                </View>

</View>
<View 
    style={{
        gap: 8
    }}
>
    <Button
        title="Editar refeição"
        icon="EDIT"
        onPress={editFood}
        />
    <Button
        title="Excluir refeição"
        icon="TRASH"
        type="OUTLINE"
        onPress={() => setModal(true)}
        />
</View>
            </Content>
        </Container>
        : 
        <View style={{flex: 1, justifyContent: "center", backgroundColor: "FAFAFA"}}>
        <ActivityIndicator/>
        </View>

}
<Modal 
                visible={modal}
                onRequestClose={() => setModal(false)}
                transparent
                animationType="fade"
                onDelete={handledelete}
                onCancel={() => setModal(false)}
                
            />
        </>
    )
}