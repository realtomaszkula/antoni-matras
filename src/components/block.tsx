import styled, { StyledComponent } from 'react-emotion';
import { Theme } from '../utils/theme';

export const BlockPrimary: StyledComponent<any, any, Theme> = styled('div')`
  color: white;
  background-color: ${props => props.theme.colors.primary};
`;

export const BlockPrimaryLight: StyledComponent<any, any, Theme> = styled(
  'div'
)`
  color: white;
  background-color: ${props => props.theme.colors.primaryLight};
`;

export const BlockPrimaryDark: StyledComponent<any, any, Theme> = styled('div')`
  color: white;
  background-color: ${props => props.theme.colors.primaryDark};
`;

export const BlockAccent: StyledComponent<any, any, Theme> = styled('div')`
  color: white;
  background-color: ${props => props.theme.colors.primary};
`;

export const BlockAccentLight: StyledComponent<any, any, Theme> = styled('div')`
  color: white;
  background-color: ${props => props.theme.colors.accentLight};
`;

export const BlockAccentDark: StyledComponent<any, any, Theme> = styled('div')`
  color: white;
  background-color: ${props => props.theme.colors.accentDark};
`;
