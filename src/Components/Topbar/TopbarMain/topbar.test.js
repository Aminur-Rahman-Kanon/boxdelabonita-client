import Topbar from "./topbar";
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from "react-router-dom";
import ContextApi from "../../ContextApi/contextApi";
import { context } from '../../../Utilities/mockData';

test('should render the Topbar component', () => {
    render(<MemoryRouter initialEntries={['/']}>
        <ContextApi.Provider value={context}>
            <Topbar />
        </ContextApi.Provider>
    </MemoryRouter>);
    //checking the visibility of topbar component
    //topbar has 2 logo component 1 in the topbar itself and another in the searchbar which has style of translateY = -150%
    //should have 2 logo component
    expect(screen.getAllByTestId('logo').length).toEqual(2);
})