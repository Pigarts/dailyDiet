import styled from "styled-components/native";

export const Container = styled.View`
    flex-direction: column;
    gap: 4px;
`
export const Label = styled.Text`
    font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
    font-size: ${({theme}) => theme.FONT_SIZE.LG};
    color: ${({theme}) => theme.COLORS.GRAYS1}; 

`
export const TextInput = styled.TextInput`

    height: 120px;
    padding: 16px;
    border-radius: 6px;
    border: 1px solid ${({theme}) => theme.COLORS.GRAYS5}; 
`
