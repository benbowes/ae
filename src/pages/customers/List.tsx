import React from 'react';
import { useSelector } from 'react-redux';
import { Customer, State } from '../../redux/types'

const A: React.FC = () => {
    const customers = useSelector((state: State) => state.customers);
    
    return (
        <div>
            <h1>Customers</h1>
            <div>
                {customers.map((customer: Customer) => (
                    <div key={customer.id}>{customer.firstName} {customer.lastName} {customer.dob}</div>
                ))}
            </div>
        </div>
    );
}

export default A;
