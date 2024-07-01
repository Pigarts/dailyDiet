import theme from "@theme/index";
import { View } from "react-native";
import styled from "styled-components/native";

export type buttonTypeStyleProps = "GOOD" | "BAD";

type props = { 
    type: buttonTypeStyleProps
}

export const Container = styled.TouchableOpacity`
flex-direction: row;
padding: 14px 16px 14px 12px;
align-items: center;
border: 2px  solid ${({theme}) => theme.COLORS.GRAYS5};
border-radius: 6px;
justify-content: space-between;
margin-bottom: 8px;
`

export const TitleWrapper = styled.View`
    gap: 12px;
 
    align-items: center;
    flex-direction: row;
`

export const Time = styled.Text`
    color: ${({theme}) => theme.COLORS.GRAYS1};
    font-size: ${({theme}) => theme.FONT_SIZE.SM};
    font-weight: ${({theme}) => theme.FONT_FAMILY.BOLD};
`

export const Divider = styled.View`
width: 1px;
height: 14px;
border: 1px solid ${({theme}) => theme.COLORS.GRAYS4};
`

export const Title = styled.Text`
    width: 190px;
    white-space: nowrap; 
    overflow: hidden; 
    text-overflow: ellipsis; 
    color: ${({theme}) => theme.COLORS.GRAYS2};
    font-size: ${({theme}) => theme.FONT_SIZE.LG};
    font-weight: ${({theme}) => theme.FONT_FAMILY.REGULAR};
`
export const QualitIndicator = styled(View)<props>`
    width: 14px;
    height: 14px;
    border-radius: 50px;
    background-color: ${({theme, type}) => type === "GOOD" ? 
        theme.COLORS.GREENMID 
        :
        theme.COLORS.REDMID};
`
