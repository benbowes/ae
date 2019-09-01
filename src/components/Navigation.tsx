import React from 'react';
import { NavLink } from 'react-router-dom';
import { generateUniqueId } from '../utils/generateUniqueId';

import styles from './Navigation.module.css';

interface Props {
    navLinks: {
        url: string;
        label: string;
    }[];
}



const Navigation: React.FC<Props> = ({ navLinks }) => {
    return (
        <div>
            {navLinks.map((link) => (
                <NavLink key={generateUniqueId('navigationItem')} to={link.url} activeClassName={styles.active}>
                    {link.label}
                </NavLink>
            ))}
        </div>
    );
}

export default Navigation;
