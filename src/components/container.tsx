import * as React from 'react';
import { css } from 'react-emotion';
import { Themable } from '../utils/theme';

const Container: React.StatelessComponent<Themable> = ({
  children,
  backgroundColor,
  color,
}) => (
  <div
    className={css({
      backgroundColor: backgroundColor,
      color,
    })}
  >
    <div className={css({ maxWidth: 960, margin: '0 auto' })}>{children}</div>
  </div>
);

export const PrimaryContainer: React.StatelessComponent = ({ children }) => (
  <Container
    backgroundColor={'var(--primary)'}
    color={'white'}
    children={children}
  />
);

export const PrimaryDarkContainer: React.StatelessComponent = ({
  children,
}) => (
  <Container
    backgroundColor={'var(--primary-dark)'}
    color={'white'}
    children={children}
  />
);

export const AccentContainer: React.StatelessComponent = ({ children }) => (
  <Container
    backgroundColor={'var(--accent)'}
    color={'white'}
    children={children}
  />
);

export default Container;
