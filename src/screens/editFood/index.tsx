import { Button } from "@components/button";
import { Container, Content, Form } from "./styles";
import { ActivityIndicator, KeyboardAvoidingView, Platform, ScrollView, View } from "react-native";
import { Input } from "@components/input";
import { TextBox } from "@components/textBox";
import { useNavigation, useRoute } from "@react-navigation/native";
import { SelectButton } from "@components/selectButton";
import { useEffect, useState } from "react";
import { BottomColorIndicatorStyle } from "@components/selectButton/styles";
import { FoodStorageDTO } from "../../DTOS/foodStorageDTO";
import { PageHeader } from "@components/pageHeader";
import { GetFoodByTime } from "@storage/food/getByTime";
import { UpdateFoodByTime } from "@storage/food/update";
import { StatusbarColor } from "@components/statusbarColor";

type routeTypes = {
    time: string
}

export function Edit() {

    const [name, setName] = useState<string>("")
    const [date, setDate] = useState<string>("")
    const [newTime, setNewTime] = useState<string>("")
    const [description, setDescription] = useState<string>("")
    const [type, setType] = useState<BottomColorIndicatorStyle>();
    const navigate = useNavigation()
    const [food, setFood] = useState<FoodStorageDTO>()

    const route = useRoute()
    const { time } = route.params as routeTypes

    const allFields = (Object.values({ name, description, newTime, date, type }).some(value => value ===  "" || type === undefined)) 


      async function handleUpdate() {
        try{
            if(food)  {
                const updates = {
                    name,
                    date,
                    time: newTime,
                    description,
                    type
                } 
                console.log(updates)
                await UpdateFoodByTime(time, updates)
                navigate.navigate("home")
            }
        } catch(error) {
            throw error
        }
    }

    async function fetchData() {
        const data: FoodStorageDTO = await GetFoodByTime(time)
        setFood(data)
        if(data) {
           console.log()
           setName(data.name)
           setDate(data.date)
           setNewTime(data.time)
           setDescription(data.description)
           setType(data.type)
       } 
    }
    
    useEffect(() => {
         fetchData() 
        }, [])
         
    return(
        <Container>
            <StatusbarColor/>
            <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      ></KeyboardAvoidingView>
            <PageHeader
                title="Editar refeição"
                />
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <Content>
          
                {
                    food ?  
                    <Form>
                    <Input
                        label="Nome"
                        onChange={setName}
                        value={name}
                        />
                    <TextBox
                        label="Descrição"
                        onChange={setDescription}
                        value={description}
                        />
                    <View style={
                        {
                            gap: 24,
                            flexDirection: "row", 
                        }
                    }>
                    <Input
                        label="Data"
                        onChange={setDate}
                        value={date}
                        />
                    <Input
                        label="Hora"
                        onChange={setNewTime}
                        value={newTime}
                        />
                    </View>
                    <SelectButton 
                        selected={type} setSelected={setType}
                        />
                    </Form>
                    : 
                    <View style={{flex: 1, justifyContent: "center", backgroundColor: "FAFAFA"}}>
                    <ActivityIndicator/>
                    </View>
                }
                
                <Button 
                    title="Salvar alterações"
                    onPress={handleUpdate}
                    disabled={allFields}
                    />
            </Content>
            </ScrollView>

                

        </Container>
    )
}