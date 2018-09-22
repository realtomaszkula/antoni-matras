import * as React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import Container from './container';
import { Tile } from './tile';
import { css } from 'emotion';

const SocialMedia = () => (
  <div
    className={css({
      color: 'rgba(0, 0, 0, 0.6)',
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 100px)',
      justifyContent: 'center',
      marginBottom: 32,
    })}
  >
    <FaInstagram size={36} />
    <FaTwitter size={36} />
    <FaFacebook size={36} />
  </div>
);

const Copyright = () => (
  <div className={css({ textAlign: 'center' })}>
    ©{new Date().getFullYear()} Antoni Matras
  </div>
);

const Footer: React.StatelessComponent = () => (
  <Container>
    <div className={css({ padding: '2em 1em' })}>
      <SocialMedia />
      <Copyright />
    </div>
  </Container>
);

export default Footer;
