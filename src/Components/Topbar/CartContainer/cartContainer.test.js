import CartContainer from "./cartContainer";
import { render, screen } from '@testing-library/react';
import ContextApi from "../../ContextApi/contextApi";
import { mockCartItems } from "../../../Utilities/mockData";
import { MemoryRouter } from "react-router-dom";

describe('<CartContainer />', () => {
    test('should render CartContainer with no products', () => {
        render(<MemoryRouter initialEntries={['/']}>
            <CartContainer products={{}} toggleAddItem={() => {}}/>
        </MemoryRouter>);
        //checking if there is no products
        expect(screen.getByRole('heading', { name: 'Nothing in Cart' })).toBeInTheDocument();
        //checking for links
        expect(screen.getByRole('link', { name: 'Checkout' })).toHaveAttribute('href', '/checkout');
        expect(screen.getByRole('link', { name: 'View Cart' })).toHaveAttribute('href', '/view-cart');
    })

    test('should render CartContainer with products', () => {
        //rendering CartContainer bypassing products
        render(<MemoryRouter initialEntries={['/']}>
            <CartContainer products={mockCartItems} toggleAddItem={() => {}}/>
        </MemoryRouter>);
        //checking if there is any products
        expect(screen.getByAltText('cross-border trend')).toBeInTheDocument();
        expect(screen.getByRole('heading', { name: 'cross-border trend' })).toBeInTheDocument();
        expect(screen.getByText('1 x ৳1560')).toBeInTheDocument();
        expect(screen.getByText('Total: ৳1560')).toBeInTheDocument();
        expect(screen.getByRole('button', { name: 'Remove' })).not.toBeDisabled();
    })
})