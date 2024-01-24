import LandingPage from "./landingPage";
import { render, screen } from '@testing-library/react';
import { mockItems, context } from '../../Utilities/mockData';
import ContextApi from "../../Components/ContextApi/contextApi";
import { MemoryRouter, Route, Routes } from "react-router-dom";

context.product = {isLoading: false, data: mockItems};

test('should render LandingPage component', () => {
    render(<MemoryRouter initialEntries={['/promote/korean type']}>
        <ContextApi.Provider value={context}>
            <Routes>
                <Route path="/promote/:productId" element={<LandingPage />}/>
            </Routes>
        </ContextApi.Provider>
    </MemoryRouter>);
    //checking for elements of LandingPage Component
    expect(screen.getByTestId('product-main-img')).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'korean type' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Order Now' })).toHaveAttribute('href', '/bag/crossbody bag/korean type');
    expect(screen.getByRole('link', { name: 'Contact Us' })).toHaveAttribute('href', '/about');
    expect(screen.getByRole('heading', { name: 'Easy Shipping' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Easy Return' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: '24/7 Support' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'About korean type' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Learn More' })).toHaveAttribute('href', '/');
    expect(screen.getByRole('heading', { name: 'Product Gallery' })).toBeInTheDocument();
})