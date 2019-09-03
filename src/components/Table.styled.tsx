import styled from 'styled-components';

export const Table = styled('table')`
    font: inherit;
    width: 100%;
    border-bottom: 1px solid ${props => props.theme.colour.grey._200};
`;

export const Tr = styled('tr')`
    &:hover {
        background: ${props => props.theme.colour.grey._100};
    }
`;

export const Th = styled('th')`
    text-align: left;
    font-weight: ${props => props.theme.font.weight.bold};
    padding: ${props => props.theme.spacing._16px};
    border-bottom: 4px solid ${props => props.theme.colour.grey._200};
`;

export const Td = styled('td')`
    padding: ${props => props.theme.spacing._16px};
    border-bottom: 1px solid ${props => props.theme.colour.grey._200};

    &:last-child {
        text-align: right;
    }
`;
