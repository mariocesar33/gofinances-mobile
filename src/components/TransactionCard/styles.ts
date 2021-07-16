import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { RFValue, RFPercentage } from "react-native-responsive-fontsize";

export const Container = styled.View`
  background-color: ${ ({theme}) => theme.colors.shape};
  border-radius: 5px;

  padding: 17px 24px;
`;
export const Title = styled.Text`
  font-family: ${ ({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
`;
export const Amount = styled.Text`
  font-family: ${ ({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(20)}px;
`;
export const Footer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-top: 19px;
`;
export const Category = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const Icon = styled(Feather)`
  font-size: ${ RFValue(20)}px;
  color: ${ ({ theme }) => theme.colors.text};
`;
export const CategoryName = styled.Text`
 margin-left: 17px;
 
 font-size: ${ RFValue(14)}px;
 color: ${ ({ theme }) => theme.colors.text};
`;
export const Date = styled.Text`
  color: ${ ({ theme }) => theme.colors.text};
`;