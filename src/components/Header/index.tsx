import React from "react";

import Logo from "@assets/logo.png";
import * as S from "./styles";
import { useNavigation } from "@react-navigation/native";

type Props = {
  showBackButton?: boolean;
};

const Header: React.FC<Props> = ({ showBackButton = false }) => {
  const navigation = useNavigation();
  return (
    <S.Container>
      {showBackButton && (
        <S.BackButton onPress={() => navigation.goBack()}>
          <S.BackIcon />
        </S.BackButton>
      )}
      <S.Logo source={Logo} />
    </S.Container>
  );
};

export { Header };
