import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation: React.FC = () => {
    return (
        <>
            <NavLink to='/list' activeClassName={styles.active}>List</NavLink>
            <NavLink to='/add' activeClassName={styles.active}>Add</NavLink>
            <NavLink to='/search' activeClassName={styles.active}>Search</NavLink>
            <NavLink to='/edit' activeClassName={styles.active}>Edit</NavLink>
            <NavLink to='/delete' activeClassName={styles.active}>Delete</NavLink>
        </>
    );
}

export default Navigation;
