import React from 'react';
import { NavigationWrapper, NavLink } from './Navigation.styled';
import { generateUniqueId } from '../utils/generateUniqueId';

interface Props {
    navLinks: {
        url: string;
        label: string;
    }[];
}

const Navigation: React.FC<Props> = ({ navLinks }) => {
    return (
        <NavigationWrapper>
            {navLinks.map((link) => (
                <NavLink
                    key={generateUniqueId('navigationItem')}
                    to={link.url}
                    activeClassName="active"
                >
                    {link.label}
                </NavLink>
            ))}
        </NavigationWrapper>
    );
}

export default Navigation;
