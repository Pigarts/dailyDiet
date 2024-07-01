import styled from "styled-components/native";

export const Title = styled.Text`
    font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
    font-size: ${({theme}) => theme.FONT_SIZE.XL};
    color: ${({theme}) => theme.COLORS.GRAYS1};
    margin-top: 32px;
    margin-bottom: 8px;
`

