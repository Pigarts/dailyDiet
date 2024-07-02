import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`
    background-color: ${({theme}) => theme.COLORS.GRAYS7};
    padding: 0 24px  24px 24px; 
    flex: 1;
    position: relative;
`

export const Wrapper = styled.View`
flex: 1;
`
export const OverlayContainer = styled.View`
  position: absolute;
  bottom: 0;
  pointer-events: none;
`;

export const FadeUp = styled.Image`
  position: absolute;
  bottom: 10px;
 
  pointer-events: none; 

`