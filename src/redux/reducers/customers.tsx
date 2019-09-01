import { Customer } from '../../types/global';

type State = Customer[];

interface Action {
    type: 
        | 'CUSTOMER_ADD'
        | 'CUSTOMER_EDIT'
        | 'CUSTOMER_DELETE'
        | 'CUSTOMER_SEARCH'
}

export function customers(state: State = [], action: Action) {
    switch (action.type) {
        default:
            return state;
    }
}