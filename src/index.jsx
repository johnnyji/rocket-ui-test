import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import { Provider } from 'react-redux';
import store from './stores/Root';
import Routes from './routes';

import '../styles/base/_main.sass'  // Global styles
import '../styles/base/_common.sass'  // Global styles
import '../styles/_style.sass'  // Css-module styles

const renderApp = (Component) => {
  ReactDOM.render(
    <Provider store={store}>
      <AppContainer>
        <Component/>
      </AppContainer>
    </Provider>,
    document.getElementById('app')
  );
};

renderApp(Routes);

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./routes', () => {
    import('./routes')
      .then(({ default: RoutesComponent }) => renderApp(RoutesComponent));
  })
}
