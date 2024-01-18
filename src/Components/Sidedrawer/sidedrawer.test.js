import { MemoryRouter } from 'react-router-dom';
import Sidedrawer from './sidedrawer';
import { render, screen } from '@testing-library/react';

test('should render sidedrawer component', () => {
    render(<MemoryRouter initialEntries={['/']}>
        <Sidedrawer sidedrawer={true}/>
    </MemoryRouter>);
    // screen.debug();
    //checking the elements of sidedrawer component
    expect(screen.getByText('HOME')).toBeInTheDocument();
    expect(screen.getByText('SHOP')).toBeInTheDocument();
    expect(screen.getByText('CATEGORY')).toBeInTheDocument();
    expect(screen.getByText('ABOUT')).toBeInTheDocument();
})