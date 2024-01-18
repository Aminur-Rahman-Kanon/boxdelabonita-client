import Category from "./category";
import { findByText, render, waitFor } from "@testing-library/react";
import { context, mockItems } from "../../../Utilities/mockData";
import ContextApi from "../../../Components/ContextApi/contextApi";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { categories } from "../../../Data/data";

//category compoent require a product or item id as urlParams to render.
//If there is no urlParams then it wont render because it wont match the route
//and since all child components depends on data flow from these component
//Thats why we are doing an e2e testing for this component
//see line 37 in Category component for more details
window.scrollTo = jest.fn();
//bypassing items into the context object
context.product = {isLoading: false, data: mockItems}

describe('<Category />', () => {
    test('should render category components with items', async () => {
        const category = render(
            <MemoryRouter initialEntries={['/bag/crossbody bag']}>
                <ContextApi.Provider value={context}>
                    <Routes>
                        <Route path="/bag/:categoryId" element={<Category />}/>
                    </Routes>
                </ContextApi.Provider>
            </MemoryRouter>
        )

        //checking for header
        expect(await category.findByText('Crossbody Bag')).toBeInTheDocument();
        expect(category.getByText('Select Category')).toBeInTheDocument();

        //checking for all categories
        for(let i=0; i<categories.length; i++){
            expect(category.getByText(categories[i].title)).toBeInTheDocument();
        }

        //checking for all sub categories
        expect(category.getByText('Popular Products')).toBeInTheDocument();
        expect(category.getByText('Hot Deals')).toBeInTheDocument();
        expect(category.getByText('New Arrivals')).toBeInTheDocument();
        expect(category.getByText('Trending')).toBeInTheDocument();
        expect(category.getByText('All Bags')).toBeInTheDocument();

        expect(category.getByText('Filter')).toBeInTheDocument();

        expect(category.getByTestId('price')).toHaveValue('Please Select');
        expect(category.getByTestId('color')).toHaveValue('Please Select');
        expect(category.getByTestId('discounted')).not.toBeChecked();
        expect(category.getByTestId('special-offer')).not.toBeChecked();

        //testing the visibilities of the products. Here we are testing only one item specifically korean type
        expect(await waitFor(() => category.findByText('korean type'))).toBeInTheDocument();
        expect(await waitFor(() => category.findByText('৳1000'))).toBeInTheDocument();
        expect(await waitFor(() => category.findByText('৳1100'))).toBeInTheDocument();
        //since korean type item has stock count of 0 so 'Add to Cart' and 'Quick Buy' btn should be disabled
        //so we are testing that
        expect(await waitFor(() => category.findByRole('button', { name: 'Add to Cart' }))).toBeDisabled();
        expect(await waitFor(() => category.findByRole('button', { name: 'Quick Buy' }))).toBeDisabled();
        
        //testing the visibilities of related product. we have only one item to be tested namely 'chanel replica trendy'
        expect(await waitFor(() => category.findByText('chanel replica trendy'))).toBeInTheDocument();
        expect(await waitFor(() => category.findByText('৳1350'))).toBeInTheDocument();
    })
})
