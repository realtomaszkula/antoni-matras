import { Link } from 'gatsby';
import * as React from 'react';
import styled, { StyledComponent } from 'react-emotion';
import { Theme } from '../utils/theme';
import Container from './container';
import Navigation from './navigation';

const StyledHeader: StyledComponent<any, any, Theme> = styled('header')`
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  right: 0;
  color: white;
  background-color: ${props => props.theme.colors.primary};
  height: ${props => props.theme.layout.headerHeight};
`;

const StyledContainer: StyledComponent<any, any, Theme> = styled(Container)`
  position: relative;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0 1rem;
`;

const Title: StyledComponent<any, any, Theme> = styled('h1')`
  padding: 0;
  margin: 0;
  color: white;
  text-decoration: none;
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: center;
  text-transform: uppercase;
  font-size: 1.4rem;
  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

class Header extends React.Component {
  render() {
    return (
      <StyledHeader>
        <StyledContainer>
          <Title>
            <Link to="/">Antoni Matras</Link>
          </Title>
          <Navigation />
        </StyledContainer>
      </StyledHeader>
    );
  }
}

export default Header;
