import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, WEIGHTS } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import UnstyledButton from '../UnstyledButton'
import Icon from '../Icon'

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  return (
    <header>
      <SuperHeader />
      <DesktopHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">Sale some really long title</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Side />
      </DesktopHeader>

      <TabletHeader>
        <Logo />
        <Nav>
          <UnstyledButton>
            <Icon id="shopping-bag" />
          </UnstyledButton>
          <UnstyledButton>
            <Icon id="search" />
          </UnstyledButton>
          <UnstyledButton onClick={() => setShowMobileMenu((current) => !current)}><Icon id='menu' /></UnstyledButton>
        </Nav>
      </TabletHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const DesktopHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid ${COLORS.gray[300]};
  white-space: nowrap;
  overflow-x: scroll;

  @media ${({ theme }) => theme.breakpoints.tabletAndDown} {
    display: none;
  }
`;

const TabletHeader = styled.div`
  display: none;

  align-items: center;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid ${COLORS.gray[300]};

  justify-content: space-between;

  @media ${({ theme }) => theme.breakpoints.tabletAndDown} {
    display: flex;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: clamp(1rem, -0.714rem + 4.571vw, 3rem);
  margin: 0px 48px;

  @media ${({ theme }) => theme.breakpoints.tabletAndDown} {
    margin: 0px 0px;
  }
`;

const Side = styled.div`
  flex: 1;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

export default Header;
