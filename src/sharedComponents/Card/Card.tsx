import React from 'react';

import {
  CardWrapper,
  TitleWrap,
  Title,
  DetailWrap,
  Detail,
  FooterWrap,
  Footer,
} from './Card.elements';

interface CardProps {
  title: string;
  detail?: string;
  footer?: string;
  highlight: boolean;
}

function Card({
  title,
  detail,
  footer,
  highlight = false,
}: CardProps): React.ReactElement {
  return (
    <CardWrapper highlight={highlight}>
      <TitleWrap>
        <Title>{title}</Title>
      </TitleWrap>
      {detail && (
        <DetailWrap>
          <Detail>{detail}</Detail>
        </DetailWrap>
      )}
      {footer && (
        <FooterWrap>
          <Footer>{footer}</Footer>
        </FooterWrap>
      )}
    </CardWrapper>
  );
}

export default Card;
