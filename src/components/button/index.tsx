import React from "react";
import { TouchableOpacityProps, View } from "react-native";
import { Container, Label, Title, buttonTypeStyleProps } from "./styles";
import { Plus, PencilSimpleLine, Trash } from "phosphor-react-native";

type Props = TouchableOpacityProps & {
  title: string;
  type?: buttonTypeStyleProps;
  icon?: "PLUS" | "TRASH" | "EDIT";
  label?: string
};

const getIcon = (icon: "PLUS" | "TRASH" | "EDIT", type: buttonTypeStyleProps) => {
  const color = type === "SOLID" ? "#fff" : "#000"

  switch (icon) {
    case "PLUS":
      return <Plus size={24} color={color} />;
    case "TRASH":
      return <Trash size={24} color={color} />;
    case "EDIT":
      return <PencilSimpleLine size={24} color={color} />;
    default:
      return null;
  }
};

export const Button = ({ title, type = "SOLID", label, icon, ...rest }: Props) => {
  return (<>
    {
        label&&
        <Label>
            {label}
        </Label>
    }
    <Container type={type} {...rest}>
      {
        icon&&
        getIcon(icon, type)
      }
      <Title type={type}>{title}</Title>
    </Container>
  </>
  );
};
