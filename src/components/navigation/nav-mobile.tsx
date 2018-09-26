import { css } from 'emotion';
import { GatsbyLinkProps, Link } from 'gatsby';
import * as React from 'react';
import styled, { StyledComponent } from 'react-emotion';
import { Theme } from '../../utils/theme';
import { NavLink } from './public_api';

const StyledMobileNavLink: StyledComponent<
  GatsbyLinkProps<any>,
  any,
  Theme
> = styled(Link)`
  display: block;
  text-align: center;
  text-transform: uppercase;
  padding: 1rem;
`;

const StyledMobileNav: StyledComponent<
  { isOpen: boolean; className: string },
  any,
  Theme
> = styled('nav')`
  position: fixed;
  top: ${props => props.theme.layout.headerHeight};
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${props => props.theme.colors.primaryDark};
  transition: transform 200ms ease-in;
  transform: ${props => (props.isOpen ? 'translateX(0)' : 'translateX(-100%)')};
`;

export interface MobileNavProps {
  className: string;
  links: NavLink[];
  isOpen: boolean;
}

const MobileNav: React.StatelessComponent<MobileNavProps> = ({
  className,
  links,
  isOpen,
}) => {
  return (
    <StyledMobileNav isOpen={isOpen} className={className}>
      {links.map(l => (
        <StyledMobileNavLink key={l.to} to={l.to}>
          {l.label}
        </StyledMobileNavLink>
      ))}
    </StyledMobileNav>
  );
};

export default MobileNav;
