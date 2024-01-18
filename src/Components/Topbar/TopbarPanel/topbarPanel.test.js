import TopbarPanel from "./topbarPanel";
import { render, screen } from '@testing-library/react';
import ContextApi from "../../ContextApi/contextApi";
import { context } from '../../../Utilities/mockData';
import { MemoryRouter } from "react-router-dom";

test('should render the TopbarPanel component', () => {
    render(<MemoryRouter initialEntries={['/']}>
        <ContextApi.Provider value={context}>
            <TopbarPanel />
        </ContextApi.Provider>
    </MemoryRouter>);
    //checking the elements of the component
    expect(screen.getByTestId('search-icon')).toBeInTheDocument();
    expect(screen.getByTestId('user-icon')).toBeInTheDocument();
    expect(screen.getByTestId('cart-icon')).toBeInTheDocument();
})