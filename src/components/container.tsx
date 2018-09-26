import styled, { StyledComponent } from 'react-emotion';
import { Theme } from '../utils/theme';

const Container: StyledComponent<any, any, Theme> = styled('div')`
  max-width: 960px;
  margin: 0 auto;
`;

export default Container;
