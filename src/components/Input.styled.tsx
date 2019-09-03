import styled from 'styled-components';

export default styled('input') <{ hasError?: boolean }>`
    font: inherit;
    width: 100%;
    padding: ${props => props.theme.spacing._12px};
    border: 1px solid ${props => props.hasError
        ? props => props.theme.colour.error
        : props.theme.colour.grey._300
    };
    background: ${props => props.theme.colour.white};

    &:hover {
        border-color: ${props => props.theme.colour.grey._400};
    }
`;