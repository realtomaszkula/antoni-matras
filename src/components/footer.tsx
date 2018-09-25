import { css } from 'emotion';
import * as React from 'react';
import Container from './container';

const Copyright = () => (
  <div className={css({ textAlign: 'center' })}>
    ©{new Date().getFullYear()} Antoni Matras
  </div>
);

const Footer: React.StatelessComponent = () => (
  <Container>
    <div className={css({ padding: '2rem 1rem' })}>
      <Copyright />
    </div>
  </Container>
);

export default Footer;
