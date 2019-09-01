import cuid from 'cuid';
import { Action, Reducer } from 'redux';
import { Customer } from '../types';

interface CustomerAddAction extends Action<'CUSTOMER_ADD'> {
    value: Customer;
}

interface CustomerEditAction extends Action<'CUSTOMER_EDIT'> {
    value: Customer;
}

interface CustomerDeleteAction extends Action<'CUSTOMER_DELETE'> {
    value: string; // id
}

interface CustomerSearchAction extends Action<'CUSTOMER_SEARCH'> {
    value: string; // search terms
}

type CustomerActions = 
    | CustomerAddAction
    | CustomerEditAction
    | CustomerDeleteAction
    | CustomerSearchAction;

export const customers: Reducer<Customer[], CustomerActions> = (
    state = [],
    action
): Customer[] => {
    switch (action.type) {
        case 'CUSTOMER_ADD':
            return [
                ...state,
                {
                    id: cuid(),
                    firstName: action.value.firstName,
                    lastName: action.value.lastName,
                    dob: action.value.dob,
                }
            ];
        default:
            return state;
    }
}