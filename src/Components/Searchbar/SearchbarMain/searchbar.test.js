import Searchbar from "./searchbar";
import { render, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
import { mockItems, context } from '../../../Utilities/mockData';
import ContextApi from "../../ContextApi/contextApi";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
//this is an e2e test
//searchbar contains its child component as well as logo and topbarPanel component
//in this test we are only focusing on searchbar and its child component not logo and topbar component
//bypassing the products in the context. see searchbar component for details
context.product = { isLoading: false, data: mockItems }

describe('should render searchbar component', () => {
    test('should display the default searchbar component', () => {
        render(<MemoryRouter initialEntries={['/']}>
            <ContextApi.Provider value={context}>
                <Searchbar />
            </ContextApi.Provider>
        </MemoryRouter>)
        // screen.debug();
        //testing if the initial components been renderd or not
        expect(screen.getByTestId('search-input').value).toEqual('');
        expect(screen.getByTestId('search-input').placeholder).toEqual('Search Products');
    })

    test('testing the search functionality of searchbar component', () => {
        render(<MemoryRouter initialEntries={['/']}>
            <ContextApi.Provider value={context}>
                <Searchbar />
            </ContextApi.Provider>
        </MemoryRouter>);
        //selecting the input element
        const input = screen.getByTestId('search-input');
        //simulating the user input
        act(() => {
            userEvent.type(input, 'korean');
        })
        //testing the effect after input
        expect(input.value).toEqual('korean');
        waitForElementToBeRemoved(() => screen.findByTestId('spinner'));
        waitFor(() => expect(screen.findByText('korean type')).toBeInTheDocument())
        waitFor(() => expect(screen.findByText('৳1000')).toBeInTheDocument());
    })
})