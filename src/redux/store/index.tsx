import { createStore } from 'redux';
import rootReducer from '../reducers/';
import { State } from '../types';

const initialState = { customers: [] };

function makeStore(preloadedState: State = initialState) {
    const store = createStore(
        rootReducer,
        preloadedState,
        (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
}

export default makeStore;
