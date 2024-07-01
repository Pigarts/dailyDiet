import styled, {css} from "styled-components/native";

export const Container = styled.Modal`
    background: rgba(0, 0, 0, 0.25);
    position: relative;
    flex: 1;
    padding: 24px;
    

`
export const Content = styled.View`
    background-color: ${({theme}) => theme.COLORS.GRAYS7};
    align-self: center; 
    justify-content: center;
    padding: 40px 24px 24px 24px;
    width: 80%;
    border-radius: 8px;
    gap: 32px;
`

export const Title = styled.Text`
    ${({theme}) => css`
    color: ${ theme.COLORS.GRAYS1};
    font-size: ${ theme.FONT_SIZE.XL};
    font-family: ${ theme.FONT_FAMILY.BOLD};
    text-align: center;
    
    
    `};
`


