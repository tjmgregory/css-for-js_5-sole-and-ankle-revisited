import React from 'react';
import styled from 'styled-components/macro';

import { WEIGHTS } from '../../constants';

import Breadcrumbs from '../Breadcrumbs';
import Select from '../Select';
import Spacer from '../Spacer';
import ShoeSidebar from '../ShoeSidebar';
import ShoeGrid from '../ShoeGrid';

const PageBreadcrumbs = (props) => <Breadcrumbs {...props}>
  <Breadcrumbs.Crumb href="/">Home</Breadcrumbs.Crumb>
  <Breadcrumbs.Crumb href="/sale">Sale</Breadcrumbs.Crumb>
  <Breadcrumbs.Crumb href="/sale/shoes">
    Shoes
  </Breadcrumbs.Crumb>
</Breadcrumbs>;

const HiddenFirstBreadcrumbs = styled(PageBreadcrumbs)`
  display: none;

  @media ${({ theme }) => theme.breakpoints.tabletAndDown} {
    display: flex;
  }
`
const ShoeIndex = ({ sortId, setSortId }) => {
  return (
    <Wrapper>
      <MainColumn>
        <Header>
          <TitleWrapper>
            <HiddenFirstBreadcrumbs />
            <Title>Running</Title>
          </TitleWrapper>
          <Select
            label="Sort"
            value={sortId}
            onChange={(ev) => setSortId(ev.target.value)}
          >
            <option value="newest">Newest Releases</option>
            <option value="price">Price</option>
          </Select>
        </Header>
        <Spacer size={32} />
        <ShoeGrid />
      </MainColumn>
      <LeftColumn>
        <PageBreadcrumbs />
        <Spacer size={42} />
        <ShoeSidebar />
      </LeftColumn>
    </Wrapper>
  );
};

const TitleWrapper = styled.div``

const Wrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: baseline;
  gap: 32px;
`;

const LeftColumn = styled.div`
  flex-basis: 248px;
  @media ${({ theme }) => theme.breakpoints.tabletAndDown} {
    display: none;
  }
`;

const MainColumn = styled.div`
  flex: 1;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  @media ${({ theme }) => theme.breakpoints.tabletAndDown} {
    align-items: center;
  }
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: ${WEIGHTS.medium};
`;

export default ShoeIndex;
