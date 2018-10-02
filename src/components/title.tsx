import styled, { StyledComponent } from 'react-emotion';
import { Theme } from '../utils/theme';

const Title: StyledComponent<any, any, Theme> = styled('h1')`
  padding: 1rem;
`;

export const TitlePrimary: StyledComponent<any, any, Theme> = styled(Title)`
  color: white;
  background-color: ${props => props.theme.colors.primary};
`;

export const TitleAccent: StyledComponent<any, any, Theme> = styled(Title)`
  color: white;
  background-color: ${props => props.theme.colors.accent};
`;
