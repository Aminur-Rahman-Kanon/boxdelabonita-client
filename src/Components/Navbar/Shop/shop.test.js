import Shop from "./shop";
import { render, screen } from '@testing-library/react';
import { shop } from '../../../Data/data';
import { MemoryRouter } from "react-router-dom";

test('should render all the links of shop component', () => {
    render(<MemoryRouter initialEntries={['/']}>
        <Shop />
    </MemoryRouter>);
    //checking all the links
    for (let i=0; i<shop.length; i++){
        expect(screen.getByTestId(`${shop[i].route}`)).toHaveAttribute('href', `/bag/${shop[i].route}`);
    }
})