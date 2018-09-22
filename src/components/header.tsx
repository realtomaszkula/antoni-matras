import * as React from 'react';
import styled from 'react-emotion';

const ContainerOuter = styled('div')({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  color: 'white',
  backgroundColor: 'var(--primary)',
  height: 'var(--header-height)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
});

const ContainerInner = styled('div')({ maxWidth: 960, padding: '0 1em' });

const Title = styled('h1')({
  padding: 0,
  margin: 0,
  textTransform: 'uppercase',
  fontSize: '1rem',
  '@media (min-width: 480px)': {
    fontSize: '1.5rem',
  },
});

const Header: React.StatelessComponent = () => (
  <ContainerOuter>
    <ContainerInner>
      <Title>Antoni Matras</Title>
    </ContainerInner>
  </ContainerOuter>
);

export default Header;
