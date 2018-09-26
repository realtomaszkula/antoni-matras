import * as React from 'react';
import styled, { StyledComponent } from 'react-emotion';
import { Theme } from '../utils/theme';
import { BlockPrimary } from './block';
import Container from './container';

const Copyright: StyledComponent<any, any, Theme> = styled('footer')`
  text-align: center;
  padding: 2rem 1rem;
`;

const now = new Date().getFullYear();

const Footer: React.StatelessComponent = () => (
  <BlockPrimary>
    <Container>
      <Copyright>©{now} Antoni Matras</Copyright>
    </Container>
  </BlockPrimary>
);

export default Footer;
