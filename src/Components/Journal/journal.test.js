import Journal from "./journal";
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from "react-router-dom";

test('should render journal component', () =>{
    render(<MemoryRouter initialEntries={['/']}>
        <Journal />
    </MemoryRouter>);
    //cheking for elements
    expect(screen.getByRole('heading', { name: 'Lifestyle Journal' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Read More' })).toHaveAttribute('href', '/about')
})