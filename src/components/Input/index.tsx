import React from "react";
import { TextInputProps } from "react-native";
import * as S from "./styles";
import { useTheme } from "styled-components/native";

type Props = TextInputProps & {
  placeholder: string;
  onChangeText: (text: string) => void;
};

const Input: React.FC<Props> = ({ placeholder, onChangeText, ...rest }) => {
  return (
    <S.StyledInput
      placeholder={placeholder}
      onChangeText={onChangeText}
      placeholderTextColor={useTheme().COLORS.GRAY_300}
      numberOfLines={1}
      scrollEnabled={false}
      {...rest}
    />
  );
};

export default Input;
