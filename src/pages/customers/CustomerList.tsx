import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Customer, State } from '../../types';
import { Table, Tr, Th, Td } from '../../components/Table.styled';
import { Button, LinkButton, ButtonGroup } from '../../components/Button.styled';
import ContentArea from '../../components/ContentArea.styled';
import CustomerListSearch from './CustomerListSearch';

const CustomerList: React.FC = () => {
    const dispatch = useDispatch();
    const customers = useSelector((state: State) => state.customers);
    const [filteredCustomers, setFilteredCustomers] = useState(customers);
    const [searchTerm, setSearchTerm] = useState('');

    // Update `filteredCustomers` if `customers` changes
    useEffect(() => { setFilteredCustomers(customers); }, [customers])

    return (
        <ContentArea>
            <h1>Customers</h1>
            <CustomerListSearch
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                customers={customers}
                setFilteredCustomers={setFilteredCustomers}
            />

            <Table data-testid="customerList">
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
                                    <LinkButton
                                        data-testid="editButton"
                                        variant="primary"
                                        to={`/edit-customer/${customer.id}`}
                                    >
                                        Edit
                                    </LinkButton>
                                    <Button
                                        data-testid="deleteButton"
                                        type="button"
                                        onClick={() => {
                                            if (window.confirm(`Delete '${customer.firstName} ${customer.lastName}' from customers?`)) {
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
        </ContentArea>
    );
}

export default CustomerList;
