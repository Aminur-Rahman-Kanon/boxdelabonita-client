import NotFound from "./notFound";
import { render, screen } from '@testing-library/react';

test('should render notFound component', () => {
    //rendering component bypassing the text props
    render(<NotFound text={'test'}/>)
    //checking for the visibilities of the elements
    expect(screen.getByText('test')).toBeInTheDocument();
    expect(screen.getByAltText('not found')).toBeVisible();
})