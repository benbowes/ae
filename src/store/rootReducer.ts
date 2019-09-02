import { combineReducers } from 'redux';
import { customers } from '../pages/customers/reducers/customers'; 

const rootReducer = combineReducers({
    customers,
});

export default rootReducer;
