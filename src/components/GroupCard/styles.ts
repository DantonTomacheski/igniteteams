import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";
import { UsersThree } from "phosphor-react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

export const Container = styled(TouchableOpacity)`
  width: 100%;
  height: 80px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
  border-radius: 6px;

  flex-direction: row;
  align-items: center;

  padding: 24px;
  margin-bottom: 12px;
`;

export const Icon = styled(UsersThree).attrs(({ theme }) => ({
  size: 26,
  color: theme.COLORS.GREEN_700,
  weight: "fill",
}))`
  margin-right: 20px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${RFPercentage(theme.FONT_SIZE.SM)}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_200};
  `}
`;
