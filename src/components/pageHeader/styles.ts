import { ArrowLeft } from "phosphor-react-native"
import { View } from "react-native"
import styled, {css} from "styled-components/native"

export type HeaderColorStyleProp = "GOOD" | "BAD" | "HOME"

type Props = {
    type?: HeaderColorStyleProp
}

export const Container = styled(View)<Props>`

width: 100%;
padding: 24px; 
align-items: center;
flex-direction: row ;
justify-content: center;
background-color: ${({theme, type}) => type ? ( type === "GOOD" ? theme.COLORS.GREENLIGHT : theme.COLORS.REDLIGHT) : theme.COLORS.GRAYS5 };
`


export const Title = styled.Text`
    ${({theme}) => css`
    color: ${ theme.COLORS.GRAYS1};
    font-size: ${ theme.FONT_SIZE.XL};
    font-family: ${ theme.FONT_FAMILY.BOLD};
    `};

`
export const BackButton = styled.TouchableOpacity`
position: absolute;
left: 24px;
`
export const HomeContainer = styled.View`
    flex: 1;
    min-height: 40px;
    max-height: 40px;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    
`
export const Icon = styled(ArrowLeft).attrs(({ theme }) => ({
    size: 32,
    color: theme.COLORS.GRAYS1 
}))`
`
