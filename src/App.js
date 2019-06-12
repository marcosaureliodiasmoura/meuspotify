/* eslint-disable import/named */
/* eslint-disable import/no-unresolved */
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import './config/reactotron';

import Sidebar from './components/Sidebar';
import Player from './components/Player';
import Header from './components/Header';

import { Wrapper, Container, Content } from './styles/components';
import GlobalStyle from './styles/global';

import Routes from './routes';
import store from './store';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Wrapper>
        <GlobalStyle />
        <Container>
          <Sidebar />
          <Content>
            <Header />
            <Routes />
          </Content>
        </Container>
        <Player />
      </Wrapper>
    </BrowserRouter>
  </Provider>
);

export default App;
