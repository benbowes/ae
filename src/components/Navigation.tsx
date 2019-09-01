import React from 'react';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
    return (
        <>
            <Link to='/A'>Goto A</Link>
            <Link to='/B'>Goto B</Link>
        </>
    );
}

export default Navigation;
