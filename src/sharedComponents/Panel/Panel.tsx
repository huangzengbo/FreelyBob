import React from 'react';

import {
  PanelWrapper,
  TitleWrap,
  Title,
  DetailWrap,
  Detail,
} from './Panel.elements';

interface PanelProps {
  title: string;
  detailList?: string[];
}

function Panel({title, detailList}: PanelProps): React.ReactElement {
  return (
    <PanelWrapper>
      <TitleWrap>
        <Title>{title}</Title>
      </TitleWrap>
      {detailList?.map((item: string, index: number) => {
        return (
          <DetailWrap key={index}>
            <Detail>{item}</Detail>
          </DetailWrap>
        );
      })}
    </PanelWrapper>
  );
}

export default Panel;
