import Category from "./category";
import { render } from "@testing-library/react";
import { category } from '../../Data/data';
import { MemoryRouter } from "react-router-dom";

test('should render category component and the links of all item categories', () => {
    const categories = render(<MemoryRouter initialEntries={['/']}>
        <Category />
    </MemoryRouter>);
    //testing whether all the categories are rendered or not
    for (let i=0; i<category.length; i++){
        expect(categories.getByAltText(category[i].title)).toBeVisible();
    }
})
