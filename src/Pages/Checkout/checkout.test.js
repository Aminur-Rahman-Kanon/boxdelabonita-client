import Checkout from "./checkout";
import { render } from "@testing-library/react";
import { mockCartItems } from "../../Utilities/mockData";

//Since all the child components depends on data flow from these component
//Thats why we are doing an e2e testing for this component
describe('<Checkout />', () => {
    test('should render checkout component without items with default behaviour', () => {
        const checkout = render(<Checkout />);

        //testing the default header and text
        expect(checkout.getByRole('heading', { name: 'Payment Details' })).toBeInTheDocument();
        expect(checkout.getByRole('heading', { name: 'Order Summary' })).toBeInTheDocument();
        expect(checkout.getByRole('heading', { name: 'Payment Method' })).toBeInTheDocument();

        //testing all the inputs
        expect(checkout.getByTestId('full-name').value).toBe('');
        expect(checkout.getByTestId('full-address').value).toBe('');
        expect(checkout.getByTestId('email').value).toBe('');
        expect(checkout.getByTestId('phone-number').value).toBe('');
        expect(checkout.getByTestId('delivery-location').value).toBe('Select Area');
        //payment-method contains 2 radio button and one of them can be selected
        //first we are testing that we should have 2 radio btns
        const paymentMethod = checkout.getAllByTestId('payment-method');
        expect(paymentMethod.length).toBe(2);
        //now we are testing that the btns should not be checked by default
        expect(paymentMethod[0]).not.toBeChecked();
        expect(paymentMethod[1]).not.toBeChecked();
        //testing the 'Order Now' btn
        expect(checkout.getByRole('button', { name: 'Order Now' })).toBeDisabled();
        //since we haven't pass any items to this compoent, it shouldn't have item to render
        //we now test that
        expect(checkout.getByRole('heading', { name: 'No items' })).toBeInTheDocument();
        //testing item price details
        expect(checkout.getByText('Subtotal:')).toBeInTheDocument();
        expect(checkout.getByText('Shipping:')).toBeInTheDocument();
        expect(checkout.getByText('Total:')).toBeInTheDocument();
        //there are 3 types of prices here -> 1.subtotal, 2.shipping, 3.total
        //all prices should be 0 with the ৳ at the beginning
        expect(checkout.getAllByText('৳0').length).toBe(3);
    })

    test('should render checkout component with item loaded', async () => {
        //storing a mock item in localStorage
        localStorage.setItem('cart', JSON.stringify(mockCartItems))
        const checkout = render(<Checkout />);
        //testing the item loaded in this component
        //first we are testing the item img being loaded or not
        expect(checkout.getByAltText('cross-border trend')).toBeInTheDocument();
        //testing the price
        const prices = checkout.getAllByText((_, el) => el.textContent === '৳1560');
        expect(prices.length).toBe(3);
        //now we are clearing the localstorage
        localStorage.removeItem('cart');
    })

    test('testing the user inputs on checkout component', () => {
        const checkout = render(<Checkout />);
        //getting all the input elements
        const fullName = checkout.getByTestId('full-name');
        const fullAddress = checkout.getByTestId('full-address');
        const email = checkout.getByTestId('email');
        const phoneNumber = checkout.getByTestId('phone-number');
        const deliveryLocation = checkout.getByTestId('delivery-location');

        //all inputs value should be empty
        expect(fullName.value).toBe('');
        expect(fullAddress.value).toBe('');
        expect(email.value).toBe('');
        expect(phoneNumber.value).toBe('');
        expect(deliveryLocation).not.toBeChecked();
    })
})