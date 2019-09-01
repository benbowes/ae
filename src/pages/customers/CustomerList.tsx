import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Customer, State } from '../../redux/types/index';

const CustomerList: React.FC = () => {
    const dispatch = useDispatch();
    const customers = useSelector((state: State) => state.customers);

    const [filteredCustomers, setFilteredCustomers] = useState(customers);
    const [searchTerm, setSearchTerm] = useState('');

    // Update `filteredCustomers, searchTerm` if `customers` changes
    useEffect(() => {
        setFilteredCustomers(customers);
        setSearchTerm('');
    }, [customers])

    return (
        <>
            <div>
                Search
                <input
                    value={searchTerm}
                    onChange={({ target: { value }}: React.ChangeEvent<HTMLInputElement>) => {
                        setSearchTerm(value);

                        if (searchTerm !== '') {
                            const searchResult = customers.filter(
                                (customer: Customer) => (
                                    // firstName or lastName must begin with the search term
                                    customer.firstName.toLowerCase().indexOf(searchTerm.toLowerCase()) === 0
                                    || customer.lastName.toLowerCase().indexOf(searchTerm.toLowerCase()) === 0
                                )
                            );
                            setFilteredCustomers(searchResult);
                        } else {
                            setFilteredCustomers(customers);
                        }

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
        </>
    );
}

export default CustomerList;
