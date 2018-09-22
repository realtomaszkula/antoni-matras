import { css } from 'emotion';
import * as React from 'react';
import Antek from '../images/antoni.jpg';
import { PrimaryDarkContainer } from './container';

const BannerImage: React.StatelessComponent = () => (
  <PrimaryDarkContainer>
    <img
      src={Antek}
      className={css({
        display: 'block',
        margin: '0 auto',
        objectFit: 'cover',
        objectPosition: '0 0',
      })}
    />
  </PrimaryDarkContainer>
);

export default BannerImage;
