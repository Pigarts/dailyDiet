import { ReactNode } from "react";
import { Container, Content, Title } from "./styles";
import { ModalProps, View } from "react-native";
import { Button } from "@components/button";

export type ModalBottonsProps = "CANCEL" | "DELETE" 

type Props = ModalProps & {
    onCancel: () => void;
    onDelete: () => void;
}

export function Modal({onCancel, onDelete, ...rest}: Props ) {
    return(
        <Container {...rest}>
            <View  style={{
                    backgroundColor: "#0000003f",
                    flex: 1,
                    justifyContent: "center"
                }}>
                    <Content>
                        <Title>
                        Deseja realmente excluir o registro da refeição?
                        </Title>
                        <View
                            style={{
                                width: "100%",
                                gap: 12,
                                flexDirection: "row",
                                justifyContent: "center"
                            }}
                        >
                            <Button type="OUTLINE" title="Cancelar" onPress={onCancel} />
                            <Button title="Apagar" onPress={onDelete} />
                        </View>
                    </Content>

                </View>
        </Container>
    )
}