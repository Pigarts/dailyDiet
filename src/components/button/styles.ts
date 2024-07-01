import { Text, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export type buttonTypeStyleProps = "SOLID" | "OUTLINE";

type props = { 
    type: buttonTypeStyleProps
}

export const Container = styled(TouchableOpacity)<props>`
    background-color: ${({theme, type, disabled}) => type === "SOLID" ? 
   (disabled ? theme.COLORS.GRAYS2 : theme.COLORS.GRAYS1)
    :
    (disabled ? theme.COLORS.WHITE : "")};
    border: 1px solid ${({theme}) => theme.COLORS.GRAYS1};
    padding: 16px 24px;
    width: min-content;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 12px;
    
`

export const Title = styled(Text)<props>`
    color: ${({theme, type}) => type === "SOLID" ? 
    theme.COLORS.WHITE 
    :
    theme.COLORS.GRAYS1};

    font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
    font-size: ${({theme}) => theme.FONT_SIZE.MD};
`

export const Label = styled.Text`
    font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
    font-size: ${({theme}) => theme.FONT_SIZE.LG};
    color:  ${({theme}) => theme.COLORS.GRAYS1};
    margin-bottom: 8px;
`