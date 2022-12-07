/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components/macro";
import { DialogOverlay, DialogContent } from "@reach/dialog";

import { COLORS } from "../../constants";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Content aria-label="Site Menu">
        <CloseButton onClick={onDismiss}>
          <VisuallyHidden>Dismiss menu</VisuallyHidden>
          <Icon id="close" />
        </CloseButton>
        <Nav>
          <A href="/sale">Sale</A>
          <A href="/new">New&nbsp;Releases</A>
          <A href="/men">Men</A>
          <A href="/women">Women</A>
          <A href="/kids">Kids</A>
          <A href="/collections">Collections</A>
        </Nav>
        <Footer>
          <A href="/terms">Terms and Conditions</A>
          <A href="/privacy">Privacy Policy</A>
          <A href="/contact">Contact Us</A>
        </Footer>
      </Content>
    </Overlay>
  );
};

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: hsla(0 0% 10% / 0.5);
`;

const Content = styled(DialogContent)`
  position: fixed;
  right: 0;
  height: 100%;
  width: min(300px, 80%);
  background-color: ${COLORS.white};
  display: flex;
  gap: 2rem;
  flex-direction: column;
  justify-content: space-between;
  padding: 32px;
  overflow-y: scroll;
`;

const CloseButton = styled(UnstyledButton)`
  align-self: flex-end;
  margin-top: -26px;
  margin-right: -26px;
  padding: 16px;
`

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: ${22 / 16}rem;
  font-size: 1.5rem;
  font-weight: 600;
  text-transform: uppercase;
`

const Footer = styled.nav`
  display: flex;
  flex-direction: column;
  gap: ${14 / 16}rem;
`

const A = styled.a`
  text-decoration: none;
  color: ${COLORS.gray[900]};
  &:hover{
    color: ${COLORS.secondary};
  }
`

export default MobileMenu;
