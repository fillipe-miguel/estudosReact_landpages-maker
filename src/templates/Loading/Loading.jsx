import React from 'react';
import { BounceLoader } from 'react-spinners';
import { Heading } from '../../components';
import { SectionBackground } from '../../sections';
import { theme } from '../../styles';
import * as styled from './styles';

function Loading() {
  return (
    <SectionBackground setBackground>
      <styled.LoadingRoot>
        <Heading level="1" size="large" uppercase colorDarker={false}>
          Carregando...
        </Heading>
        <BounceLoader
          color={theme.colors.secondaryColor}
          size={150}
          speedMultiplier={0.7}
        />
      </styled.LoadingRoot>
    </SectionBackground>
  );
}

export default Loading;
