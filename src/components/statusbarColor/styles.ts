import { StatusBar } from "react-native";
import styled from "styled-components/native";

export type StatusColorStyle = "GOOD" | "BAD" 

type Props = {
    type?: StatusColorStyle
} 

export const Container = styled(StatusBar).attrs<Props>(({ theme, type }) => ({
    backgroundColor: type ? ( type === "GOOD" ? theme.COLORS.GREENLIGHT : theme.COLORS.REDLIGHT) : theme.COLORS.GRAYS5 })
)<Props>`
  `