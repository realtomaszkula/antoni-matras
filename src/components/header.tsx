import { Link, GatsbyLinkProps } from 'gatsby';
import * as React from 'react';
import styled, { css, StyledComponent } from 'react-emotion';
import { FaBars, FaTimes } from 'react-icons/fa';
import Container from './container';
import { Theme } from '../utils/theme';
import Navigation from './navigation';

const ContainerOuter: StyledComponent<any, any, Theme> = styled('div')`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  color: white;
  background-color: ${props => props.theme.colors.primary};
  height: ${props => props.theme.layout.headerHeight};
`;

const ContainerInner: StyledComponent<any, any, Theme> = styled(Container)`
  height: 100%;
  display: 'flex';
  justify-content: space-between;
  align-items: flex-start;
  padding: '0 1rem';
`;

const Title: StyledComponent<any, any, Theme> = styled('h1')`
  padding: 0;
  margin: 0;
  color: white;
  text-decoration: none;
  display: flex;
  align-items: center;
  height: '100%';
  justify-content: center;
  text-transform: uppercase;
`;

class Header extends React.Component<any, { isOpen: boolean }> {
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
      <div className={css({ zIndex: 1000, position: 'relative' })}>
        <ContainerOuter>
          <ContainerInner>
            <Title>
              <Link to="/">Antoni Matras</Link>
            </Title>
            <Hamburger isOpen={this.state.isOpen} isOpenChange={this.toggle} />
            <Navigation isOpen={this.state.isOpen} />
          </ContainerInner>
        </ContainerOuter>
      </div>
    );
  }
}
export default Header;
