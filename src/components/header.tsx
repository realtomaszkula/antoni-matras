import { Link } from 'gatsby';
import * as React from 'react';
import styled, { css } from 'react-emotion';
import { FaBars, FaTimes } from 'react-icons/fa';

interface NavLink {
  to: string;
  label: string;
}
const ContainerOuter = styled('div')({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  color: 'white',
  backgroundColor: 'var(--primary)',
  height: 'var(--header-height)',
});

const ContainerInner = styled('div')({
  height: '100%',
  maxWidth: 960,
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  padding: '0 1rem',
});

const Title = styled('h1')({
  padding: 0,
  margin: 0,
  color: 'white',
  textDecoration: 'none',
  display: 'flex',
  alignItems: 'center',
  height: '100%',
  justifyContent: 'center',
  textTransform: 'uppercase',
  fontSize: '1rem',
  '@media (min-width: 640px)': {
    fontSize: '1.5rem',
  },
});

const DesktopNav: React.StatelessComponent<{ links: NavLink[] }> = ({
  links,
}) => (
  <nav
    className={css({
      height: '100%',
      display: 'none',
      '@media (min-width: 640px)': {
        display: 'flex',
        justifyContent: 'space-between',
      },
    })}
  >
    {links.map(l => (
      <Link
        key={l.to}
        to={l.to}
        className={css({
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
          textTransform: 'uppercase',
          textDecoration: 'none',
          padding: 8,
          transition: 'all 400ms',
          ':hover': {
            backgroundColor: 'var(--accent)',
          },
        })}
        activeClassName={css({
          borderBottom: '3px solid var(--accent)',
          ':before': {
            content: '""',
          },
        })}
      >
        {l.label}
      </Link>
    ))}
  </nav>
);

const Hamburger: React.StatelessComponent<{
  isOpen: boolean;
  isOpenChange: any;
}> = ({ isOpen, isOpenChange }) => (
  <div
    onClick={isOpenChange}
    className={css({
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      '@media (min-width: 640px)': {
        display: 'none',
      },
    })}
  >
    {isOpen ? <FaTimes size="32" /> : <FaBars size="32" />}
  </div>
);

const MobileNav: React.StatelessComponent<{
  links: NavLink[];
  isOpen: boolean;
}> = ({ links, isOpen }) => {
  return (
    <nav
      className={css({
        position: 'fixed',
        top: 'var(--header-height)',
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'var(--primary-dark)',
        transition: 'transform 200ms ease-in',
        transform: isOpen ? 'translateX(0)' : 'translateX(-100%)',
        '@media (min-width: 640px)': {
          display: 'none',
        },
      })}
    >
      <div className={css({ position: 'static' })}>
        {links.map(l => (
          <Link
            key={l.to}
            to={l.to}
            className={css({
              display: 'block',
              textAlign: 'center',
              textTransform: 'uppercase',
              padding: '1rem',
            })}
            activeClassName={css({
              backgroundColor: 'var(--accent)',
            })}
          >
            {l.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

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
    const links: NavLink[] = [
      { to: '/', label: 'Strona Główna' },
      { to: 'o-mnie', label: 'O mnie' },
      { to: 'program', label: 'Program' },
      { to: 'kontakt', label: 'Kontakt' },
    ];

    return (
      <div className={css({ zIndex: 1000, position: 'relative' })}>
        <ContainerOuter>
          <ContainerInner>
            <Title>
              <Link to="/">Antoni Matras</Link>
            </Title>
            <Hamburger isOpen={this.state.isOpen} isOpenChange={this.toggle} />
            <MobileNav links={links} isOpen={this.state.isOpen} />
            <DesktopNav links={links} />
          </ContainerInner>
        </ContainerOuter>
      </div>
    );
  }
}
export default Header;
