import ButtonIcon from "@components/ButtonIcon";
import React from "react";
import * as S from "./styles";

type Props = {
  name: string;
  onRemove: () => void;
};

const PlayersCards: React.FC<Props> = ({ name, onRemove }) => {
  return (
    <S.Container>
      <S.Icon name="person" />
      <S.Name>{name}</S.Name>
      <ButtonIcon icon="close" type="SECONDARY" onPress={onRemove} />
    </S.Container>
  );
};

export default PlayersCards;
