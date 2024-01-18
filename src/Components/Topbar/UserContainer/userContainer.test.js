import UserContainer from "./userContainer";
import { render, screen, act } from '@testing-library/react';
import userEvent from "@testing-library/user-event";

describe('<UserContainer />', () => {
    test('should render UserContainer with no user logged in', () => {
        render(<UserContainer />);
        //selecting the input element
        const loginInput = screen.getByTestId('login-input');
        expect(loginInput.placeholder).toEqual('Enter your phone number');
        expect(loginInput.value).toEqual('');
    })

    test('should enable the login button when enter at least 1 input', () => {
        render(<UserContainer />);
        //selecting the input element
        const loginInput = screen.getByTestId('login-input');
        //simulating the user input
        act(() => {
            userEvent.type(loginInput, '1234567890');
        })
        //testing if the input element value is same
        expect(loginInput.placeholder).not.toEqual('')
        expect(loginInput.value).toEqual('1234567890');
    })
})