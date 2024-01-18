import ProfileMain from "./profileMain";
import { render, screen } from '@testing-library/react';
import { mockCartItems, mockUserData } from '../../../Utilities/mockData';
import { MemoryRouter } from "react-router-dom";

//this is an e2e test
describe('<ProfileMain />', () => {
    test('should render profileMain component with user details loaded', () => {
        const mockUser = [mockUserData];
        mockUser[0].products = mockCartItems;
        // console.log(mockProduct);
        localStorage.setItem('user', JSON.stringify({user: mockUser}));
        render(<MemoryRouter initialEntries={['/profile']}>
            <ProfileMain />
        </MemoryRouter>);
        //checking for elements in this component
        expect(screen.getByAltText('avatar')).toBeInTheDocument();
        expect(screen.getByTestId('full-name').value).toEqual('test name');
        //checking for the headers present
        expect(screen.getByText('User Information')).toBeInTheDocument();
        expect(screen.getByText('Address')).toBeInTheDocument();
        expect(screen.getByTestId('change-password-header')).toBeInTheDocument();
        expect(screen.getByText('Orders')).toBeInTheDocument();
        //checking for user inormation component details
        expect(screen.getByTestId('full-name').value).toEqual('test name');
        expect(screen.getByTestId('email').value).toEqual('test@test.com');
        expect(screen.getByTestId('phone-number').value).toEqual('12345678901');
        expect(screen.getByRole('button', { name: 'Apply Changes' })).not.toBeDisabled();
        //checking for address component details
        expect(screen.getByTestId('address').value).toEqual('test address');
        expect(screen.getByTestId('city').value).toEqual('Please Select');
        //checking for password component
        expect(screen.getByTestId('password').value).toEqual('');
        expect(screen.getByTestId('retype-password').value).toEqual('');
        //checking ofr order component
        expect(screen.getByText('Order Id: f3ec7d06d64b')).toBeInTheDocument();
        expect(screen.getByText('Purchase Date: Wed Jan 17 2024 Wed, 17 Jan 2024 20:23:32 GMT')).toBeInTheDocument();
        expect(screen.getByAltText('cross-border trend')).toBeInTheDocument();
        expect(screen.getByText('cross-border trend')).toBeInTheDocument();
        expect(screen.getByText('Quantity: 1')).toBeInTheDocument();
        expect(screen.getByText('Price: ৳1560')).toBeInTheDocument();
        expect(screen.getByText('Total: ৳1560')).toBeInTheDocument();
        expect(screen.getByText('Delivery Charge: ৳80')).toBeInTheDocument();
        expect(screen.getByText('Total to Pay: ৳1640')).toBeInTheDocument();
        expect(screen.getByText('Cash on delivery')).toBeInTheDocument();
    })
})