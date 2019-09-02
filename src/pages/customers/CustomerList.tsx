import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Customer, State } from '../../types';
import { Table, Tr, Th, Td } from '../../components/Table.styled';
import { Button, LinkButton, ButtonGroup } from '../../components/Button.styled';
import CustomerListSearch from './CustomerListSearch';

const CustomerList: React.FC = () => {
    const dispatch = useDispatch();
    const customers = useSelector((state: State) => state.customers);
    const [filteredCustomers, setFilteredCustomers] = useState(customers);
    const [searchTerm, setSearchTerm] = useState('');

    // Update `filteredCustomers` if `customers` changes
    useEffect(() => {
        setFilteredCustomers(customers);
    }, [customers])

    return (
        <>
            <CustomerListSearch
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                customers={customers}
                setFilteredCustomers={setFilteredCustomers}
            />

            <Table>
                <tbody>
                    <Tr>
                        <Th>First name</Th>
                        <Th>Last name</Th>
                        <Th>Date of Birth</Th>
                        <Th>&nbsp;</Th>
                    </Tr>

                    {filteredCustomers.map((customer: Customer) => (
                        <Tr key={customer.id}>
                            <Td>{customer.firstName}</Td>
                            <Td>{customer.lastName}</Td>
                            <Td>{customer.dob}</Td>
                            <Td>
                                <ButtonGroup>
                                    <LinkButton primary to={`/edit/${customer.id}`}>
                                        Edit
                                    </LinkButton>
                                    <Button
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
                                    </Button>
                                </ButtonGroup>
                            </Td>
                        </Tr>                   
                    ))}
                </tbody>
            </Table>
        </>
    );
}

export default CustomerList;
