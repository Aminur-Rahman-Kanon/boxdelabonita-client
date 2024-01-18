import RemoveAllProductsBtn from './removeAllProductsBtn';
import { mockCartItems } from '../../Utilities/mockData';
import { render, waitForElementToBeRemoved } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';

test('should render removeAllProductsBtn and its function', () => {
    //extracting the title of the product that we need to remove
    const title = mockCartItems['cross-border trend'].product.title;
    const removeAllProductsBtn = render(
        <RemoveAllProductsBtn title={title} cb={() => {}} />
    )
    //selecting the button
    const btn = removeAllProductsBtn.getByRole('button', { name: 'Remove' });
    //simulating the button click
    act(() => {
        userEvent.click(btn);
    })
    //testing the effect after button click
    waitForElementToBeRemoved(() => removeAllProductsBtn.findByTestId('spinner'));
    waitForElementToBeRemoved(() => removeAllProductsBtn.getByText('Remove'));
})