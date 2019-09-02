import React from 'react';
import { Customer } from '../../types';

interface Props {
    searchTerm: string;
    setSearchTerm: (value: string) => void,
    customers: Customer[],
    setFilteredCustomers: (customers: Customer[]) => void,
}

const CustomerListSearch: React.FC<Props> = ({ searchTerm, setSearchTerm, customers, setFilteredCustomers }) => (
    <div>
        Search
        <input
            value={searchTerm}
            onChange={({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
                setSearchTerm(value);
                if (value !== '') {
                    const searchResult = customers.filter(
                        (customer: Customer) => (
                            // firstName or lastName must begin with the search term
                            customer.firstName.toLowerCase().indexOf(value.toLowerCase()) === 0
                            || customer.lastName.toLowerCase().indexOf(value.toLowerCase()) === 0
                        )
                    );
                    setFilteredCustomers(searchResult);
                } else {
                    setFilteredCustomers(customers);
                }
            }}
        />
    </div>
);

export default CustomerListSearch;
