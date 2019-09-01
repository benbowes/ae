import React from 'react';
import { Route, BrowserRouter as Router, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';

import List from './pages/customers/List';
import Add from './pages/customers/Add';
import Search from './pages/customers/Search';
import Edit from './pages/customers/Edit';
import Delete from './pages/customers/Delete';
import Navigation from './components/Navigation';
import makeStore from './redux/store';
import mockPreloadedState from './mockPreloadedState';

const App: React.FC = () => {
  return (
    <Provider store={makeStore(mockPreloadedState)}>
      <Router>
        <Navigation />
        <Route exact path="/list" component={List} />
        <Route exact path="/add" component={Add} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/edit" component={Edit} />
        <Route exact path="/delete" component={Delete} />
        <Redirect from="/" to="/list" />
      </Router>
    </Provider>
  );
}

export default App;
