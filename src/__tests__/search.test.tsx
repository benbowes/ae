import * as React from 'react';
import { render, cleanup, fireEvent/*, prettyDOM*/ } from '@testing-library/react';
import App from '../App';

afterEach(cleanup);

describe('Search', () => {
    test('Clicking edit, will take you to the Edit page and display a customers details', () => {
        const wrapper = render(<App />);

        // Assert customer list length
        expect(wrapper.getByTestId('customerList').querySelectorAll('tr').length).toEqual(9);

        // Search
        fireEvent.change(wrapper.getByTestId('search'), { target: { value: 'bi' }});

        // Assert customer list length
        expect(wrapper.getByTestId('customerList').querySelectorAll('tr').length).toEqual(3);

        // Assert customer list items have data
        expect(wrapper.getByTestId('customerList').querySelectorAll('tr')[1].textContent).toEqual('BihnVy12/08/1979EditDelete');
    });
});
