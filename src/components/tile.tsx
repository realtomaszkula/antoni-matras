import * as React from 'react';
import { css } from 'react-emotion';
import { Themable } from '../utils/theme';

export const TileCategory: React.StatelessComponent<Themable> = ({
  children,
  color,
  backgroundColor,
}) => (
  <p className={css({ textTransform: 'uppercase', color, backgroundColor })}>
    {children}
  </p>
);

export const TilePrimaryCategory: React.StatelessComponent = ({ children }) => (
  <TileCategory
    color="white"
    backgroundColor="var(--primary)"
    children={children}
  />
);

export const TileAccentCategory: React.StatelessComponent = ({ children }) => (
  <TileCategory
    color="white"
    backgroundColor="var(--accent)"
    children={children}
  />
);

export const TileTitle: React.StatelessComponent<Themable> = ({
  children,
  backgroundColor,
  color,
}) => (
  <h1
    className={css({
      backgroundColor,
      color,
      padding: '0.5em',
    })}
  >
    {children}
  </h1>
);

export const TileAccentTitle: React.StatelessComponent = ({ children }) => (
  <TileTitle
    backgroundColor={'var(--accent)'}
    color={'white'}
    children={children}
  />
);

export const TilePrimaryTitle: React.StatelessComponent = ({ children }) => (
  <TileTitle
    backgroundColor={'var(--primary)'}
    color={'white'}
    children={children}
  />
);

export const TileBody: React.StatelessComponent<Themable> = ({
  children,
  color,
  backgroundColor,
}) => <p className={css({ color, backgroundColor })}>{children}</p>;

export const TilePrimaryBody: React.StatelessComponent = ({ children }) => (
  <TileBody
    backgroundColor={'var(--primary)'}
    color="white"
    children={children}
  />
);
export const TileAccentBody: React.StatelessComponent = ({ children }) => (
  <TileBody
    backgroundColor={'var(--accent)'}
    color="white"
    children={children}
  />
);

export const Tile: React.StatelessComponent<Themable> = ({
  children,
  backgroundColor,
  color,
}) => (
  <section
    className={css({
      padding: '3rem 1rem',
      backgroundColor,
      color,
      '@media (min-width: 960px)': {
        padding: '5rem 1rem',
      },
    })}
  >
    {children}
  </section>
);

export const TilePrimary: React.StatelessComponent = ({ children }) => (
  <Tile backgroundColor={'var(--primary)'} color="white">
    {children}
  </Tile>
);

export const TileAccent: React.StatelessComponent = ({ children }) => (
  <Tile backgroundColor={'var(--accent)'} color="white">
    {children}
  </Tile>
);

export default Tile;
