import { Button } from "@components/button";
import { Container, Content, Form } from "./styles";
import { KeyboardAvoidingView, Platform, ScrollView, View } from "react-native";
import { Input } from "@components/input";
import { TextBox } from "@components/textBox";
import { useNavigation } from "@react-navigation/native";
import { SelectButton } from "@components/selectButton";
import { useEffect, useState } from "react";
import { BottomColorIndicatorStyle } from "@components/selectButton/styles";
import { foodCreate } from "@storage/food/create";
import { FoodStorageDTO } from "../../DTOS/foodStorageDTO";
import { Feeedback } from './../feedback/index';
import { PageHeader } from "@components/pageHeader";



export function NewFood() {
    const [name, setName] = useState<string>("")
    const [date, setDate] = useState<string>("")
    const [time, setTime] = useState<string>("")
    const [description, setDescription] = useState<string>("")
    const [type, setType] = useState<BottomColorIndicatorStyle>();

    const navigation = useNavigation()

    function goHome() {
        navigation.navigate("home")
    } 

    function hanfleFeedBack() {
         
        if(type){
            navigation.navigate("feedback", {type})
        }
        
            
    } 

    const allFields = (Object.values({ name, description, time, date, type }).some(value => value ===  "" || type === undefined)) 
        
      

    async function handleSubmi() {
        const newFood: FoodStorageDTO = { name, description, time, date, type };

        if (Object.values(newFood).some(value => !value)) {
          return console.log("ERRO");
        }
       
        foodCreate(newFood)
        hanfleFeedBack()
    }

    useEffect(() => {
        const currentDate = new Date();

        const formattedDate = currentDate.toLocaleDateString();
        const formattedTime = currentDate.toLocaleTimeString();
        setDate(formattedDate)
        setTime(formattedTime)

      
      
    }, [])

    return(
        <Container>
            <PageHeader
                title="Nova refeição"   
            />
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                >
            </KeyboardAvoidingView>
                <Content>
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
                            onChange={setTime}
                            value={time}
                        />
                        </View>
                        <SelectButton 
                            selected={type} setSelected={setType}
                        />
                    </Form>
                    <Button 
                        title="Cadastrar refeição"
                        onPress={handleSubmi}
                        disabled={allFields}
                    />
                </Content>
            </ScrollView>
        </Container>
    )
}