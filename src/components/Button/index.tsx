import React from "react";
import { TouchableOpacityProps } from "react-native";
import * as S from "./styles";
import { ButtonStyleProps } from "./styles";

type Props = TouchableOpacityProps & {
  text: string;
  variation?: ButtonStyleProps;
};

const Button: React.FC<Props> = ({ text, variation = "primary", ...rest }) => {
  return (
    <S.Button variation={variation} {...rest}>
      <S.Text>{text}</S.Text>
    </S.Button>
  );
};

export { Button };
