import React from "react";
import * as S from "./styles";

type Props = {
  message: string;
};

const EmptyList: React.FC<Props> = ({ message }) => {
  return (
    <S.Container>
      <S.Message>{message}</S.Message>
    </S.Container>
  );
};

export default EmptyList;
