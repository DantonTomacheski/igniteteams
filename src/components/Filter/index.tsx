import React from "react";
import { TouchableOpacityProps } from "react-native";
import * as S from "./styles";

type Props = TouchableOpacityProps &
  S.FilterStyleProps & {
    title: string;
  };

const Filter: React.FC<Props> = ({ title, active = false, ...rest }) => {
  return (
    <S.Container active={active} {...rest}>
      <S.Title>{title}</S.Title>
    </S.Container>
  );
};

export default Filter;
