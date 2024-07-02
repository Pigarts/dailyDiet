import { TouchableOpacityProps } from "react-native"
import { Container, Description, Title, buttonTypeStyleProps} from "./styles"
import { ArrowUpRight } from "phosphor-react-native"
import { useTheme } from "styled-components"

type props = TouchableOpacityProps & {
    number: number
    type?:  buttonTypeStyleProps
}

export const DietProgressIndicator = ({ number, type = "PRIMARY", ...rest}:props) => {
    
    const {COLORS} = useTheme()

    return(
        <Container type={number >= 50 ? "PRIMARY" : "SECONDARY"} {...rest}>
            <Title>{number}%</Title>
            <Description>
            das refeições dentro da dieta
            </Description>
            <ArrowUpRight 
                size={32}
                color={number > 50 ? COLORS.GREENDARK : COLORS.REDDARK}
                style={{
                    position: "absolute",
                    top: 8,
                    right: 8,
                }}
            />
        </Container>
    )
}