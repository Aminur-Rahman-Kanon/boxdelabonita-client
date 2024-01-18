import UnderTesting from "./underTesting";
import { render, screen } from '@testing-library/react';

test('should rende underTesting component', () => {
    render(<UnderTesting />);
    //checking for elements
    expect(screen.getByRole('heading', { name: 'Website is currently under maintenance' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'We will be back soon' })).toBeInTheDocument();
})