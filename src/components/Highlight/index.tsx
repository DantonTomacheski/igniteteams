import React from "react";
import * as S from "./styles";

type Props = {
  title: string;
  subtitle: string;
};

const Highlight: React.FC<Props> = ({ title, subtitle }) => {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.SubTitle>{subtitle}</S.SubTitle>
    </S.Container>
  );
};

export { Highlight };
