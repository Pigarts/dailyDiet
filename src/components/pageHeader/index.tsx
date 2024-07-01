import { useNavigation } from "@react-navigation/native";
import { BackButton, Container, HeaderColorStyleProp, HomeContainer, Icon, Title } from "./styles";
import { Image, TouchableOpacity } from "react-native";

type Props = {
    type?: HeaderColorStyleProp
    title?: string
}

export function PageHeader({title, type}: Props) {

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
                    <Icon/>
                </BackButton>
                <Title>
                    {title}
                </Title>
                </Container>
        }
        </>

    )
}
