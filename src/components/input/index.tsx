import { Container, Label, TextInput } from "./styles";
import React from "react";

type Props = {
    label: string;
    value: string;
    onChange: (text: string) => void;
}

export function Input({ label, value, onChange }: Props) {
    return (
        <Container>
            <Label>
                {label}
            </Label>
            <TextInput
                value={value}
                onChangeText={onChange}
            />
        </Container>
    );
}
