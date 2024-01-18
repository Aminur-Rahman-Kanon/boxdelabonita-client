import Spinner from "./spinner";
import { render, screen } from '@testing-library/react';

test('spinner component should be visible', () => {
    render(<Spinner spinner={true}/>);
    //checking the visibility of spinner component
    expect(screen.getByTestId('loading-spinner')).toBeVisible();
});