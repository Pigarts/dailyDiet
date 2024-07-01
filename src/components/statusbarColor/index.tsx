import { Container, StatusColorStyle } from "./styles";

type Props = {
    type?: StatusColorStyle 
}

export function StatusbarColor({type}:Props ) {

    return(
        <Container type={type}/>
    )
}