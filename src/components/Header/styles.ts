import styled from "styled-components/native";
import { CaretLeft } from "phosphor-react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const BackButton = styled.TouchableOpacity`
  flex: 1;
`;

export const BackIcon = styled(CaretLeft).attrs(({ theme }) => ({
  color: theme.COLORS.WHITE,
  size: 36,
}))``;

export const Logo = styled.Image`
  width: ${RFValue(46)}px;
  height: ${RFValue(55)}px;
`;
