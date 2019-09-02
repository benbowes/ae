import styled from 'styled-components';
import { NavLink as RouterNavLink } from 'react-router-dom';

export const NavLink = styled(RouterNavLink)`
    font-weight: bold;
    text-decoration: none;
    color: white;
    display: inline-flex;
    padding: ${props => props.theme.spacing._24px};

    &:hover {
        background: ${props => props.theme.colour.primary._300}
    }

    &.active {
        background: ${props => props.theme.colour.primary._300}
    }
`;

export const NavigationWrapper = styled('div')`
    background: ${props => props.theme.colour.primary._400};
    margin-bottom: ${props => props.theme.spacing._16px};
`;
