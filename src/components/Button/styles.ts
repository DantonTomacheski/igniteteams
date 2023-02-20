import { TouchableOpacity } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export type ButtonStyleProps = "primary" | "secondary";

type Props = {
  variation: ButtonStyleProps;
};

export const Button = styled(TouchableOpacity)<Props>`
  flex: 1;
  align-items: center;
  justify-content: center;
  border-radius: 6px;

  min-height: ${RFValue(56)}px;
  max-height: ${RFValue(56)}px;

  background-color: ${({ theme, variation }) =>
    variation === "primary" ? theme.COLORS.GREEN_700 : theme.COLORS.RED_DARK};
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: ${({ theme }) => RFPercentage(theme.FONT_SIZE.MD)}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;
