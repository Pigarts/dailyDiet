import { useNavigation } from "@react-navigation/native";
import { BackButton, BigTitle, Container, Description, HeaderColorStyleProp, HomeContainer, Title } from "./styles";
import { Image, TouchableOpacity, View } from "react-native";
import { useTheme } from "styled-components";
import { ArrowLeft } from "phosphor-react-native";

type Props = {
    type?: HeaderColorStyleProp
    title?: string
    description?: string

}

export function PageHeader({title, type, description}: Props) {
    const {COLORS} = useTheme()
    const navigate = useNavigation()

    function goHome() {
        navigate.navigate("home")
    }
    return(
        <>
        {
            type === "HOME" ?
                <HomeContainer>
                <Image source={require("@assets/logo.png")}/>  
                <TouchableOpacity>
                    <Image source={require("@assets/perfiel.jpg") } 
                        style={
                            {
                                objectFit: "scale-down",
                                height: 40,
                                width: 40,
                                borderRadius: 50
                            }
                        }
                    />  
                </TouchableOpacity>
                </HomeContainer>
            :
     
         
              <Container type={type}>
                <BackButton onPress={goHome} >
                    <ArrowLeft 
                        size={32}
                        color={COLORS.GRAYS1}
                        />
                </BackButton>
                <View></View>
                <BigTitle>
                    {title}
                </BigTitle>
                <Description>
                    {description}
                </Description>
                </Container>
               
     
        }
        </>

    )
}
