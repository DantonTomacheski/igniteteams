import React from "react";
import { TouchableOpacityProps } from "react-native";

import { ButtonIconStyleProps } from "./styles";
import * as S from "./styles";

import { MaterialIcons } from "@expo/vector-icons";

type Props = TouchableOpacityProps & {
  icon: keyof typeof MaterialIcons.glyphMap;
  type: ButtonIconStyleProps;
};

const ButtonIcon: React.FC<Props> = ({ icon, type = "PRIMARY" }) => {
  return (
    <S.IconContainer>
      <S.Icon name={icon} type={type} />
    </S.IconContainer>
  );
};

export default ButtonIcon;
