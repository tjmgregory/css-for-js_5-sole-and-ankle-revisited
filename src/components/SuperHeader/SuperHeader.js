import React from 'react';
import styled from 'styled-components/macro';

import SearchInput from '../SearchInput';
import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';

const SuperHeader = () => {
  return (
    <Wrapper>
      <MarketingMessage>
        Free shipping on domestic orders over $75!
      </MarketingMessage>
      <SearchInput />
      <HelpLink href="/help">Help</HelpLink>
      <UnstyledButton>
        <Icon id="shopping-bag" strokeWidth={1} />
      </UnstyledButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  font-size: 0.875rem;
  color: ${({theme}) => theme.color.gray['300']};
  background-color: ${({theme}) => theme.color.gray['900']};
  height: 40px;
  padding-left: 32px;
  padding-right: 32px;

  @media ${({ theme }) => theme.breakpoints.tabletAndDown} {
    & * {
      display: none;
    }
    height: 4px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
  }
`;

const MarketingMessage = styled.span`
  color: ${({theme}) => theme.color.white};
  margin-right: auto;
`;

const HelpLink = styled.a`
  color: inherit;
  text-decoration: none;
  outline-offset: 2px;

  &:not(:focus-visible) {
    outline: none;
  }
`;

export default SuperHeader;
