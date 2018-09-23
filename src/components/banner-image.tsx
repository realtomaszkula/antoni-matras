import { css } from 'emotion';
import * as React from 'react';

const BannerImage: React.StatelessComponent<{
  src: string;
  alt: string;
  srcSet?: string;
  sizes?: string;
}> = ({ src, alt, srcSet, sizes }) => (
    <img
      alt={alt}
      src={src}
      srcSet={srcSet}
      sizes={sizes}
      className={css({
        display: 'block',
        margin: '0 auto',
        objectFit: 'cover',
        width: '100%',
        height: 400,
        '@media (min-width: 960px)': {
          height: 600,
        },
      })}
    />
);

export default BannerImage;
