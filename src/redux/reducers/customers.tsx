import { Customer } from '../types';

interface CustomerAddAction {
    type: 'CUSTOMER_ADD';
    value: Customer;
}

interface CustomerEditAction {
    type: 'CUSTOMER_EDIT';
    value: Customer;
}

interface CustomerDeleteAction {
    type: 'CUSTOMER_DELETE';
    value: string; // id
}

interface CustomerSearchAction {
    type: 'CUSTOMER_SEARCH';
    value: string; // search terms
}

type Action = 
    | CustomerAddAction
    | CustomerEditAction
    | CustomerDeleteAction
    | CustomerSearchAction

export function customers(state: Customer[] = [], action: Action) {
    switch (action.type) {
        default:
            return state;
    }
}