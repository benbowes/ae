import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Customer } from '../../redux/types/index';

interface Props {
    customers: Customer[];
}

const Navigation: React.FC<Props> = ({ customers }) => {
    const dispatch = useDispatch();
    const [filteredCustomers, setFilteredCustomers] = useState(customers);

    return (
        <div>
            <div>
                Search
                <input
                    onChange={({ target: { value }}: React.ChangeEvent<HTMLInputElement>) => {
                        if (value !== '') {
                            const searchResult = customers.filter(
                                (customer: Customer) => (
                                    // firstName or lastName must begin with the search term
                                    customer.firstName.toLowerCase().indexOf(value.toLowerCase()) === 0
                                    || customer.lastName.toLowerCase().indexOf(value.toLowerCase()) === 0
                                )
                            );
                            return setFilteredCustomers(searchResult);
                        }
                        return setFilteredCustomers(customers);
                    }}
                />
            </div>

            <table>
                <tbody>
                    {/* Table headers */}
                    <tr>
                        <th>First name</th>
                        <th>Last name</th>
                        <th>Date of Birth</th>
                        <th>&nbsp;</th>
                        <th>&nbsp;</th>
                    </tr>

                    {/*Table contents */}
                    {filteredCustomers.map((customer: Customer) => (
                        <tr key={customer.id}>
                            <td>{customer.firstName}</td>
                            <td>{customer.lastName}</td>
                            <td>{customer.dob}</td>
                            <td>
                                <Link to={`/edit/${customer.id}`}>
                                    Edit
                                </Link>
                            </td>
                            <td>
                                <button
                                    type="button"
                                    onClick={() => {
                                        if (window.confirm(`Are you sure you want to delete customer ${customer.firstName} ${customer.lastName}?`)) {
                                            dispatch({
                                                type: 'CUSTOMER_DELETE',
                                                value: customer.id,
                                            });
                                        }
                                    }}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>                   
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Navigation;
