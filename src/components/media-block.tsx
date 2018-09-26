import styled, { StyledComponent } from 'react-emotion';
import { Theme } from '../utils/theme';

export const MediaBlockIcon: StyledComponent<any, any, Theme> = styled('div')`
  display: 'flex';
  justify-content: 'center';
  align-items: 'center';
  margin-right: '1rem';
`;

export const MediaBlockContent: StyledComponent<any, any, Theme> = styled(
  'div'
)`
  flex: 1;
  display: 'flex';
  align-items: 'center';
`;

export const MediaBlock: StyledComponent<any, any, Theme> = styled('div')`
  background-color: 'white';
  padding: '1rem';
  display: 'flex';
`;
