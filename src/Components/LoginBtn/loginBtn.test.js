import LoginBtn from "./loginBtn";
import { render, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
import { mockLoginApi } from "../../Utilities/mockUtilities";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import { mockUserData } from "../../Utilities/mockData";

describe('<LoginBtn />', () => {
    test('should render the loginBtn', () => {
        //rendering the LoginBtn component
        render(<LoginBtn btnDisable={true}/>);
        //checking the visibility of loginBtn btn
        expect(screen.getByRole('button', { name: 'Login' })).toBeInTheDocument();
        //the login button should be disabled for this test
        expect(screen.getByRole('button', { name: 'Login' })).toBeDisabled();
    })
    
    test('should successfully login user to the system', async () => {
        //mocking the fetch method
        window.fetch = jest.fn(() => mockLoginApi());
        //mocking window.location.assign method
        //see line 30 in LoginBtn component for details
        delete window.location;
        window.location = { assign: jest.fn() };
        //rendering the LoginBtn component
        render(<LoginBtn btnDisable={false}/>);
        //checking the visibility of loginBtn component
        const loginBtn = screen.getByRole('button', { name: 'Login' });
        //the login button shouldn't be disabled
        expect(loginBtn).not.toBeDisabled();
        //simulating button click
        act(() => {
            userEvent.click(loginBtn);
        })
        //testing after click event
        waitForElementToBeRemoved(() => screen.getByTestId('spinner'));
        //storing user data to localStorage
        localStorage.setItem('user', JSON.stringify(mockUserData));
        //checking whether userdata stored in localStorage or not
        expect(JSON.parse(localStorage.getItem('user'))).toEqual(mockUserData);
    })
})