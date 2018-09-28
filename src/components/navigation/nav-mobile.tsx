import { GatsbyLinkProps, Link } from 'gatsby';
import * as React from 'react';
import styled, { StyledComponent } from 'react-emotion';
import { Theme } from '../../utils/theme';
import Hamburger from './hamburger';
import { NavLink } from './interfaces';

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
  transition: transform 200ms ease-in;
  transform: ${props => (props.isOpen ? 'translateX(0)' : 'translateX(-100%)')};
  position: fixed;
  top: ${props => props.theme.layout.headerHeight};
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${props => props.theme.colors.primaryDark};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export interface MobileNavProps {
  className: string;
  links: NavLink[];
}

class MobileNav extends React.Component<MobileNavProps, { isOpen: boolean }> {
  state = {
    isOpen: false,
  };

  toggle = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }));
  };

  render() {
    return (
      <>
        <Hamburger
          isOpen={this.state.isOpen}
          isOpenChange={this.toggle}
          className={this.props.className}
        />
        <StyledMobileNav
          isOpen={this.state.isOpen}
          className={this.props.className}
        >
          {this.props.links.map(l => (
            <StyledMobileNavLink key={l.to} to={l.to}>
              {l.label}
            </StyledMobileNavLink>
          ))}
        </StyledMobileNav>
      </>
    );
  }
}

export default MobileNav;
