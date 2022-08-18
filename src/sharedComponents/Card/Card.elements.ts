import styled from 'styled-components/native';

import ColourPalette from '../../styles/colourPalette';
import fontSize from '../../styles/fontSize';
export const CardWrapper = styled.View`
  border-color: ${ColourPalette.SHIP_GREY};
  border-width: 1px;
  padding: 8px;
  margin-bottom: 8px;
  border-radius: ${23 / 2}px;
  background-color: ${props => props.highlight ? ColourPalette.QUILL_GREY : ColourPalette.WHITE};
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

export const FooterWrap = styled.View`
  color: mediumslateblue;
`;

export const Footer = styled.Text`
  font-size: ${fontSize.sm}px;
  font-weight: bold;
  text-align: right;
`;
