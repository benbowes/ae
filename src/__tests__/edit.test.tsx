import * as React from 'react';
import { render, cleanup, fireEvent/*, prettyDOM*/ } from '@testing-library/react';
import App from '../App';

afterEach(cleanup);

describe('Edit', () => {
    test('Clicking edit, will take you to the Edit page and display a customers details', () => {
        const wrapper = render(<App />);

        // Home page
        expect(location.href).toEqual('http://localhost/customers');

        // Click 1st edit button
        fireEvent.click(wrapper.getAllByTestId('editButton')[0]);

        // Now Edit page
        expect(location.href.includes('http://localhost/edit-customer/')).toEqual(true);

        expect((wrapper.getByTestId('firstName_Input') as HTMLInputElement).value).toEqual('Alice');
        expect((wrapper.getByTestId('lastName_Input') as HTMLInputElement).value).toEqual('Adams');
    });

    test('Editing a customers details', () => {
        jest.useFakeTimers();

        const wrapper = render(<App />);

        // Home page
        expect(location.href).toEqual('http://localhost/customers');

        // Click 1st edit button
        fireEvent.click(wrapper.getAllByTestId('editButton')[0]);

        // Now Edit page
        expect(location.href.includes('http://localhost/edit-customer/')).toEqual(true);

        // Alter first name value
        fireEvent.change(wrapper.getByTestId('firstName_Input'), { target: { value: 'Alan' }});

        expect((wrapper.getByTestId('firstName_Input') as HTMLInputElement).value).toEqual('Alan');
        expect((wrapper.getByTestId('lastName_Input') as HTMLInputElement).value).toEqual('Adams');
    });
});
