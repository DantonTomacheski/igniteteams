import { TouchableOpacity } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

export type FilterStyleProps = {
  active?: boolean;
};

export const Container = styled(TouchableOpacity)<FilterStyleProps>`
  ${({ theme, active }) =>
    active &&
    css`
      border: 1px solid ${theme.COLORS.GREEN_700};
    `}

  border-radius: ${RFValue(4)}px;
  margin-right: ${RFValue(12)}px;

  height: ${RFValue(38)}px;
  width: ${RFValue(70)}px;

  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  ${({ theme }) =>
    css`
      font-family: ${theme.FONT_FAMILY.BOLD};
      font-size: ${RFPercentage(theme.FONT_SIZE.SM)}px;
      color: ${theme.COLORS.WHITE};
      text-transform: uppercase;
    `}
`;
