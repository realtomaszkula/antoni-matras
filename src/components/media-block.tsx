import styled, { StyledComponent } from 'react-emotion';
import { Theme } from '../utils/theme';

export const MediaBlockIcon: StyledComponent<any, any, Theme> = styled('div')`
  color: rgba(0, 0, 0, 0.6);
  padding: 0 1rem;
`;

export const MediaBlockContent: StyledComponent<any, any, Theme> = styled(
  'div'
)`
  flex: 1;
`;

export const MediaBlock: StyledComponent<
  { responsive: boolean },
  any,
  Theme
> = styled('div')`
  display: flex;
  flex-direction: ${props => (props.responsive ? 'column' : 'row')};
  @media (min-width: 640px) {
    flex-direction: row;
  }
`;
