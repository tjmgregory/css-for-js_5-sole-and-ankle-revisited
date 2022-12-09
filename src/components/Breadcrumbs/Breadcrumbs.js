import React from 'react';
import styled from 'styled-components/macro';

const Breadcrumbs = ({ children, ...delegateProps }) => {
  return <Wrapper {...delegateProps}>{children}</Wrapper>;
};

Breadcrumbs.Crumb = ({ href, children, delegated }) => {
  return (
    <CrumbWrapper>
      <CrumbLink href={href} {...delegated}>
        {children}
      </CrumbLink>
    </CrumbWrapper>
  );
};

const CrumbWrapper = styled.div`
  &:not(:first-of-type) {
    margin-left: 8px;

    &::before {
      content: '/';
      margin-right: 8px;
      color: ${({theme}) => theme.color.gray['300']};
    }
  }
`;

const CrumbLink = styled.a`
  color: ${({theme}) => theme.color.gray['700']};
  text-decoration: none;

  &:hover {
    color: ${({theme}) => theme.color.gray['900']};
  }
`;

const Wrapper = styled.nav`
  display: flex;
  font-size: 0.875rem;
`;
export default Breadcrumbs;
