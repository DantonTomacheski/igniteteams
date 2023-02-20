import { TextInput } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

export const StyledInput = styled(TextInput)`
  ${({ theme }) => css`
    flex: 1;

    min-height: ${RFValue(50)}px;
    max-height: ${RFValue(50)}px;

    color: ${theme.COLORS.WHITE};
    background-color: ${theme.COLORS.GRAY_700};

    font-size: ${RFPercentage(theme.FONT_SIZE.MD)}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};

    border-radius: 6px;
    padding-left: ${RFValue(13)}px;
  `}
`;
