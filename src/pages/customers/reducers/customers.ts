import cuid from 'cuid';
import { Action, Reducer } from 'redux';
import { Customer } from '../../../types';

interface CustomerAddAction extends Action<'CUSTOMER_ADD'> {
    value: Customer;
}

interface CustomerEditAction extends Action<'CUSTOMER_EDIT'> {
    value: Customer;
}

interface CustomerDeleteAction extends Action<'CUSTOMER_DELETE'> {
    value: string; // id
}

type CustomerActions = 
    | CustomerAddAction
    | CustomerEditAction
    | CustomerDeleteAction;

export const customers: Reducer<Customer[], CustomerActions> = (
    state = [],
    action
): Customer[] => {
    switch (action.type) {
        case 'CUSTOMER_ADD':
            return [
                // Add lastest to the top of the list - has unique id so if same name, still ok
                {
                    id: cuid(),
                    firstName: action.value.firstName,
                    lastName: action.value.lastName,
                    dob: action.value.dob,
                },
                ...state,
            ];

        case 'CUSTOMER_EDIT': {
            const updatedCustomer = action.value;
            const otherCustomers = state.filter(
                // action.value.id = the id of the customer
                (customer: Customer) => customer.id !== action.value.id
            );

            return [
                // Add edited to the top of the list
                updatedCustomer,
                ...otherCustomers,
            ];
        }
        
        case 'CUSTOMER_DELETE': {
            const otherCustomers = state.filter(
                // action.value = the id of the customer
                (customer: Customer) => customer.id !== action.value
            );

            // Remove customer from the list
            return otherCustomers;
        }

        default:
            return state;
    }
}