import Backdrop from './backdrop';
import { render, screen } from '@testing-library/react';

const closeBackdrop = jest.fn();

test('should render backdrop component', () => {
    render(<Backdrop backdrop={true} closeBackdrop={closeBackdrop}/>);
    expect(screen.getByTestId('backdrop')).toBeVisible();
})