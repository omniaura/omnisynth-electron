import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { createMemoryHistory } from 'history';
import routes from './routes';
import configureStore from './store';
import styled from 'styled-components';

const initialState = {};
const routerHistory = createMemoryHistory();
const store = configureStore(initialState, routerHistory);

const rootElement = document.querySelector(document.currentScript.getAttribute('data-container'));

const StyledRouterContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background: black;
  color: white;
`

ReactDOM.render(
  <Provider store={store}>
    <StyledRouterContainer>
      <ConnectedRouter history={routerHistory}>{routes}</ConnectedRouter>
    </StyledRouterContainer>
  </Provider>,
  rootElement,
);

