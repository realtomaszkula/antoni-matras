import { css } from 'emotion';
import * as React from 'react';
import Container, { PrimaryContainer } from './container';

const Copyright = () => (
  <div className={css({ textAlign: 'center' })}>
    ©{new Date().getFullYear()} Antoni Matras
  </div>
);

const Footer: React.StatelessComponent = () => (
  <PrimaryContainer>
    <div className={css({ padding: '2rem 1rem' })}>
      <Copyright />
    </div>
  </PrimaryContainer>
);

export default Footer;
