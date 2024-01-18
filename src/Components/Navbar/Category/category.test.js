import Category from "./category";
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from "react-router-dom";
import { categories } from '../../../Data/data';

test('should render all the links of category component', () => {
    render(<MemoryRouter initialEntries={['/']}>
        <Category />
    </MemoryRouter>);
    //checking all the links
    for (let i=0; i<categories.length; i++){
        expect(screen.getByTestId(`${categories[i].title}`)).toHaveAttribute('href', `/bag/${categories[i].title.toLowerCase()}`)
    }
})