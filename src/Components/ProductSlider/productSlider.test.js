import ProductSlider from "./productSlider";
import Product from '../DisplayProducts/Product/product';
import { render, screen } from '@testing-library/react';
import { mockItems } from '../../Utilities/mockData';
import { MemoryRouter } from "react-router-dom";

const product = mockItems.map((itm, idx) => <Product key={idx} product={itm}/>)

test('should render productSlider component', () => {
    render(<MemoryRouter initialEntries={['/']}>
        <ProductSlider products={product}/>
    </MemoryRouter>);
    //checking if productSlider can render the items being passed
    expect(screen.getByText('korean type')).toBeInTheDocument();
    expect(screen.getByText('৳1000')).toBeInTheDocument();
})