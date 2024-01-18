import Logo from "./logo";
import { render, screen } from '@testing-library/react';

test('should render Logo component', () => {
    render(<Logo width={'112px'}/>);
    //logo should have href to '/'
    expect(screen.getByTestId('logo')).toHaveAttribute('href', '/')
})