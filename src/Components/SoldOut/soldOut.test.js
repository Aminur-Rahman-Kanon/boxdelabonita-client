import SoldOut from "./soldOut";
import { render, screen } from '@testing-library/react';

test('should render SoldOut component', () => {
    render(<SoldOut />);
    //checking the element of SoldOut component
    expect(screen.getByAltText('sold out item')).toBeInTheDocument();
})