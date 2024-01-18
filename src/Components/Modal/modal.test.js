import Modal from "./modal";
import { render, screen } from '@testing-library/react';

test('should render Modal component', () => {
    //creating portal element body
    document.body.innerHTML = '<div id="portal"></div>'
    //rendering Modal component by passing a children
    render(<Modal modal={true} children={<h1>hjg</h1>}>
        <h1>Testing</h1>
    </Modal>)
    //testing whether or not the child r=being rendered or not
    expect(screen.getByRole('heading', { name: 'Testing' })).toBeInTheDocument();
})