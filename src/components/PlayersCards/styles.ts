import styled, { css } from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  ${({ theme }) => css`
    width: 100%;
    flex-direction: row;
    align-items: center;

    background-color: ${theme.COLORS.GRAY_500};

    min-height: 56px;
    max-height: 56px;

    padding: 16px 0px 16px 16px;

    margin-top: 10px;

    border-radius: 6px;
  `}
`;

export const Name = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${RFPercentage(theme.FONT_SIZE.SM)}px;

    text-transform: capitalize;

    color: ${theme.COLORS.GRAY_200};

    flex: 1;
  `}
`;

export const Icon = styled(MaterialIcons).attrs(({ theme }) => ({
  size: RFValue(24),
  color: theme.COLORS.GRAY_200,
}))`
  margin-right: 10px;
`;
