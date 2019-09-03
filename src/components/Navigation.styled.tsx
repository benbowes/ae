import styled from 'styled-components';
import { NavLink as RouterNavLink } from 'react-router-dom';

export const NavLink = styled(RouterNavLink)`
    font-weight: bold;
    text-decoration: none;
    color: ${props => props.theme.colour.white};
    display: inline-flex;
    padding: ${props => props.theme.spacing._24px};

    &:hover {
        background: ${props => props.theme.colour.primary._500}
    }

    &.active {
        background: ${props => props.theme.colour.primary._300}
    }
`;

export const NavigationWrapper = styled('nav')`
    background: ${props => props.theme.colour.primary._400};
    margin-bottom: ${props => props.theme.spacing._16px};
`;
