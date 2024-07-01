import { TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";

export type BottomColorIndicatorStyle = "GOOD" | "BAD"

type Props = {
    isSelected?: boolean
    type: BottomColorIndicatorStyle
} 

export const Container = styled.View`
    flex: 1;
    flex-direction: row;
    gap: 8px;
`

export const Button = styled(TouchableOpacity)<Props>`
    gap: 8px;
    flex: 1;
    height: 58px;
    padding: 16px;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    background-color: ${({theme, type, isSelected}) => type ==="GOOD" ? ( isSelected ? theme.COLORS.GREENLIGHT : theme.COLORS.GRAYS5) : ( isSelected ? theme.COLORS.REDLIGHT : theme.COLORS.GRAYS5)};
    border: 1px solid ${({theme, type, isSelected}) => type ==="GOOD" ? ( isSelected ? theme.COLORS.GREENDARK : theme.COLORS.GRAYS5) : ( isSelected ? theme.COLORS.REDDARK : theme.COLORS.GRAYS5)};

`
export const ColorIndicator = styled(View)<Props>`
    height: 8px;
    width: 8px;
    border-radius: 50px;
    background-color: ${({theme, type}) => type === "GOOD" ?  theme.COLORS.GREENDARK : theme.COLORS.REDDARK};
`

export const ButtonText = styled.Text`
    font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
    font-size: ${({theme}) => theme.FONT_SIZE.LG};
    color: ${({theme}) => theme.COLORS.GRAYS1}; 
    text-align: center;
`