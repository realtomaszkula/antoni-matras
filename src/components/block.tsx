import styled, { StyledComponent } from 'react-emotion';
import { Colors, Theme, theme } from '../utils/theme';

const Block: StyledComponent<any, any, Theme> = styled('div')`
  padding: 1rem;
`;

export const BlockPrimary: StyledComponent<any, any, Theme> = styled(Block)`
  color: white;
  background-color: ${props => props.theme.colors.primary};
`;

export const BlockPrimaryLight: StyledComponent<any, any, Theme> = styled(
  Block
)`
  color: white;
  background-color: ${props => props.theme.colors.primaryLight};
`;

export const BlockPrimaryDark: StyledComponent<any, any, Theme> = styled(Block)`
  color: white;
  background-color: ${props => props.theme.colors.primaryDark};
`;

export const BlockAccent: StyledComponent<any, any, Theme> = styled(Block)`
  color: white;
  background-color: ${props => props.theme.colors.accent};
`;

export const BlockAccentLight: StyledComponent<any, any, Theme> = styled(Block)`
  color: white;
  background-color: ${props => props.theme.colors.accentLight};
`;

export const BlockAccentDark: StyledComponent<any, any, Theme> = styled(Block)`
  color: white;
  background-color: ${props => props.theme.colors.accentDark};
`;

export const BlockWhite: StyledComponent<
  { color?: keyof Colors },
  any,
  Theme
> = styled(Block)`
  color: ${props => props.color && props.theme.colors[props.color]};
  background-color: ${props => props.theme.colors.white};
`;

BlockWhite.defaultProps = {
  color: theme.colors.black,
};
