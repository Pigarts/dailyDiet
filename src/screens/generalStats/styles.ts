import { StatusBar, TouchableOpacityProps, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowLeft } from "phosphor-react-native";
import styled, { css } from "styled-components/native";

export type headerTypeStyleProps = "GOOD" | "BAD";

type props = { 
    type?: headerTypeStyleProps
}

export const Container = styled(SafeAreaView)<props>`
    flex: 1;
    flex-direction: column;
    background-color: ${({theme, type}) => type === "GOOD" ? theme.COLORS.GREENLIGHT : theme.COLORS.REDLIGHT };

`

export const StatusBarColor = styled(StatusBar).attrs<props>(({ theme, type }) => ({
    backgroundColor: type === "GOOD" ? theme.COLORS.GREENLIGHT : theme.COLORS.REDLIGHT,
  }))<props>`
  `

export const PageHeader = styled(View)<props>`

width: 100%;
height: 177px;
padding:  0 24px; 
align-items: center;
flex-direction: column ;
justify-content: center;
background-color: ${({theme, type}) => type === "GOOD" ? theme.COLORS.GREENLIGHT : theme.COLORS.REDLIGHT };
`


export const Title = styled.Text`
    ${({theme}) => css`
    color: ${ theme.COLORS.GRAYS1};
    font-size: ${ theme.FONT_SIZE.EXL};
    font-family: ${ theme.FONT_FAMILY.BOLD};
    `};

`
export const Description = styled.Text`
    ${({theme}) => css`
    color: ${ theme.COLORS.GRAYS2};
    font-size: ${ theme.FONT_SIZE.MD};
    font-family: ${ theme.FONT_FAMILY.REGULAR};
`};
`

export const BackButton = styled.TouchableOpacity`
top: 8px;
left: 24px;
position: absolute;

`


export const Content = styled.View`
    flex: 1;
    gap: 12px;
    z-index: 2;
    padding: 33px;
    border-radius: 20px;
    background-color: ${({ theme }) => theme.COLORS.GRAYS7};
    `


export const Heading = styled.Text`
    ${({theme}) => css`
    text-align: center;
    margin-bottom: 23px;
    color: ${ theme.COLORS.GRAYS1};
    font-size: ${ theme.FONT_SIZE.MD};
    font-family: ${ theme.FONT_FAMILY.BOLD};
    `};
    `


export const Card = styled(View)<props>`
    gap: 8px;
  
    padding: 16px;
    border-radius: 8px;
    flex-direction: column;
    background-color: ${({ theme, type }) => 
        !type 
        ? theme.COLORS.GRAYS6 
        : (type === "GOOD" ? theme.COLORS.GREENLIGHT : theme.COLORS.REDLIGHT)
    };
`;

export const CardHeading = styled.Text`
    ${({theme}) => css`
    text-align: center;
    color: ${ theme.COLORS.GRAYS1};
    font-size: ${ theme.FONT_SIZE.XXL};
    font-family: ${ theme.FONT_FAMILY.BOLD};
    `};
    `

export const CardDescription = styled.Text`
    ${({theme}) => css`
    text-align: center;
    color: ${ theme.COLORS.GRAYS2};
    font-size: ${ theme.FONT_SIZE.MD};
    font-family: ${ theme.FONT_FAMILY.REGULAR};
    `};
    `

export const Icon = styled(ArrowLeft).attrs<props>(({ theme, type }) => ({
    size: 32,
    color: type === "GOOD" ? theme.COLORS.GREENDARK : theme.COLORS.REDDARK
}))`
`