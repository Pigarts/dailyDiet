import styled, { css } from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowLeft } from "phosphor-react-native";

export const Container = styled(SafeAreaView)`
    background-color: ${({theme}) => theme.COLORS.GRAYS5};

    flex: 1;
`
export const PageHeader = styled.View`

width: 100%;
padding: 24px; 
align-items: center;
flex-direction: row ;
justify-content: center;
background-color: ${({theme}) => theme.COLORS.GRAYS5};
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


export const Content = styled.View`
    flex: 1;
    gap: 12px;
    z-index: 2;
    padding: 42px 24px;
    border-radius: 20px;
    background-color: ${({theme}) => theme.COLORS.GRAYS7};
    justify-content: space-between;
    flex-direction: column;
`

export const Form = styled.View`
    flex-direction: column;
    gap: 24px;
`
    
export const Icon = styled(ArrowLeft).attrs(({ theme }) => ({
        size: 32,
        color: theme.COLORS.GRAYS1 
    }))`
    `