import { createStore } from 'redux';
import rootReducer from '../reducers/';
import { Customer } from '../../types/global';

const initialState = { customers: [] };

function makeStore(preloadedState: { customers: Customer[] } = initialState) {
    const store = createStore(
        rootReducer,
        initialState,
        (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
}

export default makeStore;
