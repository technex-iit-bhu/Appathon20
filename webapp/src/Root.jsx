import React from 'react';
import PropTypes from 'prop-types';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import App from './App'

import history from './history';
import {addLocaleData, IntlProvider} from 'react-intl';
import en from 'react-intl/locale-data/en';
import fr from 'react-intl/locale-data/fr';
import es from 'react-intl/locale-data/es';

addLocaleData([...en, ...fr, ...es]);

const Root = ({store}) => (
  <IntlProvider locale={'en'}>
    <Provider store={store}>
      <Router history={history}>
        <App/>
      </Router>
    </Provider>
  </IntlProvider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Root;
