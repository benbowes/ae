import React from 'react';
import { Route, BrowserRouter as Router, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';

import A from './pages/A';
import B from './pages/B';
import Navigation from './components/Navigation';
import makeStore from './redux/store';

const App: React.FC = () => {
  return (
    <Provider store={makeStore()}>
      <Router>

        <Navigation />

        <Route exact path="/A" component={A} />
        <Route exact path="/B" component={B} />
        <Redirect from="/" to="/A" />

      </Router>
    </Provider>
  );
}

export default App;
