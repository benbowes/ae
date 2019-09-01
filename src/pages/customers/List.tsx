import React from 'react';
import { useSelector } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { State } from '../../redux/types'
import CustomerList from './CustomerList';

const List: React.FC<RouteComponentProps> = () => {
    const customers = useSelector((state: State) => state.customers);
    
    return (
        <div>
            <h1>Customers</h1>
            <CustomerList customers={customers} />
        </div>
    );
}

export default List;
