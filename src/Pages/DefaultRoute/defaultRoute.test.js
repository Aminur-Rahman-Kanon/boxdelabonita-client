import DefaultRoute from "./defaultRoute";
import { render } from "@testing-library/react";

test('should render defaultRoute component', () => {
    const defaultRoute = render(<DefaultRoute />);
    
    //testing the visibility of default route image
    expect(defaultRoute.getByAltText('not found')).toBeInTheDocument();
})