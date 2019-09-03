import * as React from 'react';
import { render, cleanup } from '@testing-library/react';
import App from '../App';

afterEach(cleanup);

describe('Renders home page', () => {
    test('It renders out a nav and a main', () => {
        const wrapper = render(<App />);

        expect(wrapper.baseElement.querySelectorAll('nav').length).toEqual(1);
        expect(wrapper.baseElement.querySelectorAll('main').length).toEqual(1);
    });
});
