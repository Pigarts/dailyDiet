import { TouchableOpacityProps } from "react-native"
import { Container, Description, IconButton, Title, buttonTypeStyleProps} from "./styles"

type props = TouchableOpacityProps & {
    number: number
    type?:  buttonTypeStyleProps
}

export const DietProgressIndicator = ({ number, type = "PRIMARY", ...rest}:props) => {
    
    return(
        <Container type={number >= 50 ? "PRIMARY" : "SECONDARY"} {...rest}>
            <Title>{number}%</Title>
            <Description>
            das refeições dentro da dieta
            </Description>
            <IconButton type={number > 50 ? "PRIMARY" : "SECONDARY"}/>
        </Container>
    )
}