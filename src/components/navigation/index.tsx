import * as React from 'react';
import styled, { StyledComponent } from 'react-emotion';
import { Theme } from '../../utils/theme';
import { NavLink } from './interfaces';
import NavDesktop, { DesktopNavProps } from './nav-desktop';
import NavMobile, { MobileNavProps } from './nav-mobile';

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

const Navigation: React.StatelessComponent = () => (
  <>
    <StyledNavDesktop links={links} />
    <StyledNavMobile links={links} />
  </>
);

export default Navigation;
