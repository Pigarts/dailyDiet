import { Button, Container, BottomColorIndicatorStyle, ButtonText, ColorIndicator } from "./styles";

interface SelectButtonProps {
    selected: BottomColorIndicatorStyle | undefined;
    setSelected: (value: BottomColorIndicatorStyle) => void;
}

export function SelectButton({ selected, setSelected }: SelectButtonProps) {
    return(
        <Container>
            <Button
                type="GOOD"
                onPress={() => setSelected("GOOD")}
                isSelected={selected === 'GOOD'}
            >
                <ColorIndicator type="GOOD"/>
                <ButtonText>
                    Sim
                </ButtonText>
            </Button>

            <Button
                type="BAD"
                onPress={() => setSelected("BAD")}
                isSelected={selected === 'BAD'}
            >
                <ColorIndicator type="BAD"/>
                <ButtonText>
                    Não
                </ButtonText>
            </Button>
        </Container>
    );
}
