import React from 'react';
import { Route, BrowserRouter as Router, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import makeStore from './store';
import mockPreloadedState from './mockPreloadedState';
import theme from './theme';
import GlobalStyles from './theme/GlobalStyles';

import List from './pages/customers/List';
import Add from './pages/customers/Add';
import Edit from './pages/customers/Edit';
import Navigation from './components/Navigation';

const App: React.FC = () => {
  return (
    <Provider store={makeStore(mockPreloadedState)}>
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyles />
  
          <Router>
            <Navigation navLinks={[
              { url: '/customers', label: 'Customers' },
              { url: '/add', label: 'Add customer' },
            ]}/>
              <Route exact path="/customers" component={List} />
              <Route exact path="/add" component={Add} />
              <Route exact path="/edit/:customerId" component={Edit} />
              <Redirect from="/" to="/customers" />
          </Router>
        </>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
