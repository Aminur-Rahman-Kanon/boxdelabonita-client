import Navbar from "./navbar";
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from "react-router-dom";

test('should render navbar component', () => {
    render(<MemoryRouter initialEntries={['/']}>
        <Navbar />
    </MemoryRouter>);

    //checking the elements are rendered or not
    expect(screen.getByRole('link', { name: 'HOME' })).toHaveAttribute('href', '/');
    expect(screen.getByTestId('shop')).toBeInTheDocument();
    expect(screen.getByTestId('category')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'ABOUT' })).toHaveAttribute('href', '/about');
})