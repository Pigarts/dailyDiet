import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native"; 
import { ArrowUpRight } from "phosphor-react-native"

export type buttonTypeStyleProps = "PRIMARY" | "SECONDARY";

type props = { 
    type: buttonTypeStyleProps
}

export const Container = styled(TouchableOpacity)<props>`
    margin-top: 32px;
    margin-bottom: 40px;
    padding: 16px 20px;
    gap: 2px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    background-color: 
        ${({theme, type}) => type === "PRIMARY" ? 
        theme.COLORS.GREENLIGHT : theme.COLORS.REDLIGHT};
        border-radius: 8px;
`

export const Title = styled.Text`
    ${({theme}) => css`
    font-size: ${ theme.FONT_SIZE.XXL};
    font-family: ${ theme.FONT_FAMILY.BOLD};
    color: ${ theme.COLORS.GRAYS1};
    `};

`
export const Description = styled.Text`
    ${({theme}) => css`
    font-size: ${ theme.FONT_SIZE.MD};
    font-family: ${ theme.FONT_FAMILY.REGULAR};
    color: ${ theme.COLORS.GRAYS2};
`};
`
