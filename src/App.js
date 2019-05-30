/* eslint-disable import/named */
/* eslint-disable import/no-unresolved */
import React from 'react';

import Sidebar from './components/Sidebar';
import Player from './components/Player';
import Header from './components/Header';

import { Wrapper, Container, Content } from './styles/components';
import GlobalStyle from './styles/global';

const App = () => (
  <Wrapper>
    <GlobalStyle />
    <Container>
      <Sidebar />
      <Content>
        <Header />
      </Content>
    </Container>
    <Player />
  </Wrapper>
);

export default App;
