import QuickBuyBtn from "./quickBuyBtn";
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import { mockItems } from '../../Utilities/mockData';
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";

describe('should render quickBuyBtn component', () => {
    //button should be disable
    test('quickBuyBtn should be disabled', () => {
        //when the disabled prop is true the button is not disabled and disabled otherwise
        render(<QuickBuyBtn disable={false} product={mockItems[0]} color={'black'}/>);
        const btn = screen.getByRole('button', { name: 'Quick Buy' });
        //checking whether the button is disabled or not
        expect(btn).toBeDisabled();
    })

    test("quickBuyBtn shouldn't be disabled", () => {
        render(<QuickBuyBtn disable={true} product={mockItems[0]} color={'black'}/>);
        const btn = screen.getByRole('button', { name: 'Quick Buy' });
        //checking whether the button is disabled or not
        expect(btn).not.toBeDisabled();
    })

    test('checking quickButBtn functionality', () => {
        delete window.location;
        window.location = {
            assign: jest.fn()
        }
        render(<QuickBuyBtn disable={true} product={mockItems[0]} color={'black'}/>);
        const btn = screen.getByRole('button', { name: 'Quick Buy' });
        //checking whether the button is disabled or not
        expect(btn).not.toBeDisabled();
        //simulating button click
        act(() => {
            userEvent.click(btn);
        })
        //a spinner should be rendered and removed when the function is completed
        waitForElementToBeRemoved(() => screen.findByTestId('spinner'));
    })
})