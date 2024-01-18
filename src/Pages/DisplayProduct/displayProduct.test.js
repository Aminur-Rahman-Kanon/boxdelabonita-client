import DisplayProduct from '../../Pages/DisplayProduct/displayProduct';
import { render } from '@testing-library/react';
import { mockItems, context } from '../../Utilities/mockData';
import ContextApi from '../../Components/ContextApi/contextApi';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

//displayProduct component doesn't render if item and url params are provided
//and all child component below are depend on this component
//so we are doing an e2e test here

//first we prepare some mock data for this component to render
context.product = {isLoading: false, data: mockItems};
window.scrollTo = jest.fn()
window.location = jest.fn()

test('should render displayProduct component with item loaded', () => {
    const displayProduct = render(
        <MemoryRouter initialEntries={['/bag/crossbody bag/korean type']}>
            <ContextApi.Provider value={context}>
                <Routes>
                    <Route path='/bag/:categoryId/:productId' element={<DisplayProduct />} />
                </Routes>
            </ContextApi.Provider>
        </MemoryRouter>
    );
    //testing the product navigation component
    //see line 54 in displayProduct component for details
    expect(displayProduct.getByText('bag')).toBeInTheDocument();
    expect(displayProduct.getByText('crossbody bag')).toBeInTheDocument();
    //since this this product stock is 0, 'Out of stock' text and 'Sold Out' component should be rendered
    //and btns should be disabled
    expect(displayProduct.getByText('Out of stock')).toBeInTheDocument();
    const outOfStock = displayProduct.getAllByAltText('sold out item');
    for (let i=0; i<outOfStock.length; i++){
        expect(outOfStock[i]).toBeInTheDocument();
    }
    expect(displayProduct.getByRole('button', { name: 'Add to Cart' })).toBeDisabled();
    expect(displayProduct.getByRole('button', { name: 'Quick Buy' })).toBeDisabled();
})
