import React from 'react';

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

export const Input: React.FC<Props> = ({
    name,
    label,
    placeholder = '',
    value,
    error,
    touched,
    onChange,
    onBlur,
}) => {
    return (
        <>
            <label
                htmlFor={name}
                style={{ display: 'block' }}
            >
                {label}
            </label>
            <input
                id={name}
                placeholder={placeholder}
                type="text"
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                // className={
                //     errors.lastName && touched.lastName ? 'text-input error' : 'text-input'
                // }
            />
            {error && touched && (
                <div /*className="input-feedback"*/>
                    {error}
                </div>
            )}
        </>
    )
}