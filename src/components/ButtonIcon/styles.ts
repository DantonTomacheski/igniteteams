import { TouchableOpacity } from "react-native";
import styled from "styled-components";
import { MaterialIcons } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";

export type ButtonIconStyleProps = "PRIMARY" | "SECONDARY";

type Props = {
  type: ButtonIconStyleProps;
};

export const IconContainer = styled(TouchableOpacity)`
  width: ${RFValue(56)}px;
  height: ${RFValue(56)}px;

  justify-content: center;
  align-items: center;

  margin-left: 20px;
`;

export const Icon = styled(MaterialIcons).attrs<Props>(({ theme, type }) => ({
  size: RFValue(24),
  color: type === "PRIMARY" ? theme.COLORS.GREEN_700 : theme.COLORS.RED,
}))``;
