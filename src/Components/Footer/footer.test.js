import Footer from './footer';
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom';

test('should render footer component', () => {
    render(<MemoryRouter initialEntries={['/']}>
        <Footer />
    </MemoryRouter>);
    
    //checking for headers
    expect(screen.getByRole('heading', { name: 'CONTACT US' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'CUSTOMER SERVICES' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'ABOUT US' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'CATEGORY' })).toBeInTheDocument();

    //checking the links
    expect(screen.getByRole('link', { name: 'Track Your Orders' })).toHaveAttribute('href', '/profile/track-order');
    expect(screen.getByRole('link', { name: 'Product Care & Repair' })).toHaveAttribute('href', '');
    expect(screen.getByRole('link', { name: 'Shipping & Returns' })).toHaveAttribute('href', '');
    expect(screen.getByRole('link', { name: 'About Us' })).toHaveAttribute('href', '/about');
    expect(screen.getByRole('link', { name: 'Terms & Conditions' })).toHaveAttribute('href', '');
    expect(screen.getByRole('link', { name: 'Privacy Policy' })).toHaveAttribute('href', '');

    //checking product's link
    expect(screen.getByRole('link', { name: 'Bucket Bag' })).toHaveAttribute('href', '/bag/bucket bag');
    expect(screen.getByRole('link', { name: 'Clutch Bag' })).toHaveAttribute('href', '/bag/clutch bag');
    expect(screen.getByRole('link', { name: 'Crossbody Bag' })).toHaveAttribute('href', '/bag/crossbody bag');
    expect(screen.getByRole('link', { name: 'Designer Bag' })).toHaveAttribute('href', '/bag/designer bag');
    expect(screen.getByRole('link', { name: 'Saddle Bag' })).toHaveAttribute('href', '/bag/saddle bag');
    expect(screen.getByRole('link', { name: 'Shoulder Bag' })).toHaveAttribute('href', '/bag/shoulder bag');
    expect(screen.getByRole('link', { name: 'Straw Bag' })).toHaveAttribute('href', '/bag/straw bag');

    //checking footer images
    expect(screen.getByAltText('cash on delivery')).toBeInTheDocument();
    expect(screen.getByAltText('bikash')).toBeInTheDocument();
    expect(screen.getByAltText('master card')).toBeInTheDocument();
})