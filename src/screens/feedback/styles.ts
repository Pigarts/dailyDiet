import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "react-native";

export type FeedbackPaStyle = "GOOD" | "BAD"

type Props = {
    type: FeedbackPaStyle
}


export const Container = styled(SafeAreaView)`
    background-color: ${({theme}) => theme.COLORS.GRAYS7};
    padding: 0 24px  24px 24px; 
    flex: 1;
    justify-content: center;
    align-items: center;
`

export const Heading = styled(Text)<Props>`
    font-size: ${({theme}) => theme.FONT_SIZE.XXL};
    font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
    color: ${({theme, type}) => type === "GOOD" ? theme.COLORS.GREENDARK : theme.COLORS.REDDARK};;
`
export const TextContainer = styled.View`
        width: 100%;
        justify-content: 'center';
        align-items: 'center'; 
`

export const Description = styled(Text)`
    text-align: center;
    justify-self: center;
    font-size: ${({theme}) => theme.FONT_SIZE.LG};
    font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
    color: ${({theme}) => theme.COLORS.GRAYS1 };
    `
export const Strong = styled(Text)`
    font-size: ${({theme}) => theme.FONT_SIZE.LG};
    font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
    color: ${({theme}) => theme.COLORS.GRAYS1 };;
    text-align: center;
    justify-self: center;

    
    `
export const Img = styled.Image`
    height: 288px;
    margin-top: 40px;
    margin-bottom: 32px;
    `



