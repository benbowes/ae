import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ButtonGroup = styled('div')`
    & *:not(first-child) {
        margin-left: ${props => props.theme.spacing._4px};
    }
`;

export const Button = styled('button') <{ primary?: boolean }>`
    background-color: ${props => props.primary
        ? props.theme.colour.primary._50
        : props.theme.colour.grey._200
    };
    border: 0px solid ${props => props.primary
        ? props.theme.colour.primary._100
        : props.theme.colour.grey._100
    };
    color: ${props => props.theme.colour.grey._900};
    font: inherit;
    font-size: ${props => props.theme.font.size._3};
    padding: ${props => props.theme.spacing._12px} ${props => props.theme.spacing._20px};
    border-radius: 3px;
    display: inline-block;
    font-weight: 700;
    cursor: pointer;
    text-decoration: none;

    &:hover {
        background-color: ${props => props.primary
            ? props.theme.colour.primary._100
            : props.theme.colour.grey._300
        };
    }

    &:active {
        position: relative;
        top: 1px;
    }
`;

export const LinkButton = styled(Link) <{ primary?: boolean }>`
    background-color: ${props => props.primary
        ? props.theme.colour.primary._50
        : props.theme.colour.grey._200
    };
    border: 0px solid ${props => props.primary
        ? props.theme.colour.primary._100
        : props.theme.colour.grey._100
    };
    color: ${props => props.theme.colour.grey._900};
    font: inherit;
    font-size: ${props => props.theme.font.size._3};
    padding: ${props => props.theme.spacing._12px} ${props => props.theme.spacing._20px};
    border-radius: 3px;
    display: inline-block;
    font-weight: 700;
    cursor: pointer;
    text-decoration: none;

    &:hover {
        background-color: ${props => props.primary
            ? props.theme.colour.primary._100
            : props.theme.colour.grey._300
        };
    }

    &:active {
        position: relative;
        top: 1px;
    }
`;