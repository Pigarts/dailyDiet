import { Title} from "./styles"

type props =  {
title: string
}

export function Heading({title}:props) {

    return(
        <>
            <Title>{title}</Title>
        </>
    )
}