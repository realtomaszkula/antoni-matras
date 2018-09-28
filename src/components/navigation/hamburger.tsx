import styled from 'react-emotion';
import { FaBars, FaTimes } from 'react-icons/fa';
import * as React from 'react';

const StyledHamburger = styled('div')`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Hamburger: React.StatelessComponent<{
  className: string;
  isOpen: boolean;
  isOpenChange: any;
}> = ({ isOpen, isOpenChange, className }) => (
  <StyledHamburger onClick={isOpenChange} className={className}>
    {isOpen ? <FaTimes size="32" /> : <FaBars size="32" />}
  </StyledHamburger>
);

export default Hamburger;
