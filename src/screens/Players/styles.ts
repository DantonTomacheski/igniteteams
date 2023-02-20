import { RFPercentage } from "react-native-responsive-fontsize";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export type FormStyleProps = "PRIMARY" | "SECONDARY";

type Props = {
  typeForm: FormStyleProps;
};

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};

  padding: 24px;
`;

export const Form = styled.View<Props>`
  width: 100%;
  background-color: ${({ typeForm, theme }) =>
    typeForm === "PRIMARY" ? theme.COLORS.GRAY_700 : theme.COLORS.GRAY_500};

  flex-direction: row;
  justify-content: center;

  border-radius: 6px;
`;

export const HeaderList = styled.View`
  width: 100%;

  flex-direction: row;
  align-items: center;

  margin: 32px 0 15px;
`;

export const NumberOfPlayers = styled.Text`
  font-size: ${({ theme }) => RFPercentage(theme.FONT_SIZE.SM)}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};

  color: ${({ theme }) => theme.COLORS.GRAY_200};
`;
