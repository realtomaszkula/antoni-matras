import * as React from 'react';
import styled, { StyledComponent } from 'react-emotion';
import { Theme } from '../../utils/theme';
import {
  default as NavDesktop,
  default as NavMobile,
  DesktopNavProps,
} from './nav-desktop';
import { MobileNavProps } from './nav-mobile';
import { NavLink } from './interfaces';

const StyledNavDesktop: StyledComponent<DesktopNavProps, any, Theme> = styled(
  NavDesktop
)`
  display: none;
  @media (min-width: 640px) {
    display: flex;
  }
`;

const StyledNavMobile: StyledComponent<MobileNavProps, any, Theme> = styled(
  NavMobile
)`
  display: flex;
  @media (min-width: 640px) {
    display: none;
  }
`;

const links: NavLink[] = [
  { to: '/', label: 'Strona Główna' },
  { to: 'o-mnie', label: 'O mnie' },
  { to: 'program', label: 'Program' },
  { to: 'kontakt', label: 'Kontakt' },
];

const Navigation: React.StatelessComponent<{ isOpen: boolean }> = ({
  isOpen,
}) => (
  <>
    <StyledNavDesktop links={links} />
    <StyledNavMobile links={links} isOpen={isOpen} />
  </>
);

export default Navigation;
