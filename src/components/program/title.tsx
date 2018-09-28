import { css } from 'emotion';
import * as React from 'react';
import { BlockPrimary } from '../block';

export const Title: React.StatelessComponent = ({ children }) => (
  <BlockPrimary
    className={css`
      margin-bottom: 2rem;
    `}
  >
    <h2>{children}</h2>
  </BlockPrimary>
);

export default Title;
