import { StatusBar, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export type BottomColorIndicatorStyle = "GOOD" | "BAD"

type Props = {
    isSelected?: boolean
    type: BottomColorIndicatorStyle
} 

export const Container = styled(SafeAreaView)<Props>`
    flex: 1;
   
    background-color: ${({theme, type}) => type === "GOOD" ? theme.COLORS.GREENLIGHT : theme.COLORS.REDLIGHT };

`
export const Content = styled.View`
    flex: 1;
    gap: 12px;
    z-index: 2;
    padding: 42px 24px;
    border-radius: 20px;
    background-color: ${({theme}) => theme.COLORS.GRAYS7};
    flex-direction: column;
    justify-content: space-between;
`


export const NameTitle = styled.Text`
    font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
    font-size: ${({theme}) => theme.FONT_SIZE.XL};
    color: ${({theme}) => theme.COLORS.GRAYS1};
    margin-bottom: 8px;

`
export const Description = styled.Text`
    font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
    font-size: ${({theme}) => theme.FONT_SIZE.LG};
    color: ${({theme}) => theme.COLORS.GRAYS2};

`
export const DateTitle = styled.Text`
    font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
    font-size: ${({theme}) => theme.FONT_SIZE.XL};
    color: ${({theme}) => theme.COLORS.GRAYS1};
    margin-bottom: 8px;

`
export const Tag = styled.View`
    gap: 8px;
    padding: 8px 16px ;
    align-items: center;
    flex-direction: row;
    border-radius: 1000px;
    align-self: flex-start; 
    background-color: ${({theme}) => theme.COLORS.GRAYS6};
`
export const TagDescription = styled.Text`
    font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
    font-size: ${({theme}) => theme.FONT_SIZE.MD};
    color: ${({theme}) => theme.COLORS.GRAYS1};
    width: min-content;

`

export const ColorIndicator = styled(View)<Props>`
    height: 8px;
    width: 8px;
    border-radius: 50px;
    background-color: ${({theme, type}) => type === "GOOD" ?  theme.COLORS.GREENDARK : theme.COLORS.REDDARK};
`

export const StatusBarColor = styled(StatusBar).attrs<Props>(({ theme, type }) => ({
    backgroundColor: type === "GOOD" ? theme.COLORS.GREENLIGHT : theme.COLORS.REDLIGHT,
  }))<Props>`
  `