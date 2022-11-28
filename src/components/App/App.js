import React from 'react';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components/macro';
import theme from '../../theme'

import Header from '../Header';
import ShoeIndex from '../ShoeIndex';

const App = () => {
  const [sortId, setSortId] = React.useState('newest');

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Main>
        <ShoeIndex sortId={sortId} setSortId={setSortId} />
      </Main>
    </ThemeProvider>
  );
};

const Main = styled.main`
  padding: 64px 32px;

  @media ${({ theme }) => theme.breakpoints.phoneAndDown} {
    padding: 32px 16px;
  }
`;

export default App;
