import React, { memo } from "react";
import { TouchableOpacityProps } from "react-native";
import * as S from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
};

const GroupCard: React.FC<Props> = ({ title, ...rest }) => {
  return (
    <S.Container onPress={() => console.log("clicouu")} {...rest}>
      <S.Icon />
      <S.Title>{title}</S.Title>
    </S.Container>
  );
};

export default memo(GroupCard);
