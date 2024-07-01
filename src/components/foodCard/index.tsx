import { TouchableOpacityProps, View } from "react-native"
import { Container, Time, Divider, Title, TitleWrapper , QualitIndicator, buttonTypeStyleProps} from "./styles"

type props = TouchableOpacityProps & {
    time: String
    title: string
    type: buttonTypeStyleProps
}

export function FoodCard({ type, title, time, ...rest }:props) {

    return(
        <Container {...rest}>
            <TitleWrapper>
            <Time>{time}</Time>
            <Divider></Divider>
            <Title numberOfLines={1}>{title}</Title>
            </TitleWrapper>
            <QualitIndicator type={type}/>
            
        </Container>
    )
}