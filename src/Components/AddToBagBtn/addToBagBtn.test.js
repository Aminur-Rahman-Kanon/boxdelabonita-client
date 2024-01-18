import { render, act, waitFor, waitForElementToBeRemoved } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import AddToBagBtn from "./addToBagBtn";
import { context, mockCartItems } from "../../Utilities/mockData";
import ContextApi from "../ContextApi/contextApi";

describe('<AddToBagBtn />', () => {
    test('should render AddToBagBtn component with disabled', () => {
        const addToBagBtn = render(<ContextApi.Provider value={context}>
            <AddToBagBtn disable={false} title={'Add to cart'}/>
        </ContextApi.Provider>);

        //checking button for disabled state
        expect(addToBagBtn.getByRole('button', { name: 'Add to cart' })).toBeDisabled();
    })

    test('checking functionality of addToBagBtn', () => {
        const product = mockCartItems['cross-border trend'].product;

        const addToBagBtn = render(<ContextApi.Provider value={context}>
            <AddToBagBtn disable={true} title={'Add to cart'} product={product} color={'white'}/>
        </ContextApi.Provider>);

        const btn = addToBagBtn.getByRole('button', { name: 'Add to cart' });

        act(() => {
            userEvent.click(btn);
        })

        waitForElementToBeRemoved(() => addToBagBtn.findByTestId('spinner'));
    })
})