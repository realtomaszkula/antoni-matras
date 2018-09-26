import { GatsbyLinkProps, Link } from 'gatsby';
import * as React from 'react';
import styled, { StyledComponent } from 'react-emotion';
import { Theme } from '../../utils/theme';
import { NavLink } from './public_api';

const StyledDesktopNavLink: StyledComponent<
  GatsbyLinkProps<any>,
  any,
  Theme
> = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-transform: uppercase;
  text-decoration: none;
  padding: 8;
  transition: all 400ms;
  :hover {
    background-color: ${props => props.theme.colors.accent};
  }
`;

const StyledDesktopNav: StyledComponent<any, any, Theme> = styled('nav')`
  height: 100%;
  display: flex;
  justify-content: space-between;
`;

export interface DesktopNavProps {
  className: string;
  links: NavLink[];
}

export const DesktopNav: React.StatelessComponent<DesktopNavProps> = ({
  links,
  className,
}) => (
  <StyledDesktopNav className={className}>
    {links.map(l => (
      <StyledDesktopNavLink key={l.to} to={l.to}>
        {l.label}
      </StyledDesktopNavLink>
    ))}
  </StyledDesktopNav>
);

export default DesktopNav;
