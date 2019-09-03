import React from 'react';
import styled from 'styled-components';
import Input from './Input.styled';
import Label from './Label.styled';
import FieldError from './FieldError.styled';

interface Props {
    name: string;
    label: string;
    placeholder?: string;
    value: string,
    error?: string,
    touched?: boolean,
    onChange: (e: React.FormEvent<HTMLInputElement>) => void,
    onBlur: (e: React.FormEvent<HTMLInputElement>) => void,
}

const FieldWrapper = styled('div')`
    margin-bottom: ${props => props.theme.spacing._16px};
`;

export const Field: React.FC<Props> = ({
    name,
    label,
    placeholder = '',
    value,
    error,
    touched,
    onChange,
    onBlur,
}) => {
    const hasError = Boolean(error && touched);

    return (
        <FieldWrapper>
            <Label
                htmlFor={name}
                style={{ display: 'block' }}
            >
                {label}
            </Label>
            <Input
                id={name}
                placeholder={placeholder}
                type="text"
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                hasError={hasError}
            />
            {hasError && <FieldError>{error}</FieldError>}
        </FieldWrapper>
    )
}