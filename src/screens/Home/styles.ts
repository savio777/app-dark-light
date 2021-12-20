import styled from 'styled-components/native';

import ITheme from '../../interfaces/ITheme';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: ${(props: ITheme) => props.theme.background};
`;

export const Title = styled.Text`
  color: ${(props: ITheme) => props.theme.color};
  font-size: 44px;
`;
