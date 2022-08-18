import styled from 'styled-components/native';

import ColourPalette from '../../styles/colourPalette';
import fontSize from '../../styles/fontSize';
export const PanelWrapper = styled.View`
  padding: 8px;
  margin-bottom: 8px;
  border-radius: ${23 / 2}px;
`;

export const TitleWrap = styled.View`
  margin-bottom: 12px;
`;

export const Title = styled.Text`
  font-size: ${fontSize.lg}px;
  font-weight: bold;
`;

export const DetailWrap = styled.View`
  margin-bottom: 8px;
`;

export const Detail = styled.Text`
  font-size: ${fontSize.md}px;
`;
