import React from 'react';
import {render} from '@testing-library/react';
import Home from '../page/Home/Home';

test('render without crashing', () => {
    const {getByText} = render(<Home/>);
    const linkElement = getByText(/Web/i);
    expect(linkElement).toBeInTheDocument();
})