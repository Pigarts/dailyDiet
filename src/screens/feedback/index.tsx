import { useNavigation, useRoute } from "@react-navigation/native";
import { Container, Heading, Img, Strong, TextContainer } from "./styles";
import { FoodStorageDTO } from "../../DTOS/foodStorageDTO";
import { Description } from "@components/dietProgressIndicator/styles";
import { Button } from "@components/button";
import { View } from "react-native";


type routeTypes = {
    type: "GOOD" | "BAD";
}

export function Feeedback() {
    const route = useRoute()
    const navigate = useNavigation()
    const { type } = route.params as routeTypes

    function goHome() {
        navigate.navigate("home")
    }

    return(
        <Container>
            <Heading type={type}>
                {type === "GOOD" ? "Continue assim!" : "Que pena!"}
            </Heading>
            {
                type === "GOOD" ?  
                
            <TextContainer>
               
                  <Description>  Você continua </Description>  <Strong>dentro da dieta. </Strong> <Description>Muito bem! </Description> 
             
                </TextContainer>
                
                :
                <TextContainer>
                <Description>  Você </Description> <Strong>saiu da dieta</Strong>  <Description> dessa vez, mas continue se esforçando e não desista!</Description>
                </TextContainer>
                   
                
            }
            
            <Img source={type === "GOOD" ? require("@assets/IllustrationgoodFeedback.png" ) : require("@assets/IllustrationbadFeedback.png")}/>

            <Button 
                title="Ir para a página inicial"
                onPress={goHome}
            />
        </Container>
    )
}