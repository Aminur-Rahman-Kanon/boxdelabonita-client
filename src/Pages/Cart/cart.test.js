import Cart from "./cart";
import { BrowserRouter } from "react-router-dom";
import { render } from '@testing-library/react';
import ContextApi from "../../Components/ContextApi/contextApi";
import { context, mockCartItems } from '../../Utilities/mockData';
import { mockLocalStorage } from "../../Utilities/mockUtilities";

beforeAll(() => {
    jest.mock('react-router-dom', () => ({
        ...jest.requireActual('react-router-dom'),
       useNavigate: () => jest.fn(),
       localStorage: mockLocalStorage
     }));
})

describe('<cart />',() => {
    test('Should render all static elements initially', () => {
        const cart = render(<BrowserRouter>
            <ContextApi.Provider value={context}>
                <Cart />
            </ContextApi.Provider>
        </BrowserRouter>);
        
        //checking whether all the labels are present or not
        expect(cart.getByText('Products')).toBeInTheDocument();
        expect(cart.getByText('Colors')).toBeInTheDocument();
        expect(cart.getByText('Quantity')).toBeInTheDocument();
        expect(cart.getByText('Subtotal')).toBeInTheDocument();
        expect(cart.getByText('Actions')).toBeInTheDocument();
        expect(cart.getByText('No item in the cart')).toBeInTheDocument();

        //expect coupon input to be empty
        expect(cart.getByTestId('coupon-input').value).toBe('');

        //checking for static images
        expect(cart.getByAltText('master card')).toBeVisible();
        expect(cart.getByAltText('cash on delivery')).toBeVisible();
        expect(cart.getByAltText('bkash')).toBeVisible();

        //checking whether the buttons are present or not
        expect(cart.getByRole('button', { name: 'Continue Shopping' })).not.toBeDisabled();
        expect(cart.getByRole('button', { name: 'Checkout' })).not.toBeDisabled();
        expect(cart.getByRole('button', { name: 'Apply coupon' })).toBeDisabled();
    })

    test('should render products and display them', async () => {
        //storing items to mock localStorage object
        localStorage.setItem('cart', JSON.stringify(mockCartItems));
        
        const cart = render(<BrowserRouter>
            <ContextApi.Provider value={context}>
                <Cart />
            </ContextApi.Provider>
        </BrowserRouter>);

        //checking item's details
        expect(await cart.findByAltText('cross-border trend')).toBeInTheDocument();
        expect(await cart.findByText('cross-border trend')).toBeInTheDocument();
        expect(await cart.findByText('Item id: fghy22kl2')).toBeInTheDocument();
        expect(await cart.findByText('price: ৳1560')).toBeInTheDocument();
        //checking item quantity
        expect(await cart.findByText('1')).toBeInTheDocument();
        //checking total price
        expect(await cart.findByText('৳1560')).toBeInTheDocument();
        expect(await cart.findByRole('button', { name: '+' })).not.toBeDisabled();
        expect(await cart.findByRole('button', { name: '-' })).not.toBeDisabled();
        expect(await cart.findByRole('button', { name: 'Remove' })).not.toBeDisabled();
        localStorage.clear();
    })
})

afterAll(() => {
    jest.clearAllMocks();
})