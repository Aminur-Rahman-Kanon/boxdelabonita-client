import RemoveSingleBtn from "./removeSingleItemBtn";
import { render, act, waitForElementToBeRemoved, waitFor } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import ContextApi from '../ContextApi/contextApi';
import { context } from "../../Utilities/mockData";
import { mockCartItems } from "../../Utilities/mockData";

test('should render removeSingleBtn with ', async () => {
    //extrating the title of the product that we need to remove
    const title = mockCartItems['cross-border trend'].product.title;
    const removeSingleBtn = render(<ContextApi.Provider value={context}>
        <RemoveSingleBtn product={title} title={'Remove'} cb={() => {}} />
    </ContextApi.Provider>);
    //selecting the button
    const btn = removeSingleBtn.getByRole('button', { name: 'Remove' });
    //simulating the button click
    act(() => {
        userEvent.click(btn);
    })
    //testing the effect after the button click
    waitForElementToBeRemoved(() => removeSingleBtn.findByTestId('spinners'))
    waitForElementToBeRemoved(() => removeSingleBtn.getByText('Remove'));
})
