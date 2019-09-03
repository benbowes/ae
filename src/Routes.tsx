import React from 'react';
import { Route, BrowserRouter as Router, Redirect } from 'react-router-dom';

import CustomerList from './pages/customers/CustomerList';
import AddCustomer from './pages/customers/AddCustomer';
import EditCustomer from './pages/customers/EditCustomer';
import Navigation from './components/Navigation';

const Routes: React.FC = () => {
  return (
    <Router>

      <Navigation navLinks={[
        { url: '/customers', label: 'Customers' },
        { url: '/add-customer', label: 'Add customer' },
      ]}/>

      <Route exact path="/customers" component={CustomerList} />
      <Route exact path="/add-customer" component={AddCustomer} />
      <Route exact path="/edit-customer/:customerId" component={EditCustomer} />
      <Redirect from="/" to="/customers" />

    </Router>
  );
}

export default Routes;
