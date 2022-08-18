import React from 'react';
import Icon from '../Icon';
import Text from '../Text';
import {Wrapper, Container} from './Loading.elements';

function Loading(): React.ReactElement {
  return (
    <Wrapper>
      <Container>
        <Icon name="Loading" />
        <Text>Loading...</Text>
      </Container>
    </Wrapper>
  );
}

export default Loading;
